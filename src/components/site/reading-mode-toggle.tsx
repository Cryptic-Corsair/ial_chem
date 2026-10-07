"use client";

import { useReadingMode, type ReadingMode } from "./paragraph-or-bullets";
import { useRef } from "react";

/**
 * A small segmented control that lets the user pick the topic-wide reading
 * mode: Paragraph / Auto / Bullets. Shown in the topic header next to the
 * Mark-as-read button. The choice is persisted in localStorage by the
 * ReadingModeProvider.
 *
 * Implements the WAI-ARIA radiogroup pattern: only the checked radio is in
 * the tab order (tabIndex=0), others are tabIndex=-1, and Arrow Left/Right
 * moves between them.
 */

// Static options — module-level so the array isn't recreated every render.
const OPTIONS: { value: ReadingMode; label: string; title: string }[] = [
  { value: "paragraph", label: "¶", title: "Paragraph view" },
  { value: "auto", label: "Auto", title: "Auto: long paragraphs become bullets" },
  { value: "bullets", label: "•", title: "Bullet view: every sentence becomes a bullet" },
];

export function ReadingModeToggle() {
  const { mode, setMode } = useReadingMode();
  const refs = useRef<(HTMLButtonElement | null)[]>([]);

  const focusRelative = (offset: number) => {
    const currentIndex = OPTIONS.findIndex((o) => o.value === mode);
    if (currentIndex === -1) return;
    const nextIndex = (currentIndex + offset + OPTIONS.length) % OPTIONS.length;
    const target = refs.current[nextIndex];
    if (target) {
      target.focus();
      setMode(OPTIONS[nextIndex].value);
    }
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      focusRelative(-1);
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      focusRelative(1);
    }
  };

  return (
    <div
      role="radiogroup"
      aria-label="Reading mode"
      onKeyDown={onKeyDown}
      className="inline-flex items-center overflow-hidden border border-ink/20 bg-transparent"
    >
      {OPTIONS.map((opt, i) => {
        const active = mode === opt.value;
        return (
          <button
            key={opt.value}
            ref={(el) => { refs.current[i] = el; }}
            type="button"
            role="radio"
            aria-checked={active}
            tabIndex={active ? 0 : -1}
            title={opt.title}
            onClick={() => setMode(opt.value)}
            className={`flex h-8 items-center justify-center px-2.5 font-sans text-xs transition-colors ${
              i > 0 ? "border-l border-ink/20" : ""
            } ${
              active
                ? "bg-primary text-primary-foreground"
                : "text-ink/60 hover:bg-accent hover:text-primary"
            }`}
            style={{ minWidth: opt.label === "Auto" ? "3rem" : "1.75rem" }}
          >
            {opt.label === "Auto" ? (
              <span className="uppercase tracking-[0.08em]">Auto</span>
            ) : (
              <span className="text-sm leading-none">{opt.label}</span>
            )}
          </button>
        );
      })}
    </div>
  );
}
