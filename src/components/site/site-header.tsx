"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon, ChevronDown } from "lucide-react";
import { topics } from "@/lib/topics";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { useTheme } from "./theme-provider";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [topicsOpen, setTopicsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const published = topics.filter((t) => t.published);
  const unit1 = published.filter((t) => t.unit === 1);
  const unit2 = published.filter((t) => t.unit === 2);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur-md transition-shadow ${
        scrolled ? "shadow-sm" : ""
      }`}
    >
      <div className="mx-auto flex h-12 max-w-[1280px] items-center px-4 sm:h-14 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        {/* ── Logo ── */}
        <Link
          href="/"
          className="flex items-baseline gap-0.5 font-sans text-base font-bold tracking-tight text-foreground"
          aria-label="ial.chem — home"
        >
          <span className="italic">ial</span>
          <span className="text-primary">.</span>
          <span className="italic">chem</span>
        </Link>

        {/* ── Desktop nav (md+) ── */}
        <nav className="ml-6 hidden items-center gap-1 md:flex" aria-label="Main">
          {/* Topics dropdown — custom, lightweight */}
          <div
            className="relative"
            onMouseEnter={() => setTopicsOpen(true)}
            onMouseLeave={() => setTopicsOpen(false)}
          >
            <button
              onClick={() => setTopicsOpen(!topicsOpen)}
              className="flex items-center gap-1 rounded-md px-3 py-1.5 font-sans text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
              aria-expanded={topicsOpen}
            >
              Topics
              <ChevronDown className={`h-3.5 w-3.5 transition-transform ${topicsOpen ? "rotate-180" : ""}`} />
            </button>
            {topicsOpen && (
              <div className="absolute left-0 top-full w-[480px] pt-1">
                <div className="grid grid-cols-2 gap-4 rounded-lg border border-border bg-card p-4 shadow-lg">
                  <TopicColumn title="Unit I" topics={unit1} />
                  <TopicColumn title="Unit II" topics={unit2} />
                </div>
              </div>
            )}
          </div>

          <Link
            href="/#index"
            className="rounded-md px-3 py-1.5 font-sans text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
          >
            Index
          </Link>
        </nav>

        {/* ── Right side ── */}
        <div className="ml-auto flex items-center gap-1">
          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            className="grid h-8 w-8 place-items-center rounded-md text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>

          {/* Mobile menu trigger (below md) */}
          <button
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="grid h-8 w-8 place-items-center rounded-md text-muted-foreground transition-colors hover:bg-accent hover:text-foreground md:hidden"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* ── Mobile menu sheet ── */}
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side="right" className="w-72 p-0">
          <SheetTitle className="sr-only">Navigation</SheetTitle>
          <div className="flex h-full flex-col">
            <div className="flex items-center justify-between border-b border-border px-4 py-3">
              <span className="font-sans text-sm font-bold italic text-foreground">
                ial<span className="text-primary not-italic">.</span>chem
              </span>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="grid h-7 w-7 place-items-center rounded-md text-muted-foreground hover:bg-accent"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <nav className="flex-1 overflow-y-auto p-2" aria-label="Mobile topics">
              <MobileGroup title="Unit I" topics={unit1} onClose={() => setOpen(false)} />
              <MobileGroup title="Unit II" topics={unit2} onClose={() => setOpen(false)} />
            </nav>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
}

/* ── Desktop dropdown column ── */
function TopicColumn({
  title,
  topics,
}: {
  title: string;
  topics: typeof import("@/lib/topics").topics;
}) {
  return (
    <div>
      <p className="mb-2 px-2 font-sans text-[11px] font-bold uppercase tracking-wider text-primary">
        {title}
      </p>
      <ul className="space-y-0.5">
        {topics.map((t) => (
          <li key={t.slug}>
            <Link
              href={`/topic/${t.slug}`}
              className="flex items-baseline gap-2 rounded-md px-2 py-1.5 transition-colors hover:bg-accent"
            >
              <span className="font-mono text-[11px] font-bold text-primary">
                {String(t.number).padStart(2, "0")}
              </span>
              <span className="font-sans text-[13px] text-foreground">
                {t.title}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ── Mobile menu group ── */
function MobileGroup({
  title,
  topics,
  onClose,
}: {
  title: string;
  topics: typeof import("@/lib/topics").topics;
  onClose: () => void;
}) {
  return (
    <div className="mb-3">
      <p className="px-3 py-2 font-sans text-[11px] font-bold uppercase tracking-wider text-primary">
        {title}
      </p>
      <ul>
        {topics.map((t) => (
          <li key={t.slug}>
            <Link
              href={`/topic/${t.slug}`}
              onClick={onClose}
              className="flex items-baseline gap-2 rounded-md px-3 py-2.5 transition-colors hover:bg-accent"
            >
              <span className="font-mono text-[11px] font-bold text-primary">
                {String(t.number).padStart(2, "0")}
              </span>
              <span className="font-sans text-sm text-foreground">{t.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
