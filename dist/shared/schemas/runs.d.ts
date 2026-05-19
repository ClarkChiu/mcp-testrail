import { z } from "zod";
export declare const getRunsSchema: {
    projectId: z.ZodNumber;
    createdAfter: z.ZodOptional<z.ZodNumber>;
    createdBefore: z.ZodOptional<z.ZodNumber>;
    createdBy: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
    milestoneId: z.ZodOptional<z.ZodNumber>;
    suiteId: z.ZodOptional<z.ZodNumber>;
    limit: z.ZodOptional<z.ZodNumber>;
    offset: z.ZodOptional<z.ZodNumber>;
};
export declare const getRunSchema: {
    runId: z.ZodNumber;
};
export declare const addRunSchema: {
    projectId: z.ZodNumber;
    name: z.ZodString;
    suiteId: z.ZodOptional<z.ZodNumber>;
    description: z.ZodOptional<z.ZodString>;
    milestoneId: z.ZodOptional<z.ZodNumber>;
    assignedtoId: z.ZodOptional<z.ZodNumber>;
    includeAll: z.ZodOptional<z.ZodBoolean>;
    caseIds: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
    configIds: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
    refs: z.ZodOptional<z.ZodString>;
};
export declare const updateRunSchema: {
    runId: z.ZodNumber;
    name: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
    milestoneId: z.ZodOptional<z.ZodNumber>;
    assignedtoId: z.ZodOptional<z.ZodNumber>;
    includeAll: z.ZodOptional<z.ZodBoolean>;
    caseIds: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
    refs: z.ZodOptional<z.ZodString>;
};
export declare const GetRunsInput: z.ZodObject<{
    projectId: z.ZodNumber;
    createdAfter: z.ZodOptional<z.ZodNumber>;
    createdBefore: z.ZodOptional<z.ZodNumber>;
    createdBy: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
    milestoneId: z.ZodOptional<z.ZodNumber>;
    suiteId: z.ZodOptional<z.ZodNumber>;
    limit: z.ZodOptional<z.ZodNumber>;
    offset: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    projectId: number;
    offset?: number | undefined;
    limit?: number | undefined;
    suiteId?: number | undefined;
    createdAfter?: number | undefined;
    createdBefore?: number | undefined;
    createdBy?: number[] | undefined;
    milestoneId?: number | undefined;
}, {
    projectId: number;
    offset?: number | undefined;
    limit?: number | undefined;
    suiteId?: number | undefined;
    createdAfter?: number | undefined;
    createdBefore?: number | undefined;
    createdBy?: number[] | undefined;
    milestoneId?: number | undefined;
}>;
export declare const GetRunInput: z.ZodObject<{
    runId: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    runId: number;
}, {
    runId: number;
}>;
export declare const AddRunInput: z.ZodObject<{
    projectId: z.ZodNumber;
    name: z.ZodString;
    suiteId: z.ZodOptional<z.ZodNumber>;
    description: z.ZodOptional<z.ZodString>;
    milestoneId: z.ZodOptional<z.ZodNumber>;
    assignedtoId: z.ZodOptional<z.ZodNumber>;
    includeAll: z.ZodOptional<z.ZodBoolean>;
    caseIds: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
    configIds: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
    refs: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    projectId: number;
    name: string;
    suiteId?: number | undefined;
    description?: string | undefined;
    refs?: string | undefined;
    milestoneId?: number | undefined;
    caseIds?: number[] | undefined;
    assignedtoId?: number | undefined;
    includeAll?: boolean | undefined;
    configIds?: number[] | undefined;
}, {
    projectId: number;
    name: string;
    suiteId?: number | undefined;
    description?: string | undefined;
    refs?: string | undefined;
    milestoneId?: number | undefined;
    caseIds?: number[] | undefined;
    assignedtoId?: number | undefined;
    includeAll?: boolean | undefined;
    configIds?: number[] | undefined;
}>;
export declare const UpdateRunInput: z.ZodObject<{
    runId: z.ZodNumber;
    name: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
    milestoneId: z.ZodOptional<z.ZodNumber>;
    assignedtoId: z.ZodOptional<z.ZodNumber>;
    includeAll: z.ZodOptional<z.ZodBoolean>;
    caseIds: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
    refs: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    runId: number;
    name?: string | undefined;
    description?: string | undefined;
    refs?: string | undefined;
    milestoneId?: number | undefined;
    caseIds?: number[] | undefined;
    assignedtoId?: number | undefined;
    includeAll?: boolean | undefined;
}, {
    runId: number;
    name?: string | undefined;
    description?: string | undefined;
    refs?: string | undefined;
    milestoneId?: number | undefined;
    caseIds?: number[] | undefined;
    assignedtoId?: number | undefined;
    includeAll?: boolean | undefined;
}>;
export type GetRunsInputType = z.infer<typeof GetRunsInput>;
export type GetRunInputType = z.infer<typeof GetRunInput>;
export type AddRunInputType = z.infer<typeof AddRunInput>;
export type UpdateRunInputType = z.infer<typeof UpdateRunInput>;
/**
 * TestRail API Response for Test
 */
export declare const TestRailTestSchema: z.ZodObject<{
    id: z.ZodNumber;
    case_id: z.ZodNumber;
    status_id: z.ZodNumber;
    assignedto_id: z.ZodNumber;
    run_id: z.ZodNumber;
    title: z.ZodString;
    template_id: z.ZodNumber;
    type_id: z.ZodNumber;
    priority_id: z.ZodNumber;
    milestone_id: z.ZodNumber;
    refs: z.ZodString;
    estimate: z.ZodString;
    estimate_forecast: z.ZodString;
    custom_preconds: z.ZodString;
    custom_steps: z.ZodString;
    custom_expected: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: number;
    refs: string;
    title: string;
    estimate: string;
    template_id: number;
    type_id: number;
    priority_id: number;
    milestone_id: number;
    estimate_forecast: string;
    status_id: number;
    custom_preconds: string;
    custom_steps: string;
    custom_expected: string;
    case_id: number;
    assignedto_id: number;
    run_id: number;
}, {
    id: number;
    refs: string;
    title: string;
    estimate: string;
    template_id: number;
    type_id: number;
    priority_id: number;
    milestone_id: number;
    estimate_forecast: string;
    status_id: number;
    custom_preconds: string;
    custom_steps: string;
    custom_expected: string;
    case_id: number;
    assignedto_id: number;
    run_id: number;
}>;
export type TestRailTest = z.infer<typeof TestRailTestSchema>;
/**
 * TestRail API Response for Run
 */
export declare const TestRailRunSchema: z.ZodObject<{
    id: z.ZodNumber;
    suite_id: z.ZodNumber;
    name: z.ZodString;
    description: z.ZodString;
    milestone_id: z.ZodNullable<z.ZodNumber>;
    assignedto_id: z.ZodNullable<z.ZodNumber>;
    include_all: z.ZodBoolean;
    is_completed: z.ZodBoolean;
    completed_on: z.ZodNullable<z.ZodNumber>;
    config: z.ZodNullable<z.ZodString>;
    config_ids: z.ZodArray<z.ZodNumber, "many">;
    passed_count: z.ZodNumber;
    blocked_count: z.ZodNumber;
    untested_count: z.ZodNumber;
    retest_count: z.ZodNumber;
    failed_count: z.ZodNumber;
    custom_status_count: z.ZodRecord<z.ZodString, z.ZodNumber>;
    created_on: z.ZodNumber;
    created_by: z.ZodNumber;
    plan_id: z.ZodNumber;
    url: z.ZodString;
    refs: z.ZodString;
}, "strip", z.ZodTypeAny, {
    url: string;
    name: string;
    is_completed: boolean;
    id: number;
    completed_on: number | null;
    description: string;
    suite_id: number;
    refs: string;
    created_by: number;
    created_on: number;
    milestone_id: number | null;
    include_all: boolean;
    assignedto_id: number | null;
    config: string | null;
    config_ids: number[];
    passed_count: number;
    blocked_count: number;
    untested_count: number;
    retest_count: number;
    failed_count: number;
    custom_status_count: Record<string, number>;
    plan_id: number;
}, {
    url: string;
    name: string;
    is_completed: boolean;
    id: number;
    completed_on: number | null;
    description: string;
    suite_id: number;
    refs: string;
    created_by: number;
    created_on: number;
    milestone_id: number | null;
    include_all: boolean;
    assignedto_id: number | null;
    config: string | null;
    config_ids: number[];
    passed_count: number;
    blocked_count: number;
    untested_count: number;
    retest_count: number;
    failed_count: number;
    custom_status_count: Record<string, number>;
    plan_id: number;
}>;
export type TestRailRun = z.infer<typeof TestRailRunSchema>;
