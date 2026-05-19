import { describe, it, expect } from "vitest";
import { handleApiError } from "../../../src/client/api/utils";

// Helper to construct an "axios-like" error: a real Error with the `response`
// shape that axios attaches to its errors. This avoids pulling in the axios
// mock infrastructure for tests that just exercise handleApiError's branches.
function makeAxiosError(
	axiosMessage: string,
	response: { status: number; data: unknown },
): Error {
	const err = new Error(axiosMessage);
	(err as unknown as { response: unknown }).response = response;
	return err;
}

describe("handleApiError", () => {
	it("rewrites the message to include the TestRail server-side error reason", () => {
		// TestRail returns { error: "..." } for client-side failures.
		const original = makeAxiosError("Request failed with status code 400", {
			status: 400,
			data: { error: "Field :case_id is not a valid test case." },
		});
		const enriched = handleApiError(original, "Error fetching test case 999");
		expect(enriched).toBe(original); // same Error instance, message mutated
		expect(enriched.message).toBe(
			"HTTP 400: Field :case_id is not a valid test case.",
		);
	});

	it("handles a missing-required-field error from add_case", () => {
		const original = makeAxiosError("Request failed with status code 400", {
			status: 400,
			data: {
				error: "Field :custom_custom_creation_method is a required field.",
			},
		});
		const enriched = handleApiError(
			original,
			"Error creating test case in section 1",
		);
		expect(enriched.message).toBe(
			"HTTP 400: Field :custom_custom_creation_method is a required field.",
		);
	});

	it("falls back to bare HTTP status when response body has no error string", () => {
		const original = makeAxiosError("Request failed with status code 500", {
			status: 500,
			data: { /* no .error field */ unrelated: true },
		});
		const enriched = handleApiError(original, "Some op");
		expect(enriched.message).toBe("HTTP 500");
	});

	it("falls back to bare HTTP status when response body is not an object", () => {
		const original = makeAxiosError("Request failed with status code 503", {
			status: 503,
			data: "<html>service unavailable</html>",
		});
		const enriched = handleApiError(original, "Some op");
		expect(enriched.message).toBe("HTTP 503");
	});

	it("falls back to bare HTTP status when response.data.error is an empty string", () => {
		const original = makeAxiosError("Request failed with status code 400", {
			status: 400,
			data: { error: "   " }, // whitespace only
		});
		const enriched = handleApiError(original, "Some op");
		expect(enriched.message).toBe("HTTP 400");
	});

	it("leaves non-axios Errors (no response field) untouched", () => {
		const original = new Error("ENOTFOUND testrail.example.com");
		const enriched = handleApiError(original, "Some op");
		expect(enriched).toBe(original);
		expect(enriched.message).toBe("ENOTFOUND testrail.example.com");
	});

	it("wraps non-Error throwables into Error(<message>: <value>)", () => {
		const enriched = handleApiError("string thrown", "Some op");
		expect(enriched).toBeInstanceOf(Error);
		expect(enriched.message).toBe("Some op: string thrown");
	});

	it("wraps null into Error with a stringified placeholder", () => {
		const enriched = handleApiError(null, "Some op");
		expect(enriched.message).toBe("Some op: null");
	});
});
