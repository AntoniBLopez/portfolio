import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { Icon } from "@/components/ui/icon";
import { AnimatedGroup, Reveal } from "@/components/ui/reveal";
import { images } from "@/config/images";
import { experience, profile, tx, txList } from "@/content/site";

export async function Experience({ locale }: { locale: string }) {
  const t = await getTranslations({ locale, namespace: "Experience" });

  return (
    <Section id="experience" containerSize="wide" className="border-t border-line bg-canvas-2">
      <div className="grid items-center gap-10 lg:grid-cols-[1fr_minmax(0,17rem)] lg:gap-16">
        <SectionHeading
          eyebrow={t("eyebrow")}
          title={t("title")}
          subtitle={t("subtitle")}
        />

        <Reveal delay={0.08}>
          <div className="relative mx-auto w-44 sm:w-52 lg:mx-0 lg:w-full lg:max-w-[17rem] lg:justify-self-end">
            <div
              aria-hidden
              className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-brand-500/25 via-brand-600/10 to-transparent blur-2xl"
            />
            <Image
              src={images.portrait}
              alt={profile.name}
              width={1313}
              height={1750}
              className="relative aspect-3/4 h-auto w-full object-cover object-[center_12%]"
              sizes="(max-width: 1024px) 13rem, 17rem"
              priority={false}
            />
          </div>
        </Reveal>
      </div>

      <AnimatedGroup className="mt-14 flex flex-col sm:mt-16" stagger={0.1}>
        {experience.map((entry, index) => (
          <article
            key={`${entry.company}-${entry.start}`}
            className={
              index === experience.length - 1
                ? "group relative grid gap-6 border-l border-line pb-0 pl-8 sm:grid-cols-[minmax(0,10rem)_1fr] sm:gap-10 sm:pl-10"
                : "group relative grid gap-6 border-l border-line pb-16 pl-8 sm:grid-cols-[minmax(0,10rem)_1fr] sm:gap-10 sm:pb-20 sm:pl-10"
            }
          >
            <span
              aria-hidden
              className="absolute top-1.5 -left-[5px] size-2.5 rounded-full bg-brand-500 ring-4 ring-canvas-2 transition-transform group-hover:scale-125"
            />

            <div className="flex flex-col gap-1.5">
              <p className="font-mono text-sm text-brand">
                {entry.start} — {entry.end ?? t("present")}
              </p>
              <p className="inline-flex items-center gap-1.5 text-xs text-ink-3">
                <Icon name="map-pin" className="size-3.5" />
                {tx(entry.location, locale)}
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <h3 className="text-lg font-semibold text-ink">{tx(entry.role, locale)}</h3>
                <p className="text-sm font-medium text-ink-2">{entry.company}</p>
              </div>

              <p className="text-sm leading-relaxed text-ink-2">{tx(entry.summary, locale)}</p>

              <div className="flex flex-col gap-2.5">
                <h4 className="text-xs font-semibold tracking-[0.14em] text-ink-3 uppercase">
                  {t("highlightsLabel")}
                </h4>
                <ul className="flex flex-col gap-2">
                  {txList(entry.highlights, locale).map((highlight, highlightIndex) => (
                    <li
                      key={highlightIndex}
                      className="flex items-start gap-2.5 text-sm text-ink-2"
                    >
                      <Icon name="check-circle" className="mt-0.5 size-4 shrink-0 text-brand" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-1">
                {entry.stack.map((item) => (
                  <Badge key={item} variant="tech">
                    {item}
                  </Badge>
                ))}
              </div>
            </div>
          </article>
        ))}
      </AnimatedGroup>
    </Section>
  );
}
