import { AxiosError } from "axios";

/**
 * Paginated list envelope returned by TestRail >= 6.7 endpoints
 * (e.g. get_cases, get_sections, get_tests).
 */
export type PageEnvelope<K extends string, T> = {
	offset: number;
	limit: number;
	size: number;
	_links: { next: string | null; prev: string | null };
} & { [P in K]: T[] };

/**
 * Normalizes a TestRail list response into the modern paginated envelope shape.
 *
 * TestRail returns two different shapes for list endpoints depending on
 * server version and pagination settings:
 *   - Modern (>= 6.7 with pagination): `{ <key>: T[], offset, limit, size, _links }`
 *   - Legacy (< 6.7, or when pagination is disabled): `T[]` (flat array).
 *     IMPORTANT: even in legacy mode, TestRail still honours the `limit`
 *     query parameter and silently truncates the returned array — there is
 *     no built-in signal that more rows exist on the server.
 *
 * Without normalization the consumers crash with
 * `Cannot read properties of undefined (reading 'map')` on the legacy shape.
 *
 * The synthetic `_links.next` we emit for the legacy case uses a heuristic:
 * if the returned array length is `>= requestedLimit`, there may be more
 * data on the server and consumers should fetch the next offset. False
 * positives (`length === limit` but exactly that many rows exist) cost
 * one extra empty request — the cost of a false negative (silently dropping
 * data) is much higher.
 *
 * @param data Raw axios `response.data` from the list endpoint
 * @param key Envelope key name for the list payload (e.g. "cases", "sections")
 * @param requestedLimit Limit value that was sent in the request
 * @param requestedOffset Offset value that was sent in the request
 */
export function normalizeListResponse<K extends string, T>(
	data: unknown,
	key: K,
	requestedLimit: number,
	requestedOffset: number,
): PageEnvelope<K, T> {
	if (Array.isArray(data)) {
		const hasMoreLikely = data.length >= requestedLimit;
		const nextOffset = requestedOffset + requestedLimit;
		const prevOffset = Math.max(0, requestedOffset - requestedLimit);
		return {
			[key]: data as T[],
			offset: requestedOffset,
			limit: requestedLimit,
			// Legacy responses have no server-reported total; surface the
			// page length so callers do not mistake it for an authoritative
			// count.
			size: data.length,
			_links: {
				next: hasMoreLikely
					? `/api/v2/get_${key}?limit=${requestedLimit}&offset=${nextOffset}`
					: null,
				prev:
					requestedOffset > 0
						? `/api/v2/get_${key}?limit=${requestedLimit}&offset=${prevOffset}`
						: null,
			},
		} as PageEnvelope<K, T>;
	}
	return data as PageEnvelope<K, T>;
}

/**
 * Extracts a server-side error message from a TestRail API response body.
 * TestRail returns `{ "error": "..." }` for client-side failures; this helper
 * surfaces that string so callers see the real reason instead of the generic
 * axios "Request failed with status code 400".
 */
function extractServerErrorMessage(data: unknown): string | undefined {
	if (data && typeof data === "object" && "error" in data) {
		const e = (data as { error: unknown }).error;
		if (typeof e === "string" && e.trim().length > 0) {
			return e.trim();
		}
	}
	return undefined;
}

/**
 * Handles API errors with better context.
 *
 * For axios errors carrying a response body (e.g. TestRail's
 * `{ "error": "Field :case_id is not a valid test case." }`), the returned
 * Error's `message` is rewritten to `HTTP <status>: <server reason>` so the
 * actual cause is visible to MCP tool consumers — not just `"Request failed
 * with status code 400"`.
 *
 * For axios errors without a parseable response body, the message is
 * `HTTP <status>` (no server reason available).
 *
 * Non-axios errors are returned unchanged, except plain non-Error throwables
 * which are wrapped into `Error(${message}: ${value})`.
 *
 * @param error The error object from catch
 * @param message Context message prefix for logging
 * @returns Error with an enriched, caller-friendly message
 */
export function handleApiError(error: unknown, message: string): Error {
	// If it's an Axios error, we can get more context
	if (error instanceof Error) {
		const axiosError = error as AxiosError;
		if (axiosError.response) {
			const status = axiosError.response.status;
			const responseData = axiosError.response.data;
			console.error(
				`${message}: ${JSON.stringify({ response: { status, data: responseData } })}`,
			);
			const serverReason = extractServerErrorMessage(responseData);
			const enrichedMessage = serverReason
				? `HTTP ${status}: ${serverReason}`
				: `HTTP ${status}`;
			// Mutate `message` in-place so existing instanceof checks and any
			// downstream handlers that re-throw the same Error see the new
			// context.
			(error as Error).message = enrichedMessage;
		} else {
			console.error(`${message}: ${error}`);
		}
		return error;
	}

	// For non-Error objects, create a new Error
	return new Error(`${message}: ${String(error)}`);
}
