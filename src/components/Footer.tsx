import Link from "next/link";
import { siteConfig } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-[rgb(var(--border))]">
      <div className="container-content flex flex-col gap-8 py-10 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-display text-sm font-semibold tracking-[0.18em]">
            NOT SERIOUS PRODUCTIONS
          </p>
          <p className="mt-2 max-w-sm text-sm muted">
            {siteConfig.shortIntro}
          </p>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="focus-ring rounded-sm muted transition-colors hover:text-champagne"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
      <div className="container-content border-t border-[rgb(var(--border))] py-5 text-xs muted">
        <p>
          © {new Date().getFullYear()} {siteConfig.brand}. Created by{" "}
          {siteConfig.founder} ({siteConfig.displayName}).
        </p>
      </div>
    </footer>
  );
}
