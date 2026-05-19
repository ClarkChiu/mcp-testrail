import { z } from "zod";
export declare const getSectionSchema: {
    sectionId: z.ZodNumber;
};
export declare const getSectionsSchema: {
    projectId: z.ZodNumber;
    suiteId: z.ZodOptional<z.ZodNumber>;
    limit: z.ZodOptional<z.ZodNumber>;
    offset: z.ZodOptional<z.ZodNumber>;
};
export declare const addSectionSchema: {
    projectId: z.ZodNumber;
    name: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    parentId: z.ZodOptional<z.ZodNumber>;
    suiteId: z.ZodOptional<z.ZodNumber>;
};
export declare const moveSectionSchema: {
    sectionId: z.ZodNumber;
    parentId: z.ZodNullable<z.ZodNumber>;
    afterId: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
};
export declare const updateSectionSchema: {
    sectionId: z.ZodNumber;
    name: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
};
export declare const deleteSectionSchema: {
    sectionId: z.ZodNumber;
    soft: z.ZodOptional<z.ZodBoolean>;
};
export declare const GetSectionInput: z.ZodObject<{
    sectionId: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    sectionId: number;
}, {
    sectionId: number;
}>;
export declare const GetSectionsInput: z.ZodObject<{
    projectId: z.ZodNumber;
    suiteId: z.ZodOptional<z.ZodNumber>;
    limit: z.ZodOptional<z.ZodNumber>;
    offset: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    projectId: number;
    offset?: number | undefined;
    limit?: number | undefined;
    suiteId?: number | undefined;
}, {
    projectId: number;
    offset?: number | undefined;
    limit?: number | undefined;
    suiteId?: number | undefined;
}>;
export declare const AddSectionInput: z.ZodObject<{
    projectId: z.ZodNumber;
    name: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    parentId: z.ZodOptional<z.ZodNumber>;
    suiteId: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    projectId: number;
    name: string;
    suiteId?: number | undefined;
    description?: string | undefined;
    parentId?: number | undefined;
}, {
    projectId: number;
    name: string;
    suiteId?: number | undefined;
    description?: string | undefined;
    parentId?: number | undefined;
}>;
export declare const MoveSectionInput: z.ZodObject<{
    sectionId: z.ZodNumber;
    parentId: z.ZodNullable<z.ZodNumber>;
    afterId: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
}, "strip", z.ZodTypeAny, {
    sectionId: number;
    parentId: number | null;
    afterId?: number | null | undefined;
}, {
    sectionId: number;
    parentId: number | null;
    afterId?: number | null | undefined;
}>;
export declare const UpdateSectionInput: z.ZodObject<{
    sectionId: z.ZodNumber;
    name: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    sectionId: number;
    name?: string | undefined;
    description?: string | undefined;
}, {
    sectionId: number;
    name?: string | undefined;
    description?: string | undefined;
}>;
export declare const DeleteSectionInput: z.ZodObject<{
    sectionId: z.ZodNumber;
    soft: z.ZodOptional<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    sectionId: number;
    soft?: boolean | undefined;
}, {
    sectionId: number;
    soft?: boolean | undefined;
}>;
export type GetSectionInputType = z.infer<typeof GetSectionInput>;
export type GetSectionsInputType = z.infer<typeof GetSectionsInput>;
export type AddSectionInputType = z.infer<typeof AddSectionInput>;
export type MoveSectionInputType = z.infer<typeof MoveSectionInput>;
export type UpdateSectionInputType = z.infer<typeof UpdateSectionInput>;
export type DeleteSectionInputType = z.infer<typeof DeleteSectionInput>;
/**
 * TestRail API Response for Section
 */
export declare const TestRailSectionSchema: z.ZodObject<{
    id: z.ZodNumber;
    name: z.ZodString;
    description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    suite_id: z.ZodNumber;
    parent_id: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    depth: z.ZodNumber;
    display_order: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    name: string;
    id: number;
    suite_id: number;
    depth: number;
    display_order: number;
    description?: string | null | undefined;
    parent_id?: number | null | undefined;
}, {
    name: string;
    id: number;
    suite_id: number;
    depth: number;
    display_order: number;
    description?: string | null | undefined;
    parent_id?: number | null | undefined;
}>;
export type TestRailSection = z.infer<typeof TestRailSectionSchema>;
