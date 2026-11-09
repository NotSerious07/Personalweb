"use client";

import { useMemo, useState } from "react";
import { categories, projects, type CategoryFilter } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";

export function PortfolioGallery({
  initialCategory = "All Projects",
  compact = false,
}: {
  initialCategory?: CategoryFilter;
  compact?: boolean;
}) {
  const [active, setActive] = useState<CategoryFilter>(initialCategory);

  const filtered = useMemo(() => {
    const list =
      active === "All Projects"
        ? projects
        : projects.filter((p) => p.category === active);
    return compact ? list.slice(0, 4) : list;
  }, [active, compact]);

  return (
    <div>
      <div
        className="flex flex-wrap gap-2"
        role="tablist"
        aria-label="Project categories"
      >
        {categories.map((cat) => {
          const selected = cat === active;
          return (
            <button
              key={cat}
              type="button"
              role="tab"
              aria-selected={selected}
              onClick={() => setActive(cat)}
              className={`focus-ring rounded-full border px-4 py-2 text-sm transition-colors ${
                selected
                  ? "border-champagne bg-champagne/15 text-champagne"
                  : "border-[rgb(var(--border))] text-[rgb(var(--fg-muted))] hover:border-champagne/50 hover:text-[rgb(var(--fg))]"
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      <div
        className="mt-8 grid gap-5 sm:grid-cols-2 lg:mt-10"
        aria-live="polite"
      >
        {filtered.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="mt-8 muted">No projects in this category yet.</p>
      )}
    </div>
  );
}
