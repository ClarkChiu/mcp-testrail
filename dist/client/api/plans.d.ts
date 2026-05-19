import { BaseTestRailClient } from "./baseClient.js";
import { TestRailPlan, TestRailPlanEntry } from "../../shared/schemas/plans.js";
import { TestRailRun } from "../../shared/schemas/runs.js";
import { GetPlansInputType, AddPlanInputType, AddPlanEntryInputType, AddRunToPlanEntryInputType } from "../../shared/schemas/plans.js";
export declare class PlansClient extends BaseTestRailClient {
    /**
     * Gets all test plans for a project
     * @param projectId The ID of the project
     * @param filters Optional filter parameters
     * @returns Promise with array of test plans
     */
    getPlans(projectId: GetPlansInputType["projectId"], filters?: Record<string, string | number | boolean | null | undefined>): Promise<TestRailPlan[]>;
    /**
     * Creates a new test plan
     * @param projectId The ID of the project
     * @param data Test plan data
     * @returns Promise with created test plan
     */
    addPlan(projectId: AddPlanInputType["projectId"], data: Omit<AddPlanInputType, "projectId">): Promise<TestRailPlan>;
    /**
     * Adds a test plan entry
     * @param planId The ID of the test plan
     * @param data Plan entry data
     * @returns Promise with created plan entry
     */
    addPlanEntry(planId: AddPlanEntryInputType["planId"], data: Omit<AddPlanEntryInputType, "planId">): Promise<TestRailPlanEntry>;
    /**
     * Adds a test run to a plan entry
     * @param planId The ID of the test plan
     * @param entryId The ID of the plan entry
     * @param data Run data
     * @returns Promise with created test run
     */
    addRunToPlanEntry(planId: AddRunToPlanEntryInputType["planId"], entryId: AddRunToPlanEntryInputType["entryId"], data: Omit<AddRunToPlanEntryInputType, "planId" | "entryId">): Promise<TestRailRun>;
}
