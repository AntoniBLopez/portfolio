"use client";

import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Badge } from "@/components/ui/badge";
import { Icon } from "@/components/ui/icon";
import { projectCategories, tx, type Project } from "@/content/site";
import { cn } from "@/lib/utils";

/**
 * Visual header for a project. Uses a cover image when available,
 * otherwise falls back to the accent + icon treatment.
 */
function ProjectVisual({ project }: { project: Project }) {
  return (
    <div className="relative aspect-16/10 overflow-hidden border-b border-line bg-canvas-2">
      {project.image ? (
        <Image
          src={project.image}
          alt=""
          fill
          className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      ) : (
        <>
          <div className={cn("absolute inset-0 bg-gradient-to-br", project.accent)} />
          <div className="grid-backdrop absolute inset-0 opacity-60" />
          <div className="absolute inset-0 grid place-items-center">
            <span className="grid size-16 place-items-center rounded-2xl bg-panel/70 text-brand ring-1 ring-line backdrop-blur-md transition-transform duration-500 group-hover:scale-110">
              <Icon name={project.icon} className="size-7" />
            </span>
          </div>
        </>
      )}
      <span className="absolute top-3 right-3 rounded-full bg-canvas/70 px-2.5 py-1 font-mono text-xs text-ink-2 backdrop-blur">
        {project.year}
      </span>
    </div>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  const locale = useLocale();
  const t = useTranslations("Common");
  const category = projectCategories.find((item) => item.id === project.category);

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl bg-panel ring-1 ring-line transition-all duration-300 hover:-translate-y-1 hover:ring-line-hi hover:shadow-2xl hover:shadow-brand-950/25"
    >
      <ProjectVisual project={project} />

      <div className="flex flex-1 flex-col gap-4 p-6">
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between gap-3">
            <h3 className="text-lg font-semibold tracking-tight text-ink">{project.name}</h3>
            {category && <Badge variant="brand">{tx(category.label, locale)}</Badge>}
          </div>
          <p className="text-sm leading-relaxed text-ink-2">{tx(project.tagline, locale)}</p>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {project.stack.slice(0, 4).map((item) => (
            <Badge key={item} variant="tech">
              {item}
            </Badge>
          ))}
          {project.stack.length > 4 && (
            <Badge variant="tech">+{project.stack.length - 4}</Badge>
          )}
        </div>

        <span className="mt-auto inline-flex items-center gap-1.5 pt-2 text-sm font-medium text-brand">
          {t("viewCaseStudy")}
          <Icon
            name="arrow-right"
            className="size-4 transition-transform group-hover:translate-x-1"
          />
        </span>
      </div>
    </Link>
  );
}
