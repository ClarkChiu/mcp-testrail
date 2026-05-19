import { BaseTestRailClient } from "./baseClient.js";
import { handleApiError, normalizeListResponse } from "./utils.js";
export class SectionsClient extends BaseTestRailClient {
    /**
     * Get a specific section
     */
    async getSection(sectionId) {
        try {
            console.log(`Getting section ${sectionId}`);
            const response = await this.client.get(`/api/v2/get_section/${sectionId}`);
            return response.data;
        }
        catch (error) {
            throw handleApiError(error, `Failed to get section ${sectionId}`);
        }
    }
    /**
     * Get sections for a project with pagination support.
     * Returns a single page of sections along with pagination metadata,
     * allowing the caller to control how much data to fetch per request.
     */
    async getSections(projectId, suiteId, params) {
        try {
            console.log(`Getting sections for project ${projectId}`);
            const url = `/api/v2/get_sections/${projectId}`;
            const defaultParams = {
                limit: 250,
                offset: 0,
                ...params,
            };
            const queryParams = suiteId
                ? { ...defaultParams, suite_id: suiteId }
                : defaultParams;
            const response = await this.client.get(url, {
                params: queryParams,
            });
            return normalizeListResponse(response.data, "sections", defaultParams.limit, defaultParams.offset);
        }
        catch (error) {
            throw handleApiError(error, `Failed to get sections for project ${projectId}`);
        }
    }
    /**
     * Add a new section
     */
    async addSection(projectId, data) {
        try {
            console.log(`Adding section to project ${projectId}`);
            const response = await this.client.post(`/api/v2/add_section/${projectId}`, data);
            return response.data;
        }
        catch (error) {
            throw handleApiError(error, `Failed to add section to project ${projectId}`);
        }
    }
    /**
     * Move a section to a different parent or position
     */
    async moveSection(sectionId, data) {
        try {
            console.log(`Moving section ${sectionId}`);
            const response = await this.client.post(`/api/v2/move_section/${sectionId}`, data);
            return response.data;
        }
        catch (error) {
            throw handleApiError(error, `Failed to move section ${sectionId}`);
        }
    }
    /**
     * Update an existing section
     */
    async updateSection(sectionId, data) {
        try {
            console.log(`Updating section ${sectionId}`);
            const response = await this.client.post(`/api/v2/update_section/${sectionId}`, data);
            return response.data;
        }
        catch (error) {
            throw handleApiError(error, `Failed to update section ${sectionId}`);
        }
    }
    /**
     * Delete an existing section
     */
    async deleteSection(sectionId, soft) {
        try {
            console.log(`Deleting section ${sectionId}`);
            const url = soft
                ? `/api/v2/delete_section/${sectionId}?soft=1`
                : `/api/v2/delete_section/${sectionId}`;
            await this.client.post(url, {});
        }
        catch (error) {
            throw handleApiError(error, `Failed to delete section ${sectionId}`);
        }
    }
}
//# sourceMappingURL=sections.js.map