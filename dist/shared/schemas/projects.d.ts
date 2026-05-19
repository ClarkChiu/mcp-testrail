import { z } from "zod";
export declare const getProjectsSchema: z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>;
export declare const getProjectSchema: z.ZodObject<{
    projectId: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    projectId: number;
}, {
    projectId: number;
}>;
export declare const addProjectSchema: z.ZodObject<{
    name: z.ZodString;
    announcement: z.ZodOptional<z.ZodString>;
    show_announcement: z.ZodOptional<z.ZodBoolean>;
    suite_mode: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    name: string;
    announcement?: string | undefined;
    show_announcement?: boolean | undefined;
    suite_mode?: number | undefined;
}, {
    name: string;
    announcement?: string | undefined;
    show_announcement?: boolean | undefined;
    suite_mode?: number | undefined;
}>;
export declare const updateProjectSchema: z.ZodObject<{
    projectId: z.ZodNumber;
    name: z.ZodOptional<z.ZodString>;
    announcement: z.ZodOptional<z.ZodString>;
    show_announcement: z.ZodOptional<z.ZodBoolean>;
    is_completed: z.ZodOptional<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    projectId: number;
    name?: string | undefined;
    announcement?: string | undefined;
    show_announcement?: boolean | undefined;
    is_completed?: boolean | undefined;
}, {
    projectId: number;
    name?: string | undefined;
    announcement?: string | undefined;
    show_announcement?: boolean | undefined;
    is_completed?: boolean | undefined;
}>;
export declare const deleteProjectSchema: z.ZodObject<{
    projectId: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    projectId: number;
}, {
    projectId: number;
}>;
export declare const getProjectsInputSchema: z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>;
export declare const getProjectInputSchema: z.ZodObject<{
    projectId: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    projectId: number;
}, {
    projectId: number;
}>;
export declare const addProjectInputSchema: z.ZodObject<{
    name: z.ZodString;
    announcement: z.ZodOptional<z.ZodString>;
    show_announcement: z.ZodOptional<z.ZodBoolean>;
    suite_mode: z.ZodOptional<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    name: string;
    announcement?: string | undefined;
    show_announcement?: boolean | undefined;
    suite_mode?: number | undefined;
}, {
    name: string;
    announcement?: string | undefined;
    show_announcement?: boolean | undefined;
    suite_mode?: number | undefined;
}>;
export declare const updateProjectInputSchema: z.ZodObject<{
    projectId: z.ZodNumber;
    name: z.ZodOptional<z.ZodString>;
    announcement: z.ZodOptional<z.ZodString>;
    show_announcement: z.ZodOptional<z.ZodBoolean>;
    is_completed: z.ZodOptional<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    projectId: number;
    name?: string | undefined;
    announcement?: string | undefined;
    show_announcement?: boolean | undefined;
    is_completed?: boolean | undefined;
}, {
    projectId: number;
    name?: string | undefined;
    announcement?: string | undefined;
    show_announcement?: boolean | undefined;
    is_completed?: boolean | undefined;
}>;
export declare const deleteProjectInputSchema: z.ZodObject<{
    projectId: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    projectId: number;
}, {
    projectId: number;
}>;
export type GetProjectsInput = z.infer<typeof getProjectsInputSchema>;
export type GetProjectInput = z.infer<typeof getProjectInputSchema>;
export type AddProjectInput = z.infer<typeof addProjectInputSchema>;
export type UpdateProjectInput = z.infer<typeof updateProjectInputSchema>;
export type DeleteProjectInput = z.infer<typeof deleteProjectInputSchema>;
export declare const TestRailProjectSchema: z.ZodObject<{
    id: z.ZodNumber;
    name: z.ZodString;
    announcement: z.ZodNullable<z.ZodString>;
    show_announcement: z.ZodBoolean;
    is_completed: z.ZodBoolean;
    completed_on: z.ZodNullable<z.ZodNumber>;
    url: z.ZodString;
    suite_mode: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    url: string;
    name: string;
    announcement: string | null;
    show_announcement: boolean;
    suite_mode: number;
    is_completed: boolean;
    id: number;
    completed_on: number | null;
}, {
    url: string;
    name: string;
    announcement: string | null;
    show_announcement: boolean;
    suite_mode: number;
    is_completed: boolean;
    id: number;
    completed_on: number | null;
}>;
export type TestRailProject = z.infer<typeof TestRailProjectSchema>;
