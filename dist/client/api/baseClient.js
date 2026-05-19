import axios, { AxiosError } from "axios";
// Custom error classes
export class TestRailError extends Error {
    constructor(message) {
        super(message);
        this.name = "TestRailError";
    }
}
export class TestRailAPIError extends TestRailError {
    status;
    data;
    constructor(status, message, data) {
        super(message);
        this.status = status;
        this.data = data;
        this.name = "TestRailAPIError";
    }
}
export class TestRailTimeoutError extends TestRailError {
    constructor(message = "Request timed out") {
        super(message);
        this.name = "TestRailTimeoutError";
    }
}
export class TestRailNetworkError extends TestRailError {
    constructor(message = "Network error occurred") {
        super(message);
        this.name = "TestRailNetworkError";
    }
}
/**
 * Base TestRail API client that handles configuration and common functionality
 */
export class BaseTestRailClient {
    client;
    constructor(config) {
        const headers = {
            "Content-Type": "application/json",
            ...(config.headers || {}),
        };
        this.client = axios.create({
            baseURL: config.baseURL,
            headers,
            timeout: config.timeout ?? 30000,
            auth: config.auth,
        });
    }
    /**
     * Set a custom header
     */
    setHeader(name, value) {
        this.client.defaults.headers.common[name] = value;
    }
    /**
     * Wrapper for making HTTP requests with error handling
     */
    async request(method, url, data) {
        try {
            const response = await this.client.request({
                method,
                url,
                data,
            });
            return response.data;
        }
        catch (error) {
            if (error instanceof TestRailError) {
                throw error;
            }
            if (error instanceof AxiosError) {
                if (error.code === "ECONNABORTED") {
                    throw new TestRailTimeoutError();
                }
                if (!error.response) {
                    throw new TestRailNetworkError();
                }
                const status = error.response.status;
                const errorData = error.response.data;
                const message = errorData?.error || error.message;
                const data = error.response.data;
                switch (status) {
                    case 400:
                        throw new TestRailAPIError(status, `Bad Request: ${message}`, data);
                    case 401:
                        throw new TestRailAPIError(status, "Authentication failed", data);
                    case 403:
                        throw new TestRailAPIError(status, "Permission denied", data);
                    case 404:
                        throw new TestRailAPIError(status, "Resource not found", data);
                    case 429:
                        throw new TestRailAPIError(status, "Rate limit exceeded", data);
                    default:
                        if (status >= 500) {
                            throw new TestRailAPIError(status, "TestRail server error", data);
                        }
                        throw new TestRailAPIError(status, `Unknown error: ${message}`, data);
                }
            }
            throw new TestRailError(`Unexpected error: ${error instanceof Error ? error.message : String(error)}`);
        }
    }
}
//# sourceMappingURL=baseClient.js.map