import { BaseTestRailClient } from "./baseClient.js";
import { handleApiError, normalizeListResponse } from "./utils.js";
export class TestsClient extends BaseTestRailClient {
    /**
     * Gets a specific test by ID
     * @param suiteId The ID of the test
     * @returns Promise with test details
     */
    async getTest(testId) {
        try {
            const response = await this.client.get(`/api/v2/get_test/${testId}`);
            return response.data;
        }
        catch (error) {
            throw handleApiError(error, `Failed to get test ${testId}`);
        }
    }
    /**
     * Gets all tests for a run
     * @param runId The ID of the run
     * @param params Optional parameters including pagination (limit, offset)
     * @returns Promise with array of tests and pagination metadata
     */
    async getTests(runId, params) {
        try {
            const defaultParams = {
                limit: 50,
                offset: 0,
                ...params,
            };
            const response = await this.client.get(`/api/v2/get_tests/${runId}`, {
                params: defaultParams,
            });
            return normalizeListResponse(response.data, "tests", defaultParams.limit, defaultParams.offset);
        }
        catch (error) {
            throw handleApiError(error, `Failed to get tests for run ${runId}`);
        }
    }
}
//# sourceMappingURL=tests.js.map