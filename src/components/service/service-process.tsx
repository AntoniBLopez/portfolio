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
            className="relative flex h-full flex-col gap-4 rounded-2xl bg-panel p-7 ring-1 ring-line"
          >
            <span
              aria-hidden
              className="absolute top-5 right-6 font-mono text-4xl font-bold text-line-hi"
            >
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="grid size-11 place-items-center rounded-xl bg-brand-500/12 text-brand">
              <Icon name={step.icon} className="size-5" />
            </span>
            <div className="flex flex-col gap-2">
              <p className="text-xs font-semibold tracking-[0.14em] text-ink-3 uppercase">
                {t("stepLabel", { number: index + 1 })}
              </p>
              <h3 className="text-base font-semibold text-ink">{tx(step.title, locale)}</h3>
            </div>
            <p className="text-sm leading-relaxed text-ink-2">{tx(step.body, locale)}</p>
          </div>
        ))}
      </AnimatedGroup>
    </Section>
  );
}
