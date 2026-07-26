"use client";

import { useTranslations } from "next-intl";
import { Icon } from "@/components/ui/icon";
import { THEME_STORAGE_KEY } from "@/components/theme-script";
import { cn } from "@/lib/utils";

/**
 * The active theme lives on `<html data-theme>` rather than in React state, so
 * the correct icon is painted before hydration and no effect is needed to sync.
 */
export function ThemeToggle({ className }: { className?: string }) {
  const t = useTranslations("Common");

  function toggle() {
    const next =
      document.documentElement.getAttribute("data-theme") === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem(THEME_STORAGE_KEY, next);
    } catch {
      // Storage can be unavailable in private browsing modes.
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={t("toggleTheme")}
      title={t("toggleTheme")}
      className={cn(
        "inline-flex size-10 items-center justify-center rounded-full text-ink-2 ring-1 ring-line transition-colors hover:text-ink hover:ring-line-hi",
        className,
      )}
    >
      <Icon name="sun" className="hidden size-4.5 dark:block" />
      <Icon name="moon" className="size-4.5 dark:hidden" />
    </button>
  );
}
