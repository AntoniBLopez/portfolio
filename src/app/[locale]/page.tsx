import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { AudienceBeacon } from "@/components/audience-beacon";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Experience } from "@/components/sections/experience";
import { Projects } from "@/components/sections/projects";
import { Services } from "@/components/sections/services";
import { Contact } from "@/components/sections/contact";
import { sections } from "@/config/sections";
import { alternatesFor } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: t("homeTitle"),
    description: t("homeDescription"),
    alternates: alternatesFor(locale),
    openGraph: {
      title: t("homeTitle"),
      description: t("homeDescription"),
    },
  };
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <AudienceBeacon audience="recruiter" />
      <Hero locale={locale} />
      <About locale={locale} />
      {sections.experience && <Experience locale={locale} />}
      <Projects locale={locale} audience="recruiter" />
      <Services locale={locale} />
      <Contact locale={locale} />
    </>
  );
}
