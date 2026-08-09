"use client";

import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { ProfileLogo } from "@/components/profile-logo";
import { profile } from "@/content/site";
import { audienceFromPathname } from "@/lib/audience";
import { cn } from "@/lib/utils";

type BrandMarkProps = {
  className?: string;
  logoClassName?: string;
  priority?: boolean;
  /** When null, renders as a non-link block. Default links to home. */
  href?: "/" | null;
  onNavigate?: () => void;
};

export function BrandMark({
  className,
  logoClassName,
  priority = false,
  href = "/",
  onNavigate,
}: BrandMarkProps) {
  const tb = useTranslations("Brand");
  const pathname = usePathname();
  const isHome = pathname === "/";
  const audience = audienceFromPathname(pathname);
  const brandRole =
    audience === "web" ? tb("roleWeb") : audience === "ai" ? tb("roleAi") : tb("roleRecruiter");

  const content = (
    <>
      <ProfileLogo
        priority={priority}
        className={cn(
          "size-11 shrink-0 rounded-2xl sm:size-12",
          href && "transition-transform group-hover:scale-105",
          logoClassName,
        )}
      />
      <span className="flex min-w-0 flex-col gap-0.5">
        <span className="truncate text-sm font-semibold tracking-tight text-ink sm:text-base">
          {profile.name}
        </span>
        <span className="flex min-w-0 flex-wrap items-center gap-x-1.5 gap-y-0.5 text-xs font-medium text-brand sm:gap-x-2 sm:text-sm">
          <span className="truncate">{brandRole}</span>
          <span aria-hidden className="shrink-0 text-ink-3">
            /
          </span>
          <span className="shrink-0 text-ink-2">
            {profile.yearsExperience}+ {tb("yearsLabel")}
          </span>
        </span>
      </span>
    </>
  );

  const classes = cn("flex min-w-0 items-center gap-2.5 sm:gap-3", href && "group", className);

  if (!href) {
    return (
      <div className={classes} aria-label={profile.name}>
        {content}
      </div>
    );
  }

  return (
    <Link
      href={href}
      className={classes}
      aria-label={profile.name}
      onClick={(event) => {
        if (isHome) {
          event.preventDefault();
          window.scrollTo({ top: 0 });
        }
        onNavigate?.();
      }}
    >
      {content}
    </Link>
  );
}
