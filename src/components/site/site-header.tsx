"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { topics } from "@/lib/topics";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { ThemeToggle } from "./theme-toggle";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
      className={`sticky top-0 z-40 w-full border-b border-border bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/80 transition-shadow ${
        scrolled ? "shadow-card" : ""
      }`}
    >
      <div className="mx-auto flex h-14 max-w-[1280px] items-center gap-3 px-4 sm:h-16 sm:px-6 lg:gap-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
        {/* Wordmark — custom typography, not a generic icon-in-square.
            "ial.chem" set in Fraunces italic with an oxblood period.
            Reads like a journal masthead, not a SaaS logo. */}
        <Link
          href="/"
          className="group flex items-baseline gap-1 font-display text-lg font-semibold tracking-tight text-ink sm:text-xl"
          aria-label="The IAL Chemistry Companion — home"
        >
          <span className="italic">ial</span>
          <span className="text-primary not-italic">.</span>
          <span className="italic">chem</span>
        </Link>

        {/* Edition indicator — like a periodical's issue line.
            Small, muted, sits next to the wordmark. */}
        <span className="hidden items-center gap-1.5 font-sans text-[10px] uppercase tracking-[0.15em] text-muted-foreground sm:flex">
          <span className="h-3 w-px bg-border" aria-hidden="true" />
          Units I &amp; II
        </span>

        {/* Desktop/tablet nav — dropdown menu for topics (visible from md up) */}
        <NavigationMenu className="ml-auto hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent font-sans text-sm data-[state=open]:bg-accent">
                Topics
                <ChevronDown className="h-3.5 w-3.5" aria-hidden="true" />
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid w-[560px] gap-5 border-l-2 border-primary/30 bg-card p-5 md:grid-cols-2 lg:w-[600px]">
                  <TopicMenuColumn
                    title="Unit I"
                    subtitle="Structure, Bonding & Organic"
                    topics={unit1}
                  />
                  <TopicMenuColumn
                    title="Unit II"
                    subtitle="Energetics, Groups & Organic"
                    topics={unit2}
                  />
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild className={`${navigationMenuTriggerStyle()} font-sans text-sm`}>
                <Link href="/#index">Index</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Theme toggle — always visible (phone + desktop). Sits before the
            mobile hamburger so on desktop it appears at the far right. */}
        <div className="ml-auto md:ml-2">
          <ThemeToggle />
        </div>

        {/* Mobile menu — phone only (below md) */}
        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                aria-label="Open navigation menu"
                className="text-ink"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72 p-0">
              <SheetTitle className="sr-only">Navigation</SheetTitle>
              <div className="flex h-full flex-col">
                <div className="flex items-center justify-between border-b border-border px-4 py-3">
                  <span className="font-display text-base font-semibold italic text-ink">
                    ial<span className="text-primary not-italic">.</span>chem
                  </span>
                  <Button
                    variant="ghost"
                    size="icon"
                    aria-label="Close menu"
                    onClick={() => setOpen(false)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
                <nav
                  className="flex-1 overflow-y-auto p-2 scrollbar-chem"
                  aria-label="Mobile topics"
                >
                  <MobileTopicGroup
                    title="Unit I"
                    topics={unit1}
                    onNavigate={() => setOpen(false)}
                  />
                  <MobileTopicGroup
                    title="Unit II"
                    topics={unit2}
                    onNavigate={() => setOpen(false)}
                  />
                  {topics.filter((t) => !t.published).length > 0 && (
                    <MobileTopicGroup
                      title="Forthcoming"
                      topics={topics.filter((t) => !t.published)}
                      onNavigate={() => setOpen(false)}
                    />
                  )}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

function TopicMenuColumn({
  title,
  subtitle,
  topics,
}: {
  title: string;
  subtitle: string;
  topics: typeof import("@/lib/topics").topics;
}) {
  return (
    <div className="flex flex-col">
      <div className="mb-2 px-1">
        <p className="font-display text-sm font-semibold italic text-primary">
          {title}
        </p>
        <p className="font-sans text-[11px] text-muted-foreground">{subtitle}</p>
      </div>
      <ul className="space-y-0.5">
        {topics.map((t) => (
          <li key={t.slug}>
            <Link
              href={`/topic/${t.slug}`}
              className="group block rounded-md px-2 py-1.5 transition-colors hover:bg-accent"
            >
              <span className="font-mono text-[11px] font-semibold text-primary">
                {String(t.number).padStart(2, "0")}
              </span>{" "}
              <span className="font-sans text-sm text-ink group-hover:text-foreground">
                {t.title}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function MobileTopicGroup({
  title,
  topics,
  onNavigate,
}: {
  title: string;
  topics: typeof import("@/lib/topics").topics;
  onNavigate: () => void;
}) {
  return (
    <div className="mb-4">
      <p className="border-b border-border px-3 py-2 font-display text-xs font-semibold uppercase tracking-[0.12em] italic text-primary">
        {title}
      </p>
      <ul className="mt-1">
        {topics.map((t) => (
          <li key={t.slug}>
            <Link
              href={t.published ? `/topic/${t.slug}` : "#"}
              onClick={(e) => {
                if (!t.published) e.preventDefault();
                onNavigate();
              }}
              className={`block rounded-md px-3 py-2.5 transition-colors ${
                t.published
                  ? "hover:bg-accent"
                  : "cursor-not-allowed text-muted-foreground/60"
              }`}
            >
              <span className="font-mono text-[11px] font-semibold text-primary">
                {String(t.number).padStart(2, "0")}
              </span>{" "}
              <span className="font-sans text-sm text-ink">{t.title}</span>
              {!t.published && (
                <span className="ml-2 font-sans text-[10px] uppercase tracking-wide text-muted-foreground italic">
                  forthcoming
                </span>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
