import { getTranslations } from "next-intl/server";
import { ServicePackages } from "@/components/service/service-packages";
import { ServiceProcess } from "@/components/service/service-process";
import { ServiceFaq } from "@/components/service/service-faq";
import { Contact } from "@/components/sections/contact";
import { getService, profile } from "@/content/site";

/**
 * Shared body of the web-development offer: packages, process, FAQ and contact.
 * Used by `/services/web-development` and the short `/web` landing.
 */
export async function WebDevelopmentContent({ locale }: { locale: string }) {
  const service = getService("web-development");
  const t = await getTranslations({ locale, namespace: "Services" });
  const tc = await getTranslations({ locale, namespace: "Common" });

  return (
    <>
      <ServicePackages
        service={service}
        locale={locale}
        title={t("packagesTitle")}
        cta={{ label: tc("orderOnFiverr"), href: profile.fiverrUrl, external: true }}
      />

      <ServiceProcess service={service} locale={locale} title={t("processTitle")} />

      <ServiceFaq service={service} locale={locale} title={t("faqTitle")} />

      <Contact locale={locale} defaultProjectType="web" />
    </>
  );
}
