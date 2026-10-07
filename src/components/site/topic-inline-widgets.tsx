"use client";

import type { Topic } from "@/lib/topics/types";
import { Clock, Target, BarChart3, List } from "lucide-react";
import { RichText } from "./math";
import { useState, useEffect } from "react";
import { Sheet, SheetContent, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

/**
 * Compact horizontal strip showing study time, sections, difficulty.
 * Shown inline under the topic header on phone & tablet (desktop uses the
 * right-rail TopicQuickCard instead).
 */
export function InlineQuickStrip({ topic }: { topic: Topic }) {
  const specCount =
    (topic.sections?.length ?? 0) +
    (topic.specGroups?.reduce((n, g) => n + g.points.length, 0) ?? 0);

  return (
    <dl className="grid grid-cols-3 gap-2 rounded-xl border border-border bg-card p-3 shadow-card sm:gap-3 sm:p-4">
      <div className="flex flex-col items-center gap-1 text-center">
        <Clock className="h-4 w-4 text-primary" aria-hidden="true" />
        <dt className="sr-only">Study time</dt>
        <dd className="font-sans text-sm font-bold text-foreground sm:text-base">
          {topic.estimatedTime ?? "—"}
        </dd>
        <dd className="text-[10px] uppercase tracking-wide text-muted-foreground sm:text-[11px]">
          Study time
        </dd>
      </div>
      <div className="flex flex-col items-center gap-1 border-x border-border text-center">
        <Target className="h-4 w-4 text-primary" aria-hidden="true" />
        <dt className="sr-only">Specification points</dt>
        <dd className="font-sans text-sm font-bold text-foreground sm:text-base">
          {specCount}
        </dd>
        <dd className="text-[10px] uppercase tracking-wide text-muted-foreground sm:text-[11px]">
          Spec points
        </dd>
      </div>
      <div className="flex flex-col items-center gap-1 text-center">
        <BarChart3 className="h-4 w-4 text-primary" aria-hidden="true" />
        <dt className="sr-only">Difficulty</dt>
        {topic.difficulty ? (
          <dd
            className="flex items-center gap-0.5"
            aria-label={`Difficulty ${topic.difficulty} of 5`}
          >
            {Array.from({ length: 5 }).map((_, i) => (
              <span
                key={i}
                className={`h-2 w-2 rounded-full ${
                  i < topic.difficulty ? "bg-amber" : "bg-border"
                }`}
              />
            ))}
          </dd>
        ) : (
          <dd className="text-sm">—</dd>
        )}
        <dd className="text-[10px] uppercase tracking-wide text-muted-foreground sm:text-[11px]">
          Difficulty
        </dd>
      </div>
    </dl>
  );
}

/**
 * Floating action button bottom-right — gives phone & tablet users persistent
 * access to the table of contents no matter how far they've scrolled.
 * Hidden on tablet+ (≥768px) where the persistent sidebar is visible.
 *
 * Also hides itself when the user is at the top of the page (where the
 * breadcrumb and header are still visible) to avoid redundancy.
 */
export function FloatingTocFab({ topic }: { topic: Topic }) {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  // Show the FAB only after the user has scrolled down past the hero
  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      setVisible(scrollTop > 400);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Build the TOC item list (same logic as TopicSidebar / MobileTocTrigger)
  const items: { id: string; label: string; code?: string }[] = [];
  if (topic.sections && topic.sections.length > 0) {
    for (const section of topic.sections) {
      items.push({ id: section.id, label: section.title, code: section.code });
      for (const block of section.blocks) {
        if (block.kind === "heading") {
          items.push({ id: block.id, label: block.text, code: block.tag });
        }
      }
    }
  } else if (topic.specGroups) {
    topic.specGroups.forEach((group, gi) => {
      const groupId = group.code
        ? `group-${group.code.toLowerCase()}`
        : `group-${gi}`;
      if (group.code && group.title) {
        items.push({ id: groupId, label: group.title, code: group.code });
      }
    });
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open table of contents"
        className={`floating-toc-fab fixed bottom-4 right-4 z-40 grid h-12 w-12 place-items-center rounded-full bg-primary text-primary-foreground shadow-floating transition-all hover:scale-105 hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 safe-bottom-4 ${
          visible
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-4 opacity-0"
        }`}
      >
        <List className="h-5 w-5" aria-hidden="true" />
        <span
          className="absolute -right-0.5 -top-0.5 grid h-4 min-w-4 place-items-center rounded-full bg-amber px-1 font-sans text-[10px] font-bold text-primary-foreground"
          aria-hidden="true"
        >
          {items.length}
        </span>
      </button>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent
          side="bottom"
          className="safe-bottom max-h-[75vh] p-0"
        >
          <SheetTitle className="sr-only">Table of contents</SheetTitle>
          <div className="flex items-center justify-between border-b border-border px-4 py-3">
            <span className="font-sans text-sm font-semibold">
              On this page
            </span>
            <Button
              variant="ghost"
              size="sm"
              aria-label="Close"
              onClick={() => setOpen(false)}
            >
              Close
            </Button>
          </div>
          <nav
            className="max-h-[60vh] overflow-y-auto p-2 scrollbar-chem"
            aria-label="Floating table of contents"
          >
            {items.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
                className="block rounded-md px-3 py-2.5 text-sm text-foreground/80 transition-colors hover:bg-accent"
              >
                {item.code && (
                  <span className="mr-2 font-mono text-[11px] font-bold text-primary">
                    {item.code}
                  </span>
                )}
                <StripMath text={item.label} />
              </a>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    </>
  );
}

function StripMath({ text }: { text: string }) {
  const cleaned = text.replace(/\\\((.+?)\\\)/g, (_, inner) =>
    inner
      .replace(/\\text\{([^}]*)\}/g, "$1")
      .replace(/\\(?:mathrm|text)/g, "")
      .replace(/[\^_{}]/g, "")
      .replace(/\\delta/g, "δ")
      .replace(/\\gg/g, "≫")
      .replace(/\\cdot/g, "·")
      .replace(/\\circ/g, "°")
      .replace(/\\,/g, " ")
  );
  return <>{cleaned}</>;
}
