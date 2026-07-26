import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { GradientMesh } from "@/components/gradient-mesh";
import { ProjectGrid } from "@/components/project-grid";
import { ProjectsCta } from "@/components/sections/projects-cta";
import { buildMetadata } from "@/lib/seo";

const PATH = "/projects";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return buildMetadata({
    locale,
    path: PATH,
    title: t("projectsTitle"),
    description: t("projectsDescription"),
  });
}

export default async function ProjectsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "Projects" });

  return (
    <>
      <section className="relative isolate overflow-hidden pt-32 pb-12 sm:pt-40 sm:pb-16">
        <GradientMesh />
        <Container size="wide" className="relative">
          <SectionHeading
            as="h1"
            eyebrow={t("eyebrow")}
            title={t("indexTitle")}
            subtitle={t("indexSubtitle")}
          />
        </Container>
      </section>

      <Section containerSize="wide" className="pt-4">
        <h2 className="sr-only">{t("indexTitle")}</h2>
        <ProjectGrid />
      </Section>

      <ProjectsCta locale={locale} />
    </>
  );
}
