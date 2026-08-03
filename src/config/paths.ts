/**
 * Canonical in-app route paths. Import from here — do not hardcode the same
 * path string across pages, sitemap and marketing links.
 */
export const paths = {
  home: "",
  projects: "/projects",
  webDevelopment: "/services/web-development",
  aiAutomation: "/services/ai-automation",
  /** Short social / ads landing for the web development offer. */
  webLanding: "/web",
} as const;

export type AppPath = (typeof paths)[keyof typeof paths];
