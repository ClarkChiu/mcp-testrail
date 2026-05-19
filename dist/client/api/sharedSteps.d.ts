import { BaseTestRailClient } from "./baseClient.js";
import { TestRailSharedStep, GetSharedStepsInputType } from "../../shared/schemas/sharedSteps.js";
export declare class SharedStepsClient extends BaseTestRailClient {
    /**
     * Get all shared steps for a project
     * @param projectId The ID of the project
     * @param filters Optional filter parameters (created_after, created_before, updated_after, updated_before, created_by, limit, offset)
     * @returns Promise with array of shared steps
     */
    getSharedSteps(projectId: GetSharedStepsInputType["projectId"], filters?: Record<string, string | number | boolean | null | undefined>): Promise<TestRailSharedStep[]>;
}
