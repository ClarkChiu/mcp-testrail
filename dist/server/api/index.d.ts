import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { TestRailClient } from "../../client/api/index.js";
/**
 * Function to register all API tools to the server
 * @param server McpServer server instance
 * @param testRailClient TestRail client instance
 */
export declare function registerAllTools(server: McpServer, testRailClient: TestRailClient): void;
export * from "./projects.js";
export * from "./cases.js";
export * from "./sections.js";
export * from "./sharedSteps.js";
export * from "./milestones.js";
export * from "./suites.js";
export * from "./plans.js";
export * from "./runs.js";
export * from "./tests.js";
export * from "./results.js";
