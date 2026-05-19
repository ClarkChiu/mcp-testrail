import { z } from "zod";
/**
 * Status IDs used in TestRail
 */
export declare const TestStatusEnum: {
    readonly Passed: 1;
    readonly Blocked: 2;
    readonly Untested: 3;
    readonly Retest: 4;
    readonly Failed: 5;
};
export declare const TestStatusSchema: z.ZodNativeEnum<{
    readonly Passed: 1;
    readonly Blocked: 2;
    readonly Untested: 3;
    readonly Retest: 4;
    readonly Failed: 5;
}>;
export type TestStatus = z.infer<typeof TestStatusSchema>;
/**
 * Payload schema for creating a new test run
 */
export declare const AddRunPayloadSchema: z.ZodObject<{
    suite_id: z.ZodOptional<z.ZodNumber>;
    name: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    milestone_id: z.ZodOptional<z.ZodNumber>;
    assignedto_id: z.ZodOptional<z.ZodNumber>;
    include_all: z.ZodOptional<z.ZodBoolean>;
    case_ids: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
}, "strip", z.ZodTypeAny, {
    name: string;
    description?: string | undefined;
    suite_id?: number | undefined;
    case_ids?: number[] | undefined;
    milestone_id?: number | undefined;
    include_all?: boolean | undefined;
    assignedto_id?: number | undefined;
}, {
    name: string;
    description?: string | undefined;
    suite_id?: number | undefined;
    case_ids?: number[] | undefined;
    milestone_id?: number | undefined;
    include_all?: boolean | undefined;
    assignedto_id?: number | undefined;
}>;
export type AddRunPayload = z.infer<typeof AddRunPayloadSchema>;
/**
 * Payload schema for adding a test result
 */
export declare const AddResultPayloadSchema: z.ZodObject<{
    status_id: z.ZodNumber;
    comment: z.ZodOptional<z.ZodString>;
    version: z.ZodOptional<z.ZodString>;
    elapsed: z.ZodOptional<z.ZodString>;
    defects: z.ZodOptional<z.ZodString>;
    assignedto_id: z.ZodOptional<z.ZodNumber>;
    custom_fields: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
}, "strip", z.ZodTypeAny, {
    status_id: number;
    assignedto_id?: number | undefined;
    comment?: string | undefined;
    defects?: string | undefined;
    version?: string | undefined;
    elapsed?: string | undefined;
    custom_fields?: Record<string, unknown> | undefined;
}, {
    status_id: number;
    assignedto_id?: number | undefined;
    comment?: string | undefined;
    defects?: string | undefined;
    version?: string | undefined;
    elapsed?: string | undefined;
    custom_fields?: Record<string, unknown> | undefined;
}>;
export type AddResultPayload = z.infer<typeof AddResultPayloadSchema>;
/**
 * Paginated response schema
 */
export declare const PaginatedResponseSchema: z.ZodObject<{
    offset: z.ZodNumber;
    limit: z.ZodNumber;
    size: z.ZodNumber;
    _links: z.ZodObject<{
        next: z.ZodOptional<z.ZodString>;
        prev: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        next?: string | undefined;
        prev?: string | undefined;
    }, {
        next?: string | undefined;
        prev?: string | undefined;
    }>;
    items: z.ZodArray<z.ZodAny, "many">;
}, "strip", z.ZodTypeAny, {
    offset: number;
    limit: number;
    size: number;
    _links: {
        next?: string | undefined;
        prev?: string | undefined;
    };
    items: any[];
}, {
    offset: number;
    limit: number;
    size: number;
    _links: {
        next?: string | undefined;
        prev?: string | undefined;
    };
    items: any[];
}>;
export type PaginatedResponse<T> = Omit<z.infer<typeof PaginatedResponseSchema>, "items"> & {
    items: T[];
};
