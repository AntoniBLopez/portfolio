import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { ServiceHero } from "@/components/service/service-hero";
import { ServicePackages } from "@/components/service/service-packages";
import { ServiceProcess } from "@/components/service/service-process";
import { ServiceFaq } from "@/components/service/service-faq";
import { Contact } from "@/components/sections/contact";
import { JsonLd, breadcrumbSchema } from "@/components/json-ld";
import { getService, profile } from "@/content/site";
import { buildMetadata } from "@/lib/seo";

const PATH = "/services/web-development";

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
    title: t("webTitle"),
    description: t("webDescription"),
  });
}

export default async function WebDevelopmentPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const service = getService("web-development");
  const t = await getTranslations({ locale, namespace: "Services" });
  const tc = await getTranslations({ locale, namespace: "Common" });
  const tn = await getTranslations({ locale, namespace: "Nav" });

  return (
    <>
      <ServiceHero
        service={service}
        locale={locale}
        primaryCta={{ label: tc("orderOnFiverr"), href: profile.fiverrUrl, external: true }}
        secondaryCta={{ label: tc("workWithMeDirectly"), href: "#contact" }}
      />

      <ServicePackages
        service={service}
        locale={locale}
        title={t("packagesTitle")}
        cta={{ label: tc("orderOnFiverr"), href: profile.fiverrUrl, external: true }}
      />

      <ServiceProcess service={service} locale={locale} title={t("processTitle")} />

      <ServiceFaq service={service} locale={locale} title={t("faqTitle")} />

      <Contact locale={locale} defaultProjectType="web" />

      <JsonLd
        data={breadcrumbSchema(locale, [
          { name: tn("services"), path: "/#services" },
          { name: tn("services_web"), path: PATH },
        ])}
      />
    </>
  );
}
