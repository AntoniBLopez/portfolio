import type { IconName } from "@/components/ui/icon";

/**
 * Canonical external URLs. Import from here anywhere you need a social or
 * marketplace link — do not hardcode the same URL elsewhere.
 */
export const links = {
  github: "https://github.com/AntoniBLopez",
  linkedin: "https://www.linkedin.com/in/antoniblopez/",
  fiverr: "https://www.fiverr.com/antonilopez_dev",
} as const;

export type SocialLink = {
  id: keyof typeof links;
  label: string;
  href: string;
  icon: IconName;
};

/** Ordered list used in the hero, footer and contact panel. */
export const socialLinks: readonly SocialLink[] = [
  { id: "github", label: "GitHub", href: links.github, icon: "github" },
  { id: "linkedin", label: "LinkedIn", href: links.linkedin, icon: "linkedin" },
  { id: "fiverr", label: "Fiverr", href: links.fiverr, icon: "briefcase" },
] as const;
