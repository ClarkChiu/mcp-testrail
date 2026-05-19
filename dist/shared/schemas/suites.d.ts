import { z } from "zod";
export declare const getSuitesSchema: z.ZodObject<{
    projectId: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    projectId: number;
}, {
    projectId: number;
}>;
export declare const getSuiteSchema: z.ZodObject<{
    suiteId: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    suiteId: number;
}, {
    suiteId: number;
}>;
export declare const addSuiteSchema: z.ZodObject<{
    projectId: z.ZodNumber;
    name: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    projectId: number;
    name: string;
    description?: string | undefined;
}, {
    projectId: number;
    name: string;
    description?: string | undefined;
}>;
export declare const updateSuiteSchema: z.ZodObject<{
    suiteId: z.ZodNumber;
    name: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    suiteId: number;
    name?: string | undefined;
    description?: string | undefined;
}, {
    suiteId: number;
    name?: string | undefined;
    description?: string | undefined;
}>;
export declare const getSuitesInputSchema: z.ZodObject<{
    projectId: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    projectId: number;
}, {
    projectId: number;
}>;
export declare const getSuiteInputSchema: z.ZodObject<{
    suiteId: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    suiteId: number;
}, {
    suiteId: number;
}>;
export declare const addSuiteInputSchema: z.ZodObject<{
    projectId: z.ZodNumber;
    name: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    projectId: number;
    name: string;
    description?: string | undefined;
}, {
    projectId: number;
    name: string;
    description?: string | undefined;
}>;
export declare const updateSuiteInputSchema: z.ZodObject<{
    suiteId: z.ZodNumber;
    name: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    suiteId: number;
    name?: string | undefined;
    description?: string | undefined;
}, {
    suiteId: number;
    name?: string | undefined;
    description?: string | undefined;
}>;
export type GetSuitesInput = z.infer<typeof getSuitesInputSchema>;
export type GetSuiteInput = z.infer<typeof getSuiteInputSchema>;
export type AddSuiteInput = z.infer<typeof addSuiteInputSchema>;
export type UpdateSuiteInput = z.infer<typeof updateSuiteInputSchema>;
/**
 * TestRail API Response for Suite
 */
export declare const TestRailSuiteSchema: z.ZodObject<{
    id: z.ZodNumber;
    name: z.ZodString;
    description: z.ZodNullable<z.ZodString>;
    project_id: z.ZodNumber;
    is_master: z.ZodBoolean;
    is_baseline: z.ZodBoolean;
    is_completed: z.ZodBoolean;
    completed_on: z.ZodNullable<z.ZodNumber>;
    url: z.ZodString;
}, "strip", z.ZodTypeAny, {
    url: string;
    name: string;
    is_completed: boolean;
    id: number;
    completed_on: number | null;
    description: string | null;
    project_id: number;
    is_master: boolean;
    is_baseline: boolean;
}, {
    url: string;
    name: string;
    is_completed: boolean;
    id: number;
    completed_on: number | null;
    description: string | null;
    project_id: number;
    is_master: boolean;
    is_baseline: boolean;
}>;
export type TestRailSuite = z.infer<typeof TestRailSuiteSchema>;
