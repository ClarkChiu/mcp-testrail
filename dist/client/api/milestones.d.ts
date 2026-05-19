import { BaseTestRailClient } from "./baseClient.js";
import { TestRailMilestone } from "../../shared/schemas/milestones.js";
import { GetMilestonesInputType } from "../../shared/schemas/milestones.js";
export declare class MilestonesClient extends BaseTestRailClient {
    /**
     * Gets all milestones for a project
     * @param projectId The ID of the project
     * @param filters Optional filter parameters
     * @returns Promise with array of milestones
     */
    getMilestones(projectId: GetMilestonesInputType["projectId"], filters?: Record<string, string | number | boolean | null | undefined>): Promise<TestRailMilestone[]>;
}
