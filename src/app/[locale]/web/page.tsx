import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { AudienceBeacon } from "@/components/audience-beacon";
import { Services } from "@/components/sections/services";
import { Contact } from "@/components/sections/contact";
import { WebLandingHero } from "@/components/service/web-landing-hero";
import { WebDevelopmentContent } from "@/components/service/web-development-content";
import { JsonLd, breadcrumbSchema } from "@/components/json-ld";
import { paths } from "@/config/paths";
import { buildMetadata } from "@/lib/seo";

const PATH = paths.webLanding;

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
    title: t("webLandingTitle"),
    description: t("webLandingDescription"),
  });
}

export default async function WebLandingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const tn = await getTranslations({ locale, namespace: "Nav" });
  const tw = await getTranslations({ locale, namespace: "WebLanding" });

  return (
    <>
      <AudienceBeacon audience="web" />
      <WebLandingHero locale={locale} />
      <WebDevelopmentContent locale={locale} />
      <Services
        locale={locale}
        id="also"
        eyebrow={tw("crossSellEyebrow")}
        title={tw("crossSellTitle")}
        subtitle={tw("crossSellSubtitle")}
      />
      <Contact locale={locale} defaultProjectType="web" />

      <JsonLd
        data={breadcrumbSchema(locale, [
          { name: tn("services_web"), path: PATH },
        ])}
      />
    </>
  );
}
