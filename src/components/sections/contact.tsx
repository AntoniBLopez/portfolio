import { getTranslations } from "next-intl/server";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { ContactForm } from "@/components/contact-form";
import { GradientMesh } from "@/components/gradient-mesh";
import { profile } from "@/content/site";
import type { ProjectType } from "@/lib/contact";

export async function Contact({
  locale,
  defaultProjectType,
}: {
  locale: string;
  defaultProjectType?: ProjectType;
}) {
  const t = await getTranslations({ locale, namespace: "Contact" });
  const tc = await getTranslations({ locale, namespace: "Common" });

  return (
    <Section
      id="contact"
      containerSize="wide"
      className="relative isolate overflow-hidden border-t border-line"
    >
      <GradientMesh grid={false} className="opacity-70" />

      <div className="relative">
        <SectionHeading
          eyebrow={t("eyebrow")}
          title={t("title")}
          subtitle={t("subtitle")}
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.35fr_1fr]">
          <Card className="p-7 sm:p-9">
            <h3 className="mb-6 text-lg font-semibold text-ink">{t("formTitle")}</h3>
            <ContactForm defaultProjectType={defaultProjectType} />
          </Card>

          <div className="flex flex-col gap-6">
            <Card glow className="flex flex-col gap-5 p-7 sm:p-9">
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-semibold text-ink">{t("directTitle")}</h3>
                <p className="text-sm leading-relaxed text-ink-2">{t("directSubtitle")}</p>
              </div>

              <div className="flex flex-col gap-2.5">
                <ContactLink
                  href={profile.calendarUrl}
                  icon="calendar"
                  label={tc("bookCall")}
                  detail={t("responseTime")}
                  external
                  highlight
                />
                <ContactLink
                  href={`mailto:${profile.email}`}
                  icon="mail"
                  label={tc("emailMe")}
                  detail={profile.email}
                />
              </div>
            </Card>

            <Card className="flex flex-col gap-4 p-7 sm:p-9">
              <h3 className="text-xs font-semibold tracking-[0.18em] text-ink-3 uppercase">
                {tc("getInTouch")}
              </h3>
              <div className="flex flex-col gap-2.5">
                {profile.socials.map((social) => (
                  <ContactLink
                    key={social.href}
                    href={social.href}
                    icon={social.icon}
                    label={social.label}
                    external
                  />
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </Section>
  );
}

function ContactLink({
  href,
  icon,
  label,
  detail,
  external = false,
  highlight = false,
}: {
  href: string;
  icon: React.ComponentProps<typeof Icon>["name"];
  label: string;
  detail?: string;
  external?: boolean;
  highlight?: boolean;
}) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={
        highlight
          ? "group flex items-center gap-3.5 rounded-xl bg-brand-500/10 p-3.5 ring-1 ring-brand-500/25 transition-colors hover:bg-brand-500/15"
          : "group flex items-center gap-3.5 rounded-xl p-3.5 ring-1 ring-line transition-colors hover:bg-panel-hi hover:ring-line-hi"
      }
    >
      <span
        className={
          highlight
            ? "grid size-10 shrink-0 place-items-center rounded-lg bg-brand-600 text-white"
            : "grid size-10 shrink-0 place-items-center rounded-lg bg-panel-hi text-brand"
        }
      >
        <Icon name={icon} className="size-4.5" />
      </span>
      <span className="flex min-w-0 flex-col">
        <span className="text-sm font-medium text-ink">{label}</span>
        {detail && <span className="truncate text-xs text-ink-3">{detail}</span>}
      </span>
      <Icon
        name="arrow-up-right"
        className="ml-auto size-4 shrink-0 text-ink-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      />
    </a>
  );
}
