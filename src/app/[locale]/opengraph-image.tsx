import { ImageResponse } from "next/og";
import { getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { profile, tx } from "@/content/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = profile.name;

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function OpengraphImage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          backgroundColor: "#05070e",
          backgroundImage:
            "radial-gradient(circle at 15% 0%, rgba(37,99,235,0.45), transparent 55%), radial-gradient(circle at 90% 100%, rgba(6,182,212,0.28), transparent 50%)",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "68px",
              height: "68px",
              borderRadius: "20px",
              backgroundColor: "#2563eb",
              color: "#ffffff",
              fontSize: "30px",
              fontWeight: 700,
            }}
          >
            {profile.initials}
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ color: "#eef2f9", fontSize: "30px", fontWeight: 600 }}>
              {profile.name}
            </span>
            <span style={{ color: "#93c5fd", fontSize: "22px" }}>
              {tx(profile.role, locale)}
            </span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <span
            style={{
              color: "#ffffff",
              fontSize: "62px",
              fontWeight: 600,
              lineHeight: 1.12,
              letterSpacing: "-0.03em",
              maxWidth: "960px",
            }}
          >
            {tx(profile.headline, locale)}
          </span>
          <span style={{ color: "#a5b2c9", fontSize: "26px", maxWidth: "900px" }}>
            {t("homeTitle")}
          </span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
          <div
            style={{
              display: "flex",
              width: "56px",
              height: "5px",
              borderRadius: "999px",
              backgroundColor: "#2563eb",
            }}
          />
          <span style={{ color: "#6b7994", fontSize: "22px" }}>
            {profile.url.replace(/^https?:\/\//, "")}
          </span>
        </div>
      </div>
    ),
    size,
  );
}
