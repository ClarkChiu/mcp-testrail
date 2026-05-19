import { BaseTestRailClient } from "./baseClient.js";
import { TestRailCase, TestRailCaseField, TestRailCaseType, TestRailCaseHistory, AddCaseData, UpdateCaseData } from "../../shared/schemas/cases.js";
import { GetTestCaseInput, GetTestCasesInput, AddTestCaseInput, UpdateTestCaseInput, DeleteTestCaseInput, CopyTestCasesToSectionInput, MoveTestCasesToSectionInput, GetTestCaseHistoryInput } from "../../shared/schemas/cases.js";
interface GetCasesParams {
    limit?: number;
    offset?: number;
    [key: string]: string | number | boolean | null | undefined;
}
export declare class CasesClient extends BaseTestRailClient {
    /**
     * Gets a specific test case by ID
     * @param caseId The ID of the test case
     * @returns Promise with test case details
     */
    getCase(caseId: GetTestCaseInput["caseId"]): Promise<TestRailCase>;
    /**
     * Gets test cases for a specific project and suite
     * @param projectId The ID of the project
     * @param suiteId The ID of the test suite
     * @param params Optional parameters including pagination (limit, offset) and other filters
     * @returns Promise with array of test cases
     */
    getCases(projectId: GetTestCasesInput["projectId"], suiteId: number, params?: Partial<GetCasesParams>): Promise<{
        cases: TestRailCase[];
        offset: number;
        limit: number;
        size: number;
        _links: {
            next: string | null;
            prev: string | null;
        };
    }>;
    /**
     * Adds a new test case to a section
     * @param sectionId The ID of the section
     * @param data The test case data
     * @returns Promise with created test case
     */
    addCase(sectionId: AddTestCaseInput["sectionId"], data: AddCaseData): Promise<TestRailCase>;
    /**
     * Updates an existing test case
     * @param caseId The ID of the test case
     * @param data The test case data to update
     * @returns Promise with updated test case
     */
    updateCase(caseId: UpdateTestCaseInput["caseId"], data: UpdateCaseData): Promise<TestRailCase>;
    /**
     * Deletes an existing test case
     * @param caseId The ID of the test case
     */
    deleteCase(caseId: DeleteTestCaseInput["caseId"]): Promise<void>;
    /**
     * Gets the history of changes for a specific test case
     * @param caseId The ID of the test case
     * @returns Promise with test case history
     */
    getCaseHistory(caseId: GetTestCaseHistoryInput["caseId"]): Promise<TestRailCaseHistory[]>;
    /**
     * Gets all available test case types
     * @returns Promise with array of case types
     */
    getCaseTypes(): Promise<TestRailCaseType[]>;
    /**
     * Gets all available test case fields
     * @returns Promise with array of case fields
     */
    getCaseFields(): Promise<TestRailCaseField[]>;
    /**
     * Copies test cases to a different section
     * @param caseIds Array of test case IDs to copy
     * @param sectionId The ID of the target section
     * @returns Promise with status
     */
    copyToSection(caseIds: CopyTestCasesToSectionInput["caseIds"], sectionId: CopyTestCasesToSectionInput["sectionId"]): Promise<{
        status: boolean;
    }>;
    /**
     * Moves test cases to a different section
     * @param caseIds Array of test case IDs to move
     * @param sectionId The ID of the target section
     * @returns Promise with status
     */
    moveToSection(caseIds: MoveTestCasesToSectionInput["caseIds"], sectionId: MoveTestCasesToSectionInput["sectionId"]): Promise<{
        status: boolean;
    }>;
    /**
     * Updates multiple test cases at once
     * @param projectId The ID of the project
     * @param suiteId Optional ID of the test suite
     * @param data Data to update on the test cases
     * @param caseIds Array of test case IDs to update
     */
    updateCases(projectId: GetTestCasesInput["projectId"], suiteId: number, data: UpdateCaseData, caseIds: UpdateTestCaseInput["caseId"][]): Promise<void>;
    /**
     * Deletes multiple test cases at once
     * @param projectId The ID of the project
     * @param suiteId Optional ID of the test suite
     * @param caseIds Array of test case IDs to delete
     */
    deleteCases(projectId: GetTestCasesInput["projectId"], suiteId: number, caseIds: DeleteTestCaseInput["caseId"][]): Promise<void>;
    /**
     * Imports a .feature file (Gherkin BDD scenario) into a TestRail section.
     * Uses the dedicated add_bdd endpoint which is the only way to populate
     * the custom_testrail_bdd_scenario field.
     * @param sectionId The ID of the section
     * @param featureContent Raw Gherkin .feature file content
     * @returns Promise with created/updated test case
     */
    addBdd(sectionId: number, featureContent: string): Promise<any>;
    /**
     * Exports a BDD test case as a .feature file (Gherkin format).
     * @param caseId The ID of the test case
     * @returns Promise with raw Gherkin .feature content as string
     */
    getBdd(caseId: number): Promise<any>;
}
export {};
