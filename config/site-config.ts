import { SiteConfig } from "@/types/site-config";
import { userConfig } from "./user-config";

export const siteConfig: SiteConfig = {
  name: "JAYANT_KUMAR // SOFTWARE_DEVELOPMENT",
  description:
    "Professional portfolio of Jayant Kumar, a B.Tech Computer Science student specializing in AI, Biometrics, and Full-stack development with Python, C++, and Swift.",
  url: userConfig.website,
  ogImage: userConfig.ogImage,
  links: {
    github: userConfig.github,
    twitter: userConfig.twitter,
    linkedin: userConfig.linkedin,
  },
  nav: {
    main: [
      {
        title: "ARCHITECTURE",
        href: "/#architecture",
        priority: true,
      },
      {
        title: "EXPERIENCE",
        href: "/#experience",
        priority: true,
      },
      {
        title: "PROJECTS",
        href: "/#projects",
        priority: true,
      },
      {
        title: "SKILLS",
        href: "/#skills",
        priority: true,
      },
      {
        title: "SUMMARY",
        href: "/#summary",
        priority: false,
      },
      {
        title: "ACHIEVEMENTS",
        href: "/#achievements",
        priority: false,
      },
      {
        title: "CONTACT",
        href: "/#contact",
        priority: false,
      },
    ],
    footer: [
      {
        title: "GITHUB_PROFILE",
        href: userConfig.github,
      },
      {
        title: "RESUME",
        href: userConfig.resumeURL,
      },
    ],
  },
};