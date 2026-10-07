"use client";

import { createContext, useContext, useEffect, useMemo, useState, useSyncExternalStore } from "react";
import { splitIntoSentences } from "./split-sentences";
import { RenderParts, parseInlineMath, type Part } from "./math";

/* ═══════════════════════════════════════════════════════════════════════
   Reading-mode context — lets the topic header set a global default that
   every ParagraphOrBullets instance respects. The user's choice is also
   persisted in localStorage so it sticks across sessions.
   ═══════════════════════════════════════════════════════════════════════ */

export type ReadingMode = "paragraph" | "bullets" | "auto";

interface ReadingModeCtx {
  /** The topic-wide mode. "auto" = each block decides based on its length. */
  mode: ReadingMode;
  /** Convenience: true if every block should currently render as bullets. */
  bulletsForced: boolean;
  setMode: (m: ReadingMode) => void;
}

const Ctx = createContext<ReadingModeCtx>({
  mode: "auto",
  bulletsForced: false,
  setMode: () => {},
});

const STORAGE_KEY = "ial-chem:reading-mode";

// useSyncExternalStore — hydration-safe read of localStorage without
// setState-in-effect. Returns "auto" on server + first client render,
// then the real stored value after mount.
function subscribeReadingMode(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener("ial-chem:reading-mode-changed", callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener("ial-chem:reading-mode-changed", callback);
  };
}

function getReadingModeSnapshot(): ReadingMode {
  try {
    const stored = localStorage.getItem(STORAGE_KEY) as ReadingMode | null;
    if (stored === "paragraph" || stored === "bullets" || stored === "auto") {
      return stored;
    }
  } catch {
    /* ignore */
  }
  return "auto";
}

function getReadingModeServerSnapshot(): ReadingMode {
  return "auto";
}

export function ReadingModeProvider({ children }: { children: React.ReactNode }) {
  const storedMode = useSyncExternalStore(
    subscribeReadingMode,
    getReadingModeSnapshot,
    getReadingModeServerSnapshot,
  );
  // Override lets `setMode` update instantly without waiting for the event.
  const [override, setOverride] = useState<ReadingMode | null>(null);
  const mode = override ?? storedMode;

  const setMode = (m: ReadingMode) => {
    setOverride(m);
    try {
      localStorage.setItem(STORAGE_KEY, m);
    } catch {
      /* ignore */
    }
    // Notify the same tab (the native `storage` event only fires cross-tab).
    window.dispatchEvent(new Event("ial-chem:reading-mode-changed"));
  };

  const value = useMemo<ReadingModeCtx>(
    () => ({
      mode,
      bulletsForced: mode === "bullets",
      setMode,
    }),
    [mode],
  );

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useReadingMode() {
  return useContext(Ctx);
}

/* ═══════════════════════════════════════════════════════════════════════
   ParagraphOrBullets — the core component.
   Renders the given text as a flowing paragraph by default, with a small
   per-paragraph toggle (a list icon) that converts it into a bullet list,
   one bullet per sentence.

   Behaviour:
   - If the topic-wide mode is "bullets", every instance renders as bullets
     (the per-paragraph toggle is hidden, since the global control is on).
   - If the topic-wide mode is "paragraph", every instance renders as a
     paragraph (the per-paragraph toggle is hidden).
   - If the topic-wide mode is "auto" (the default), each block decides:
       * paragraphs with >= 3 sentences start as bullets (dense paragraphs
         benefit most from breaking up);
       * paragraphs with < 3 sentences start as a paragraph;
       * the per-paragraph toggle is shown so users can flip either way.
   ═══════════════════════════════════════════════════════════════════════ */

interface ParagraphOrBulletsProps {
  /** The raw text, which may contain inline \(...\) LaTeX. */
  children: string;
  /** Optional className applied to the paragraph wrapper. */
  className?: string;
  /** Override the auto threshold (default 3 sentences). */
  autoBulletThreshold?: number;
}

export function ParagraphOrBullets({
  children,
  className,
  autoBulletThreshold = 3,
}: ParagraphOrBulletsProps) {
  const { mode, bulletsForced } = useReadingMode();
  const [localOverride, setLocalOverride] = useState<"paragraph" | "bullets" | null>(null);

  // Parse + split once per text change.
  const sentences: Part[][] = useMemo(
    () => splitIntoSentences(children),
    [children],
  );

  // Decide which view to show.
  // 1. If a global mode is forced, use it (no per-paragraph toggle).
  // 2. Otherwise, if the user has toggled this paragraph, use their choice.
  // 3. Otherwise, auto: bullets if >= threshold sentences, else paragraph.
  const showBullets: boolean =
    mode === "bullets"
      ? true
      : mode === "paragraph"
        ? false
        : localOverride === "bullets"
          ? true
          : localOverride === "paragraph"
            ? false
            : sentences.length >= autoBulletThreshold;

  const canToggle = mode === "auto";

  // Render
  if (showBullets) {
    return (
      <div className={`group/bullet relative ${className ?? ""}`}>
        <ul className="list-disc space-y-2 pl-5">
          {sentences.map((parts, i) => (
            <li key={i} className="leading-relaxed">
              <RenderParts parts={parts} />
            </li>
          ))}
        </ul>
        {canToggle && (
          <ToggleButton
            onClick={() => setLocalOverride("paragraph")}
            title="Show as paragraph"
            icon="paragraph"
          />
        )}
      </div>
    );
  }

  return (
    <p className={`group/bullet relative ${className ?? ""}`}>
      <RenderParts parts={parseInlineMath(children)} />
      {canToggle && (
        <ToggleButton
          onClick={() => setLocalOverride("bullets")}
          title="Break into bullets"
          icon="bullets"
        />
      )}
    </p>
  );
}

/* ── The tiny toggle control ──
   On desktop (sm+): an absolute-positioned icon that appears on hover at
     the left edge of the paragraph.
   On mobile: a small inline button at the end of the paragraph, always
     visible (since hover doesn't exist on touch). */
function ToggleButton({
  onClick,
  title,
  icon,
}: {
  onClick: () => void;
  title: string;
  icon: "paragraph" | "bullets";
}) {
  const iconSvg = icon === "paragraph" ? (
    // Paragraph icon — three lines
    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true">
      <line x1="1" y1="2.5" x2="10" y2="2.5" />
      <line x1="1" y1="5.5" x2="10" y2="5.5" />
      <line x1="1" y1="8.5" x2="7" y2="8.5" />
    </svg>
  ) : (
    // Bullets icon — three dots with lines
    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true">
      <circle cx="1.5" cy="2.5" r="0.6" fill="currentColor" stroke="none" />
      <line x1="3.5" y1="2.5" x2="10" y2="2.5" />
      <circle cx="1.5" cy="5.5" r="0.6" fill="currentColor" stroke="none" />
      <line x1="3.5" y1="5.5" x2="10" y2="5.5" />
      <circle cx="1.5" cy="8.5" r="0.6" fill="currentColor" stroke="none" />
      <line x1="3.5" y1="8.5" x2="10" y2="8.5" />
    </svg>
  );

  return (
    <>
      {/* Mobile: inline button at the end of the paragraph */}
      <button
        type="button"
        onClick={onClick}
        title={title}
        aria-label={title}
        className="ml-1 inline-grid h-5 w-5 translate-y-0.5 place-items-center rounded-sm border border-border bg-card text-muted-foreground shadow-card transition-colors hover:text-primary sm:hidden"
      >
        {iconSvg}
      </button>
      {/* Desktop: absolute-positioned hover icon at the left edge */}
      <button
        type="button"
        onClick={onClick}
        title={title}
        aria-label={title}
        className="absolute -left-7 top-0 hidden h-5 w-5 items-center justify-center rounded-sm border border-border bg-card text-muted-foreground opacity-0 shadow-card transition-all hover:text-primary hover:opacity-100 group-hover/bullet:opacity-60 group-hover/bullet:hover:opacity-100 sm:flex"
      >
        {iconSvg}
      </button>
    </>
  );
}
