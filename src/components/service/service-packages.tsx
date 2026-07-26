import { getTranslations } from "next-intl/server";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Icon } from "@/components/ui/icon";
import { AnimatedGroup } from "@/components/ui/reveal";
import { tx, txList, type Service } from "@/content/site";
import { cn } from "@/lib/utils";

export async function ServicePackages({
  service,
  locale,
  title,
  cta,
}: {
  service: Service;
  locale: string;
  title: string;
  cta: { label: string; href: string; external?: boolean };
}) {
  const t = await getTranslations({ locale, namespace: "Services" });

  return (
    <Section id="packages" containerSize="wide" className="border-t border-line bg-canvas-2">
      <SectionHeading eyebrow={t("packagesLabel")} title={title} />

      <AnimatedGroup
        className="mt-14 grid gap-6 lg:grid-cols-3"
        itemClassName="h-full"
        stagger={0.1}
      >
        {service.packages.map((pkg) => (
          <div
            key={pkg.name.en}
            className={cn(
              "relative flex h-full flex-col gap-6 rounded-2xl bg-panel p-7 ring-1 transition-all duration-300 hover:-translate-y-1 sm:p-8",
              pkg.popular
                ? "ring-2 ring-brand-500 shadow-2xl shadow-brand-900/25"
                : "ring-line hover:ring-line-hi",
            )}
          >
            {pkg.popular && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand-600 px-3 py-1 text-xs font-semibold whitespace-nowrap text-white shadow-lg shadow-brand-600/30">
                {t("mostPopular")}
              </span>
            )}

            <div className="flex flex-col gap-3">
              <h3 className="text-lg font-semibold text-ink">{tx(pkg.name, locale)}</h3>
              <div className="flex items-baseline gap-1.5">
                <span className="text-3xl font-semibold tracking-tight text-ink">
                  {pkg.price}
                </span>
              </div>
              <p className="inline-flex items-center gap-1.5 text-xs text-ink-3">
                <Icon name="clock" className="size-3.5" />
                {t("timelineLabel")}: {tx(pkg.timeline, locale)}
              </p>
            </div>

            <p className="text-sm leading-relaxed text-ink-2">{tx(pkg.description, locale)}</p>

            <ul className="flex flex-col gap-3 border-t border-line pt-6">
              {txList(pkg.features, locale).map((feature) => (
                <li key={feature} className="flex items-start gap-2.5 text-sm text-ink-2">
                  <Icon name="check" className="mt-0.5 size-4 shrink-0 text-brand" />
                  {feature}
                </li>
              ))}
            </ul>

            <a
              href={cta.href}
              {...(cta.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className={cn(
                "group mt-auto inline-flex h-11 items-center justify-center gap-2 rounded-full text-sm font-medium transition-all",
                pkg.popular
                  ? "bg-brand-600 text-white shadow-lg shadow-brand-600/25 hover:bg-brand-500"
                  : "bg-panel-hi text-ink ring-1 ring-line hover:ring-line-hi",
              )}
            >
              {cta.label}
              <Icon
                name={cta.external ? "arrow-up-right" : "arrow-right"}
                className="size-4 transition-transform group-hover:translate-x-0.5"
              />
            </a>
          </div>
        ))}
      </AnimatedGroup>
    </Section>
  );
}
