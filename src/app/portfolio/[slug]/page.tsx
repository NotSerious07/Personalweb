import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { getProject, projects } from "@/data/projects";
import { Reveal } from "@/components/Reveal";
import { PlaceholderThumb } from "@/components/PlaceholderThumb";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project" };
  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const statusLabel =
    project.status === "concept"
      ? "Personal concept project — not client work"
      : project.status === "placeholder"
        ? "Sample placeholder — replace with real work"
        : "Portfolio project";

  return (
    <div className="section-pad">
      <div className="container-content">
        <Reveal>
          <Link
            href="/portfolio"
            className="focus-ring inline-flex items-center gap-2 rounded-full text-sm text-[rgb(var(--fg-muted))] transition-colors hover:text-champagne"
          >
            <ArrowLeft size={16} aria-hidden /> Back to portfolio
          </Link>
          <p className="eyebrow mt-8">{project.category}</p>
          <h1 className="heading-display mt-3 text-balance text-4xl sm:text-5xl">
            {project.title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed muted">
            {project.summary}
          </p>
          <p className="mt-4 inline-flex rounded-full border border-champagne/30 bg-champagne/[0.07] px-3 py-1 text-xs font-medium text-champagne">
            {statusLabel}
          </p>
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-10 overflow-hidden rounded-3xl border border-[rgb(var(--border))]">
            <PlaceholderThumb
              label={project.thumbnail.label}
              tone={project.thumbnail.tone}
              aspect="aspect-[16/9]"
            />
          </div>
        </Reveal>

        <div className="mt-10 grid gap-5 lg:grid-cols-[1fr_0.38fr]">
          <div className="space-y-5">
            <Reveal>
              <section className="surface rounded-3xl p-7">
                <h2 className="font-display text-xl font-semibold">
                  Project objective
                </h2>
                <p className="mt-3 leading-relaxed muted">
                  {project.objective}
                </p>
              </section>
            </Reveal>
            <Reveal delay={40}>
              <section className="surface rounded-3xl p-7">
                <h2 className="font-display text-xl font-semibold">
                  Creative concept
                </h2>
                <p className="mt-3 leading-relaxed muted">{project.concept}</p>
              </section>
            </Reveal>
            <Reveal delay={60}>
              <section className="surface rounded-3xl p-7">
                <h2 className="font-display text-xl font-semibold">
                  Design process
                </h2>
                <ol className="mt-4 space-y-3">
                  {project.process.map((step, i) => (
                    <li key={i} className="flex gap-3 text-sm leading-relaxed">
                      <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-champagne/35 text-xs font-medium text-champagne">
                        {i + 1}
                      </span>
                      <span className="muted">{step}</span>
                    </li>
                  ))}
                </ol>
              </section>
            </Reveal>
            <Reveal delay={80}>
              <section className="surface rounded-3xl p-7">
                <h2 className="font-display text-xl font-semibold">
                  Final result
                </h2>
                <p className="mt-3 leading-relaxed muted">{project.result}</p>
              </section>
            </Reveal>
            <Reveal delay={90}>
              <section className="surface rounded-3xl p-7">
                <h2 className="font-display text-xl font-semibold">
                  Lessons learned
                </h2>
                <ul className="mt-4 space-y-2">
                  {project.lessons.map((lesson) => (
                    <li
                      key={lesson}
                      className="flex gap-2 text-sm leading-relaxed muted"
                    >
                      <span
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-champagne"
                        aria-hidden
                      />
                      {lesson}
                    </li>
                  ))}
                </ul>
              </section>
            </Reveal>
          </div>

          <aside className="space-y-5">
            <Reveal delay={100}>
              <section className="surface rounded-3xl p-6">
                <h2 className="font-display text-lg font-semibold">
                  Software used
                </h2>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {project.software.map((tool) => (
                    <li
                      key={tool}
                      className="rounded-full border border-[rgb(var(--border))] px-3 py-1.5 text-xs text-[rgb(var(--fg-muted))]"
                    >
                      {tool}
                    </li>
                  ))}
                </ul>
              </section>
            </Reveal>
            <Reveal delay={120}>
              <section className="surface rounded-3xl p-6">
                <h2 className="font-display text-lg font-semibold">
                  Project media
                </h2>
                <p className="mt-2 text-sm muted">
                  Replace these placeholders with exported images or video.
                </p>
                <div className="mt-4 space-y-3">
                  {project.media.map((m, i) => (
                    <div
                      key={i}
                      className="overflow-hidden rounded-2xl border border-[rgb(var(--border))]"
                    >
                      <PlaceholderThumb
                        label={`${m.type === "video" ? "Video" : "Image"}: ${m.label}`}
                        tone={i % 2 ? "cool" : "neutral"}
                        aspect={m.type === "video" ? "aspect-video" : "aspect-[4/3]"}
                      />
                    </div>
                  ))}
                </div>
              </section>
            </Reveal>
          </aside>
        </div>
      </div>
    </div>
  );
}
