import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ThemeScript } from "@/components/theme-script";
import { JsonLd, personSchema, professionalServiceSchema } from "@/components/json-ld";
import { profile } from "@/content/site";
import { alternatesFor, siteUrl } from "@/lib/seo";
import "../globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#05070e" },
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
  ],
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: `${profile.name} — ${t("homeTitle")}`,
      template: `%s — ${profile.name}`,
    },
    description: t("homeDescription"),
    applicationName: profile.name,
    authors: [{ name: profile.name, url: siteUrl }],
    creator: profile.name,
    alternates: alternatesFor(locale),
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "Common" });

  return (
    <html
      lang={locale}
      data-theme="dark"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <ThemeScript />
      </head>
      <body className="flex min-h-full flex-col">
        <NextIntlClientProvider>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-100 focus:rounded-full focus:bg-brand-600 focus:px-5 focus:py-2.5 focus:text-sm focus:font-medium focus:text-white"
          >
            {t("skipToContent")}
          </a>
          <SiteHeader />
          <main id="main" className="flex-1">
            {children}
          </main>
          <SiteFooter locale={locale} />
        </NextIntlClientProvider>
        <JsonLd data={personSchema(locale)} />
        <JsonLd data={professionalServiceSchema(locale)} />
      </body>
    </html>
  );
}
