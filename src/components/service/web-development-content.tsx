import { getTranslations } from "next-intl/server";
import { ServicePackages } from "@/components/service/service-packages";
import { ServiceProcess } from "@/components/service/service-process";
import { ServiceFaq } from "@/components/service/service-faq";
import { whatsappUrlWithText } from "@/config/contact";
import { getService } from "@/content/site";

/**
 * Body of the web-development offer: packages, process and FAQ.
 * Used by the `/web` landing (contact / cross-sell live on the page).
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
        approximatePricing
        cta={{
          label: tc("requestInfo"),
          external: true,
          href: (packageName) =>
            whatsappUrlWithText(tc("packageWhatsApp", { package: packageName })),
        }}
      />

      <ServiceProcess service={service} locale={locale} title={t("processTitle")} />

      <ServiceFaq service={service} locale={locale} title={t("faqTitle")} />
    </>
  );
}
