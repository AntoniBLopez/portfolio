import { getTranslations } from "next-intl/server";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { AnimatedGroup, Reveal } from "@/components/ui/reveal";
import { automationAreas, calculateRoi, profile, roiExample, tx } from "@/content/site";
import { buttonStyles } from "@/components/ui/button";

export async function RoiPanel({ locale }: { locale: string }) {
  const t = await getTranslations({ locale, namespace: "AiAutomation" });
  const roi = calculateRoi();

  const currency = new Intl.NumberFormat(locale === "es" ? "es-ES" : "en-GB", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  });
  const number = new Intl.NumberFormat(locale === "es" ? "es-ES" : "en-GB");

  return (
    <Section id="roi" containerSize="wide" className="border-t border-line bg-canvas-2">
      <SectionHeading
        eyebrow={t("roiEyebrow")}
        title={t("roiTitle")}
        subtitle={t("roiSubtitle")}
      />

      <div className="mt-14 grid gap-6 lg:grid-cols-[1fr_1fr]">
        <Reveal>
          <Card className="flex h-full flex-col gap-6 p-8">
            <div className="flex items-center gap-3">
              <span className="grid size-10 place-items-center rounded-xl bg-red-500/10 text-red-400">
                <Icon name="clock" className="size-5" />
              </span>
              <h3 className="text-base font-semibold text-ink">{t("roiBefore")}</h3>
            </div>
            <dl className="flex flex-col gap-4">
              <RoiRow label={t("roiPeople")} value={number.format(roiExample.teamSize)} />
              <RoiRow
                label={t("roiHoursPerPerson")}
                value={number.format(roiExample.hoursPerPersonPerWeek)}
              />
              <RoiRow label={t("roiHoursPerYear")} value={number.format(roi.annualHours)} />
              <RoiRow
                label={t("roiAnnualCost")}
                value={currency.format(roi.annualCost)}
                emphasis
              />
            </dl>
          </Card>
        </Reveal>

        <Reveal delay={0.08}>
          <Card glow className="flex h-full flex-col gap-6 p-8 ring-brand-500/30">
            <div className="flex items-center gap-3">
              <span className="grid size-10 place-items-center rounded-xl bg-brand-500/15 text-brand">
                <Icon name="workflow" className="size-5" />
              </span>
              <h3 className="text-base font-semibold text-ink">{t("roiAfter")}</h3>
            </div>
            <dl className="flex flex-col gap-4">
              <RoiRow
                label={t("roiAutomatedShare")}
                value={`${Math.round(roiExample.automatedShare * 100)}%`}
              />
              <RoiRow label={t("roiHoursSaved")} value={number.format(roi.savedHoursWeekly)} />
              <RoiRow
                label={t("roiHoursReturnedYear")}
                value={number.format(Math.round(roi.annualHours * roiExample.automatedShare))}
              />
            </dl>
            <div className="mt-auto rounded-xl bg-brand-500/10 p-5 ring-1 ring-brand-500/25">
              <p className="text-xs tracking-wide text-ink-2 uppercase">{t("roiAnnual")}</p>
              <p className="mt-1 text-4xl font-semibold tracking-tight text-brand">
                {currency.format(roi.annualSaving)}
              </p>
            </div>
          </Card>
        </Reveal>
      </div>

      <div className="mt-20 flex flex-col gap-8 border-t border-line pt-14">
        <h3 className="text-2xl font-semibold tracking-tight text-ink">{t("areasTitle")}</h3>

        <AnimatedGroup
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          itemClassName="h-full"
          stagger={0.06}
        >
          {automationAreas.map((area) => (
            <Card key={area.title.en} className="h-full p-6" interactive>
              <span className="grid size-10 place-items-center rounded-xl bg-brand-500/12 text-brand">
                <Icon name={area.icon} className="size-5" />
              </span>
              <h4 className="mt-4 text-base font-semibold text-ink">{tx(area.title, locale)}</h4>
              <p className="mt-2 text-sm leading-relaxed text-ink-2">{tx(area.body, locale)}</p>
            </Card>
          ))}
        </AnimatedGroup>
      </div>

      <Reveal>
        <Card glow className="mt-16 flex flex-col gap-6 p-8 sm:p-10 lg:flex-row lg:items-center">
          <div className="flex flex-col gap-3">
            <h3 className="text-2xl font-semibold tracking-tight text-ink">
              {t("auditTitle")}
            </h3>
            <p className="max-w-2xl text-sm leading-relaxed text-ink-2 sm:text-base">
              {t("auditBody")}
            </p>
          </div>
          <a
            href={profile.calendarUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonStyles({ size: "lg", className: "shrink-0 lg:ml-auto" })}
          >
            {t("auditCta")}
            <Icon name="arrow-up-right" className="size-4" />
          </a>
        </Card>
      </Reveal>
    </Section>
  );
}

function RoiRow({
  label,
  value,
  emphasis = false,
}: {
  label: string;
  value: string;
  emphasis?: boolean;
}) {
  return (
    <div className="flex items-baseline justify-between gap-4 border-b border-line pb-3 last:border-0 last:pb-0">
      <dt className="text-sm text-ink-2">{label}</dt>
      <dd
        className={
          emphasis
            ? "font-mono text-lg font-semibold text-ink"
            : "font-mono text-base text-ink"
        }
      >
        {value}
      </dd>
    </div>
  );
}
