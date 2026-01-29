import { ProjectDeployment } from "@/types/projects-config";

export const projectsConfig: ProjectDeployment[] = [
  {
    id: "DEPL_JK_01",
    slug: "ai-voice-assistant",
    name: "AI_Voice_Assistant",
    deployment_url: "",
    // link: "https://github.com/jayantku7788", 
    uptime: "99.9%",
    status: "STABLE",
    impact_metric: "Smart Home Integration",
    description:
      "A custom-built AI voice assistant utilizing Google Assistant SDK to process natural language commands for smart home automation and task management.",
    architecture_highlights: [
      "Natural Language Processing via Google Assistant SDK",
      "Custom trigger word detection and voice command parsing",
      "API integration for real-time smart device control"
    ],
    tech_stack: [
      "Python",
      "Google_Assistant_SDK",
      "Pyttsx3",
      "SpeechRecognition",
      "Terminal"
    ],
    period: { start: "06.2023", end: "08.2023" },
    image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?q=80&w=1000&auto=format&fit=crop",
    logo: "https://cdn.simpleicons.org/python/3776AB"
  },
  {
    id: "DEPL_JK_02",
    slug: "new-era-phone-lock",
    name: "New_Era_Phone_Lock",
    deployment_url: "",
    // link: "https://github.com/jayantku7788", 
    uptime: "ONLINE",
    status: "STABLE",
    impact_metric: "Biometric Security Layer",
    description:
      "A sophisticated security application providing multi-layered biometric authentication, including fingerprint and facial recognition modules.",
    architecture_highlights: [
      "OpenCV implementation for facial landmark detection",
      "C++ backend for high-speed biometric data processing",
      "Secure encrypted storage for user authentication tokens"
    ],
    tech_stack: [
      "Python",
      "C++",
      "OpenCV",
      "Tkinter",
      "Face_Recognition_Lib"
    ],
    period: { start: "11.2023", end: "01.2024" },
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1000&auto=format&fit=crop",
    logo: "https://cdn.simpleicons.org/cplusplus/00599C"
  },
  {
    id: "DEPL_JK_03",
    slug: "portfolio-website-v1",
    name: "Dev_Portfolio_NextJS",
    deployment_url: "",
    // link: "https://github.com/jayantku7788",
    uptime: "100%",
    status: "ONLINE",
    impact_metric: "Personal Branding",
    description:
      "A high-performance personal portfolio website built to showcase software engineering projects and technical certifications.",
    architecture_highlights: [
      "Server-side rendering for optimal SEO performance",
      "Responsive UI/UX designed with Tailwind CSS",
      "Dynamic project rendering from configuration files"
    ],
    tech_stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind_CSS",
      "Framer_Motion"
    ],
    period: { start: "12.2025" },
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop",
    logo: "https://cdn.simpleicons.org/nextdotjs/000000"
  },
  {
    id: "DEPL_JK_04",
    slug: "data-analyzer-tool",
    name: "Swift_Data_Insight",
    deployment_url: "",
    // link: "https://github.com/jayantku7788",
    uptime: "",
    status: "STABLE",
    impact_metric: "Automated Data Cleanup",
    description:
      "A lightweight data analysis utility developed in Swift to parse large CSV datasets and generate visual insights for software performance metrics.",
    architecture_highlights: [
      "Optimized file parsing for high-volume datasets",
      "Integrated charting library for visual data representation",
      "Modular design for easy extension to new file types"
    ],
    tech_stack: [
      "Swift",
      "X_Code",
      "Foundation",
      "CSV_Parser"
    ],
    period: { start: "04.2024", end: "05.2024" },
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
    logo: "https://cdn.simpleicons.org/swift/F05138"
  }
];