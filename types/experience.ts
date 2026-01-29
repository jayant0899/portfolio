/**
 * Represents a professional milestone or employment period.
 */
export type EmploymentMilestone = {
  /** The chronological index or build version (e.g., "v3.1.0") */
  id: string;
  /** The organization or company name (e.g., "Rahul Solutions") */
  organization: string;
  /** The professional title or position (e.g., "Full Stack Developer") */
  position: string;
  /** The employment window (e.g., "2024 — PRESENT") */
  duration: string;
  /** Current status of the tenure (e.g., ACTIVE, COMPLETED) */
  tenureStatus: "LATEST" | "STABLE" | "LEGACY" | "ARCHIVED";
  /** Detailed logs of professional achievements and contributions */
  achievements: string[];
  /** Core technologies utilized during this tenure */
  techStack: string[];
};

/**
 * Root configuration for the Experience/Career section.
 */
export type ExperienceConfig = {
  /** Section title for SEO/UI display */
  sectionTitle: string;
  /** Unique reference for internal logging */
  registryRef: string;
  /** List of professional milestones */
  milestones: EmploymentMilestone[];
};