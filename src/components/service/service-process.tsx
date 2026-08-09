import { getTranslations } from "next-intl/server";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Icon } from "@/components/ui/icon";
import { AnimatedGroup } from "@/components/ui/reveal";
import { tx, type Service } from "@/content/site";

export async function ServiceProcess({
  service,
  locale,
  title,
}: {
  service: Service;
  locale: string;
  title: string;
}) {
  const t = await getTranslations({ locale, namespace: "Services" });
  const paymentSteps = service.paymentSteps;

  return (
    <Section id="process" containerSize="wide" className="border-t border-line">
      <SectionHeading eyebrow={t("processLabel")} title={title} />

      <AnimatedGroup
        className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        itemClassName="h-full"
        stagger={0.09}
      >
        {service.process.map((step, index) => (
          <div
            key={step.title.en}
            className="flex h-full flex-col gap-4 rounded-2xl bg-panel p-7 ring-1 ring-line"
          >
            <div className="flex items-center justify-between gap-4">
              <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-brand-500/12 text-brand">
                <Icon name={step.icon} className="size-5" />
              </span>
              <span
                aria-hidden
                className="font-mono text-4xl font-bold leading-none text-line-hi"
              >
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>
            <h3 className="text-base font-semibold text-ink">{tx(step.title, locale)}</h3>
            <p className="text-sm leading-relaxed text-ink-2">{tx(step.body, locale)}</p>
          </div>
        ))}
      </AnimatedGroup>

      {paymentSteps && paymentSteps.length > 0 && (
        <div className="mt-12 rounded-2xl bg-panel p-6 ring-1 ring-line sm:p-8">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold tracking-[0.18em] text-brand uppercase">
                {t("paymentsLabel")}
              </p>
              <h3 className="mt-2 text-xl font-semibold tracking-tight text-ink sm:text-2xl">
                {t("paymentsTitle")}
              </h3>
            </div>
            <p className="max-w-md text-sm text-ink-2">{t("paymentsSubtitle")}</p>
          </div>

          <ol className="mt-8 grid gap-4 sm:grid-cols-3">
            {paymentSteps.map((step, index) => (
              <li
                key={step.percent}
                className="relative flex flex-col gap-3 rounded-xl bg-canvas-2 p-5 ring-1 ring-line"
              >
                <div className="flex items-baseline justify-between gap-3">
                  <span className="text-3xl font-semibold tracking-tight text-brand sm:text-4xl">
                    {step.percent}
                  </span>
                  <span className="font-mono text-xs text-ink-3">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="flex flex-col gap-1.5">
                  <h4 className="text-sm font-semibold text-ink">{tx(step.title, locale)}</h4>
                  <p className="text-sm leading-relaxed text-ink-2">{tx(step.body, locale)}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      )}
    </Section>
  );
}
