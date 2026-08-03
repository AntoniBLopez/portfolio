"use client";

import { useTransition } from "react";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";
import { cn } from "@/lib/utils";

export function LocaleSwitcher({ className }: { className?: string }) {
  const t = useTranslations("Common");
  const activeLocale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  function select(locale: Locale) {
    if (locale === activeLocale) return;
    startTransition(() => {
      router.replace(pathname, { locale });
    });
  }

  return (
    <div
      role="group"
      aria-label={t("changeLanguage")}
      className={cn(
        "inline-flex items-center gap-0.5 rounded-full p-0.5 ring-1 ring-line",
        isPending && "opacity-60",
        className,
      )}
    >
      {routing.locales.map((locale) => {
        const isActive = locale === activeLocale;
        return (
          <button
            key={locale}
            type="button"
            onClick={() => select(locale)}
            aria-current={isActive ? "true" : undefined}
            className={cn(
              "cursor-pointer rounded-full px-2.5 py-1 text-xs font-semibold uppercase transition-colors",
              isActive
                ? "bg-brand-500/15 text-brand"
                : "text-ink-3 hover:text-ink",
            )}
          >
            {locale}
          </button>
        );
      })}
    </div>
  );
}
