import { getTranslations } from "next-intl/server";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { AnimatedGroup, Reveal } from "@/components/ui/reveal";
import { about, skillGroups, txList, tx } from "@/content/site";

export async function About({ locale }: { locale: string }) {
  const t = await getTranslations({ locale, namespace: "About" });
  const paragraphs = txList(about.paragraphs, locale);

  return (
    <Section id="about" containerSize="wide" className="border-t border-line">
      <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20">
        <div className="flex flex-col gap-8">
          <SectionHeading eyebrow={t("eyebrow")} title={t("title")} />
          <div className="flex flex-col gap-5">
            {paragraphs.map((paragraph, index) => (
              <Reveal key={index} delay={index * 0.05}>
                <p className="text-base leading-relaxed text-ink-2">{paragraph}</p>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <h3 className="text-xs font-semibold tracking-[0.18em] text-ink-3 uppercase">
            {t("principlesTitle")}
          </h3>
          <AnimatedGroup
            className="grid gap-4 sm:grid-cols-2"
            itemClassName="h-full"
            stagger={0.07}
          >
            {about.principles.map((principle) => (
              <Card key={principle.title.en} className="h-full p-6" interactive>
                <span className="grid size-10 place-items-center rounded-xl bg-brand-500/12 text-brand">
                  <Icon name={principle.icon} className="size-5" />
                </span>
                <h4 className="mt-4 text-base font-semibold text-ink">
                  {tx(principle.title, locale)}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-ink-2">
                  {tx(principle.body, locale)}
                </p>
              </Card>
            ))}
          </AnimatedGroup>
        </div>
      </div>

      <div className="mt-20 flex flex-col gap-8 border-t border-line pt-14">
        <div className="flex flex-col gap-3">
          <h3 className="text-2xl font-semibold tracking-tight text-ink">
            {t("skillsTitle")}
          </h3>
          <p className="max-w-2xl text-sm leading-relaxed text-ink-2">
            {t("skillsSubtitle")}
          </p>
        </div>

        <AnimatedGroup
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          itemClassName="h-full"
          stagger={0.06}
        >
          {skillGroups.map((group) => (
            <Card key={group.title.en} className="h-full p-6">
              <div className="flex items-center gap-3">
                <span className="grid size-9 place-items-center rounded-lg bg-brand-500/12 text-brand">
                  <Icon name={group.icon} className="size-4.5" />
                </span>
                <h4 className="text-sm font-semibold text-ink">{tx(group.title, locale)}</h4>
              </div>
              <ul className="mt-5 flex flex-col gap-2.5">
                {group.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-ink-2">
                    <Icon name="check" className="mt-0.5 size-3.5 shrink-0 text-brand" />
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </AnimatedGroup>
      </div>
    </Section>
  );
}
