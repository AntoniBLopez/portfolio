import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Container } from "@/components/ui/container";
import { Icon } from "@/components/ui/icon";
import { buttonStyles } from "@/components/ui/button";
import { GradientMesh } from "@/components/gradient-mesh";
import { Reveal } from "@/components/ui/reveal";
import { images } from "@/config/images";
import { heroStats, profile, tx } from "@/content/site";

export async function Hero({ locale }: { locale: string }) {
  const t = await getTranslations({ locale, namespace: "Hero" });
  const tc = await getTranslations({ locale, namespace: "Common" });
  const tb = await getTranslations({ locale, namespace: "Brand" });

  return (
    <section className="relative isolate overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-24">
      <GradientMesh />

      <Container size="wide" className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_minmax(0,24rem)] lg:gap-16 xl:grid-cols-[1.15fr_minmax(0,28rem)]">
          <div className="flex flex-col items-start gap-8">
            <Reveal>
              <span className="inline-flex items-center gap-2.5 rounded-full bg-panel/80 px-3.5 py-1.5 text-xs font-medium text-ink-2 ring-1 ring-line backdrop-blur">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex size-2 rounded-full bg-emerald-400 animate-pulse-ring" />
                  <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
                </span>
                {t("availability")}
              </span>
            </Reveal>

            <Reveal delay={0.05} className="max-w-4xl">
              <h1 className="text-gradient text-4xl font-semibold sm:text-5xl lg:text-[4.25rem] lg:leading-[1.05]">
                {tx(profile.headline, locale)}
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="max-w-2xl text-base leading-relaxed text-ink-2 sm:text-lg">
                {tx(profile.summary, locale)}
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href={profile.calendarUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={buttonStyles({ size: "lg" })}
                >
                  {tc("bookCall")}
                  <Icon
                    name="arrow-right"
                    className="size-4 transition-transform group-hover:translate-x-0.5"
                  />
                </a>
                <a href="#work" className={buttonStyles({ variant: "secondary", size: "lg" })}>
                  {tc("viewWork")}
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

          <div className="mx-auto w-full max-w-[22rem] lg:max-w-none">
            <div className="relative aspect-4/5 w-full [mask-image:linear-gradient(to_bottom,black_78%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,black_78%,transparent_100%)] lg:hidden">
              <Image
                src={images.headshotHomeMobile}
                alt={profile.name}
                fill
                className="object-cover object-[center_18%]"
                sizes="100vw"
                quality={100}
                priority
                unoptimized
              />
            </div>
            <div className="relative hidden aspect-4/5 w-full [mask-image:linear-gradient(to_bottom,black_78%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,black_78%,transparent_100%)] lg:block">
              <Image
                src={images.headshotHome}
                alt={profile.name}
                fill
                className="object-cover object-[center_18%]"
                sizes="1200px"
                quality={100}
                priority
                unoptimized
              />
            </div>
            <Reveal delay={0.12}>
              <div className="mt-4 flex flex-col items-center gap-0.5 text-center">
                <p className="text-base font-semibold tracking-tight text-ink sm:text-lg">
                  {profile.name}
                </p>
                <p className="flex flex-wrap items-center justify-center gap-x-2 gap-y-0.5 text-sm font-medium text-brand">
                  {tb("roleRecruiter")}
                  <span aria-hidden className="text-ink-3">
                    /
                  </span>
                  <span className="text-ink-2">
                    {profile.yearsExperience}+ {tb("yearsLabel")}
                  </span>
                </p>
              </div>
            </Reveal>
          </div>
        </div>

        <dl className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-2xl bg-line ring-1 ring-line sm:mt-20 sm:grid-cols-3">
          {heroStats.map((stat) => (
            <div key={stat.labelKey} className="bg-panel px-6 py-7">
              <dt className="text-sm text-ink-3">{t(stat.labelKey)}</dt>
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
