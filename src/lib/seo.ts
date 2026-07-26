import type { Metadata } from "next";
import { routing } from "@/i18n/routing";
import { profile } from "@/content/site";

export const siteUrl = profile.url.replace(/\/$/, "");

/** Locale-prefixed absolute URL for a route path such as "/projects". */
export function absoluteUrl(locale: string, path = "") {
  const suffix = path === "/" ? "" : path;
  return `${siteUrl}/${locale}${suffix}`;
}

/**
 * Canonical URL plus hreflang alternates for every supported locale, so each
 * translation points at its siblings rather than competing with them.
 */
export function alternatesFor(locale: string, path = "") {
  const languages = Object.fromEntries(
    routing.locales.map((item) => [item, absoluteUrl(item, path)]),
  );

  return {
    canonical: absoluteUrl(locale, path),
    languages: {
      ...languages,
      "x-default": absoluteUrl(routing.defaultLocale, path),
    },
  };
}

type MetadataInput = {
  locale: string;
  path?: string;
  title: string;
  description: string;
  ogImagePath?: string;
};

export function buildMetadata({
  locale,
  path = "",
  title,
  description,
  ogImagePath,
}: MetadataInput): Metadata {
  const url = absoluteUrl(locale, path);
  const images = ogImagePath ? [{ url: ogImagePath, width: 1200, height: 630 }] : undefined;

  return {
    title,
    description,
    alternates: alternatesFor(locale, path),
    openGraph: {
      type: "website",
      url,
      siteName: profile.name,
      locale: locale === "es" ? "es_ES" : "en_US",
      title,
      description,
      images,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ogImagePath ? [ogImagePath] : undefined,
    },
  };
}
