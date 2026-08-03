import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
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

  return (
    <>
      <WebLandingHero locale={locale} />
      <WebDevelopmentContent locale={locale} />

      <JsonLd
        data={breadcrumbSchema(locale, [
          { name: tn("services_web"), path: PATH },
        ])}
      />
    </>
  );
}
