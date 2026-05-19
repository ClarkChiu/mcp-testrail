export type FastMCPToolResponse = {
    type: "text";
    text: string;
};
export declare function formatErrorMessage(error: unknown): string;
export declare function createSuccessResponse(message: string, data?: Record<string, unknown>): FastMCPToolResponse;
export declare function createErrorResponse(baseMessage: string, error: unknown): FastMCPToolResponse;
