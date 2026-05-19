import { BaseTestRailClient } from "./baseClient.js";
import { GetSuiteInput, GetSuitesInput, AddSuiteInput, UpdateSuiteInput, TestRailSuite } from "../../shared/schemas/suites.js";
export declare class SuitesClient extends BaseTestRailClient {
    /**
     * Gets a specific test suite by ID
     * @param suiteId The ID of the test suite
     * @returns Promise with test suite details
     */
    getSuite(suiteId: GetSuiteInput["suiteId"]): Promise<TestRailSuite>;
    /**
     * Gets all test suites for a project
     * @param projectId The ID of the project
     * @returns Promise with array of test suites
     */
    getSuites(projectId: GetSuitesInput["projectId"]): Promise<TestRailSuite[]>;
    /**
     * Adds a new test suite to a project
     * @param projectId The ID of the project
     * @param data The test suite data
     * @returns Promise with created test suite
     */
    addSuite(projectId: AddSuiteInput["projectId"], data: {
        name: AddSuiteInput["name"];
        description?: AddSuiteInput["description"];
    }): Promise<TestRailSuite>;
    /**
     * Updates an existing test suite
     * @param suiteId The ID of the test suite
     * @param data The test suite data to update
     * @returns Promise with updated test suite
     */
    updateSuite(suiteId: UpdateSuiteInput["suiteId"], data: {
        name?: UpdateSuiteInput["name"];
        description?: UpdateSuiteInput["description"];
    }): Promise<TestRailSuite>;
}
