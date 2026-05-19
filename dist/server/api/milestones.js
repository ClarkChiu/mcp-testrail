import { createSuccessResponse, createErrorResponse } from "./utils.js";
import { getMilestonesSchema } from "../../shared/schemas/milestones.js";
/**
 * Function to register milestone-related API tools
 * @param server McpServer instance
 * @param testRailClient TestRail client instance
 */
export function registerMilestoneTools(server, testRailClient) {
    // Get all milestones for a project
    server.tool("getMilestones", "Retrieves all milestones for a specified TestRail project / 指定されたTestRailプロジェクトの全マイルストーンを取得します", getMilestonesSchema, async ({ projectId }) => {
        try {
            const milestones = await testRailClient.milestones.getMilestones(projectId);
            const successResponse = createSuccessResponse("Milestones retrieved successfully", {
                milestones,
            });
            return {
                content: [{ type: "text", text: JSON.stringify(successResponse) }],
            };
        }
        catch (error) {
            const errorResponse = createErrorResponse(`Error fetching milestones for project ${projectId}`, error);
            return {
                content: [{ type: "text", text: JSON.stringify(errorResponse) }],
                isError: true,
            };
        }
    });
}
//# sourceMappingURL=milestones.js.map