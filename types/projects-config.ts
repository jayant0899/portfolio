/**
 * Represents a project as a "Managed Node" in the system architecture.
 */
export type ProjectDeployment = {
  /** Stable unique identifier (e.g., "DEPL_0x01") */
  id: string;
  /** URL-friendly identifier for routing */
  slug: string;
  /** Human-readable system name */
  name: string;
  /** Primary URL for the live instance */
  deployment_url: string;
  /** Repository or documentation link */
  link?: string;
  /** Technical uptime simulation (e.g., "99.9%") */
  uptime: string;
  /** Operational status of the node */
  status: "ONLINE" | "STABLE" | "MAINTENANCE";
  /** Markdown-supported system overview */
  description: string;
  /** Summary of technical achievements or engineering wins */
  architecture_highlights: string[];
  /** Array of technology identifiers used in the build */
  tech_stack: string[];
  /** Quantitative success metric (e.g., "40% faster hydration") */
  impact_metric: string;
  /** * Deployment window. 
   * Format: MM.YYYY. Omit 'end' for current active builds.
   */
  period: {
    start: string;
    end?: string;
  };
  /** Project cover image / schematic */
  image?: string;
  /** Project icon / system logo */
  logo?: string;
};