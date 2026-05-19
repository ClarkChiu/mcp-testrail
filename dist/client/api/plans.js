import { BaseTestRailClient } from "./baseClient.js";
import { handleApiError } from "./utils.js";
export class PlansClient extends BaseTestRailClient {
    /**
     * Gets all test plans for a project
     * @param projectId The ID of the project
     * @param filters Optional filter parameters
     * @returns Promise with array of test plans
     */
    async getPlans(projectId, filters) {
        try {
            const response = await this.client.get(`/api/v2/get_plans/${projectId}`, { params: filters });
            return response.data;
        }
        catch (error) {
            throw handleApiError(error, `Failed to get test plans for project ${projectId}`);
        }
    }
    /**
     * Creates a new test plan
     * @param projectId The ID of the project
     * @param data Test plan data
     * @returns Promise with created test plan
     */
    async addPlan(projectId, data) {
        try {
            const payload = {
                name: data.name,
            };
            if (data.description)
                payload.description = data.description;
            if (data.milestoneId)
                payload.milestone_id = data.milestoneId;
            if (data.entries)
                payload.entries = data.entries;
            const response = await this.client.post(`/api/v2/add_plan/${projectId}`, payload);
            return response.data;
        }
        catch (error) {
            throw handleApiError(error, `Failed to add test plan to project ${projectId}`);
        }
    }
    /**
     * Adds a test plan entry
     * @param planId The ID of the test plan
     * @param data Plan entry data
     * @returns Promise with created plan entry
     */
    async addPlanEntry(planId, data) {
        try {
            const payload = {
                suite_id: data.suiteId,
            };
            if (data.name)
                payload.name = data.name;
            if (data.description)
                payload.description = data.description;
            if (data.assignedtoId)
                payload.assignedto_id = data.assignedtoId;
            if (data.includeAll !== undefined)
                payload.include_all = data.includeAll;
            if (data.caseIds)
                payload.case_ids = data.caseIds;
            if (data.configIds)
                payload.config_ids = data.configIds;
            if (data.refs)
                payload.refs = data.refs;
            if (data.runs)
                payload.runs = data.runs;
            const response = await this.client.post(`/api/v2/add_plan_entry/${planId}`, payload);
            return response.data;
        }
        catch (error) {
            throw handleApiError(error, `Failed to add plan entry to plan ${planId}`);
        }
    }
    /**
     * Adds a test run to a plan entry
     * @param planId The ID of the test plan
     * @param entryId The ID of the plan entry
     * @param data Run data
     * @returns Promise with created test run
     */
    async addRunToPlanEntry(planId, entryId, data) {
        try {
            const payload = {
                config_ids: data.configIds,
            };
            if (data.description)
                payload.description = data.description;
            if (data.assignedtoId)
                payload.assignedto_id = data.assignedtoId;
            if (data.includeAll !== undefined)
                payload.include_all = data.includeAll;
            if (data.caseIds)
                payload.case_ids = data.caseIds;
            if (data.refs)
                payload.refs = data.refs;
            const response = await this.client.post(`/api/v2/add_run_to_plan_entry/${planId}/${entryId}`, payload);
            return response.data;
        }
        catch (error) {
            throw handleApiError(error, `Failed to add run to plan entry ${entryId} in plan ${planId}`);
        }
    }
}
//# sourceMappingURL=plans.js.map