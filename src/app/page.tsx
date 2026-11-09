import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/data/site";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { PortfolioGallery } from "@/components/PortfolioGallery";

const servicesPreview = [
  {
    title: "Graphic Design",
    text: "Promotional posters, social media graphics, and marketing creatives — developed with care for hierarchy and clarity.",
  },
  {
    title: "Video Production",
    text: "Short promotional videos, product showcases, and social reels — focused on pacing and clear visual storytelling.",
  },
  {
    title: "Creative Campaigns",
    text: "Coordinated poster and video concepts that keep a consistent visual direction across formats.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-[rgb(var(--border))]">
        <div
          className="pointer-events-none absolute inset-0 opacity-60 dark:opacity-100"
          aria-hidden
        >
          <div className="absolute -left-24 top-[-10%] h-[28rem] w-[28rem] rounded-full bg-champagne/10 blur-3xl" />
          <div className="absolute right-[-10%] top-[10%] h-[22rem] w-[22rem] rounded-full bg-champagne/[0.07] blur-3xl" />
          <div
            className="absolute inset-0 opacity-[0.07] dark:opacity-[0.12]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(197,164,109,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(197,164,109,0.5) 1px, transparent 1px)",
              backgroundSize: "64px 64px",
            }}
          />
        </div>

        <div className="container-content relative grid gap-12 py-20 sm:py-24 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-10 lg:py-28">
          <Reveal>
            <p className="eyebrow">{siteConfig.brand}</p>
            <h1 className="heading-display mt-4 max-w-3xl text-balance text-4xl leading-[1.05] sm:text-5xl lg:text-6xl">
              {siteConfig.tagline}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed muted sm:text-xl">
              {siteConfig.taglineSupport}
            </p>
            <p className="mt-6 max-w-xl text-base leading-relaxed muted">
              {siteConfig.shortIntro}
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Link
                href="/portfolio"
                className="focus-ring inline-flex items-center gap-2 rounded-full bg-champagne px-6 py-3 text-sm font-semibold text-ink-950 transition-colors hover:bg-champagne-400"
              >
                Explore My Work
                <ArrowRight size={16} aria-hidden />
              </Link>
              <Link
                href="/about"
                className="focus-ring inline-flex items-center rounded-full border border-[rgb(var(--border))] px-6 py-3 text-sm font-semibold text-[rgb(var(--fg))] transition-colors hover:border-champagne/60 hover:text-champagne"
              >
                About Me
              </Link>
            </div>
          </Reveal>

          <Reveal delay={120} className="lg:pb-2">
            <div className="surface relative overflow-hidden rounded-3xl p-6 sm:p-8">
              <div
                className="pointer-events-none absolute right-0 top-0 h-40 w-40 bg-[radial-gradient(circle_at_top_right,rgba(197,164,109,0.22),transparent_60%)]"
                aria-hidden
              />
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-champagne">
                Featured direction
              </p>
              <p className="mt-4 font-display text-2xl font-semibold leading-snug tracking-tight sm:text-[1.75rem]">
                Modern promotional visuals, built with curiosity and craft.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--bg))]/60 p-4">
                  <p className="text-[11px] uppercase tracking-[0.16em] muted">
                    Focus
                  </p>
                  <p className="mt-2 text-sm font-medium">
                    Posters &amp; social creatives
                  </p>
                </div>
                <div className="rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--bg))]/60 p-4">
                  <p className="text-[11px] uppercase tracking-[0.16em] muted">
                    Focus
                  </p>
                  <p className="mt-2 text-sm font-medium">
                    Short promotional video
                  </p>
                </div>
              </div>
              <p className="mt-6 text-sm leading-relaxed muted">
                Portfolio samples below are clearly labeled placeholders and
                concept projects until real work is added.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Founder intro */}
      <section className="section-pad border-b border-[rgb(var(--border))]">
        <div className="container-content">
          <Reveal>
            <SectionHeading
              eyebrow="Introduction"
              title={
                <>
                  Hi! I&apos;m {siteConfig.founder},{" "}
                  <span className="text-champagne">
                    aka {siteConfig.displayName}
                  </span>
                  .
                </>
              }
              description={siteConfig.introduction}
            />
          </Reveal>
        </div>
      </section>

      {/* Services preview */}
      <section className="section-pad border-b border-[rgb(var(--border))]">
        <div className="container-content">
          <Reveal>
            <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              <SectionHeading
                eyebrow="Services"
                title="Creative assistance, developed with honesty"
                description="Areas I'm actively building skills in — offered with clear communication and attention to detail."
              />
              <Link
                href="/services"
                className="focus-ring inline-flex shrink-0 items-center gap-2 rounded-full text-sm font-medium text-champagne hover:text-champagne-400"
              >
                View services <ArrowRight size={16} aria-hidden />
              </Link>
            </div>
          </Reveal>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {servicesPreview.map((item, i) => (
              <Reveal key={item.title} delay={i * 70}>
                <div className="surface h-full rounded-2xl p-6">
                  <h3 className="font-display text-xl font-semibold tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed muted">
                    {item.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio preview */}
      <section className="section-pad border-b border-[rgb(var(--border))]">
        <div className="container-content">
          <Reveal>
            <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              <SectionHeading
                eyebrow="Portfolio"
                title="Selected work &amp; concept studies"
                description="A growing collection of practice projects and placeholders — ready to be replaced with real work."
              />
              <Link
                href="/portfolio"
                className="focus-ring inline-flex shrink-0 items-center gap-2 rounded-full text-sm font-medium text-champagne hover:text-champagne-400"
              >
                All projects <ArrowRight size={16} aria-hidden />
              </Link>
            </div>
          </Reveal>
          <div className="mt-8">
            <PortfolioGallery compact />
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-pad">
        <div className="container-content">
          <Reveal>
            <div className="surface relative overflow-hidden rounded-3xl p-8 sm:p-10 lg:p-12">
              <div
                className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-champagne/10 blur-3xl"
                aria-hidden
              />
              <p className="eyebrow">Get in touch</p>
              <h2 className="heading-display mt-3 max-w-2xl text-3xl sm:text-4xl">
                Have an idea, a brief, or an opportunity to learn from?
              </h2>
              <p className="mt-4 max-w-xl leading-relaxed muted">
                I&apos;m open to beginner-friendly creative opportunities in
                marketing visuals — especially promotional posters and short
                videos.
              </p>
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="focus-ring inline-flex items-center gap-2 rounded-full bg-champagne px-6 py-3 text-sm font-semibold text-ink-950 transition-colors hover:bg-champagne-400"
                >
                  Contact me <ArrowRight size={16} aria-hidden />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
