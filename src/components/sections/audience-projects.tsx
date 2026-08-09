import { getTranslations } from "next-intl/server";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { LinkButton } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { ProjectGrid } from "@/components/project-grid";
import { getProject } from "@/content/site";
import type { Audience } from "@/lib/audience";

const WEB_SHOWCASE = ["blau-yoga", "dance-academy-platform"] as const;
const AI_SHOWCASE = ["dance-academy-platform", "blau-yoga"] as const;

export async function AudienceProjects({
  locale,
  audience,
}: {
  locale: string;
  audience: Extract<Audience, "web" | "ai">;
}) {
  const t = await getTranslations({ locale, namespace: "AudienceProjects" });
  const slugs = audience === "web" ? WEB_SHOWCASE : AI_SHOWCASE;
  const items = slugs
    .map((slug) => getProject(slug))
    .filter((project): project is NonNullable<typeof project> => Boolean(project));

  return (
    <Section id="examples" containerSize="wide" className="border-t border-line">
      <SectionHeading
        eyebrow={t("eyebrow")}
        title={t(`${audience}Title`)}
        subtitle={t(`${audience}Subtitle`)}
      />
      <div className="mt-14">
        <ProjectGrid audience={audience} items={items} showFilters={false} />
      </div>
      <div className="mt-10 flex justify-center">
        <LinkButton href="/projects" variant="secondary">
          {t("viewAll")}
          <Icon
            name="arrow-right"
            className="size-4 transition-transform group-hover:translate-x-0.5"
          />
        </LinkButton>
      </div>
    </Section>
  );
}
