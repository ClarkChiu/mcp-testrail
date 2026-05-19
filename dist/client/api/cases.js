import { BaseTestRailClient } from "./baseClient.js";
import { addCaseDataSchema, updateCaseDataSchema, } from "../../shared/schemas/cases.js";
import { handleApiError, normalizeListResponse } from "./utils.js";
export class CasesClient extends BaseTestRailClient {
    /**
     * Gets a specific test case by ID
     * @param caseId The ID of the test case
     * @returns Promise with test case details
     */
    async getCase(caseId) {
        try {
            const response = await this.client.get(`/api/v2/get_case/${caseId}`);
            return response.data;
        }
        catch (error) {
            throw handleApiError(error, `Failed to get test case ${caseId}`);
        }
    }
    /**
     * Gets test cases for a specific project and suite
     * @param projectId The ID of the project
     * @param suiteId The ID of the test suite
     * @param params Optional parameters including pagination (limit, offset) and other filters
     * @returns Promise with array of test cases
     */
    async getCases(projectId, suiteId, params) {
        try {
            const defaultParams = {
                limit: 50,
                offset: 0,
                ...params,
            };
            const response = await this.client.get(`/api/v2/get_cases/${projectId}`, {
                params: {
                    suite_id: suiteId,
                    ...defaultParams,
                },
            });
            return normalizeListResponse(response.data, "cases", defaultParams.limit, defaultParams.offset);
        }
        catch (error) {
            throw handleApiError(error, `Failed to get test cases for project ${projectId}`);
        }
    }
    /**
     * Adds a new test case to a section
     * @param sectionId The ID of the section
     * @param data The test case data
     * @returns Promise with created test case
     */
    async addCase(sectionId, data) {
        try {
            // Validate data with Zod schema
            const validatedData = addCaseDataSchema.parse(data);
            const response = await this.client.post(`/api/v2/add_case/${sectionId}`, validatedData);
            return response.data;
        }
        catch (error) {
            throw handleApiError(error, `Failed to add test case to section ${sectionId}`);
        }
    }
    /**
     * Updates an existing test case
     * @param caseId The ID of the test case
     * @param data The test case data to update
     * @returns Promise with updated test case
     */
    async updateCase(caseId, data) {
        try {
            // Validate data with Zod schema
            const validatedData = updateCaseDataSchema.parse(data);
            const response = await this.client.post(`/api/v2/update_case/${caseId}`, validatedData);
            return response.data;
        }
        catch (error) {
            throw handleApiError(error, `Failed to update test case ${caseId}`);
        }
    }
    /**
     * Deletes an existing test case
     * @param caseId The ID of the test case
     */
    async deleteCase(caseId) {
        try {
            await this.client.post(`/api/v2/delete_case/${caseId}`, {});
        }
        catch (error) {
            throw handleApiError(error, `Failed to delete test case ${caseId}`);
        }
    }
    /**
     * Gets the history of changes for a specific test case
     * @param caseId The ID of the test case
     * @returns Promise with test case history
     */
    async getCaseHistory(caseId) {
        try {
            const response = await this.client.get(`/api/v2/get_history_for_case/${caseId}`);
            return response.data;
        }
        catch (error) {
            throw handleApiError(error, "Failed to get test case history");
        }
    }
    /**
     * Gets all available test case types
     * @returns Promise with array of case types
     */
    async getCaseTypes() {
        try {
            const response = await this.client.get("/api/v2/get_case_types");
            return response.data;
        }
        catch (error) {
            throw handleApiError(error, "Failed to get case types");
        }
    }
    /**
     * Gets all available test case fields
     * @returns Promise with array of case fields
     */
    async getCaseFields() {
        try {
            const response = await this.client.get("/api/v2/get_case_fields");
            return response.data;
        }
        catch (error) {
            throw handleApiError(error, "Failed to get case fields");
        }
    }
    /**
     * Copies test cases to a different section
     * @param caseIds Array of test case IDs to copy
     * @param sectionId The ID of the target section
     * @returns Promise with status
     */
    async copyToSection(caseIds, sectionId) {
        try {
            const data = {
                case_ids: caseIds,
            };
            const response = await this.client.post(`/api/v2/copy_cases_to_section/${sectionId}`, data);
            return response.data;
        }
        catch (error) {
            throw handleApiError(error, `Failed to copy test cases to section ${sectionId}`);
        }
    }
    /**
     * Moves test cases to a different section
     * @param caseIds Array of test case IDs to move
     * @param sectionId The ID of the target section
     * @returns Promise with status
     */
    async moveToSection(caseIds, sectionId) {
        try {
            const data = {
                case_ids: caseIds,
            };
            const response = await this.client.post(`/api/v2/move_cases_to_section/${sectionId}`, data);
            return response.data;
        }
        catch (error) {
            throw handleApiError(error, `Failed to move test cases to section ${sectionId}`);
        }
    }
    /**
     * Updates multiple test cases at once
     * @param projectId The ID of the project
     * @param suiteId Optional ID of the test suite
     * @param data Data to update on the test cases
     * @param caseIds Array of test case IDs to update
     */
    async updateCases(projectId, suiteId, data, caseIds) {
        try {
            // Validate data with Zod schema
            const validatedData = updateCaseDataSchema.parse(data);
            const endpoint = `/api/v2/update_cases/${projectId}?suite_id=${suiteId}`;
            await this.client.post(endpoint, { ...validatedData, case_ids: caseIds });
        }
        catch (error) {
            throw handleApiError(error, "Failed to update test cases");
        }
    }
    /**
     * Deletes multiple test cases at once
     * @param projectId The ID of the project
     * @param suiteId Optional ID of the test suite
     * @param caseIds Array of test case IDs to delete
     */
    async deleteCases(projectId, suiteId, caseIds) {
        try {
            const endpoint = `/api/v2/delete_cases/${projectId}?suite_id=${suiteId}`;
            await this.client.post(endpoint, { case_ids: caseIds });
        }
        catch (error) {
            throw handleApiError(error, "Failed to delete test cases");
        }
    }
    /**
     * Imports a .feature file (Gherkin BDD scenario) into a TestRail section.
     * Uses the dedicated add_bdd endpoint which is the only way to populate
     * the custom_testrail_bdd_scenario field.
     * @param sectionId The ID of the section
     * @param featureContent Raw Gherkin .feature file content
     * @returns Promise with created/updated test case
     */
    async addBdd(sectionId, featureContent) {
        try {
            const FormData = (await import("form-data")).default;
            const form = new FormData();
            form.append("attachment", Buffer.from(featureContent, "utf-8"), {
                filename: "scenario.feature",
                contentType: "text/plain",
            });
            const response = await this.client.post(`/api/v2/add_bdd/${sectionId}`, form, { headers: form.getHeaders() });
            return response.data;
        }
        catch (error) {
            throw handleApiError(error, `Failed to import BDD scenario to section ${sectionId}`);
        }
    }
    /**
     * Exports a BDD test case as a .feature file (Gherkin format).
     * @param caseId The ID of the test case
     * @returns Promise with raw Gherkin .feature content as string
     */
    async getBdd(caseId) {
        try {
            const response = await this.client.get(`/api/v2/get_bdd/${caseId}`);
            return response.data;
        }
        catch (error) {
            throw handleApiError(error, `Failed to export BDD scenario for case ${caseId}`);
        }
    }
}
//# sourceMappingURL=cases.js.map