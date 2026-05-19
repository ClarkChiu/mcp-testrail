import { BaseTestRailClient } from "./baseClient.js";
import { GetTestInput, GetTestsInput, TestRailTest } from "../../shared/schemas/tests.js";
interface GetTestsParams {
    limit?: number;
    offset?: number;
    [key: string]: string | number | boolean | null | undefined;
}
export declare class TestsClient extends BaseTestRailClient {
    /**
     * Gets a specific test by ID
     * @param suiteId The ID of the test
     * @returns Promise with test details
     */
    getTest(testId: GetTestInput["testId"]): Promise<TestRailTest>;
    /**
     * Gets all tests for a run
     * @param runId The ID of the run
     * @param params Optional parameters including pagination (limit, offset)
     * @returns Promise with array of tests and pagination metadata
     */
    getTests(runId: GetTestsInput["runId"], params?: Partial<GetTestsParams>): Promise<{
        tests: TestRailTest[];
        offset: number;
        limit: number;
        size: number;
        _links: {
            next: string | null;
            prev: string | null;
        };
    }>;
}
export {};
