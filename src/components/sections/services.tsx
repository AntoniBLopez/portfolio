import { getTranslations } from "next-intl/server";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { LinkButton, buttonStyles } from "@/components/ui/button";
import { AnimatedGroup } from "@/components/ui/reveal";
import { profile, services, tx, txList } from "@/content/site";
import { cn } from "@/lib/utils";

export async function Services({ locale }: { locale: string }) {
  const t = await getTranslations({ locale, namespace: "Services" });
  const tc = await getTranslations({ locale, namespace: "Common" });

  return (
    <Section id="services" containerSize="wide" className="border-t border-line bg-canvas-2">
      <SectionHeading eyebrow={t("eyebrow")} title={t("title")} subtitle={t("subtitle")} />

      <AnimatedGroup
        className="mt-14 grid gap-6 lg:grid-cols-2"
        itemClassName="h-full"
        stagger={0.12}
      >
        {services.map((service, index) => {
          const outcomes = txList(service.outcomes, locale).slice(0, 4);
          const entryPrice = service.packages[0]?.price;
          const isPrimary = index === 0;

          return (
            <Card
              key={service.slug}
              glow
              interactive
              className={cn(
                "flex h-full flex-col gap-7 p-8 sm:p-10",
                !isPrimary && "ring-brand-500/25",
              )}
            >
              <div className="flex items-start justify-between gap-4">
                <span className="grid size-12 place-items-center rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-lg shadow-brand-600/25">
                  <Icon name={service.icon} className="size-6" />
                </span>
                {entryPrice && (
                  <span className="text-right">
                    <span className="block text-xs text-ink-3">{t("startingAt")}</span>
                    <span className="block text-lg font-semibold text-ink">{entryPrice}</span>
                  </span>
                )}
              </div>

              <div className="flex flex-col gap-3">
                <h3 className="text-2xl font-semibold tracking-tight text-ink">
                  {tx(service.name, locale)}
                </h3>
                <p className="text-base leading-relaxed text-ink-2">
                  {tx(service.tagline, locale)}
                </p>
              </div>

              <ul className="flex flex-col gap-3">
                {outcomes.map((outcome) => (
                  <li key={outcome} className="flex items-start gap-2.5 text-sm text-ink-2">
                    <Icon name="check-circle" className="mt-0.5 size-4 shrink-0 text-brand" />
                    {outcome}
                  </li>
                ))}
              </ul>

              <div className="mt-auto flex flex-col gap-3 pt-2 sm:flex-row">
                <LinkButton href={`/services/${service.slug}`} className="flex-1">
                  {tc("learnMore")}
                  <Icon
                    name="arrow-right"
                    className="size-4 transition-transform group-hover:translate-x-0.5"
                  />
                </LinkButton>
                {service.slug === "web-development" ? (
                  <a
                    href={profile.fiverrUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={buttonStyles({ variant: "secondary", className: "flex-1" })}
                  >
                    {tc("orderOnFiverr")}
                    <Icon name="arrow-up-right" className="size-4" />
                  </a>
                ) : (
                  <a
                    href={profile.calendarUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={buttonStyles({ variant: "secondary", className: "flex-1" })}
                  >
                    {tc("bookCall")}
                    <Icon name="arrow-up-right" className="size-4" />
                  </a>
                )}
              </div>
            </Card>
          );
        })}
      </AnimatedGroup>
    </Section>
  );
}
