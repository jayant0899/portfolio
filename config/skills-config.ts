import { SkillCategory } from "@/types/skills";

export const skillRegistry: SkillCategory[] = [
  {
    categoryId: "CORE_DEVELOPMENT",
    categoryLabel: "01 // CORE_LANGUAGES",
    brandColor: "#D3FB53",
    skills: [
      {
        id: "SKILL_PYTHON",
        name: "Python",
        focusArea: "Software Dev & AI",
        masteryLevel: "ADVANCED",
        proficiencyPercentage: 90,
        ecosystem: ["Algorithms", "Data_Analysis", "Google_Assistant_SDK", "Automation"]
      },
      {
        id: "SKILL_CPP",
        name: "C / C++",
        focusArea: "System Logic & Biometrics",
        masteryLevel: "ADVANCED",
        proficiencyPercentage: 88,
        ecosystem: ["DSA", "OOPs", "OpenCV", "Memory_Management"]
      },
      {
        id: "SKILL_SWIFT",
        name: "Swift",
        focusArea: "iOS Development",
        masteryLevel: "PROFICIENT",
        proficiencyPercentage: 75,
        ecosystem: ["SwiftUI", "X_Code", "Foundation"]
      },
      {
        id: "SKILL_RUBY",
        name: "Ruby",
        focusArea: "Scripting & Backend",
        masteryLevel: "PROFICIENT",
        proficiencyPercentage: 70,
        ecosystem: ["Backend_Logic", "Automation", "Gems"]
      }
    ]
  },
  {
    categoryId: "TOOLS_AND_ECOSYSTEM",
    categoryLabel: "02 // DEV_TOOLS_&_AI",
    brandColor: "#B9F2F4",
    skills: [
      {
        id: "SKILL_XCODE",
        name: "X Code",
        focusArea: "iOS & MacOS Dev",
        masteryLevel: "PROFICIENT",
        proficiencyPercentage: 80,
        ecosystem: ["Interface_Builder", "Simulator", "Debugging"]
      },
      {
        id: "SKILL_GITHUB",
        name: "GitHub / Terminal",
        focusArea: "Version Control & Shell",
        masteryLevel: "ADVANCED",
        proficiencyPercentage: 85,
        ecosystem: ["Git_Flow", "CLI", "Collaboration", "Shell_Scripting"]
      },
      {
        id: "SKILL_VSCODE",
        name: "VS Code",
        focusArea: "Development Environment",
        masteryLevel: "ADVANCED",
        proficiencyPercentage: 92,
        ecosystem: ["Extensions", "Debugging", "Environment_Config"]
      },
      {
        id: "SKILL_AI_ML",
        name: "AI & ML Basics",
        focusArea: "Intelligent Systems",
        masteryLevel: "PROFICIENT",
        proficiencyPercentage: 78,
        ecosystem: ["Voice_Processing", "Face_Recognition", "Biometrics"]
      }
    ]
  },
  {
    categoryId: "FRONTEND_AND_PROBLEM_SOLVING",
    categoryLabel: "03 // WEB_&_ALGORITHMS",
    brandColor: "#FFFFFF",
    skills: [
      {
        id: "SKILL_HTML_CSS",
        name: "HTML & CSS",
        focusArea: "Frontend Development",
        masteryLevel: "PROFICIENT",
        proficiencyPercentage: 82,
        ecosystem: ["Responsive_Design", "Modern_UI", "Styling"]
      },
      {
        id: "SKILL_DSA",
        name: "DSA & Logic",
        focusArea: "Problem Solving",
        masteryLevel: "ADVANCED",
        proficiencyPercentage: 85,
        ecosystem: ["Arrays", "Strings", "Algorithms", "Optimization"]
      },
      {
        id: "SKILL_COMMUNICATION",
        name: "Professional Soft Skills",
        focusArea: "Teamwork & Leadership",
        masteryLevel: "ADVANCED",
        proficiencyPercentage: 90,
        ecosystem: ["Articulation", "Team_Collaboration", "Marketing"]
      }
    ]
  }
];