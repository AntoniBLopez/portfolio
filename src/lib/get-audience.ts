import { cookies } from "next/headers";
import {
  AUDIENCE_COOKIE,
  DEFAULT_AUDIENCE,
  parseAudience,
  type Audience,
} from "@/lib/audience";

/** Resolve audience from `?from=` (preferred) or the persistence cookie. */
export async function getAudience(fromParam?: string | string[] | undefined): Promise<Audience> {
  const fromQuery = parseAudience(Array.isArray(fromParam) ? fromParam[0] : fromParam);
  if (fromQuery) return fromQuery;

  try {
    const jar = await cookies();
    const fromCookie = parseAudience(jar.get(AUDIENCE_COOKIE)?.value);
    if (fromCookie) return fromCookie;
  } catch {
    // cookies() can throw outside a request context.
  }

  return DEFAULT_AUDIENCE;
}
