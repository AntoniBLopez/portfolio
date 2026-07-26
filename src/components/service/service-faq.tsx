import { getTranslations } from "next-intl/server";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { Icon } from "@/components/ui/icon";
import { JsonLd } from "@/components/json-ld";
import { tx, type Service } from "@/content/site";

export async function ServiceFaq({
  service,
  locale,
  title,
}: {
  service: Service;
  locale: string;
  title: string;
}) {
  const t = await getTranslations({ locale, namespace: "Services" });

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faq.map((item) => ({
      "@type": "Question",
      name: tx(item.question, locale),
      acceptedAnswer: { "@type": "Answer", text: tx(item.answer, locale) },
    })),
  };

  return (
    <Section
      id="faq"
      containerSize="default"
      className="border-t border-line bg-canvas-2"
    >
      <SectionHeading eyebrow={t("faqLabel")} title={title} />

      <div className="mt-12 flex flex-col gap-3">
        {service.faq.map((item) => (
          <details
            key={item.question.en}
            className="group rounded-2xl bg-panel px-6 ring-1 ring-line transition-colors open:ring-line-hi"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-left text-base font-medium text-ink marker:content-none">
              {tx(item.question, locale)}
              <Icon
                name="chevron-down"
                className="size-5 shrink-0 text-ink-3 transition-transform group-open:rotate-180"
              />
            </summary>
            <p className="pb-5 text-sm leading-relaxed text-ink-2">
              {tx(item.answer, locale)}
            </p>
          </details>
        ))}
      </div>

      <JsonLd data={faqSchema} />
    </Section>
  );
}
