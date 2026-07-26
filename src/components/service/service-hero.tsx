import { getTranslations } from "next-intl/server";
import { Container } from "@/components/ui/container";
import { Icon } from "@/components/ui/icon";
import { Badge } from "@/components/ui/badge";
import { buttonStyles } from "@/components/ui/button";
import { GradientMesh } from "@/components/gradient-mesh";
import { Reveal } from "@/components/ui/reveal";
import { tx, txList, type Service } from "@/content/site";

type Cta = { label: string; href: string; external?: boolean };

export async function ServiceHero({
  service,
  locale,
  primaryCta,
  secondaryCta,
}: {
  service: Service;
  locale: string;
  primaryCta: Cta;
  secondaryCta: Cta;
}) {
  const t = await getTranslations({ locale, namespace: "Services" });
  const outcomes = txList(service.outcomes, locale);

  return (
    <section className="relative isolate overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-20">
      <GradientMesh />

      <Container size="wide" className="relative">
        <div className="grid gap-14 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
          <div className="flex flex-col items-start gap-7">
            <Reveal>
              <Badge variant="brand" className="px-3 py-1.5 text-sm">
                <Icon name={service.icon} className="size-4" />
                {tx(service.name, locale)}
              </Badge>
            </Reveal>

            <Reveal delay={0.05}>
              <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-ink sm:text-5xl lg:text-[3.5rem] lg:leading-[1.08]">
                {tx(service.tagline, locale)}
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="max-w-2xl text-base leading-relaxed text-ink-2 sm:text-lg">
                {tx(service.summary, locale)}
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="flex flex-col gap-3 sm:flex-row">
                <CtaLink cta={primaryCta} variant="primary" />
                <CtaLink cta={secondaryCta} variant="secondary" />
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <div className="rounded-2xl bg-panel/70 p-7 ring-1 ring-line backdrop-blur-md sm:p-8">
              <h2 className="text-xs font-semibold tracking-[0.18em] text-ink-3 uppercase">
                {t("deliverablesLabel")}
              </h2>
              <ul className="mt-6 flex flex-col gap-4">
                {outcomes.map((outcome) => (
                  <li key={outcome} className="flex items-start gap-3 text-sm text-ink-2">
                    <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-brand-500/15 text-brand">
                      <Icon name="check" className="size-3" />
                    </span>
                    {outcome}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

function CtaLink({ cta, variant }: { cta: Cta; variant: "primary" | "secondary" }) {
  const className = buttonStyles({ variant, size: "lg" });

  return (
    <a
      href={cta.href}
      {...(cta.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={className}
    >
      {cta.label}
      <Icon
        name={cta.external ? "arrow-up-right" : "arrow-right"}
        className="size-4 transition-transform group-hover:translate-x-0.5"
      />
    </a>
  );
}
