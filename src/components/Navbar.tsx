"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/data/site";
import { ThemeToggle } from "@/components/ThemeToggle";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-[rgb(var(--border))]/80 bg-[rgb(var(--bg))]/85 backdrop-blur-md">
      <div className="container-content flex h-16 items-center justify-between gap-4 sm:h-[4.5rem]">
        <Link
          href="/"
          className="focus-ring rounded-sm font-display text-sm font-semibold tracking-[0.18em] text-[rgb(var(--fg))] sm:text-[0.95rem]"
          aria-label={`${siteConfig.brand} home`}
        >
          NOT SERIOUS
        </Link>

        <nav
          className="hidden items-center gap-7 md:flex"
          aria-label="Primary"
        >
          {siteConfig.nav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`focus-ring rounded-sm text-sm transition-colors ${
                  active
                    ? "text-champagne"
                    : "text-[rgb(var(--fg-muted))] hover:text-[rgb(var(--fg))]"
                }`}
                aria-current={active ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-full border border-[rgb(var(--border))] text-[rgb(var(--fg))] md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X size={18} aria-hidden /> : <Menu size={18} aria-hidden />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden" id="mobile-nav">
          <button
            type="button"
            className="fixed inset-0 top-16 z-40 bg-black/30 dark:bg-black/50 sm:top-[4.5rem]"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
          />
          <nav
            className="fixed left-0 right-0 top-16 z-50 border-b border-[rgb(var(--border))] bg-[rgb(var(--bg))] px-5 py-6 sm:top-[4.5rem] sm:px-8"
            aria-label="Mobile primary"
          >
            <ul className="flex flex-col gap-1">
              {siteConfig.nav.map((item) => {
                const active =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`focus-ring block rounded-md px-3 py-3 text-base ${
                        active
                          ? "bg-champagne/10 text-champagne"
                          : "text-[rgb(var(--fg))] hover:bg-[rgb(var(--bg-elevated))]"
                      }`}
                      aria-current={active ? "page" : undefined}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
