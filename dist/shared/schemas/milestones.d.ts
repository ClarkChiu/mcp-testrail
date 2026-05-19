import { z } from "zod";
export declare const getMilestonesSchema: {
    projectId: z.ZodNumber;
};
export declare const GetMilestonesInput: z.ZodObject<{
    projectId: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    projectId: number;
}, {
    projectId: number;
}>;
export type GetMilestonesInputType = z.infer<typeof GetMilestonesInput>;
/**
 * TestRail API Response for Milestone
 */
export declare const TestRailMilestoneSchema: z.ZodObject<{
    id: z.ZodNumber;
    name: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    due_on: z.ZodOptional<z.ZodNumber>;
    start_on: z.ZodOptional<z.ZodNumber>;
    started_on: z.ZodOptional<z.ZodNumber>;
    completed_on: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    project_id: z.ZodNumber;
    is_completed: z.ZodBoolean;
    is_started: z.ZodOptional<z.ZodBoolean>;
    parent_id: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    refs: z.ZodOptional<z.ZodString>;
    url: z.ZodString;
}, "strip", z.ZodTypeAny, {
    url: string;
    name: string;
    is_completed: boolean;
    id: number;
    project_id: number;
    completed_on?: number | null | undefined;
    description?: string | undefined;
    parent_id?: number | null | undefined;
    refs?: string | undefined;
    due_on?: number | undefined;
    start_on?: number | undefined;
    started_on?: number | undefined;
    is_started?: boolean | undefined;
}, {
    url: string;
    name: string;
    is_completed: boolean;
    id: number;
    project_id: number;
    completed_on?: number | null | undefined;
    description?: string | undefined;
    parent_id?: number | null | undefined;
    refs?: string | undefined;
    due_on?: number | undefined;
    start_on?: number | undefined;
    started_on?: number | undefined;
    is_started?: boolean | undefined;
}>;
export type TestRailMilestone = z.infer<typeof TestRailMilestoneSchema>;
