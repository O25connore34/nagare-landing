"use client";

import { useEffect, useState } from "react";
import { ButtonPrimaryLink } from "./ui/button";

const navLinks = [
  { label: "Capabilities", href: "#scope" },
  { label: "Process", href: "#process" },
  { label: "Fitment Work", href: "#archive" },
  { label: "B2B / Teams", href: "#teams" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-surface">
      <div className="shell flex h-16 items-center justify-between gap-6 md:h-18">
        <a href="#top" className="flex items-baseline gap-3">
          <span className="font-display text-[15px] font-bold whitespace-nowrap uppercase tracking-[0.08em] text-ink md:text-[16px]">
            Nagare Composite
          </span>
          <span className="hidden font-mono text-[11px] uppercase tracking-[0.04em] text-muted sm:inline">
            [Aichi, JP]
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Sections">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-[14px] text-muted transition-colors duration-150 ease-out hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden sm:block">
            <ButtonPrimaryLink href="#rfq" className="h-10 px-5 md:h-11">
              Request RFQ
            </ButtonPrimaryLink>
          </div>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            className="flex h-10 w-10 items-center justify-center rounded-edge border border-line-strong text-ink transition-colors duration-150 ease-out hover:bg-elevated lg:hidden"
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
              {open ? (
                <path
                  d="M3 3l12 12M15 3L3 15"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
              ) : (
                <path
                  d="M1 4h16M1 9h16M1 14h16"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="border-t border-line bg-surface lg:hidden"
        >
          <nav className="shell flex flex-col py-2" aria-label="Sections">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-line py-4 font-body text-[15px] text-ink last:border-b-0"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#rfq"
              onClick={() => setOpen(false)}
              className="border-t border-line py-4 font-display text-[14px] font-semibold uppercase tracking-[0.04em] text-accent sm:hidden"
            >
              Request RFQ
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
