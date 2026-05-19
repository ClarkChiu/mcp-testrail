import { BaseTestRailClient } from "./baseClient.js";
import { handleApiError } from "./utils.js";
export class ResultsClient extends BaseTestRailClient {
    /**
     * Returns a list of results for a test
     * @param testId ID of the test
     * @param params Optional parameters (limit, offset, defects_filter, status_id)
     * @returns List of test results
     */
    async getResults(testId, params) {
        try {
            const response = await this.client.get(`/api/v2/get_results/${testId}`, { params });
            return response.data;
        }
        catch (error) {
            throw handleApiError(error, `Failed to get results for test ${testId}`);
        }
    }
    /**
     * Returns a list of results for a test case based on the test run ID and case ID
     * @param runId ID of the test run
     * @param caseId ID of the test case
     * @param params Optional parameters (limit, offset, defects_filter, status_id)
     * @returns List of test results
     */
    async getResultsForCase(runId, caseId, params) {
        try {
            const response = await this.client.get(`/api/v2/get_results_for_case/${runId}/${caseId}`, { params });
            return response.data;
        }
        catch (error) {
            throw handleApiError(error, `Failed to get results for case ${caseId} in run ${runId}`);
        }
    }
    /**
     * Returns a list of results for a test run
     * @param runId ID of the test run
     * @param params Optional parameters (limit, offset, defects_filter, status_id)
     * @returns List of test results
     */
    async getResultsForRun(runId, params) {
        try {
            const response = await this.client.get(`/api/v2/get_results_for_run/${runId}`, { params });
            return response.data;
        }
        catch (error) {
            throw handleApiError(error, `Failed to get results for run ${runId}`);
        }
    }
    /**
     * Adds a result to a test
     * @param testId ID of the test
     * @param data Result data (status_id, comment, version, elapsed, defects, assignedto_id, etc.)
     * @returns Added test result
     */
    async addResult(testId, data) {
        // TEMPORARILY COMMENTED OUT: add_result implementation
        /*
        try {
            const response: AxiosResponse<TestRailResult> = await this.client.post(
                `/api/v2/add_result/${testId}`,
                data,
            );
            return response.data;
        } catch (error) {
            throw handleApiError(error, `Failed to add result for test ${testId}`);
        }
        */
        throw new Error("Method temporarily disabled");
    }
    /**
     * Adds a result for a test case based on the test run and case ID
     * @param runId ID of the test run
     * @param caseId ID of the test case
     * @param data Result data (status_id, comment, version, elapsed, defects, assignedto_id, etc.)
     * @returns Added test result
     */
    async addResultForCase(runId, caseId, data) {
        try {
            // Convert camelCase to snake_case for API
            const response = await this.client.post(`/api/v2/add_result_for_case/${runId}/${caseId}`, data);
            return response.data;
        }
        catch (error) {
            throw handleApiError(error, `Failed to add result for case ${caseId} in run ${runId}`);
        }
    }
    /**
     * Adds multiple results to a test run at once
     * @param runId ID of the test run
     * @param data Result data (including results array)
     * @returns List of added test results
     */
    async addResults(runId, data) {
        // TEMPORARILY COMMENTED OUT: add_results implementation
        /*
        try {
            const response: AxiosResponse<TestRailResult[]> = await this.client.post(
                `/api/v2/add_results/${runId}`,
                data,
            );
            return response.data;
        } catch (error) {
            throw handleApiError(error, `Failed to add results for run ${runId}`);
        }
        */
        throw new Error("Method temporarily disabled");
    }
    /**
     * Adds multiple case results to a test run at once
     * @param runId ID of the test run
     * @param data Result data (including results array)
     * @returns List of added test results
     */
    async addResultsForCases(runId, data) {
        try {
            const response = await this.client.post(`/api/v2/add_results_for_cases/${runId}`, data);
            return response.data;
        }
        catch (error) {
            throw handleApiError(error, `Failed to add results for cases in run ${runId}`);
        }
    }
}
//# sourceMappingURL=results.js.map