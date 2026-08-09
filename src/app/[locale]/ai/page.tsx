import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { AudienceBeacon } from "@/components/audience-beacon";
import { AudienceProjects } from "@/components/sections/audience-projects";
import { ServiceHero } from "@/components/service/service-hero";
import { ServiceProcess } from "@/components/service/service-process";
import { ServicePackages } from "@/components/service/service-packages";
import { ServiceFaq } from "@/components/service/service-faq";
import { RoiPanel } from "@/components/service/roi-panel";
import { Contact } from "@/components/sections/contact";
import { JsonLd, breadcrumbSchema } from "@/components/json-ld";
import { paths } from "@/config/paths";
import { getService, profile } from "@/content/site";
import { buildMetadata } from "@/lib/seo";

const PATH = paths.aiLanding;

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return buildMetadata({
    locale,
    path: PATH,
    title: t("aiTitle"),
    description: t("aiDescription"),
  });
}

export default async function AiLandingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const service = getService("ai-automation");
  const t = await getTranslations({ locale, namespace: "Services" });
  const ta = await getTranslations({ locale, namespace: "AiAutomation" });
  const tc = await getTranslations({ locale, namespace: "Common" });
  const tn = await getTranslations({ locale, namespace: "Nav" });

  return (
    <>
      <AudienceBeacon audience="ai" />
      <ServiceHero
        service={service}
        locale={locale}
        primaryCta={{ label: ta("auditCta"), href: profile.calendarUrlLong, external: true }}
        secondaryCta={{ label: tc("getInTouch"), href: "#contact" }}
      />

      <RoiPanel locale={locale} />

      <AudienceProjects locale={locale} audience="ai" />

      <ServiceProcess service={service} locale={locale} title={t("processTitle")} />

      <ServicePackages
        service={service}
        locale={locale}
        title={t("packagesTitle")}
        cta={{ label: tc("bookCall"), href: profile.calendarUrl, external: true }}
      />

      <ServiceFaq service={service} locale={locale} title={t("faqTitle")} />

      <Contact locale={locale} defaultProjectType="ai" />

      <JsonLd
        data={breadcrumbSchema(locale, [
          { name: tn("services_ai"), path: PATH },
        ])}
      />
    </>
  );
}
