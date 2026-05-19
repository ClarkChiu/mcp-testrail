import { BaseTestRailClient } from "./baseClient.js";
import { TestRailSection } from "../../shared/schemas/sections.js";
import { GetSectionInputType, GetSectionsInputType, AddSectionInputType, MoveSectionInputType, UpdateSectionInputType, DeleteSectionInputType } from "../../shared/schemas/sections.js";
export declare class SectionsClient extends BaseTestRailClient {
    /**
     * Get a specific section
     */
    getSection(sectionId: GetSectionInputType["sectionId"]): Promise<TestRailSection>;
    /**
     * Get sections for a project with pagination support.
     * Returns a single page of sections along with pagination metadata,
     * allowing the caller to control how much data to fetch per request.
     */
    getSections(projectId: GetSectionsInputType["projectId"], suiteId?: GetSectionsInputType["suiteId"], params?: {
        limit?: number;
        offset?: number;
    }): Promise<{
        sections: TestRailSection[];
        offset: number;
        limit: number;
        size: number;
        _links: {
            next: string | null;
            prev: string | null;
        };
    }>;
    /**
     * Add a new section
     */
    addSection(projectId: AddSectionInputType["projectId"], data: {
        name: AddSectionInputType["name"];
        description?: AddSectionInputType["description"];
        suite_id?: AddSectionInputType["suiteId"];
        parent_id?: AddSectionInputType["parentId"];
    }): Promise<TestRailSection>;
    /**
     * Move a section to a different parent or position
     */
    moveSection(sectionId: MoveSectionInputType["sectionId"], data: {
        parent_id?: MoveSectionInputType["parentId"];
        after_id?: MoveSectionInputType["afterId"];
    }): Promise<TestRailSection>;
    /**
     * Update an existing section
     */
    updateSection(sectionId: UpdateSectionInputType["sectionId"], data: {
        name?: UpdateSectionInputType["name"];
        description?: UpdateSectionInputType["description"];
    }): Promise<TestRailSection>;
    /**
     * Delete an existing section
     */
    deleteSection(sectionId: DeleteSectionInputType["sectionId"], soft?: DeleteSectionInputType["soft"]): Promise<void>;
}
