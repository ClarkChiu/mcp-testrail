import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { TestRailClient } from "../../client/api/index.js";
/**
 * Function to register shared step-related API tools
 * @param server McpServer instance
 * @param testRailClient TestRail client instance
 */
export declare function registerSharedStepTools(server: McpServer, testRailClient: TestRailClient): void;
