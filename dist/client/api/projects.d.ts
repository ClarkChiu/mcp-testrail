import { BaseTestRailClient } from "./baseClient.js";
import { GetProjectInput, TestRailProject } from "../../shared/schemas/projects.js";
export declare class ProjectsClient extends BaseTestRailClient {
    /**
     * Get a specific project
     */
    getProject(projectId: GetProjectInput["projectId"]): Promise<TestRailProject>;
    /**
     * Get all projects
     */
    getProjects(params?: Record<string, string | number | boolean | null | undefined>): Promise<TestRailProject[]>;
}
