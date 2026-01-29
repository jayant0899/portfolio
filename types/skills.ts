/**
 * Represents a specific technical proficiency or professional competency.
 */
export type Skill = {
  /** Unique identifier for indexing and SEO */
  id: string;
  /** Public-facing name of the technology or skill */
  name: string;
  /** Primary area of expertise within this skill */
  focusArea: string;
  /** Qualitative assessment of expertise */
  masteryLevel: "EXPERT" | "PROFICIENT" | "ADVANCED";
  /** Quantitative proficiency for visual progress indicators (0-100) */
  proficiencyPercentage: number;
  /** List of associated tools, libraries, or sub-technologies */
  ecosystem: string[];
};

/**
 * Groups related skills into a logical professional domain.
 */
export type SkillCategory = {
  /** Unique identifier for the category */
  categoryId: string;
  /** Display label for the category section */
  categoryLabel: string;
  /** Associated brand/accent color for the category UI */
  brandColor: string;
  /** Collection of individual skills within this domain */
  skills: Skill[];
};