import { BaseTestRailClient } from "./baseClient.js";
import { TestRailRun } from "../../shared/schemas/runs.js";
import { TestRailResult } from "../../shared/schemas/results.js";
import { GetRunInputType, GetRunsInputType, AddRunInputType, UpdateRunInputType } from "../../shared/schemas/runs.js";
export declare class RunsClient extends BaseTestRailClient {
    /**
     * Gets a specific test run by ID
     * @param runId The ID of the test run
     * @returns Promise with test run details
     */
    getRun(runId: GetRunInputType["runId"]): Promise<TestRailRun>;
    /**
     * Gets all test runs for a project
     * @param projectId The ID of the project
     * @param filters Optional filter parameters
     * @returns Promise with array of test runs
     */
    getRuns(projectId: GetRunsInputType["projectId"], filters?: Record<string, string | number | boolean | null | undefined>): Promise<TestRailRun[]>;
    /**
     * Adds a new test run to a project
     * @param projectId The ID of the project
     * @param data The test run data
     * @returns Promise with created test run
     */
    addRun(projectId: AddRunInputType["projectId"], data: Record<string, unknown>): Promise<TestRailRun>;
    /**
     * Updates an existing test run
     * @param runId The ID of the test run
     * @param data The test run data to update
     * @returns Promise with updated test run
     */
    updateRun(runId: UpdateRunInputType["runId"], data: Record<string, unknown>): Promise<TestRailRun>;
    /**
     * Adds a result to a test
     * @param testId The ID of the test
     * @param data The result data
     * @returns Promise with the created result
     */
    addResult(testId: number, data: Record<string, unknown>): Promise<TestRailResult>;
}
