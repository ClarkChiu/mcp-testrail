// Function to format error messages
export function formatErrorMessage(error) {
    return error instanceof Error ? error.message : String(error);
}
// Function to create success response
export function createSuccessResponse(message, data) {
    return {
        type: "text",
        text: JSON.stringify({
            message,
            ...(data || {}),
        }, null, 2),
    };
}
// Function to create error response
export function createErrorResponse(baseMessage, error) {
    const errorMessage = formatErrorMessage(error);
    return {
        type: "text",
        text: JSON.stringify({
            error: `${baseMessage}: ${errorMessage}`,
        }, null, 2),
    };
}
//# sourceMappingURL=utils.js.map