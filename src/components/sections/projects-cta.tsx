import { getTranslations } from "next-intl/server";
import { Section } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { buttonStyles } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { profile } from "@/content/site";

export async function ProjectsCta({ locale }: { locale: string }) {
  const t = await getTranslations({ locale, namespace: "Projects" });
  const tc = await getTranslations({ locale, namespace: "Common" });

  return (
    <Section containerSize="wide" className="pt-0">
      <Reveal>
        <Card
          glow
          className="flex flex-col gap-7 p-8 sm:p-12 lg:flex-row lg:items-center lg:gap-12"
        >
          <div className="flex flex-col gap-3">
            <h2 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
              {t("ctaTitle")}
            </h2>
            <p className="max-w-2xl text-sm leading-relaxed text-ink-2 sm:text-base">
              {t("ctaBody")}
            </p>
          </div>

          <div className="flex shrink-0 flex-col gap-3 sm:flex-row lg:ml-auto">
            <a
              href={profile.calendarUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonStyles({ size: "lg" })}
            >
              {tc("bookCall")}
              <Icon name="arrow-up-right" className="size-4" />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className={buttonStyles({ variant: "secondary", size: "lg" })}
            >
              {tc("emailMe")}
              <Icon name="mail" className="size-4" />
            </a>
          </div>
        </Card>
      </Reveal>
    </Section>
  );
}
