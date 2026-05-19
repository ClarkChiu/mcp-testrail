import { BaseTestRailClient } from "./baseClient.js";
import { handleApiError } from "./utils.js";
export class ProjectsClient extends BaseTestRailClient {
    /**
     * Get a specific project
     */
    async getProject(projectId) {
        try {
            const response = await this.client.get(`/api/v2/get_project/${projectId}`);
            return response.data;
        }
        catch (error) {
            throw handleApiError(error, `Failed to get project ${projectId}`);
        }
    }
    /**
     * Get all projects
     */
    async getProjects(params) {
        try {
            const response = await this.client.get("/api/v2/get_projects", { params });
            // For debugging
            console.error("TestRail API getProjects raw response:", JSON.stringify(response.data));
            return response.data;
        }
        catch (error) {
            throw handleApiError(error, "Failed to get projects");
        }
    }
}
//# sourceMappingURL=projects.js.map