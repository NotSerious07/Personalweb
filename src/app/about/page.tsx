import type { Metadata } from "next";
import { siteConfig } from "@/data/site";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import {
  Compass,
  Sparkles,
  Target,
  BookOpen,
  Wrench,
  Route,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description: `About ${siteConfig.founder} (${siteConfig.displayName}), founder of ${siteConfig.brand}.`,
};

const focusAreas = [
  {
    icon: Sparkles,
    title: "Graphic design",
    text: "Promotional posters, social media graphics, and marketing creatives that communicate clearly.",
  },
  {
    icon: Target,
    title: "Video production",
    text: "Short promotional edits and product-focused visuals with attention to pacing and readability.",
  },
  {
    icon: Compass,
    title: "Visual storytelling",
    text: "Combining type, colour, composition, and motion to support a simple message.",
  },
  {
    icon: BookOpen,
    title: "Learning by doing",
    text: "Building skills through practice projects, feedback, and careful iteration.",
  },
];

const journey = [
  {
    stage: "Now",
    title: "Building the foundation",
    text: "Practising graphic design and promotional video editing, creating concept projects, and preparing a portfolio that can grow with real work.",
  },
  {
    stage: "Next",
    title: "Taking on opportunities",
    text: "Looking for beginner-friendly freelance opportunities where I can contribute useful marketing visuals while learning from real briefs.",
  },
  {
    stage: "Ahead",
    title: "Developing a stronger creative identity",
    text: "Improving craft, expanding the portfolio with completed projects, and refining how Not Serious Productions presents visual stories.",
  },
];

export default function AboutPage() {
  return (
    <div className="section-pad">
      <div className="container-content">
        <Reveal>
          <SectionHeading
            eyebrow="About"
            title={
              <>
                {siteConfig.founder}, known as{" "}
                <span className="text-champagne">{siteConfig.displayName}</span>
              </>
            }
            description={siteConfig.title}
          />
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-14">
          <Reveal delay={60}>
            <div className="surface rounded-3xl p-7 sm:p-8">
              <h2 className="font-display text-2xl font-semibold tracking-tight">
                Personal introduction
              </h2>
              <div className="mt-5 space-y-4 text-base leading-relaxed muted">
                <p>{siteConfig.introduction}</p>
                <p>
                  I&apos;m at the beginning of my freelancing journey. That
                  means I approach opportunities with honesty about where I am
                  now, a strong willingness to learn, and real care for the
                  quality of what I deliver.
                </p>
                <p>
                  Not Serious Productions is my creative identity — a place to
                  develop my work in graphic design and video production,
                  experiment with ideas, and take on projects that help me grow
                  while providing useful creative support.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="space-y-4">
              <h2 className="font-display text-2xl font-semibold tracking-tight">
                Current focus
              </h2>
              <p className="leading-relaxed muted">
                I&apos;m actively developing practical skills in design and
                editing, with an emphasis on marketing visuals that are clear,
                modern, and thoughtfully made.
              </p>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                {focusAreas.map((item) => (
                  <div key={item.title} className="surface rounded-2xl p-5">
                    <item.icon
                      className="text-champagne"
                      size={20}
                      aria-hidden
                    />
                    <h3 className="mt-3 font-display text-lg font-semibold">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed muted">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={80}>
          <div className="surface mt-10 rounded-3xl p-7 sm:p-8">
            <h2 className="font-display text-2xl font-semibold tracking-tight">
              Approach to creative work
            </h2>
            <ul className="mt-5 grid gap-3 text-sm leading-relaxed muted sm:grid-cols-2">
              <li className="rounded-xl border border-[rgb(var(--border))] p-4">
                <strong className="font-medium text-[rgb(var(--fg))]">
                  Clear communication:
                </strong>{" "}
                understanding the goal before starting the design or edit.
              </li>
              <li className="rounded-xl border border-[rgb(var(--border))] p-4">
                <strong className="font-medium text-[rgb(var(--fg))]">
                  Thoughtful details:
                </strong>{" "}
                paying attention to typography, spacing, colour, and pacing.
              </li>
              <li className="rounded-xl border border-[rgb(var(--border))] p-4">
                <strong className="font-medium text-[rgb(var(--fg))]">
                  Honest scope:
                </strong>{" "}
                being clear about what I can confidently take on and where I’m
                still developing.
              </li>
              <li className="rounded-xl border border-[rgb(var(--border))] p-4">
                <strong className="font-medium text-[rgb(var(--fg))]">
                  Steady improvement:
                </strong>{" "}
                treating each project as a chance to learn and refine my craft.
              </li>
            </ul>
          </div>
        </Reveal>

        {/* Skills & Tools */}
        <section className="mt-10" aria-labelledby="skills-tools">
          <Reveal>
            <div className="flex items-center gap-3">
              <Wrench className="text-champagne" size={20} aria-hidden />
              <h2
                id="skills-tools"
                className="font-display text-2xl font-semibold tracking-tight"
              >
                Skills &amp; tools
              </h2>
            </div>
            <p className="mt-3 max-w-2xl leading-relaxed muted">
              A simple view of the tools I use and the creative skills I’m
              developing. This section is easy to update in{" "}
              <code className="rounded bg-[rgb(var(--bg-elevated))] px-1.5 py-0.5 text-xs text-[rgb(var(--fg))]">
                src/data/site.ts
              </code>{" "}
              as I grow.
            </p>
          </Reveal>
          <div className="mt-6 grid gap-5 lg:grid-cols-2">
            <Reveal delay={50}>
              <div className="surface h-full rounded-3xl p-7">
                <h3 className="font-display text-lg font-semibold">
                  Creative tools
                </h3>
                <ul className="mt-4 space-y-4">
                  {siteConfig.tools.map((tool) => (
                    <li key={tool.name}>
                      <p className="font-medium text-[rgb(var(--fg))]">
                        {tool.name}
                      </p>
                      <p className="mt-1 text-sm leading-relaxed muted">
                        {tool.note}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={90}>
              <div className="surface h-full rounded-3xl p-7">
                <h3 className="font-display text-lg font-semibold">
                  Developing skills
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {siteConfig.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-full border border-[rgb(var(--border))] px-3 py-1.5 text-sm text-[rgb(var(--fg-muted))]"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
                <p className="mt-5 text-sm leading-relaxed muted">
                  No inflated claims — just an honest snapshot of what I’m
                  practising and improving.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Creative Journey */}
        <section className="mt-10" aria-labelledby="creative-journey">
          <Reveal>
            <div className="flex items-center gap-3">
              <Route className="text-champagne" size={20} aria-hidden />
              <h2
                id="creative-journey"
                className="font-display text-2xl font-semibold tracking-tight"
              >
                Creative journey
              </h2>
            </div>
            <p className="mt-3 max-w-2xl leading-relaxed muted">
              A simple, maintainable record of where Not Serious Productions is
              now and where it’s heading. Update this list in{" "}
              <code className="rounded bg-[rgb(var(--bg-elevated))] px-1.5 py-0.5 text-xs text-[rgb(var(--fg))]">
                src/app/about/page.tsx
              </code>{" "}
              as new projects and milestones happen.
            </p>
          </Reveal>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {journey.map((item, i) => (
              <Reveal key={item.stage} delay={i * 60}>
                <div className="surface h-full rounded-3xl p-6">
                  <p className="text-xs font-medium uppercase tracking-[0.18em] text-champagne">
                    {item.stage}
                  </p>
                  <h3 className="mt-2 font-display text-lg font-semibold">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed muted">
                    {item.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
