import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Image as ImageIcon, Film, Layers } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Graphic design, video production, and creative campaign assistance by Not Serious Productions.",
};

const services = [
  {
    icon: ImageIcon,
    title: "Graphic Design",
    status: "Developing skill — available for beginner-friendly projects",
    description:
      "Visual design for marketing and social content, created with attention to clarity, hierarchy, and brand consistency.",
    items: [
      "Promotional posters",
      "Social media graphics",
      "Product advertisements",
      "Marketing creatives",
    ],
  },
  {
    icon: Film,
    title: "Video Production",
    status: "Developing skill — available for simple promotional edits",
    description:
      "Short-form and promotional video editing focused on clear messaging, pacing, and presentable visuals.",
    items: [
      "Short promotional videos",
      "Product showcase videos",
      "Social media reels",
      "Basic commercial-style edits",
    ],
  },
  {
    icon: Layers,
    title: "Creative Campaigns",
    status: "Developing skill — concept and coordination support",
    description:
      "Coordinated visual concepts that help posters and videos feel part of the same campaign direction.",
    items: [
      "Coordinated poster and video concepts",
      "Visual consistency across assets",
      "Social media campaign assets",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="section-pad">
      <div className="container-content">
        <Reveal>
          <SectionHeading
            eyebrow="Services"
            title="Creative services I’m building"
            description="I’m honest about being early in my freelancing journey. The areas below reflect skills I’m actively developing and opportunities I’d love to take on with clear expectations."
          />
        </Reveal>

        <div className="mt-12 grid gap-5">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={i * 70}>
              <article className="surface rounded-3xl p-7 sm:p-8">
                <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                  <div className="max-w-2xl">
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-champagne/30 bg-champagne/10 text-champagne">
                        <service.icon size={20} aria-hidden />
                      </span>
                      <h2 className="font-display text-2xl font-semibold tracking-tight">
                        {service.title}
                      </h2>
                    </div>
                    <p className="mt-3 inline-flex rounded-full border border-[rgb(var(--border))] px-3 py-1 text-xs font-medium text-[rgb(var(--fg-muted))]">
                      {service.status}
                    </p>
                    <p className="mt-4 leading-relaxed muted">
                      {service.description}
                    </p>
                  </div>
                  <div className="lg:min-w-[18rem]">
                    <p className="text-xs font-medium uppercase tracking-[0.18em] text-champagne">
                      Includes
                    </p>
                    <ul className="mt-3 space-y-2">
                      {service.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-sm muted"
                        >
                          <span
                            className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-champagne"
                            aria-hidden
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={80}>
          <div className="mt-10 rounded-3xl border border-champagne/25 bg-champagne/[0.06] p-7 sm:p-8">
            <h2 className="font-display text-xl font-semibold tracking-tight">
              A note on scope
            </h2>
            <p className="mt-3 max-w-3xl leading-relaxed muted">
              I only take on work I can approach responsibly. If a project needs
              experience or tools beyond what I currently have, I&apos;ll be
              upfront about it. My goal is to provide useful creative assistance
              while continuing to improve.
            </p>
            <Link
              href="/contact"
              className="focus-ring mt-6 inline-flex items-center gap-2 rounded-full bg-champagne px-5 py-2.5 text-sm font-semibold text-ink-950 transition-colors hover:bg-champagne-400"
            >
              Discuss an opportunity <ArrowRight size={16} aria-hidden />
            </Link>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
