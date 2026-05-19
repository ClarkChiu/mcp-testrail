import { BaseTestRailClient } from "./baseClient.js";
import { handleApiError } from "./utils.js";
export class MilestonesClient extends BaseTestRailClient {
    /**
     * Gets all milestones for a project
     * @param projectId The ID of the project
     * @param filters Optional filter parameters
     * @returns Promise with array of milestones
     */
    async getMilestones(projectId, filters) {
        try {
            const response = await this.client.get(`/api/v2/get_milestones/${projectId}`, {
                params: filters,
            });
            return response.data;
        }
        catch (error) {
            throw handleApiError(error, `Failed to get milestones for project ${projectId}`);
        }
    }
}
//# sourceMappingURL=milestones.js.map