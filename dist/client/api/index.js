import { BaseTestRailClient } from "./baseClient.js";
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
export class TestRailClient extends BaseTestRailClient {
    projects;
    sections;
    sharedSteps;
    cases;
    milestones;
    suites;
    runs;
    plans;
    results;
    tests;
    constructor(config) {
        super(config);
        this.projects = new ProjectsClient(config);
        this.sections = new SectionsClient(config);
        this.sharedSteps = new SharedStepsClient(config);
        this.cases = new CasesClient(config);
        this.milestones = new MilestonesClient(config);
        this.suites = new SuitesClient(config);
        this.runs = new RunsClient(config);
        this.plans = new PlansClient(config);
        this.results = new ResultsClient(config);
        this.tests = new TestsClient(config);
    }
}
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
//# sourceMappingURL=index.js.map