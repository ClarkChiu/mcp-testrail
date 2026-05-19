import { AxiosInstance } from "axios";
export declare class TestRailError extends Error {
    constructor(message: string);
}
export declare class TestRailAPIError extends TestRailError {
    status: number;
    data?: unknown | undefined;
    constructor(status: number, message: string, data?: unknown | undefined);
}
export declare class TestRailTimeoutError extends TestRailError {
    constructor(message?: string);
}
export declare class TestRailNetworkError extends TestRailError {
    constructor(message?: string);
}
export interface TestRailClientConfig {
    baseURL: string;
    auth: {
        username: string;
        password: string;
    };
    timeout?: number;
    headers?: Record<string, string>;
}
/**
 * Base TestRail API client that handles configuration and common functionality
 */
export declare class BaseTestRailClient {
    protected client: AxiosInstance;
    constructor(config: TestRailClientConfig);
    /**
     * Set a custom header
     */
    setHeader(name: string, value: string): void;
    /**
     * Wrapper for making HTTP requests with error handling
     */
    protected request<T>(method: "get" | "post" | "put" | "delete", url: string, data?: unknown): Promise<T>;
}
