import type { Metadata } from "next";
import { Instagram, Mail, MessageCircle, Phone } from "lucide-react";
import { siteConfig } from "@/data/site";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Not Serious Productions via Instagram, Discord, WhatsApp, or email.",
};

function DiscordIcon({ size = 22 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.7 8.5c.8 0 1.4.7 1.4 1.5s-.6 1.5-1.4 1.5c-.8 0-1.4-.7-1.4-1.5s.6-1.5 1.4-1.5Zm6.6 0c.8 0 1.4.7 1.4 1.5s-.6 1.5-1.4 1.5c-.8 0-1.4-.7-1.4-1.5s.6-1.5 1.4-1.5Z"
        fill="currentColor"
      />
      <path
        d="M19.5 5.3A16.3 16.3 0 0 0 15.6 4c-.2.3-.4.8-.5 1.1-1.5-.2-3-.2-4.5 0-.1-.3-.3-.8-.5-1.1-1.4.2-2.7.7-3.9 1.3-2.5 3.7-3.1 7.2-2.8 10.8 1.6 1.2 3.2 1.9 4.8 2.4.4-.5.7-1.1 1-1.7-.6-.2-1.1-.5-1.6-.8.1-.1.3-.2.4-.3 3 1.4 6.2 1.4 9.2 0 .1.1.3.2.4.3-.5.3-1 .6-1.6.8.3.6.6 1.2 1 1.7 1.6-.5 3.2-1.2 4.8-2.4.4-4.1-.7-7.6-2.8-10.8Z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const contacts = [
  {
    key: "instagram",
    icon: Instagram,
    ...siteConfig.social.instagram,
    external: true,
    description: "See updates, visuals, and creative posts.",
  },
  {
    key: "discord",
    icon: DiscordIcon,
    ...siteConfig.social.discord,
    external: true,
    description: "Connect directly on Discord.",
  },
  {
    key: "whatsapp",
    icon: MessageCircle,
    ...siteConfig.social.whatsapp,
    external: true,
    description: "Send a message on WhatsApp.",
  },
  {
    key: "email",
    icon: Mail,
    ...siteConfig.social.email,
    external: false,
    description: "Reach out by email for opportunities or questions.",
  },
] as const;

export default function ContactPage() {
  return (
    <div className="section-pad">
      <div className="container-content">
        <Reveal>
          <SectionHeading
            eyebrow="Contact"
            title="Let’s talk about a creative opportunity"
            description="I’m open to beginner-friendly projects and opportunities to improve my skills — especially promotional posters, social media graphics, and short promotional videos."
            align="center"
          />
        </Reveal>

        <div className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-2">
          {contacts.map((item, i) => {
            const Icon = item.icon;
            const externalProps = item.external
              ? { target: "_blank" as const, rel: "noopener noreferrer" }
              : {};
            return (
              <Reveal key={item.key} delay={i * 60}>
                <a
                  href={item.href}
                  {...externalProps}
                  className="focus-ring surface group flex h-full items-start gap-4 rounded-3xl p-6 transition-all hover:-translate-y-0.5 hover:border-champagne/40"
                  aria-label={`${item.label}: ${item.handle}${item.external ? " (opens in a new tab)" : ""}`}
                >
                  <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-champagne/30 bg-champagne/10 text-champagne transition-colors group-hover:bg-champagne/15">
                    <Icon size={22} />
                  </span>
                  <div className="min-w-0">
                    <p className="font-display text-lg font-semibold">
                      {item.label}
                    </p>
                    <p className="mt-1 break-all text-sm text-champagne">
                      {item.handle}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed muted">
                      {item.description}
                    </p>
                  </div>
                </a>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={120}>
          <div className="mx-auto mt-8 max-w-4xl rounded-3xl border border-[rgb(var(--border))] p-6 text-center sm:p-8">
            <p className="font-display text-xl font-semibold">
              What to include in your message
            </p>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed muted">
              A short brief helps: what you need (poster, reel, or campaign
              concept), where it will be used, your timeline, and any
              references. I&apos;ll reply with honest thoughts on scope and how
              I can help.
            </p>
            <p className="mt-5 inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] muted">
              <Phone size={14} aria-hidden /> WhatsApp: {siteConfig.social.whatsapp.handle}
            </p>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
