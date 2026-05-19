import { z } from "zod";
export declare const getResultsSchema: {
    testId: z.ZodNumber;
    limit: z.ZodOptional<z.ZodNumber>;
    offset: z.ZodOptional<z.ZodNumber>;
    statusId: z.ZodOptional<z.ZodString>;
    defectsFilter: z.ZodOptional<z.ZodString>;
};
export declare const getResultsForCaseSchema: {
    runId: z.ZodNumber;
    caseId: z.ZodNumber;
    limit: z.ZodOptional<z.ZodNumber>;
    offset: z.ZodOptional<z.ZodNumber>;
    statusId: z.ZodOptional<z.ZodString>;
    defectsFilter: z.ZodOptional<z.ZodString>;
};
export declare const getResultsForRunSchema: {
    runId: z.ZodNumber;
    limit: z.ZodOptional<z.ZodNumber>;
    offset: z.ZodOptional<z.ZodNumber>;
    statusId: z.ZodOptional<z.ZodString>;
    defectsFilter: z.ZodOptional<z.ZodString>;
};
export declare const addResultSchema: {
    testId: z.ZodNumber;
    statusId: z.ZodOptional<z.ZodNumber>;
    comment: z.ZodOptional<z.ZodString>;
    defects: z.ZodOptional<z.ZodString>;
    assignedtoId: z.ZodOptional<z.ZodNumber>;
    version: z.ZodOptional<z.ZodString>;
    elapsed: z.ZodOptional<z.ZodString>;
};
export declare const addResultForCaseSchema: {
    runId: z.ZodNumber;
    caseId: z.ZodNumber;
    statusId: z.ZodOptional<z.ZodNumber>;
    comment: z.ZodOptional<z.ZodString>;
    defects: z.ZodOptional<z.ZodString>;
    assignedtoId: z.ZodOptional<z.ZodNumber>;
    version: z.ZodOptional<z.ZodString>;
    elapsed: z.ZodOptional<z.ZodString>;
};
export declare const addResultsSchema: {
    runId: z.ZodNumber;
    results: z.ZodArray<z.ZodObject<{
        testId: z.ZodNumber;
        statusId: z.ZodOptional<z.ZodNumber>;
        comment: z.ZodOptional<z.ZodString>;
        defects: z.ZodOptional<z.ZodString>;
        assignedtoId: z.ZodOptional<z.ZodNumber>;
        version: z.ZodOptional<z.ZodString>;
        elapsed: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        testId: number;
        assignedtoId?: number | undefined;
        statusId?: number | undefined;
        comment?: string | undefined;
        defects?: string | undefined;
        version?: string | undefined;
        elapsed?: string | undefined;
    }, {
        testId: number;
        assignedtoId?: number | undefined;
        statusId?: number | undefined;
        comment?: string | undefined;
        defects?: string | undefined;
        version?: string | undefined;
        elapsed?: string | undefined;
    }>, "many">;
};
export declare const addResultsForCasesSchema: {
    runId: z.ZodNumber;
    results: z.ZodArray<z.ZodObject<{
        caseId: z.ZodNumber;
        statusId: z.ZodOptional<z.ZodNumber>;
        comment: z.ZodOptional<z.ZodString>;
        defects: z.ZodOptional<z.ZodString>;
        assignedtoId: z.ZodOptional<z.ZodNumber>;
        version: z.ZodOptional<z.ZodString>;
        elapsed: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        caseId: number;
        assignedtoId?: number | undefined;
        statusId?: number | undefined;
        comment?: string | undefined;
        defects?: string | undefined;
        version?: string | undefined;
        elapsed?: string | undefined;
    }, {
        caseId: number;
        assignedtoId?: number | undefined;
        statusId?: number | undefined;
        comment?: string | undefined;
        defects?: string | undefined;
        version?: string | undefined;
        elapsed?: string | undefined;
    }>, "many">;
};
export declare const GetResultsInput: z.ZodObject<{
    testId: z.ZodNumber;
    limit: z.ZodOptional<z.ZodNumber>;
    offset: z.ZodOptional<z.ZodNumber>;
    statusId: z.ZodOptional<z.ZodString>;
    defectsFilter: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    testId: number;
    offset?: number | undefined;
    limit?: number | undefined;
    statusId?: string | undefined;
    defectsFilter?: string | undefined;
}, {
    testId: number;
    offset?: number | undefined;
    limit?: number | undefined;
    statusId?: string | undefined;
    defectsFilter?: string | undefined;
}>;
export declare const GetResultsForCaseInput: z.ZodObject<{
    runId: z.ZodNumber;
    caseId: z.ZodNumber;
    limit: z.ZodOptional<z.ZodNumber>;
    offset: z.ZodOptional<z.ZodNumber>;
    statusId: z.ZodOptional<z.ZodString>;
    defectsFilter: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    caseId: number;
    runId: number;
    offset?: number | undefined;
    limit?: number | undefined;
    statusId?: string | undefined;
    defectsFilter?: string | undefined;
}, {
    caseId: number;
    runId: number;
    offset?: number | undefined;
    limit?: number | undefined;
    statusId?: string | undefined;
    defectsFilter?: string | undefined;
}>;
export declare const GetResultsForRunInput: z.ZodObject<{
    runId: z.ZodNumber;
    limit: z.ZodOptional<z.ZodNumber>;
    offset: z.ZodOptional<z.ZodNumber>;
    statusId: z.ZodOptional<z.ZodString>;
    defectsFilter: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    runId: number;
    offset?: number | undefined;
    limit?: number | undefined;
    statusId?: string | undefined;
    defectsFilter?: string | undefined;
}, {
    runId: number;
    offset?: number | undefined;
    limit?: number | undefined;
    statusId?: string | undefined;
    defectsFilter?: string | undefined;
}>;
export declare const AddResultInput: z.ZodObject<{
    testId: z.ZodNumber;
    statusId: z.ZodOptional<z.ZodNumber>;
    comment: z.ZodOptional<z.ZodString>;
    defects: z.ZodOptional<z.ZodString>;
    assignedtoId: z.ZodOptional<z.ZodNumber>;
    version: z.ZodOptional<z.ZodString>;
    elapsed: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    testId: number;
    assignedtoId?: number | undefined;
    statusId?: number | undefined;
    comment?: string | undefined;
    defects?: string | undefined;
    version?: string | undefined;
    elapsed?: string | undefined;
}, {
    testId: number;
    assignedtoId?: number | undefined;
    statusId?: number | undefined;
    comment?: string | undefined;
    defects?: string | undefined;
    version?: string | undefined;
    elapsed?: string | undefined;
}>;
export declare const AddResultForCaseInput: z.ZodObject<{
    runId: z.ZodNumber;
    caseId: z.ZodNumber;
    statusId: z.ZodOptional<z.ZodNumber>;
    comment: z.ZodOptional<z.ZodString>;
    defects: z.ZodOptional<z.ZodString>;
    assignedtoId: z.ZodOptional<z.ZodNumber>;
    version: z.ZodOptional<z.ZodString>;
    elapsed: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    caseId: number;
    runId: number;
    assignedtoId?: number | undefined;
    statusId?: number | undefined;
    comment?: string | undefined;
    defects?: string | undefined;
    version?: string | undefined;
    elapsed?: string | undefined;
}, {
    caseId: number;
    runId: number;
    assignedtoId?: number | undefined;
    statusId?: number | undefined;
    comment?: string | undefined;
    defects?: string | undefined;
    version?: string | undefined;
    elapsed?: string | undefined;
}>;
export declare const AddResultsInput: z.ZodObject<{
    runId: z.ZodNumber;
    results: z.ZodArray<z.ZodObject<{
        testId: z.ZodNumber;
        statusId: z.ZodOptional<z.ZodNumber>;
        comment: z.ZodOptional<z.ZodString>;
        defects: z.ZodOptional<z.ZodString>;
        assignedtoId: z.ZodOptional<z.ZodNumber>;
        version: z.ZodOptional<z.ZodString>;
        elapsed: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        testId: number;
        assignedtoId?: number | undefined;
        statusId?: number | undefined;
        comment?: string | undefined;
        defects?: string | undefined;
        version?: string | undefined;
        elapsed?: string | undefined;
    }, {
        testId: number;
        assignedtoId?: number | undefined;
        statusId?: number | undefined;
        comment?: string | undefined;
        defects?: string | undefined;
        version?: string | undefined;
        elapsed?: string | undefined;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    runId: number;
    results: {
        testId: number;
        assignedtoId?: number | undefined;
        statusId?: number | undefined;
        comment?: string | undefined;
        defects?: string | undefined;
        version?: string | undefined;
        elapsed?: string | undefined;
    }[];
}, {
    runId: number;
    results: {
        testId: number;
        assignedtoId?: number | undefined;
        statusId?: number | undefined;
        comment?: string | undefined;
        defects?: string | undefined;
        version?: string | undefined;
        elapsed?: string | undefined;
    }[];
}>;
export declare const AddResultsForCasesInput: z.ZodObject<{
    runId: z.ZodNumber;
    results: z.ZodArray<z.ZodObject<{
        caseId: z.ZodNumber;
        statusId: z.ZodOptional<z.ZodNumber>;
        comment: z.ZodOptional<z.ZodString>;
        defects: z.ZodOptional<z.ZodString>;
        assignedtoId: z.ZodOptional<z.ZodNumber>;
        version: z.ZodOptional<z.ZodString>;
        elapsed: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        caseId: number;
        assignedtoId?: number | undefined;
        statusId?: number | undefined;
        comment?: string | undefined;
        defects?: string | undefined;
        version?: string | undefined;
        elapsed?: string | undefined;
    }, {
        caseId: number;
        assignedtoId?: number | undefined;
        statusId?: number | undefined;
        comment?: string | undefined;
        defects?: string | undefined;
        version?: string | undefined;
        elapsed?: string | undefined;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    runId: number;
    results: {
        caseId: number;
        assignedtoId?: number | undefined;
        statusId?: number | undefined;
        comment?: string | undefined;
        defects?: string | undefined;
        version?: string | undefined;
        elapsed?: string | undefined;
    }[];
}, {
    runId: number;
    results: {
        caseId: number;
        assignedtoId?: number | undefined;
        statusId?: number | undefined;
        comment?: string | undefined;
        defects?: string | undefined;
        version?: string | undefined;
        elapsed?: string | undefined;
    }[];
}>;
export type GetResultsInputType = z.infer<typeof GetResultsInput>;
export type GetResultsForCaseInputType = z.infer<typeof GetResultsForCaseInput>;
export type GetResultsForRunInputType = z.infer<typeof GetResultsForRunInput>;
export type AddResultInputType = z.infer<typeof AddResultInput>;
export type AddResultForCaseInputType = z.infer<typeof AddResultForCaseInput>;
export type AddResultsInputType = z.infer<typeof AddResultsInput>;
export type AddResultsForCasesInputType = z.infer<typeof AddResultsForCasesInput>;
/**
 * TestRail API Response for Step Result
 */
export declare const TestRailStepResultSchema: z.ZodObject<{
    status_id: z.ZodNumber;
    content: z.ZodString;
    expected: z.ZodString;
    actual: z.ZodString;
}, "strip", z.ZodTypeAny, {
    expected: string;
    content: string;
    status_id: number;
    actual: string;
}, {
    expected: string;
    content: string;
    status_id: number;
    actual: string;
}>;
export type TestRailStepResult = z.infer<typeof TestRailStepResultSchema>;
/**
 * TestRail API Response for Result
 */
export declare const TestRailResultSchema: z.ZodObject<{
    id: z.ZodNumber;
    test_id: z.ZodNumber;
    status_id: z.ZodNumber;
    created_by: z.ZodNumber;
    created_on: z.ZodNumber;
    assignedto_id: z.ZodNumber;
    comment: z.ZodString;
    version: z.ZodString;
    elapsed: z.ZodString;
    defects: z.ZodString;
    custom_step_results: z.ZodOptional<z.ZodArray<z.ZodObject<{
        status_id: z.ZodNumber;
        content: z.ZodString;
        expected: z.ZodString;
        actual: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        expected: string;
        content: string;
        status_id: number;
        actual: string;
    }, {
        expected: string;
        content: string;
        status_id: number;
        actual: string;
    }>, "many">>;
    custom_fields: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
}, "strip", z.ZodTypeAny, {
    id: number;
    created_by: number;
    created_on: number;
    status_id: number;
    assignedto_id: number;
    comment: string;
    defects: string;
    version: string;
    elapsed: string;
    test_id: number;
    custom_step_results?: {
        expected: string;
        content: string;
        status_id: number;
        actual: string;
    }[] | undefined;
    custom_fields?: Record<string, unknown> | undefined;
}, {
    id: number;
    created_by: number;
    created_on: number;
    status_id: number;
    assignedto_id: number;
    comment: string;
    defects: string;
    version: string;
    elapsed: string;
    test_id: number;
    custom_step_results?: {
        expected: string;
        content: string;
        status_id: number;
        actual: string;
    }[] | undefined;
    custom_fields?: Record<string, unknown> | undefined;
}>;
export type TestRailResult = z.infer<typeof TestRailResultSchema>;
