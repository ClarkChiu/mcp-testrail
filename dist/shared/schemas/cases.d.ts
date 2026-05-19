import { z } from "zod";
export declare const getTestCaseSchema: z.ZodObject<{
    caseId: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    caseId: number;
}, {
    caseId: number;
}>;
export declare const getTestCasesSchema: z.ZodObject<{
    projectId: z.ZodNumber;
    suiteId: z.ZodNumber;
    createdBy: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
    filter: z.ZodOptional<z.ZodString>;
    limit: z.ZodDefault<z.ZodOptional<z.ZodNumber>>;
    milestoneId: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
    offset: z.ZodDefault<z.ZodOptional<z.ZodNumber>>;
    priorityId: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
    refs: z.ZodOptional<z.ZodString>;
    sectionId: z.ZodOptional<z.ZodNumber>;
    templateId: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
    typeId: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
    updatedBy: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
    labelId: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
}, "strip", z.ZodTypeAny, {
    projectId: number;
    offset: number;
    limit: number;
    suiteId: number;
    filter?: string | undefined;
    sectionId?: number | undefined;
    refs?: string | undefined;
    createdBy?: number[] | undefined;
    updatedBy?: number[] | undefined;
    milestoneId?: number[] | undefined;
    priorityId?: number[] | undefined;
    templateId?: number[] | undefined;
    typeId?: number[] | undefined;
    labelId?: number[] | undefined;
}, {
    projectId: number;
    suiteId: number;
    filter?: string | undefined;
    offset?: number | undefined;
    limit?: number | undefined;
    sectionId?: number | undefined;
    refs?: string | undefined;
    createdBy?: number[] | undefined;
    updatedBy?: number[] | undefined;
    milestoneId?: number[] | undefined;
    priorityId?: number[] | undefined;
    templateId?: number[] | undefined;
    typeId?: number[] | undefined;
    labelId?: number[] | undefined;
}>;
export declare const addTestCaseSchema: z.ZodObject<{
    sectionId: z.ZodNumber;
    title: z.ZodString;
    typeId: z.ZodOptional<z.ZodNumber>;
    priorityId: z.ZodOptional<z.ZodNumber>;
    estimate: z.ZodOptional<z.ZodString>;
    milestoneId: z.ZodOptional<z.ZodNumber>;
    refs: z.ZodOptional<z.ZodString>;
    templateId: z.ZodOptional<z.ZodNumber>;
    customPrerequisites: z.ZodOptional<z.ZodString>;
    customSteps: z.ZodOptional<z.ZodString>;
    customExpected: z.ZodOptional<z.ZodString>;
    customStepsSeparated: z.ZodOptional<z.ZodArray<z.ZodObject<{
        content: z.ZodString;
        expected: z.ZodString;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        content: z.ZodString;
        expected: z.ZodString;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        content: z.ZodString;
        expected: z.ZodString;
    }, z.ZodTypeAny, "passthrough">>, "many">>;
    customFields: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
}, "strip", z.ZodTypeAny, {
    sectionId: number;
    title: string;
    refs?: string | undefined;
    milestoneId?: number | undefined;
    priorityId?: number | undefined;
    templateId?: number | undefined;
    typeId?: number | undefined;
    estimate?: string | undefined;
    customPrerequisites?: string | undefined;
    customSteps?: string | undefined;
    customExpected?: string | undefined;
    customStepsSeparated?: z.objectOutputType<{
        content: z.ZodString;
        expected: z.ZodString;
    }, z.ZodTypeAny, "passthrough">[] | undefined;
    customFields?: Record<string, unknown> | undefined;
}, {
    sectionId: number;
    title: string;
    refs?: string | undefined;
    milestoneId?: number | undefined;
    priorityId?: number | undefined;
    templateId?: number | undefined;
    typeId?: number | undefined;
    estimate?: string | undefined;
    customPrerequisites?: string | undefined;
    customSteps?: string | undefined;
    customExpected?: string | undefined;
    customStepsSeparated?: z.objectInputType<{
        content: z.ZodString;
        expected: z.ZodString;
    }, z.ZodTypeAny, "passthrough">[] | undefined;
    customFields?: Record<string, unknown> | undefined;
}>;
export declare const updateTestCaseSchema: z.ZodObject<{
    caseId: z.ZodNumber;
    title: z.ZodOptional<z.ZodString>;
    typeId: z.ZodOptional<z.ZodNumber>;
    priorityId: z.ZodOptional<z.ZodNumber>;
    estimate: z.ZodOptional<z.ZodString>;
    milestoneId: z.ZodOptional<z.ZodNumber>;
    refs: z.ZodOptional<z.ZodString>;
    templateId: z.ZodOptional<z.ZodNumber>;
    customPrerequisites: z.ZodOptional<z.ZodString>;
    customSteps: z.ZodOptional<z.ZodString>;
    customExpected: z.ZodOptional<z.ZodString>;
    customStepsSeparated: z.ZodOptional<z.ZodArray<z.ZodObject<{
        content: z.ZodString;
        expected: z.ZodString;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        content: z.ZodString;
        expected: z.ZodString;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        content: z.ZodString;
        expected: z.ZodString;
    }, z.ZodTypeAny, "passthrough">>, "many">>;
    customFields: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
}, "strip", z.ZodTypeAny, {
    caseId: number;
    refs?: string | undefined;
    title?: string | undefined;
    milestoneId?: number | undefined;
    priorityId?: number | undefined;
    templateId?: number | undefined;
    typeId?: number | undefined;
    estimate?: string | undefined;
    customPrerequisites?: string | undefined;
    customSteps?: string | undefined;
    customExpected?: string | undefined;
    customStepsSeparated?: z.objectOutputType<{
        content: z.ZodString;
        expected: z.ZodString;
    }, z.ZodTypeAny, "passthrough">[] | undefined;
    customFields?: Record<string, unknown> | undefined;
}, {
    caseId: number;
    refs?: string | undefined;
    title?: string | undefined;
    milestoneId?: number | undefined;
    priorityId?: number | undefined;
    templateId?: number | undefined;
    typeId?: number | undefined;
    estimate?: string | undefined;
    customPrerequisites?: string | undefined;
    customSteps?: string | undefined;
    customExpected?: string | undefined;
    customStepsSeparated?: z.objectInputType<{
        content: z.ZodString;
        expected: z.ZodString;
    }, z.ZodTypeAny, "passthrough">[] | undefined;
    customFields?: Record<string, unknown> | undefined;
}>;
export declare const deleteTestCaseSchema: z.ZodObject<{
    caseId: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    caseId: number;
}, {
    caseId: number;
}>;
export declare const getTestCaseTypesSchema: z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>;
export declare const getTestCaseFieldsSchema: z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>;
export declare const copyTestCasesToSectionSchema: z.ZodObject<{
    caseIds: z.ZodArray<z.ZodNumber, "many">;
    sectionId: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    sectionId: number;
    caseIds: number[];
}, {
    sectionId: number;
    caseIds: number[];
}>;
export declare const moveTestCasesToSectionSchema: z.ZodObject<{
    caseIds: z.ZodArray<z.ZodNumber, "many">;
    sectionId: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    sectionId: number;
    caseIds: number[];
}, {
    sectionId: number;
    caseIds: number[];
}>;
export declare const getTestCaseHistorySchema: z.ZodObject<{
    caseId: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    caseId: number;
}, {
    caseId: number;
}>;
export declare const updateTestCasesSchema: z.ZodObject<{
    projectId: z.ZodNumber;
    suiteId: z.ZodNumber;
    caseIds: z.ZodArray<z.ZodNumber, "many">;
    title: z.ZodOptional<z.ZodString>;
    typeId: z.ZodOptional<z.ZodNumber>;
    priorityId: z.ZodOptional<z.ZodNumber>;
    estimate: z.ZodOptional<z.ZodString>;
    milestoneId: z.ZodOptional<z.ZodNumber>;
    refs: z.ZodOptional<z.ZodString>;
    templateId: z.ZodOptional<z.ZodNumber>;
    customPrerequisites: z.ZodOptional<z.ZodString>;
    customSteps: z.ZodOptional<z.ZodString>;
    customExpected: z.ZodOptional<z.ZodString>;
    customStepsSeparated: z.ZodOptional<z.ZodArray<z.ZodObject<{
        content: z.ZodString;
        expected: z.ZodString;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        content: z.ZodString;
        expected: z.ZodString;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        content: z.ZodString;
        expected: z.ZodString;
    }, z.ZodTypeAny, "passthrough">>, "many">>;
    customFields: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
}, "strip", z.ZodTypeAny, {
    projectId: number;
    suiteId: number;
    caseIds: number[];
    refs?: string | undefined;
    title?: string | undefined;
    milestoneId?: number | undefined;
    priorityId?: number | undefined;
    templateId?: number | undefined;
    typeId?: number | undefined;
    estimate?: string | undefined;
    customPrerequisites?: string | undefined;
    customSteps?: string | undefined;
    customExpected?: string | undefined;
    customStepsSeparated?: z.objectOutputType<{
        content: z.ZodString;
        expected: z.ZodString;
    }, z.ZodTypeAny, "passthrough">[] | undefined;
    customFields?: Record<string, unknown> | undefined;
}, {
    projectId: number;
    suiteId: number;
    caseIds: number[];
    refs?: string | undefined;
    title?: string | undefined;
    milestoneId?: number | undefined;
    priorityId?: number | undefined;
    templateId?: number | undefined;
    typeId?: number | undefined;
    estimate?: string | undefined;
    customPrerequisites?: string | undefined;
    customSteps?: string | undefined;
    customExpected?: string | undefined;
    customStepsSeparated?: z.objectInputType<{
        content: z.ZodString;
        expected: z.ZodString;
    }, z.ZodTypeAny, "passthrough">[] | undefined;
    customFields?: Record<string, unknown> | undefined;
}>;
export declare const getTestCaseInputSchema: z.ZodObject<{
    caseId: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    caseId: number;
}, {
    caseId: number;
}>;
export declare const getTestCasesInputSchema: z.ZodObject<{
    projectId: z.ZodNumber;
    suiteId: z.ZodNumber;
    createdBy: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
    filter: z.ZodOptional<z.ZodString>;
    limit: z.ZodDefault<z.ZodOptional<z.ZodNumber>>;
    milestoneId: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
    offset: z.ZodDefault<z.ZodOptional<z.ZodNumber>>;
    priorityId: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
    refs: z.ZodOptional<z.ZodString>;
    sectionId: z.ZodOptional<z.ZodNumber>;
    templateId: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
    typeId: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
    updatedBy: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
    labelId: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
}, "strip", z.ZodTypeAny, {
    projectId: number;
    offset: number;
    limit: number;
    suiteId: number;
    filter?: string | undefined;
    sectionId?: number | undefined;
    refs?: string | undefined;
    createdBy?: number[] | undefined;
    updatedBy?: number[] | undefined;
    milestoneId?: number[] | undefined;
    priorityId?: number[] | undefined;
    templateId?: number[] | undefined;
    typeId?: number[] | undefined;
    labelId?: number[] | undefined;
}, {
    projectId: number;
    suiteId: number;
    filter?: string | undefined;
    offset?: number | undefined;
    limit?: number | undefined;
    sectionId?: number | undefined;
    refs?: string | undefined;
    createdBy?: number[] | undefined;
    updatedBy?: number[] | undefined;
    milestoneId?: number[] | undefined;
    priorityId?: number[] | undefined;
    templateId?: number[] | undefined;
    typeId?: number[] | undefined;
    labelId?: number[] | undefined;
}>;
export declare const addTestCaseInputSchema: z.ZodObject<{
    sectionId: z.ZodNumber;
    title: z.ZodString;
    typeId: z.ZodOptional<z.ZodNumber>;
    priorityId: z.ZodOptional<z.ZodNumber>;
    estimate: z.ZodOptional<z.ZodString>;
    milestoneId: z.ZodOptional<z.ZodNumber>;
    refs: z.ZodOptional<z.ZodString>;
    templateId: z.ZodOptional<z.ZodNumber>;
    customPrerequisites: z.ZodOptional<z.ZodString>;
    customSteps: z.ZodOptional<z.ZodString>;
    customExpected: z.ZodOptional<z.ZodString>;
    customStepsSeparated: z.ZodOptional<z.ZodArray<z.ZodObject<{
        content: z.ZodString;
        expected: z.ZodString;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        content: z.ZodString;
        expected: z.ZodString;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        content: z.ZodString;
        expected: z.ZodString;
    }, z.ZodTypeAny, "passthrough">>, "many">>;
    customFields: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
}, "strip", z.ZodTypeAny, {
    sectionId: number;
    title: string;
    refs?: string | undefined;
    milestoneId?: number | undefined;
    priorityId?: number | undefined;
    templateId?: number | undefined;
    typeId?: number | undefined;
    estimate?: string | undefined;
    customPrerequisites?: string | undefined;
    customSteps?: string | undefined;
    customExpected?: string | undefined;
    customStepsSeparated?: z.objectOutputType<{
        content: z.ZodString;
        expected: z.ZodString;
    }, z.ZodTypeAny, "passthrough">[] | undefined;
    customFields?: Record<string, unknown> | undefined;
}, {
    sectionId: number;
    title: string;
    refs?: string | undefined;
    milestoneId?: number | undefined;
    priorityId?: number | undefined;
    templateId?: number | undefined;
    typeId?: number | undefined;
    estimate?: string | undefined;
    customPrerequisites?: string | undefined;
    customSteps?: string | undefined;
    customExpected?: string | undefined;
    customStepsSeparated?: z.objectInputType<{
        content: z.ZodString;
        expected: z.ZodString;
    }, z.ZodTypeAny, "passthrough">[] | undefined;
    customFields?: Record<string, unknown> | undefined;
}>;
export declare const updateTestCaseInputSchema: z.ZodObject<{
    caseId: z.ZodNumber;
    title: z.ZodOptional<z.ZodString>;
    typeId: z.ZodOptional<z.ZodNumber>;
    priorityId: z.ZodOptional<z.ZodNumber>;
    estimate: z.ZodOptional<z.ZodString>;
    milestoneId: z.ZodOptional<z.ZodNumber>;
    refs: z.ZodOptional<z.ZodString>;
    templateId: z.ZodOptional<z.ZodNumber>;
    customPrerequisites: z.ZodOptional<z.ZodString>;
    customSteps: z.ZodOptional<z.ZodString>;
    customExpected: z.ZodOptional<z.ZodString>;
    customStepsSeparated: z.ZodOptional<z.ZodArray<z.ZodObject<{
        content: z.ZodString;
        expected: z.ZodString;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        content: z.ZodString;
        expected: z.ZodString;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        content: z.ZodString;
        expected: z.ZodString;
    }, z.ZodTypeAny, "passthrough">>, "many">>;
    customFields: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
}, "strip", z.ZodTypeAny, {
    caseId: number;
    refs?: string | undefined;
    title?: string | undefined;
    milestoneId?: number | undefined;
    priorityId?: number | undefined;
    templateId?: number | undefined;
    typeId?: number | undefined;
    estimate?: string | undefined;
    customPrerequisites?: string | undefined;
    customSteps?: string | undefined;
    customExpected?: string | undefined;
    customStepsSeparated?: z.objectOutputType<{
        content: z.ZodString;
        expected: z.ZodString;
    }, z.ZodTypeAny, "passthrough">[] | undefined;
    customFields?: Record<string, unknown> | undefined;
}, {
    caseId: number;
    refs?: string | undefined;
    title?: string | undefined;
    milestoneId?: number | undefined;
    priorityId?: number | undefined;
    templateId?: number | undefined;
    typeId?: number | undefined;
    estimate?: string | undefined;
    customPrerequisites?: string | undefined;
    customSteps?: string | undefined;
    customExpected?: string | undefined;
    customStepsSeparated?: z.objectInputType<{
        content: z.ZodString;
        expected: z.ZodString;
    }, z.ZodTypeAny, "passthrough">[] | undefined;
    customFields?: Record<string, unknown> | undefined;
}>;
export declare const deleteTestCaseInputSchema: z.ZodObject<{
    caseId: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    caseId: number;
}, {
    caseId: number;
}>;
export declare const getTestCaseTypesInputSchema: z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>;
export declare const getTestCaseFieldsInputSchema: z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>;
export declare const copyTestCasesToSectionInputSchema: z.ZodObject<{
    caseIds: z.ZodArray<z.ZodNumber, "many">;
    sectionId: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    sectionId: number;
    caseIds: number[];
}, {
    sectionId: number;
    caseIds: number[];
}>;
export declare const moveTestCasesToSectionInputSchema: z.ZodObject<{
    caseIds: z.ZodArray<z.ZodNumber, "many">;
    sectionId: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    sectionId: number;
    caseIds: number[];
}, {
    sectionId: number;
    caseIds: number[];
}>;
export declare const getTestCaseHistoryInputSchema: z.ZodObject<{
    caseId: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    caseId: number;
}, {
    caseId: number;
}>;
export declare const updateTestCasesInputSchema: z.ZodObject<{
    projectId: z.ZodNumber;
    suiteId: z.ZodNumber;
    caseIds: z.ZodArray<z.ZodNumber, "many">;
    title: z.ZodOptional<z.ZodString>;
    typeId: z.ZodOptional<z.ZodNumber>;
    priorityId: z.ZodOptional<z.ZodNumber>;
    estimate: z.ZodOptional<z.ZodString>;
    milestoneId: z.ZodOptional<z.ZodNumber>;
    refs: z.ZodOptional<z.ZodString>;
    templateId: z.ZodOptional<z.ZodNumber>;
    customPrerequisites: z.ZodOptional<z.ZodString>;
    customSteps: z.ZodOptional<z.ZodString>;
    customExpected: z.ZodOptional<z.ZodString>;
    customStepsSeparated: z.ZodOptional<z.ZodArray<z.ZodObject<{
        content: z.ZodString;
        expected: z.ZodString;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        content: z.ZodString;
        expected: z.ZodString;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        content: z.ZodString;
        expected: z.ZodString;
    }, z.ZodTypeAny, "passthrough">>, "many">>;
    customFields: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
}, "strip", z.ZodTypeAny, {
    projectId: number;
    suiteId: number;
    caseIds: number[];
    refs?: string | undefined;
    title?: string | undefined;
    milestoneId?: number | undefined;
    priorityId?: number | undefined;
    templateId?: number | undefined;
    typeId?: number | undefined;
    estimate?: string | undefined;
    customPrerequisites?: string | undefined;
    customSteps?: string | undefined;
    customExpected?: string | undefined;
    customStepsSeparated?: z.objectOutputType<{
        content: z.ZodString;
        expected: z.ZodString;
    }, z.ZodTypeAny, "passthrough">[] | undefined;
    customFields?: Record<string, unknown> | undefined;
}, {
    projectId: number;
    suiteId: number;
    caseIds: number[];
    refs?: string | undefined;
    title?: string | undefined;
    milestoneId?: number | undefined;
    priorityId?: number | undefined;
    templateId?: number | undefined;
    typeId?: number | undefined;
    estimate?: string | undefined;
    customPrerequisites?: string | undefined;
    customSteps?: string | undefined;
    customExpected?: string | undefined;
    customStepsSeparated?: z.objectInputType<{
        content: z.ZodString;
        expected: z.ZodString;
    }, z.ZodTypeAny, "passthrough">[] | undefined;
    customFields?: Record<string, unknown> | undefined;
}>;
export type GetTestCaseInput = z.infer<typeof getTestCaseInputSchema>;
export type GetTestCasesInput = z.infer<typeof getTestCasesInputSchema>;
export type AddTestCaseInput = z.infer<typeof addTestCaseInputSchema>;
export type UpdateTestCaseInput = z.infer<typeof updateTestCaseInputSchema>;
export type DeleteTestCaseInput = z.infer<typeof deleteTestCaseInputSchema>;
export type GetTestCaseTypesInput = z.infer<typeof getTestCaseTypesInputSchema>;
export type GetTestCaseFieldsInput = z.infer<typeof getTestCaseFieldsInputSchema>;
export type CopyTestCasesToSectionInput = z.infer<typeof copyTestCasesToSectionInputSchema>;
export type MoveTestCasesToSectionInput = z.infer<typeof moveTestCasesToSectionInputSchema>;
export type GetTestCaseHistoryInput = z.infer<typeof getTestCaseHistoryInputSchema>;
export type UpdateTestCasesInput = z.infer<typeof updateTestCasesInputSchema>;
/**
 * TestRail API Response for Step
 */
export declare const TestRailStepSchema: z.ZodObject<{
    content: z.ZodString;
    expected: z.ZodString;
}, "strip", z.ZodTypeAny, {
    expected: string;
    content: string;
}, {
    expected: string;
    content: string;
}>;
export type TestRailStep = z.infer<typeof TestRailStepSchema>;
/**
 * TestRail API Response for Case
 */
export declare const TestRailCaseSchema: z.ZodObject<{
    id: z.ZodNumber;
    title: z.ZodString;
    section_id: z.ZodNumber;
    template_id: z.ZodNumber;
    type_id: z.ZodNumber;
    priority_id: z.ZodNumber;
    milestone_id: z.ZodNullable<z.ZodNumber>;
    refs: z.ZodNullable<z.ZodString>;
    created_by: z.ZodNumber;
    created_on: z.ZodNumber;
    updated_by: z.ZodNullable<z.ZodNumber>;
    updated_on: z.ZodNullable<z.ZodNumber>;
    estimate: z.ZodNullable<z.ZodString>;
    estimate_forecast: z.ZodNullable<z.ZodString>;
    suite_id: z.ZodNumber;
    display_order: z.ZodNumber;
    is_deleted: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    status_id: z.ZodOptional<z.ZodNumber>;
    custom_preconds: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    custom_steps: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    custom_expected: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    id: number;
    suite_id: number;
    display_order: number;
    refs: string | null;
    title: string;
    created_by: number;
    created_on: number;
    updated_by: number | null;
    updated_on: number | null;
    estimate: string | null;
    section_id: number;
    template_id: number;
    type_id: number;
    priority_id: number;
    milestone_id: number | null;
    estimate_forecast: string | null;
    is_deleted?: boolean | undefined;
    status_id?: number | undefined;
    custom_preconds?: string | null | undefined;
    custom_steps?: string | null | undefined;
    custom_expected?: string | null | undefined;
}, {
    id: number;
    suite_id: number;
    display_order: number;
    refs: string | null;
    title: string;
    created_by: number;
    created_on: number;
    updated_by: number | null;
    updated_on: number | null;
    estimate: string | null;
    section_id: number;
    template_id: number;
    type_id: number;
    priority_id: number;
    milestone_id: number | null;
    estimate_forecast: string | null;
    is_deleted?: boolean | undefined;
    status_id?: number | undefined;
    custom_preconds?: string | null | undefined;
    custom_steps?: string | null | undefined;
    custom_expected?: string | null | undefined;
}>;
export type TestRailCase = z.infer<typeof TestRailCaseSchema>;
/**
 * TestRail API Response for Case Type
 */
export declare const TestRailCaseTypeSchema: z.ZodObject<{
    id: z.ZodNumber;
    name: z.ZodString;
    is_default: z.ZodBoolean;
}, "strip", z.ZodTypeAny, {
    name: string;
    id: number;
    is_default: boolean;
}, {
    name: string;
    id: number;
    is_default: boolean;
}>;
export type TestRailCaseType = z.infer<typeof TestRailCaseTypeSchema>;
/**
 * TestRail API Response for Case Field Config
 */
export declare const TestRailCaseFieldConfigSchema: z.ZodObject<{
    id: z.ZodString;
    context: z.ZodObject<{
        is_global: z.ZodBoolean;
        project_ids: z.ZodArray<z.ZodNumber, "many">;
    }, "strip", z.ZodTypeAny, {
        is_global: boolean;
        project_ids: number[];
    }, {
        is_global: boolean;
        project_ids: number[];
    }>;
    options: z.ZodObject<{
        default_value: z.ZodString;
        format: z.ZodString;
        is_required: z.ZodBoolean;
        rows: z.ZodString;
        items: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        default_value: string;
        format: string;
        is_required: boolean;
        rows: string;
        items: string;
    }, {
        default_value: string;
        format: string;
        is_required: boolean;
        rows: string;
        items: string;
    }>;
}, "strip", z.ZodTypeAny, {
    options: {
        default_value: string;
        format: string;
        is_required: boolean;
        rows: string;
        items: string;
    };
    id: string;
    context: {
        is_global: boolean;
        project_ids: number[];
    };
}, {
    options: {
        default_value: string;
        format: string;
        is_required: boolean;
        rows: string;
        items: string;
    };
    id: string;
    context: {
        is_global: boolean;
        project_ids: number[];
    };
}>;
export type TestRailCaseFieldConfig = z.infer<typeof TestRailCaseFieldConfigSchema>;
/**
 * TestRail API Response for Case Field
 */
export declare const TestRailCaseFieldSchema: z.ZodObject<{
    id: z.ZodNumber;
    type_id: z.ZodNumber;
    name: z.ZodString;
    system_name: z.ZodString;
    label: z.ZodString;
    description: z.ZodString;
    configs: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        context: z.ZodObject<{
            is_global: z.ZodBoolean;
            project_ids: z.ZodArray<z.ZodNumber, "many">;
        }, "strip", z.ZodTypeAny, {
            is_global: boolean;
            project_ids: number[];
        }, {
            is_global: boolean;
            project_ids: number[];
        }>;
        options: z.ZodObject<{
            default_value: z.ZodString;
            format: z.ZodString;
            is_required: z.ZodBoolean;
            rows: z.ZodString;
            items: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            default_value: string;
            format: string;
            is_required: boolean;
            rows: string;
            items: string;
        }, {
            default_value: string;
            format: string;
            is_required: boolean;
            rows: string;
            items: string;
        }>;
    }, "strip", z.ZodTypeAny, {
        options: {
            default_value: string;
            format: string;
            is_required: boolean;
            rows: string;
            items: string;
        };
        id: string;
        context: {
            is_global: boolean;
            project_ids: number[];
        };
    }, {
        options: {
            default_value: string;
            format: string;
            is_required: boolean;
            rows: string;
            items: string;
        };
        id: string;
        context: {
            is_global: boolean;
            project_ids: number[];
        };
    }>, "many">;
    display_order: z.ZodNumber;
    include_all: z.ZodBoolean;
    template_ids: z.ZodArray<z.ZodNumber, "many">;
    is_active: z.ZodBoolean;
    status_id: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    name: string;
    id: number;
    description: string;
    display_order: number;
    type_id: number;
    status_id: number;
    system_name: string;
    label: string;
    configs: {
        options: {
            default_value: string;
            format: string;
            is_required: boolean;
            rows: string;
            items: string;
        };
        id: string;
        context: {
            is_global: boolean;
            project_ids: number[];
        };
    }[];
    include_all: boolean;
    template_ids: number[];
    is_active: boolean;
}, {
    name: string;
    id: number;
    description: string;
    display_order: number;
    type_id: number;
    status_id: number;
    system_name: string;
    label: string;
    configs: {
        options: {
            default_value: string;
            format: string;
            is_required: boolean;
            rows: string;
            items: string;
        };
        id: string;
        context: {
            is_global: boolean;
            project_ids: number[];
        };
    }[];
    include_all: boolean;
    template_ids: number[];
    is_active: boolean;
}>;
export type TestRailCaseField = z.infer<typeof TestRailCaseFieldSchema>;
/**
 * TestRail API Response for Case History
 */
export declare const TestRailCaseHistorySchema: z.ZodObject<{
    id: z.ZodNumber;
    case_id: z.ZodNumber;
    user_id: z.ZodNumber;
    timestamp: z.ZodNumber;
    changes: z.ZodArray<z.ZodObject<{
        field: z.ZodString;
        old_value: z.ZodNullable<z.ZodString>;
        new_value: z.ZodNullable<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        field: string;
        old_value: string | null;
        new_value: string | null;
    }, {
        field: string;
        old_value: string | null;
        new_value: string | null;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    id: number;
    case_id: number;
    user_id: number;
    timestamp: number;
    changes: {
        field: string;
        old_value: string | null;
        new_value: string | null;
    }[];
}, {
    id: number;
    case_id: number;
    user_id: number;
    timestamp: number;
    changes: {
        field: string;
        old_value: string | null;
        new_value: string | null;
    }[];
}>;
export type TestRailCaseHistory = z.infer<typeof TestRailCaseHistorySchema>;
/**
 * Schema for data when adding a test case via client API
 * Uses .passthrough() to allow any custom fields (custom_*) from TestRail
 */
export declare const addCaseDataSchema: z.ZodObject<{
    title: z.ZodOptional<z.ZodString>;
    type_id: z.ZodOptional<z.ZodNumber>;
    priority_id: z.ZodOptional<z.ZodNumber>;
    template_id: z.ZodOptional<z.ZodNumber>;
    estimate: z.ZodOptional<z.ZodString>;
    milestone_id: z.ZodOptional<z.ZodNumber>;
    refs: z.ZodOptional<z.ZodString>;
    custom_preconds: z.ZodOptional<z.ZodString>;
    custom_steps: z.ZodOptional<z.ZodString>;
    custom_expected: z.ZodOptional<z.ZodString>;
    custom_steps_separated: z.ZodOptional<z.ZodArray<z.ZodObject<{
        content: z.ZodString;
        expected: z.ZodString;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        content: z.ZodString;
        expected: z.ZodString;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        content: z.ZodString;
        expected: z.ZodString;
    }, z.ZodTypeAny, "passthrough">>, "many">>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    title: z.ZodOptional<z.ZodString>;
    type_id: z.ZodOptional<z.ZodNumber>;
    priority_id: z.ZodOptional<z.ZodNumber>;
    template_id: z.ZodOptional<z.ZodNumber>;
    estimate: z.ZodOptional<z.ZodString>;
    milestone_id: z.ZodOptional<z.ZodNumber>;
    refs: z.ZodOptional<z.ZodString>;
    custom_preconds: z.ZodOptional<z.ZodString>;
    custom_steps: z.ZodOptional<z.ZodString>;
    custom_expected: z.ZodOptional<z.ZodString>;
    custom_steps_separated: z.ZodOptional<z.ZodArray<z.ZodObject<{
        content: z.ZodString;
        expected: z.ZodString;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        content: z.ZodString;
        expected: z.ZodString;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        content: z.ZodString;
        expected: z.ZodString;
    }, z.ZodTypeAny, "passthrough">>, "many">>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    title: z.ZodOptional<z.ZodString>;
    type_id: z.ZodOptional<z.ZodNumber>;
    priority_id: z.ZodOptional<z.ZodNumber>;
    template_id: z.ZodOptional<z.ZodNumber>;
    estimate: z.ZodOptional<z.ZodString>;
    milestone_id: z.ZodOptional<z.ZodNumber>;
    refs: z.ZodOptional<z.ZodString>;
    custom_preconds: z.ZodOptional<z.ZodString>;
    custom_steps: z.ZodOptional<z.ZodString>;
    custom_expected: z.ZodOptional<z.ZodString>;
    custom_steps_separated: z.ZodOptional<z.ZodArray<z.ZodObject<{
        content: z.ZodString;
        expected: z.ZodString;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        content: z.ZodString;
        expected: z.ZodString;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        content: z.ZodString;
        expected: z.ZodString;
    }, z.ZodTypeAny, "passthrough">>, "many">>;
}, z.ZodTypeAny, "passthrough">>;
/**
 * Schema for data when updating a test case via client API
 * Uses .passthrough() to allow any custom fields (custom_*) from TestRail
 */
export declare const updateCaseDataSchema: z.ZodObject<{
    title: z.ZodOptional<z.ZodString>;
    type_id: z.ZodOptional<z.ZodNumber>;
    priority_id: z.ZodOptional<z.ZodNumber>;
    template_id: z.ZodOptional<z.ZodNumber>;
    estimate: z.ZodOptional<z.ZodString>;
    milestone_id: z.ZodOptional<z.ZodNumber>;
    refs: z.ZodOptional<z.ZodString>;
    custom_preconds: z.ZodOptional<z.ZodString>;
    custom_steps: z.ZodOptional<z.ZodString>;
    custom_expected: z.ZodOptional<z.ZodString>;
    custom_steps_separated: z.ZodOptional<z.ZodArray<z.ZodObject<{
        content: z.ZodString;
        expected: z.ZodString;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        content: z.ZodString;
        expected: z.ZodString;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        content: z.ZodString;
        expected: z.ZodString;
    }, z.ZodTypeAny, "passthrough">>, "many">>;
}, "passthrough", z.ZodTypeAny, z.objectOutputType<{
    title: z.ZodOptional<z.ZodString>;
    type_id: z.ZodOptional<z.ZodNumber>;
    priority_id: z.ZodOptional<z.ZodNumber>;
    template_id: z.ZodOptional<z.ZodNumber>;
    estimate: z.ZodOptional<z.ZodString>;
    milestone_id: z.ZodOptional<z.ZodNumber>;
    refs: z.ZodOptional<z.ZodString>;
    custom_preconds: z.ZodOptional<z.ZodString>;
    custom_steps: z.ZodOptional<z.ZodString>;
    custom_expected: z.ZodOptional<z.ZodString>;
    custom_steps_separated: z.ZodOptional<z.ZodArray<z.ZodObject<{
        content: z.ZodString;
        expected: z.ZodString;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        content: z.ZodString;
        expected: z.ZodString;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        content: z.ZodString;
        expected: z.ZodString;
    }, z.ZodTypeAny, "passthrough">>, "many">>;
}, z.ZodTypeAny, "passthrough">, z.objectInputType<{
    title: z.ZodOptional<z.ZodString>;
    type_id: z.ZodOptional<z.ZodNumber>;
    priority_id: z.ZodOptional<z.ZodNumber>;
    template_id: z.ZodOptional<z.ZodNumber>;
    estimate: z.ZodOptional<z.ZodString>;
    milestone_id: z.ZodOptional<z.ZodNumber>;
    refs: z.ZodOptional<z.ZodString>;
    custom_preconds: z.ZodOptional<z.ZodString>;
    custom_steps: z.ZodOptional<z.ZodString>;
    custom_expected: z.ZodOptional<z.ZodString>;
    custom_steps_separated: z.ZodOptional<z.ZodArray<z.ZodObject<{
        content: z.ZodString;
        expected: z.ZodString;
    }, "passthrough", z.ZodTypeAny, z.objectOutputType<{
        content: z.ZodString;
        expected: z.ZodString;
    }, z.ZodTypeAny, "passthrough">, z.objectInputType<{
        content: z.ZodString;
        expected: z.ZodString;
    }, z.ZodTypeAny, "passthrough">>, "many">>;
}, z.ZodTypeAny, "passthrough">>;
export type AddCaseData = z.infer<typeof addCaseDataSchema>;
export type UpdateCaseData = z.infer<typeof updateCaseDataSchema>;
export declare const addBddSchema: z.ZodObject<{
    sectionId: z.ZodNumber;
    featureContent: z.ZodString;
}, "strip", z.ZodTypeAny, {
    sectionId: number;
    featureContent: string;
}, {
    sectionId: number;
    featureContent: string;
}>;
export declare const getBddSchema: z.ZodObject<{
    caseId: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    caseId: number;
}, {
    caseId: number;
}>;
