import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { siteConfig } from "@/data/site";

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.brand} — ${siteConfig.tagline}`,
    template: `%s — ${siteConfig.brand}`,
  },
  description: siteConfig.introduction,
  openGraph: {
    title: siteConfig.brand,
    description: siteConfig.taglineSupport,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${display.variable} ${body.variable}`}
    >
      <body className="min-h-screen bg-[rgb(var(--bg))] text-[rgb(var(--fg))]">
        <ThemeProvider>
          <a
            href="#main-content"
            className="focus-ring sr-only fixed left-4 top-4 z-[60] rounded-md bg-[rgb(var(--bg-elevated))] px-3 py-2 text-sm focus:not-sr-only"
          >
            Skip to content
          </a>
          <Navbar />
          <main id="main-content">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
