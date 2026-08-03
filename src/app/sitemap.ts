import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { paths } from "@/config/paths";
import { projects, services } from "@/content/site";
import { absoluteUrl } from "@/lib/seo";

type Entry = {
  path: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
};

const entries: Entry[] = [
  { path: paths.home, priority: 1, changeFrequency: "monthly" },
  { path: paths.projects, priority: 0.8, changeFrequency: "monthly" },
  { path: paths.webLanding, priority: 0.95, changeFrequency: "monthly" },
  ...services.map((service) => ({
    path: `/services/${service.slug}`,
    priority: 0.9,
    changeFrequency: "monthly" as const,
  })),
  ...projects.map((project) => ({
    path: `/projects/${project.slug}`,
    priority: 0.7,
    changeFrequency: "yearly" as const,
  })),
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return entries.flatMap((entry) =>
    routing.locales.map((locale) => ({
      url: absoluteUrl(locale, entry.path),
      lastModified,
      changeFrequency: entry.changeFrequency,
      priority: entry.priority,
      alternates: {
        languages: Object.fromEntries(
          routing.locales.map((item) => [item, absoluteUrl(item, entry.path)]),
        ),
      },
    })),
  );
}
