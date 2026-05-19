import { z } from "zod";
export declare const getTestsSchema: z.ZodObject<{
    runId: z.ZodNumber;
    offset: z.ZodOptional<z.ZodNumber>;
    limit: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    runId: number;
    offset?: number | undefined;
    limit?: number | undefined;
}, {
    runId: number;
    offset?: number | undefined;
    limit?: number | undefined;
}>;
export declare const getTestSchema: z.ZodObject<{
    testId: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    testId: number;
}, {
    testId: number;
}>;
export declare const getTestsInputSchema: z.ZodObject<{
    runId: z.ZodNumber;
    offset: z.ZodOptional<z.ZodNumber>;
    limit: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    runId: number;
    offset?: number | undefined;
    limit?: number | undefined;
}, {
    runId: number;
    offset?: number | undefined;
    limit?: number | undefined;
}>;
export declare const getTestInputSchema: z.ZodObject<{
    testId: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    testId: number;
}, {
    testId: number;
}>;
export type GetTestsInput = z.infer<typeof getTestsInputSchema>;
export type GetTestInput = z.infer<typeof getTestInputSchema>;
/**
 * TestRail API Response for Suite
 */
export declare const TestRailTestSchema: z.ZodObject<{
    assignedto_id: z.ZodNumber;
    case_id: z.ZodNumber;
    estimate: z.ZodString;
    estimate_forecast: z.ZodString;
    id: z.ZodNumber;
    milestone_id: z.ZodNumber;
    priority_id: z.ZodNumber;
    refs: z.ZodString;
    run_id: z.ZodNumber;
    status_id: z.ZodNumber;
    title: z.ZodString;
    type_id: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    id: number;
    refs: string;
    title: string;
    estimate: string;
    type_id: number;
    priority_id: number;
    milestone_id: number;
    estimate_forecast: string;
    status_id: number;
    case_id: number;
    assignedto_id: number;
    run_id: number;
}, {
    id: number;
    refs: string;
    title: string;
    estimate: string;
    type_id: number;
    priority_id: number;
    milestone_id: number;
    estimate_forecast: string;
    status_id: number;
    case_id: number;
    assignedto_id: number;
    run_id: number;
}>;
export type TestRailTest = z.infer<typeof TestRailTestSchema>;
