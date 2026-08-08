export const AUDIENCES = ["recruiter", "web", "ai"] as const;

export type Audience = (typeof AUDIENCES)[number];

export const AUDIENCE_COOKIE = "portfolio-audience";
export const AUDIENCE_QUERY = "from";

export const DEFAULT_AUDIENCE: Audience = "recruiter";

export function isAudience(value: unknown): value is Audience {
  return typeof value === "string" && (AUDIENCES as readonly string[]).includes(value);
}

export function parseAudience(value: unknown): Audience | null {
  return isAudience(value) ? value : null;
}

/** Build a project href that preserves the active audience (for next-intl Link). */
export function projectHref(slug: string, audience: Audience = DEFAULT_AUDIENCE) {
  const pathname = `/projects/${slug}`;
  if (audience === DEFAULT_AUDIENCE) return pathname;
  return { pathname, query: { [AUDIENCE_QUERY]: audience } };
}
