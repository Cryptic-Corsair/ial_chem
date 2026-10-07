"use client";

import { useEffect, useState } from "react";
import type { Topic } from "@/lib/topics/types";

interface TopicSidebarProps {
  topic: Topic;
}

/**
 * Sticky in-page navigation for a topic.
 * Lists every section + sub-heading; tracks the section currently in view
 * via IntersectionObserver and highlights it as aria-current.
 */
export function TopicSidebar({ topic }: TopicSidebarProps) {
  const [activeId, setActiveId] = useState<string>("");

  // Build a flat list of anchor targets.
  // For rich-section topics: list sections + sub-headings.
  // For spec-list topics: list spec groups (and optionally each spec point).
  const items: { id: string; label: string; code?: string; sub?: boolean }[] = [];

  if (topic.sections && topic.sections.length > 0) {
    for (const section of topic.sections) {
      items.push({ id: section.id, label: section.title, code: section.code });
      for (const block of section.blocks) {
        if (block.kind === "heading") {
          items.push({ id: block.id, label: block.text, code: block.tag, sub: true });
        }
      }
    }
  } else if (topic.specGroups && topic.specGroups.length > 0) {
    topic.specGroups.forEach((group, gi) => {
      const groupId = group.code
        ? `group-${group.code.toLowerCase()}`
        : `group-${gi}`;
      if (group.code && group.title) {
        items.push({
          id: groupId,
          label: group.title,
          code: group.code,
        });
      }
      // Don't list every individual spec point — too many. Just the groups.
    });
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Find the topmost intersecting entry near the top of the viewport.
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-90px 0px -65% 0px", threshold: 0 }
    );

    for (const item of items) {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, [topic.slug]);

  return (
    <nav
      aria-label="On this page"
      className="sticky top-20 max-h-[calc(100vh-6rem)] overflow-y-auto scrollbar-chem pr-2"
    >
      <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        On this page
      </p>
      <ul className="space-y-0.5">
        {items.map((item) => {
          const isActive = activeId === item.id;
          return (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                aria-current={isActive ? "true" : undefined}
                className={`block rounded-md px-3 py-1.5 text-sm leading-snug transition-colors ${
                  item.sub ? "pl-6 text-[13px]" : ""
                } ${
                  isActive
                    ? "bg-teal-soft font-semibold text-primary"
                    : "text-muted-foreground hover:bg-accent/50 hover:text-foreground"
                }`}
              >
                {item.code && (
                  <span
                    className={`mr-1.5 font-mono text-[11px] ${
                      isActive ? "text-primary" : "text-muted-foreground/70"
                    }`}
                  >
                    {item.code}
                  </span>
                )}
                <StripMath text={item.label} />
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

/** Strip \(...\) markers for the TOC so it stays short and readable. */
function StripMath({ text }: { text: string }) {
  const cleaned = text.replace(/\\\((.+?)\\\)/g, (_, inner) => {
    // Very rough LaTeX → plain text for the TOC: keep letters/digits, drop ^_{}
    return inner
      .replace(/\\text\{([^}]*)\}/g, "$1")
      .replace(/\\(?:mathrm|text)/g, "")
      .replace(/[\^_{}]/g, "")
      .replace(/\\delta/g, "δ")
      .replace(/\\gg/g, "≫")
      .replace(/\\cdot/g, "·")
      .replace(/\\circ/g, "°")
      .replace(/\\,/g, " ");
  });
  return <>{cleaned}</>;
}
