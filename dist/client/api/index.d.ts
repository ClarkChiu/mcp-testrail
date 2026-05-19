import { BaseTestRailClient, TestRailClientConfig } from "./baseClient.js";
import { ProjectsClient } from "./projects.js";
import { SectionsClient } from "./sections.js";
import { SharedStepsClient } from "./sharedSteps.js";
import { CasesClient } from "./cases.js";
import { MilestonesClient } from "./milestones.js";
import { SuitesClient } from "./suites.js";
import { RunsClient } from "./runs.js";
import { PlansClient } from "./plans.js";
import { ResultsClient } from "./results.js";
import { TestsClient } from "./tests.js";
/**
 * Main TestRail API client that provides access to all resource-specific clients
 */
export declare class TestRailClient extends BaseTestRailClient {
    readonly projects: ProjectsClient;
    readonly sections: SectionsClient;
    readonly sharedSteps: SharedStepsClient;
    readonly cases: CasesClient;
    readonly milestones: MilestonesClient;
    readonly suites: SuitesClient;
    readonly runs: RunsClient;
    readonly plans: PlansClient;
    readonly results: ResultsClient;
    readonly tests: TestsClient;
    constructor(config: TestRailClientConfig);
}
export { TestRailClientConfig };
export { ProjectsClient } from "./projects.js";
export { SectionsClient } from "./sections.js";
export { SharedStepsClient } from "./sharedSteps.js";
export { CasesClient } from "./cases.js";
export { MilestonesClient } from "./milestones.js";
export { SuitesClient } from "./suites.js";
export { RunsClient } from "./runs.js";
export { PlansClient } from "./plans.js";
export { ResultsClient } from "./results.js";
export { TestsClient } from "./tests.js";
export { TestStatus, AddRunPayload, AddResultPayload, PaginatedResponse, } from "../../shared/schemas/common.js";
