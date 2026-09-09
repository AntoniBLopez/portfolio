"use client";

import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Badge } from "@/components/ui/badge";
import { ExternalLinkButton } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { projectCategories, tx, txList, type Project } from "@/content/site";
import { engagementLabel } from "@/lib/project-engagement";
import { DEFAULT_AUDIENCE, projectHref, type Audience } from "@/lib/audience";
import { resolveProjectView } from "@/lib/project-view";
import { cn } from "@/lib/utils";

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
          quality={100}
          unoptimized
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
      <span className="absolute top-3 right-3 rounded-full bg-canvas/85 px-2.5 py-1 font-mono text-xs font-medium text-ink ring-1 ring-line backdrop-blur">
        {project.year}
      </span>
    </div>
  );
}

export function ProjectCard({
  project,
  audience = DEFAULT_AUDIENCE,
}: {
  project: Project;
  audience?: Audience;
}) {
  const locale = useLocale();
  const t = useTranslations("Common");
  const tp = useTranslations("Projects");
  const category = projectCategories.find((item) => item.id === project.category);
  const view = resolveProjectView(project, audience);
  const engagement = engagementLabel(project.engagement, tp);
  const caseStudyLabel = audience === "recruiter" ? t("viewCaseStudy") : tp("viewProject");

  return (
    <article
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl bg-panel ring-1 ring-line transition-all duration-300 hover:-translate-y-1 hover:ring-line-hi hover:shadow-2xl hover:shadow-brand-950/25"
    >
      <Link
        href={projectHref(project.slug, audience)}
        className="absolute inset-0 z-0 rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
        aria-label={`${project.name} — ${caseStudyLabel}`}
      />

      <ProjectVisual project={project} />

      <div className="relative flex flex-1 flex-col gap-4 p-6">
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between gap-3">
            <div className="flex min-w-0 flex-wrap items-center gap-2">
              <h3 className="text-lg font-semibold tracking-tight text-ink">{project.name}</h3>
              <span className="shrink-0 rounded-full bg-brand-600 px-2.5 py-1 text-xs font-semibold text-white">
                {engagement}
              </span>
            </div>
            {category && audience === "recruiter" && (
              <Badge variant="brand">{tx(category.label, locale)}</Badge>
            )}
          </div>
          <p className="text-sm leading-relaxed text-ink-2">{tx(view.tagline, locale)}</p>
        </div>

        {view.showStack ? (
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
        ) : view.showBenefits && view.benefits ? (
          <ul className="flex flex-col gap-1.5">
            {txList(view.benefits, locale)
              .slice(0, 3)
              .map((benefit) => (
                <li key={benefit} className="flex items-start gap-2 text-xs text-ink-2">
                  <Icon name="check" className="mt-0.5 size-3.5 shrink-0 text-brand" />
                  {benefit}
                </li>
              ))}
          </ul>
        ) : null}

        <div className="relative z-10 mt-auto flex flex-wrap items-center justify-between gap-3 pt-2">
          <span className="inline-flex items-center gap-1.5 text-sm font-medium text-brand">
            {caseStudyLabel}
            <Icon
              name="arrow-right"
              className="size-4 transition-transform group-hover:translate-x-1"
            />
          </span>

          {project.liveUrl && (
            <ExternalLinkButton
              href={project.liveUrl}
              variant="secondary"
              size="sm"
              onClick={(event) => event.stopPropagation()}
            >
              {t("liveSite")}
              <Icon name="arrow-up-right" className="size-4" />
            </ExternalLinkButton>
          )}
        </div>
      </div>
    </article>
  );
}
