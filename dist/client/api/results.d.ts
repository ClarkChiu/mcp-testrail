import { BaseTestRailClient } from "./baseClient.js";
import { TestRailResult } from "../../shared/schemas/results.js";
import { GetResultsInputType, GetResultsForCaseInputType, GetResultsForRunInputType, AddResultInputType, AddResultForCaseInputType, AddResultsInputType, AddResultsForCasesInputType } from "../../shared/schemas/results.js";
export declare class ResultsClient extends BaseTestRailClient {
    /**
     * Returns a list of results for a test
     * @param testId ID of the test
     * @param params Optional parameters (limit, offset, defects_filter, status_id)
     * @returns List of test results
     */
    getResults(testId: GetResultsInputType["testId"], params?: Record<string, string | number | boolean | null | undefined>): Promise<TestRailResult[]>;
    /**
     * Returns a list of results for a test case based on the test run ID and case ID
     * @param runId ID of the test run
     * @param caseId ID of the test case
     * @param params Optional parameters (limit, offset, defects_filter, status_id)
     * @returns List of test results
     */
    getResultsForCase(runId: GetResultsForCaseInputType["runId"], caseId: GetResultsForCaseInputType["caseId"], params?: Omit<GetResultsForCaseInputType, "runId" | "caseId">): Promise<TestRailResult[]>;
    /**
     * Returns a list of results for a test run
     * @param runId ID of the test run
     * @param params Optional parameters (limit, offset, defects_filter, status_id)
     * @returns List of test results
     */
    getResultsForRun(runId: GetResultsForRunInputType["runId"], params?: Record<string, string | number | boolean | null | undefined>): Promise<TestRailResult[]>;
    /**
     * Adds a result to a test
     * @param testId ID of the test
     * @param data Result data (status_id, comment, version, elapsed, defects, assignedto_id, etc.)
     * @returns Added test result
     */
    addResult(testId: AddResultInputType["testId"], data: Record<string, unknown>): Promise<TestRailResult>;
    /**
     * Adds a result for a test case based on the test run and case ID
     * @param runId ID of the test run
     * @param caseId ID of the test case
     * @param data Result data (status_id, comment, version, elapsed, defects, assignedto_id, etc.)
     * @returns Added test result
     */
    addResultForCase(runId: AddResultForCaseInputType["runId"], caseId: AddResultForCaseInputType["caseId"], data: Partial<Omit<AddResultForCaseInputType, "runId" | "caseId">>): Promise<TestRailResult>;
    /**
     * Adds multiple results to a test run at once
     * @param runId ID of the test run
     * @param data Result data (including results array)
     * @returns List of added test results
     */
    addResults(runId: AddResultsInputType["runId"], data: Record<string, unknown>): Promise<TestRailResult[]>;
    /**
     * Adds multiple case results to a test run at once
     * @param runId ID of the test run
     * @param data Result data (including results array)
     * @returns List of added test results
     */
    addResultsForCases(runId: AddResultsForCasesInputType["runId"], data: Record<string, unknown>): Promise<TestRailResult[]>;
}
