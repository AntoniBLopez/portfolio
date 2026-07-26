import { profile, services, tx } from "@/content/site";
import { absoluteUrl, siteUrl } from "@/lib/seo";

export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      // Serialised server-side from static content, never from user input.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function personSchema(locale: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    url: absoluteUrl(locale),
    email: `mailto:${profile.email}`,
    jobTitle: tx(profile.role, locale),
    description: tx(profile.summary, locale),
    knowsLanguage: ["en", "es"],
    sameAs: profile.socials.map((social) => social.href),
  };
}

export function professionalServiceSchema(locale: string) {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: `${profile.name} — ${tx(profile.role, locale)}`,
    url: absoluteUrl(locale),
    email: `mailto:${profile.email}`,
    areaServed: "Worldwide",
    availableLanguage: ["English", "Spanish"],
    provider: {
      "@type": "Person",
      name: profile.name,
      url: siteUrl,
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: locale === "es" ? "Servicios" : "Services",
      itemListElement: services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: tx(service.name, locale),
          description: tx(service.summary, locale),
          url: absoluteUrl(locale, `/services/${service.slug}`),
        },
      })),
    },
  };
}

export function breadcrumbSchema(
  locale: string,
  trail: { name: string; path: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(locale, item.path),
    })),
  };
}
