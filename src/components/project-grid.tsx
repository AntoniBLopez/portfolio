"use client";

import { useMemo, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ProjectCard } from "@/components/project-card";
import { useHasMounted } from "@/hooks/use-has-mounted";
import { projectCategories, projects, tx, type ProjectCategory } from "@/content/site";
import { cn } from "@/lib/utils";

type Filter = ProjectCategory | "all";

export function ProjectGrid() {
  const locale = useLocale();
  const t = useTranslations("Projects");
  const tc = useTranslations("Common");
  const hasMounted = useHasMounted();
  const reduceMotion = useReducedMotion();
  const [filter, setFilter] = useState<Filter>("all");

  const canAnimate = hasMounted && !reduceMotion;

  const availableCategories = useMemo(
    () => projectCategories.filter((category) => projects.some((p) => p.category === category.id)),
    [],
  );

  const visible = useMemo(
    () => (filter === "all" ? projects : projects.filter((p) => p.category === filter)),
    [filter],
  );

  const filters: { id: Filter; label: string }[] = [
    { id: "all", label: tc("filterAll") },
    ...availableCategories.map((category) => ({
      id: category.id as Filter,
      label: tx(category.label, locale),
    })),
  ];

  return (
    <div className="flex flex-col gap-8">
      <div
        role="group"
        aria-label={t("filterLabel")}
        className="flex flex-wrap gap-2"
      >
        {filters.map((item) => {
          const isActive = filter === item.id;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => setFilter(item.id)}
              aria-pressed={isActive}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium transition-all",
                isActive
                  ? "bg-brand-600 text-white shadow-md shadow-brand-600/25"
                  : "bg-panel text-ink-2 ring-1 ring-line hover:text-ink hover:ring-line-hi",
              )}
            >
              {item.label}
            </button>
          );
        })}
      </div>

      {visible.length === 0 ? (
        <p className="rounded-2xl bg-panel p-8 text-center text-sm text-ink-2 ring-1 ring-line">
          {t("emptyState")}
        </p>
      ) : canAnimate ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {visible.map((project) => (
              <motion.div
                key={project.slug}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((project) => (
            <div key={project.slug}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
