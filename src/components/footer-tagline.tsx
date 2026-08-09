"use client";

import { useTranslations } from "next-intl";
import { usePathname } from "@/i18n/navigation";
import { audienceFromPathname } from "@/lib/audience";

export function FooterTagline({ className }: { className?: string }) {
  const t = useTranslations("Footer");
  const pathname = usePathname();
  const audience = audienceFromPathname(pathname);
  const tagline =
    audience === "web"
      ? t("taglineWeb")
      : audience === "ai"
        ? t("taglineAi")
        : t("taglineRecruiter");

  return <p className={className}>{tagline}</p>;
}
