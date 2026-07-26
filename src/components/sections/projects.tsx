import { getTranslations } from "next-intl/server";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { LinkButton } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { ProjectGrid } from "@/components/project-grid";

export async function Projects({ locale }: { locale: string }) {
  const t = await getTranslations({ locale, namespace: "Projects" });
  const tc = await getTranslations({ locale, namespace: "Common" });

  return (
    <Section id="work" containerSize="wide" className="border-t border-line">
      <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading
          eyebrow={t("eyebrow")}
          title={t("title")}
          subtitle={t("subtitle")}
        />
        <LinkButton
          href="/projects"
          variant="secondary"
          className="shrink-0 max-sm:w-full"
        >
          {tc("viewAllProjects")}
          <Icon name="arrow-right" className="size-4 transition-transform group-hover:translate-x-0.5" />
        </LinkButton>
      </div>

      <div className="mt-14">
        <ProjectGrid />
      </div>
    </Section>
  );
}
