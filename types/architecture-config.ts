/**
 * Represents a specific node in the Architecture Map (Left Section).
 */
export type ArchitectureNode = {
  /** The descriptive label for the node (e.g., "Runtime:", "Database:") */
  label: string;
  /** The specific technology name (e.g., "Node.js 20", "PostgreSQL") */
  value: string;
  /** Sub-details or operational context (e.g., "Serverless Edge", "Cloud Managed") */
  sub: string;
};

/**
 * Represents a service category in the Logs Grid (Right Section).
 */
export type LogCategory = {
  /** The title of the service or layer (e.g., "Core", "API_Layers") */
  title: string;
  /** Key technologies or libraries used in this category */
  tags: string[];
  /** Current operational status displayed in the UI (e.g., "Ready", "Online") */
  status: string;
};

/**
 * An individual log entry for the global process terminal.
 */
export type GlobalLogEntry = {
  /** The message text to display in the terminal feed */
  text: string;
  /** * The classification of the log which determines its styling:
   * - 'info': Standard system trace (Secondary color)
   * - 'success': Milestone or ready state (Primary color + Pulse)
   * - 'warning': System alerts (Tertiary/Alert color if defined)
   */
  type: "info" | "success" | "warning";
};

/**
 * The master configuration for the Architecture and Logs sections.
 */
export type ArchitectureConfig = {
  /** Array of nodes to be rendered in the vertical hierarchy map */
  nodes: ArchitectureNode[];
  /** Array of service categories to be rendered in the grid */
  categories: LogCategory[];
  /** Array of sequential log entries for the bottom terminal feed */
  globalLogs: GlobalLogEntry[];

  /** Content strings for the section headers and descriptions */
  content: {
    heading: string;
    subheading: string;
    description: string;
  };
};