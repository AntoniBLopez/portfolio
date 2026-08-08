/**
 * Canonical in-app route paths. Import from here — do not hardcode the same
 * path string across pages, sitemap and marketing links.
 */
export const paths = {
  home: "",
  projects: "/projects",
  /** Short landing for the web development offer. */
  webLanding: "/web",
  /** Short landing for the AI automation offer. */
  aiLanding: "/ai",
} as const;

export type AppPath = (typeof paths)[keyof typeof paths];

/** Public URL for a service offer. */
export function servicePath(slug: "web-development" | "ai-automation"): AppPath {
  return slug === "web-development" ? paths.webLanding : paths.aiLanding;
}
