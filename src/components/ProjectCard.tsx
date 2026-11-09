import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";
import { PlaceholderThumb } from "@/components/PlaceholderThumb";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group">
      <Link
        href={`/portfolio/${project.slug}`}
        className="focus-ring block rounded-2xl"
      >
        <div className="surface overflow-hidden rounded-2xl transition-all duration-300 group-hover:-translate-y-0.5 group-hover:border-champagne/40">
          <div className="relative overflow-hidden">
            <PlaceholderThumb
              label={project.thumbnail.label}
              tone={project.thumbnail.tone}
              className="transition-transform duration-500 motion-reduce:transition-none group-hover:scale-[1.02]"
            />
            <span className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full bg-ink-950/70 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.14em] text-paper-50 backdrop-blur-sm">
              {project.status === "real" ? "Project" : project.status}
            </span>
          </div>
          <div className="p-5 sm:p-6">
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-champagne">
              {project.category}
            </p>
            <div className="mt-2 flex items-start justify-between gap-3">
              <h3 className="font-display text-lg font-semibold tracking-tight text-[rgb(var(--fg))] sm:text-xl">
                {project.title}
              </h3>
              <ArrowUpRight
                size={18}
                className="mt-1 shrink-0 text-[rgb(var(--fg-muted))] transition-colors group-hover:text-champagne"
                aria-hidden
              />
            </div>
            <p className="mt-2 text-sm leading-relaxed muted">
              {project.summary}
            </p>
          </div>
        </div>
      </Link>
    </article>
  );
}
