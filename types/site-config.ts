export type NavItem = {
  /** The text to display for the navigation item */
  title: string;
  /** The path or URL the navigation item links to */
  href: string;
  /** Whether the item should be highlighted or have higher priority in the UI */
  priority?: boolean;
};

export type SiteMetadata = {
  /** The default title for the site, used in search engines and browser tabs */
  title: string;
  /** A brief summary of the site content for SEO */
  description: string;
  /** The canonical URL of the site */
  url: string;
  /** Open Graph image URL for social media sharing */
  ogImage: string;
  /** A list of relevant keywords for search engine indexing */
  keywords: string[];
};

export type SiteConfig = {
  /** The name of the site/application */
  name: string;
  /** A descriptive tagline or summary of the site */
  description: string;
  /** The base URL of the site */
  url: string;
  /** Default social sharing image path */
  ogImage: string;
  /** Social media and external profile links */
  links: {
    github: string;
    twitter?: string;
    linkedin: string;
  };
  /** Navigation structure for different parts of the site */
  nav: {
    /** Primary navigation items (e.g., in the header) */
    main: NavItem[];
    /** Footer navigation items */
    footer: NavItem[];
  };
};
