"use client";

import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { LocaleSwitcher } from "@/components/locale-switcher";
import { ProfileLogo } from "@/components/profile-logo";
import { ThemeToggle } from "@/components/theme-toggle";
import { Icon } from "@/components/ui/icon";
import { buttonStyles } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { profile } from "@/content/site";
import { cn } from "@/lib/utils";

const sectionIds = ["about", "experience", "work", "services", "contact"] as const;

const navItems = [
  { id: "about", labelKey: "about" },
  { id: "experience", labelKey: "experience" },
  { id: "work", labelKey: "projects" },
  { id: "contact", labelKey: "contact" },
] as const;

export function SiteHeader() {
  const t = useTranslations("Nav");
  const tc = useTranslations("Common");
  const pathname = usePathname();
  const isHome = pathname === "/";

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [observedSection, setObservedSection] = useState<string | null>(null);
  const servicesRef = useRef<HTMLDivElement>(null);

  // Section highlighting only applies to the landing page anchors.
  const activeSection = isHome ? observedSection : null;

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 12);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key !== "Escape") return;
      setMenuOpen(false);
      setServicesOpen(false);
    }
    function onPointerDown(event: PointerEvent) {
      if (!servicesRef.current?.contains(event.target as Node)) {
        setServicesOpen(false);
      }
    }
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, []);

  useEffect(() => {
    if (!isHome) return;

    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => element !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setObservedSection(visible.target.id);
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0.1, 0.5] },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [isHome]);

  const serviceLinks = [
    { href: "/services/web-development", label: t("services_web"), icon: "code" as const },
    { href: "/services/ai-automation", label: t("services_ai"), icon: "bot" as const },
  ];

  function renderSectionLink(id: string, label: string, className?: string) {
    const isActive = activeSection === id;
    const classes = cn(
      "relative text-sm font-medium transition-colors",
      isActive ? "text-ink" : "text-ink-2 hover:text-ink",
      className,
    );

    if (isHome) {
      return (
        <a href={`#${id}`} className={classes} onClick={() => setMenuOpen(false)}>
          {label}
          {isActive && (
            <span
              aria-hidden
              className="absolute -bottom-1.5 left-0 h-0.5 w-full rounded-full bg-brand-500"
            />
          )}
        </a>
      );
    }

    return (
      <Link href={`/#${id}`} className={classes} onClick={() => setMenuOpen(false)}>
        {label}
      </Link>
    );
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={cn(
          "relative z-50 transition-all duration-300",
          scrolled || menuOpen
            ? "panel-glass border-b border-line py-2"
            : "border-b border-transparent py-4",
        )}
      >
        <Container size="wide">
          <div className="flex items-center justify-between gap-4">
            <Link
              href="/"
              className="group flex items-center gap-2.5"
              aria-label={profile.name}
              onClick={(event) => {
                if (!isHome) return;
                event.preventDefault();
                window.scrollTo({ top: 0 });
                setMenuOpen(false);
              }}
            >
              <ProfileLogo
                priority
                className="transition-transform group-hover:scale-105"
              />
              <span className="hidden text-sm font-semibold tracking-tight text-ink sm:block">
                {profile.name}
              </span>
            </Link>

            <nav aria-label="Main" className="hidden items-center gap-7 lg:flex">
              {navItems.slice(0, 3).map((item) => (
                <span key={item.id}>{renderSectionLink(item.id, t(item.labelKey))}</span>
              ))}

              <div ref={servicesRef} className="relative">
                <button
                  type="button"
                  onClick={() => setServicesOpen((open) => !open)}
                  aria-expanded={servicesOpen}
                  aria-haspopup="true"
                  className={cn(
                    "flex cursor-pointer items-center gap-1 text-sm font-medium transition-colors",
                    servicesOpen || activeSection === "services"
                      ? "text-ink"
                      : "text-ink-2 hover:text-ink",
                  )}
                >
                  {t("services")}
                  <Icon
                    name="chevron-down"
                    className={cn(
                      "size-3.5 transition-transform",
                      servicesOpen && "rotate-180",
                    )}
                  />
                </button>

                {servicesOpen && (
                  <div className="absolute top-full left-1/2 z-50 mt-4 w-64 -translate-x-1/2 overflow-hidden rounded-2xl bg-panel p-1.5 ring-1 ring-line shadow-2xl shadow-black/25">
                    {serviceLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-panel-hi"
                        onClick={() => setServicesOpen(false)}
                      >
                        <span className="mt-0.5 grid size-8 shrink-0 place-items-center rounded-lg bg-brand-500/12 text-brand">
                          <Icon name={link.icon} className="size-4" />
                        </span>
                        <span className="text-sm font-medium text-ink">{link.label}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {renderSectionLink("contact", t("contact"))}
            </nav>

            <div className="flex items-center gap-2">
              <LocaleSwitcher className="hidden sm:inline-flex" />
              <ThemeToggle className="hidden sm:inline-flex" />
              <a
                href={profile.calendarUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonStyles({ size: "sm", className: "hidden lg:inline-flex" })}
              >
                {tc("bookCall")}
                <Icon name="arrow-up-right" className="size-4" />
              </a>
              <button
                type="button"
                onClick={() => setMenuOpen((open) => !open)}
                aria-expanded={menuOpen}
                aria-label={menuOpen ? tc("closeMenu") : tc("openMenu")}
                className="inline-flex size-10 cursor-pointer items-center justify-center rounded-full text-ink ring-1 ring-line lg:hidden"
              >
                <Icon name={menuOpen ? "x" : "menu"} className="size-5" />
              </button>
            </div>
          </div>
        </Container>
      </div>

      {menuOpen && (
        <div className="lg:hidden">
          <button
            type="button"
            aria-label={tc("closeMenu")}
            className="fixed inset-0 z-40 cursor-pointer bg-canvas/50 backdrop-blur-sm"
            onClick={() => setMenuOpen(false)}
          />
          <div className="relative z-50 border-b border-line bg-canvas/98 shadow-2xl shadow-black/20 backdrop-blur-xl">
            <Container size="wide" className="flex flex-col gap-6 py-6">
              <nav aria-label="Mobile" className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <span key={item.id} className="text-base">
                    {renderSectionLink(item.id, t(item.labelKey), "text-base")}
                  </span>
                ))}
              </nav>

              <div className="flex flex-col gap-3 border-t border-line pt-5">
                <span className="text-xs font-semibold tracking-[0.18em] text-ink-3 uppercase">
                  {t("servicesMenuLabel")}
                </span>
                {serviceLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="flex items-center gap-3 rounded-xl bg-panel p-3 ring-1 ring-line"
                    onClick={() => setMenuOpen(false)}
                  >
                    <span className="grid size-9 place-items-center rounded-lg bg-brand-500/12 text-brand">
                      <Icon name={link.icon} className="size-4.5" />
                    </span>
                    <span className="text-sm font-medium text-ink">{link.label}</span>
                    <Icon name="arrow-up-right" className="ml-auto size-4 text-ink-3" />
                  </Link>
                ))}
              </div>

              <div className="flex items-center justify-between border-t border-line pt-5">
                <LocaleSwitcher />
                <ThemeToggle />
              </div>

              <a
                href={profile.calendarUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonStyles({ size: "lg", className: "w-full" })}
                onClick={() => setMenuOpen(false)}
              >
                {tc("bookCall")}
                <Icon name="arrow-up-right" className="size-4" />
              </a>
            </Container>
          </div>
        </div>
      )}
    </header>
  );
}
