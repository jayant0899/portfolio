import { ArchitectureConfig } from "@/types/architecture-config";

export const architectureConfig: ArchitectureConfig = {
  /** Identity & Environment Nodes
   * Mapping Jayant's academic and development environments.
   */
  nodes: [
    {
      label: "Environment:",
      value: "Full-Stack Development",
      sub: "AI & Biometric Applications"
    },
    {
      label: "Engine:",
      value: "Software Engineering",
      sub: "Python / C++ / Swift / Ruby"
    },
    {
      label: "Dev_Status:",
      value: "B.Tech CSE Student",
      sub: "Algorithms | AI | Machine Learning"
    }
  ],

  /** Service Categories
   * Mapping core technical focus areas.
   */
  categories: [
    {
      title: "Core_Development",
      tags: ["Python", "C++", "C", "Data_Structures"],
      status: "Optimized"
    },
    {
      title: "AI_&_Automation",
      tags: ["Google_Assistant_SDK", "Speech_Recognition", "Biometrics"],
      status: "Hardened"
    },
    {
      title: "Tools_&_Platforms",
      tags: ["X_Code", "GitHub", "Terminal", "VS_Code"],
      status: "Synced"
    },
    {
      title: "Web_&_Mobile",
      tags: ["Swift", "Ruby", "HTML", "CSS"],
      status: "Stable"
    }
  ],

  /** Global Process Feed
   * Simulating an AI development and deployment sequence.
   */
  globalLogs: [
    { text: "INITIALIZING_DEVELOPMENT_ENVIRONMENT", type: "info" },
    { text: "LOADING_AI_SDK: GOOGLE_ASSISTANT_INTEGRATION", type: "info" },
    { text: "CALIBRATING_BIOMETRIC_RECOGNITION_MODULES", type: "info" },
    { text: "EXECUTING_ALGORITHM_COMPLEXITY_ANALYSIS", type: "info" },
    { text: "PROJECT_DEPLOYMENT_SUCCESSFUL", type: "success" }
  ],

  content: {
    heading: "02. Architecture",
    subheading: "Algorithmic Efficiency & Intelligent Systems",
    description:
      "I focus on bridging the gap between hardware and software through intelligent automation and secure biometric systems. By leveraging a diverse tech stack—from high-level Python to system-level C++—I build projects that are both functionally robust and architecturally sound."
  }
};