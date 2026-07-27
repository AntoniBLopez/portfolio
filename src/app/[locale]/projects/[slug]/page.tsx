import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Icon } from "@/components/ui/icon";
import { buttonStyles } from "@/components/ui/button";
import { GradientMesh } from "@/components/gradient-mesh";
import { AnimatedGroup, Reveal } from "@/components/ui/reveal";
import { ProjectsCta } from "@/components/sections/projects-cta";
import { JsonLd, breadcrumbSchema } from "@/components/json-ld";
import { getProject, projectCategories, projects, tx } from "@/content/site";
import { buildMetadata } from "@/lib/seo";
import { cn } from "@/lib/utils";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const project = getProject(slug);

  if (!project) return {};

  return buildMetadata({
    locale,
    path: `/projects/${slug}`,
    title: `${project.name} — ${tx(project.tagline, locale).replace(/\.$/, "")}`,
    description: tx(project.tagline, locale),
  });
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const project = getProject(slug);
  if (!project) notFound();

  const t = await getTranslations({ locale, namespace: "Projects" });
  const tc = await getTranslations({ locale, namespace: "Common" });
  const tn = await getTranslations({ locale, namespace: "Nav" });

  const category = projectCategories.find((item) => item.id === project.category);
  const currentIndex = projects.findIndex((item) => item.slug === project.slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  const sections = [
    { label: t("challengeLabel"), body: tx(project.challenge, locale), icon: "target" as const },
    { label: t("approachLabel"), body: tx(project.approach, locale), icon: "blocks" as const },
    { label: t("outcomeLabel"), body: tx(project.outcome, locale), icon: "trending-up" as const },
  ];

  return (
    <>
      <section className="relative isolate overflow-hidden pt-28 pb-14 sm:pt-36">
        <GradientMesh />

        <Container size="wide" className="relative">
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 text-sm text-ink-2 transition-colors hover:text-ink"
          >
            <Icon
              name="arrow-left"
              className="size-4 transition-transform group-hover:-translate-x-0.5"
            />
            {tc("backToProjects")}
          </Link>

          <div className="mt-10 grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
            <div className="flex flex-col gap-6">
              <div className="flex flex-wrap items-center gap-2">
                {category && <Badge variant="brand">{tx(category.label, locale)}</Badge>}
                <Badge variant="outline">{project.year}</Badge>
              </div>

              <h1 className="text-4xl font-semibold tracking-tight text-ink sm:text-5xl lg:text-[3.5rem] lg:leading-[1.08]">
                {project.name}
              </h1>

              <p className="max-w-2xl text-base leading-relaxed text-ink-2 sm:text-lg">
                {tx(project.tagline, locale)}
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={buttonStyles({})}
                  >
                    {tc("liveSite")}
                    <Icon name="arrow-up-right" className="size-4" />
                  </a>
                )}
                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={buttonStyles({ variant: "secondary" })}
                  >
                    {tc("sourceCode")}
                    <Icon name="github" className="size-4" />
                  </a>
                )}
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl bg-panel ring-1 ring-line">
              {project.image ? (
                <div className="relative aspect-4/3">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    priority
                  />
                </div>
              ) : (
                <>
                  <div className={cn("absolute inset-0 bg-gradient-to-br", project.accent)} />
                  <div className="grid-backdrop absolute inset-0 opacity-50" />
                  <div className="relative grid aspect-4/3 place-items-center">
                    <span className="grid size-20 place-items-center rounded-3xl bg-canvas/60 text-brand ring-1 ring-line backdrop-blur-md animate-float">
                      <Icon name={project.icon} className="size-9" />
                    </span>
                  </div>
                </>
              )}
            </div>
          </div>

          <dl className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-2xl bg-line ring-1 ring-line sm:grid-cols-3">
            <MetaCell label={t("roleLabel")} value={tx(project.role, locale)} />
            <MetaCell label={t("timelineLabel")} value={tx(project.timeline, locale)} />
            <MetaCell
              label={t("typeLabel")}
              value={category ? tx(category.label, locale) : project.category}
            />
          </dl>
        </Container>
      </section>

      <Section containerSize="wide" className="border-t border-line py-16">
        <AnimatedGroup className="grid gap-6 sm:grid-cols-3" itemClassName="h-full" stagger={0.08}>
          {project.metrics.map((metric) => (
            <Card key={metric.label.en} className="h-full p-7">
              <p className="text-4xl font-semibold tracking-tight text-brand">{metric.value}</p>
              <p className="mt-2 text-sm text-ink-2">{tx(metric.label, locale)}</p>
            </Card>
          ))}
        </AnimatedGroup>
      </Section>

      <Section containerSize="wide" className="border-t border-line bg-canvas-2">
        <div className="flex flex-col gap-14">
          {sections.map((section) => (
            <Reveal key={section.label}>
              <article className="grid gap-6 lg:grid-cols-[minmax(0,16rem)_1fr] lg:gap-14">
                <div className="flex items-start gap-3">
                  <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-brand-500/12 text-brand">
                    <Icon name={section.icon} className="size-5" />
                  </span>
                  <h2 className="pt-2 text-lg font-semibold tracking-tight text-ink">
                    {section.label}
                  </h2>
                </div>
                <p className="max-w-3xl text-base leading-relaxed text-ink-2">{section.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section containerSize="wide" className="border-t border-line">
        <h2 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
          {t("featuresLabel")}
        </h2>

        <AnimatedGroup
          className="mt-10 grid gap-4 sm:grid-cols-2"
          itemClassName="h-full"
          stagger={0.07}
        >
          {project.features.map((feature) => (
            <Card key={feature.title.en} className="h-full p-7" interactive>
              <h3 className="text-base font-semibold text-ink">{tx(feature.title, locale)}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-ink-2">
                {tx(feature.body, locale)}
              </p>
            </Card>
          ))}
        </AnimatedGroup>

        <div className="mt-14 flex flex-col gap-4 border-t border-line pt-10">
          <h3 className="text-xs font-semibold tracking-[0.18em] text-ink-3 uppercase">
            {t("stackLabel")}
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((item) => (
              <Badge key={item} variant="tech" className="px-3 py-1.5 text-sm">
                {item}
              </Badge>
            ))}
          </div>
        </div>
      </Section>

      {nextProject.slug !== project.slug && (
        <Section containerSize="wide" className="border-t border-line pb-0">
          <Link
            href={`/projects/${nextProject.slug}`}
            className="group flex flex-col gap-3 rounded-2xl bg-panel p-8 ring-1 ring-line transition-all hover:-translate-y-1 hover:ring-line-hi sm:flex-row sm:items-center sm:justify-between sm:p-10"
          >
            <div className="flex flex-col gap-1.5">
              <span className="text-xs font-semibold tracking-[0.18em] text-ink-3 uppercase">
                {t("nextProject")}
              </span>
              <span className="text-xl font-semibold tracking-tight text-ink sm:text-2xl">
                {nextProject.name}
              </span>
            </div>
            <span className="grid size-12 shrink-0 place-items-center rounded-full bg-brand-500/12 text-brand transition-transform group-hover:translate-x-1">
              <Icon name="arrow-right" className="size-5" />
            </span>
          </Link>
        </Section>
      )}

      <ProjectsCta locale={locale} />

      <JsonLd
        data={breadcrumbSchema(locale, [
          { name: tn("projects"), path: "/projects" },
          { name: project.name, path: `/projects/${project.slug}` },
        ])}
      />
    </>
  );
}

function MetaCell({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-panel px-6 py-5">
      <dt className="text-xs tracking-wide text-ink-3 uppercase">{label}</dt>
      <dd className="mt-1.5 text-sm font-medium text-ink">{value}</dd>
    </div>
  );
}
