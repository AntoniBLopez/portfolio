import { getTranslations } from "next-intl/server";
import { AudienceProjects } from "@/components/sections/audience-projects";
import { ServicePackages } from "@/components/service/service-packages";
import { ServiceProcess } from "@/components/service/service-process";
import { ServiceFaq } from "@/components/service/service-faq";
import { whatsappUrlWithText } from "@/config/contact";
import { getService } from "@/content/site";

/**
 * Body of the web-development offer: packages, process, examples and FAQ.
 * Used by the `/web` landing (contact / cross-sell live on the page).
 */
export async function WebDevelopmentContent({ locale }: { locale: string }) {
  const service = getService("web-development");
  const t = await getTranslations({ locale, namespace: "Services" });
  const tc = await getTranslations({ locale, namespace: "Common" });

  return (
    <>
      {/* Alternate canvas / canvas-2 after the hero. */}
      <ServiceProcess
        service={service}
        locale={locale}
        title={t("processTitle")}
        className="bg-canvas-2"
      />

      <AudienceProjects locale={locale} audience="web" />

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

      <ServiceFaq
        service={service}
        locale={locale}
        title={t("faqTitle")}
        className="bg-canvas"
      />
    </>
  );
}
