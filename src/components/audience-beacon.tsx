"use client";

import { useEffect } from "react";
import { AUDIENCE_COOKIE, type Audience } from "@/lib/audience";

/**
 * Persists the entry audience (home / web / ai) so project pages can
 * keep showing the right pitch after navigation.
 */
export function AudienceBeacon({ audience }: { audience: Audience }) {
  useEffect(() => {
    try {
      document.cookie = `${AUDIENCE_COOKIE}=${audience}; path=/; max-age=${60 * 60 * 24 * 30}; samesite=lax`;
    } catch {
      // Cookies can be blocked; query params still work on direct links.
    }
  }, [audience]);

  return null;
}
