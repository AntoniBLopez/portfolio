import { getTranslations } from "next-intl/server";
import { Container } from "@/components/ui/container";
import { Icon } from "@/components/ui/icon";
import { Badge } from "@/components/ui/badge";
import { buttonStyles } from "@/components/ui/button";
import { GradientMesh } from "@/components/gradient-mesh";
import { ProfileLogo } from "@/components/profile-logo";
import { Reveal } from "@/components/ui/reveal";
import { getService, heroStats, profile, tx, txList } from "@/content/site";

export async function WebLandingHero({ locale }: { locale: string }) {
  const t = await getTranslations({ locale, namespace: "WebLanding" });
  const th = await getTranslations({ locale, namespace: "Hero" });
  const ts = await getTranslations({ locale, namespace: "Services" });
  const tc = await getTranslations({ locale, namespace: "Common" });
  const service = getService("web-development");
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

            <Reveal delay={0.05} className="max-w-3xl">
              <div className="mb-5 flex items-center gap-3">
                <ProfileLogo priority className="size-12 rounded-2xl sm:size-14" />
                <div className="flex flex-col gap-0.5">
                  <p className="text-base font-semibold tracking-tight text-ink sm:text-lg">
                    {profile.name}
                  </p>
                  <p className="flex flex-wrap items-center gap-x-2 gap-y-0.5 text-sm font-medium text-brand">
                    {tx(profile.role, locale)}
                    <span aria-hidden className="text-ink-3">
                      /
                    </span>
                    <span className="text-ink-2">
                      {profile.yearsExperience}+ {t("yearsLabel")}
                    </span>
                  </p>
                </div>
              </div>
              <h1 className="text-gradient text-4xl font-semibold tracking-tight sm:text-5xl lg:text-[3.5rem] lg:leading-[1.08]">
                {t("headline")}
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="max-w-2xl text-base leading-relaxed text-ink-2 sm:text-lg">
                {t("summary")}
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="flex flex-col gap-3 sm:flex-row">
                <a href="#packages" className={buttonStyles({ size: "lg" })}>
                  {t("primaryCta")}
                  <Icon
                    name="arrow-right"
                    className="size-4 transition-transform group-hover:translate-x-0.5"
                  />
                </a>
                <a
                  href={profile.fiverrUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={buttonStyles({ variant: "secondary", size: "lg" })}
                >
                  {tc("orderOnFiverr")}
                  <Icon name="arrow-up-right" className="size-4" />
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="flex items-center gap-2">
                {profile.socials.map((social) => (
                  <a
                    key={social.href}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    title={social.label}
                    className="grid size-10 place-items-center rounded-full text-ink-2 ring-1 ring-line transition-all hover:-translate-y-0.5 hover:text-ink hover:ring-line-hi"
                  >
                    <Icon name={social.icon} className="size-4.5" />
                  </a>
                ))}
                <span className="ml-2 inline-flex items-center gap-1.5 text-xs text-ink-3">
                  <Icon name="map-pin" className="size-3.5" />
                  {tx(profile.location, locale)}
                </span>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <div className="rounded-2xl bg-panel/70 p-7 ring-1 ring-line backdrop-blur-md sm:p-8">
              <h2 className="text-xs font-semibold tracking-[0.18em] text-ink-3 uppercase">
                {ts("deliverablesLabel")}
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

        <dl className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-2xl bg-line ring-1 ring-line sm:mt-20 sm:grid-cols-3">
          {heroStats.map((stat) => (
            <div key={stat.labelKey} className="bg-panel px-6 py-7">
              <dt className="text-sm text-ink-3">{th(stat.labelKey)}</dt>
              <dd className="mt-1.5 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
