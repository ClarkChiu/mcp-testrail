import { z } from "zod";
export declare const sharedStepItemSchema: z.ZodObject<{
    content: z.ZodString;
    expected: z.ZodOptional<z.ZodString>;
    additionalInfo: z.ZodOptional<z.ZodString>;
    refs: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    content: string;
    expected?: string | undefined;
    additionalInfo?: string | undefined;
    refs?: string | undefined;
}, {
    content: string;
    expected?: string | undefined;
    additionalInfo?: string | undefined;
    refs?: string | undefined;
}>;
export declare const getSharedStepsSchema: {
    projectId: z.ZodNumber;
    createdAfter: z.ZodOptional<z.ZodNumber>;
    createdBefore: z.ZodOptional<z.ZodNumber>;
    createdBy: z.ZodOptional<z.ZodNumber>;
    updatedAfter: z.ZodOptional<z.ZodNumber>;
    updatedBefore: z.ZodOptional<z.ZodNumber>;
    updatedBy: z.ZodOptional<z.ZodNumber>;
    limit: z.ZodOptional<z.ZodNumber>;
    offset: z.ZodOptional<z.ZodNumber>;
};
export declare const GetSharedStepsInput: z.ZodObject<{
    projectId: z.ZodNumber;
    createdAfter: z.ZodOptional<z.ZodNumber>;
    createdBefore: z.ZodOptional<z.ZodNumber>;
    createdBy: z.ZodOptional<z.ZodNumber>;
    updatedAfter: z.ZodOptional<z.ZodNumber>;
    updatedBefore: z.ZodOptional<z.ZodNumber>;
    updatedBy: z.ZodOptional<z.ZodNumber>;
    limit: z.ZodOptional<z.ZodNumber>;
    offset: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    projectId: number;
    offset?: number | undefined;
    limit?: number | undefined;
    createdAfter?: number | undefined;
    createdBefore?: number | undefined;
    createdBy?: number | undefined;
    updatedAfter?: number | undefined;
    updatedBefore?: number | undefined;
    updatedBy?: number | undefined;
}, {
    projectId: number;
    offset?: number | undefined;
    limit?: number | undefined;
    createdAfter?: number | undefined;
    createdBefore?: number | undefined;
    createdBy?: number | undefined;
    updatedAfter?: number | undefined;
    updatedBefore?: number | undefined;
    updatedBy?: number | undefined;
}>;
export type GetSharedStepsInputType = z.infer<typeof GetSharedStepsInput>;
export type SharedStepItemType = z.infer<typeof sharedStepItemSchema>;
export declare const TestRailSharedStepItemSchema: z.ZodObject<{
    content: z.ZodString;
    additional_info: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    expected: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    refs: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    content: string;
    expected?: string | null | undefined;
    refs?: string | null | undefined;
    additional_info?: string | null | undefined;
}, {
    content: string;
    expected?: string | null | undefined;
    refs?: string | null | undefined;
    additional_info?: string | null | undefined;
}>;
export type TestRailSharedStepItem = z.infer<typeof TestRailSharedStepItemSchema>;
export declare const TestRailSharedStepSchema: z.ZodObject<{
    id: z.ZodNumber;
    title: z.ZodString;
    project_id: z.ZodNumber;
    created_by: z.ZodNumber;
    created_on: z.ZodNumber;
    updated_by: z.ZodNumber;
    updated_on: z.ZodNumber;
    custom_steps_separated: z.ZodArray<z.ZodObject<{
        content: z.ZodString;
        additional_info: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        expected: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        refs: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        content: string;
        expected?: string | null | undefined;
        refs?: string | null | undefined;
        additional_info?: string | null | undefined;
    }, {
        content: string;
        expected?: string | null | undefined;
        refs?: string | null | undefined;
        additional_info?: string | null | undefined;
    }>, "many">;
    case_ids: z.ZodArray<z.ZodNumber, "many">;
}, "strip", z.ZodTypeAny, {
    id: number;
    title: string;
    project_id: number;
    created_by: number;
    created_on: number;
    updated_by: number;
    updated_on: number;
    custom_steps_separated: {
        content: string;
        expected?: string | null | undefined;
        refs?: string | null | undefined;
        additional_info?: string | null | undefined;
    }[];
    case_ids: number[];
}, {
    id: number;
    title: string;
    project_id: number;
    created_by: number;
    created_on: number;
    updated_by: number;
    updated_on: number;
    custom_steps_separated: {
        content: string;
        expected?: string | null | undefined;
        refs?: string | null | undefined;
        additional_info?: string | null | undefined;
    }[];
    case_ids: number[];
}>;
export type TestRailSharedStep = z.infer<typeof TestRailSharedStepSchema>;
