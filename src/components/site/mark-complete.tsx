"use client";

import { CheckCircle2, Circle } from "lucide-react";
import { useEffect, useState } from "react";

/**
 * Mark-as-read button. Toggles a per-topic flag in localStorage and
 * dispatches a `ial-chem:progress-changed` event so the ProgressDashboard,
 * TopicCards, and any other MarkCompleteButton instances on the page stay
 * in sync.
 *
 * Also listens for the same event (plus cross-tab `storage` events) so the
 * button reflects state changes made elsewhere — e.g. the second button
 * instance at the bottom of the topic page, or a completion in another tab.
 */
export function MarkCompleteButton({ topicSlug }: { topicSlug: string }) {
  const storageKey = `ial-chem:complete:${topicSlug}`;
  const [done, setDone] = useState(false);

  // Read current state from localStorage on mount and whenever a progress
  // event arrives (from another button instance or another tab).
  useEffect(() => {
    const readState = () => {
      try {
        setDone(localStorage.getItem(storageKey) === "1");
      } catch {
        /* ignore */
      }
    };
    readState();
    // Same-tab updates from other MarkCompleteButton instances
    window.addEventListener("ial-chem:progress-changed", readState);
    // Cross-tab updates
    window.addEventListener("storage", readState);
    return () => {
      window.removeEventListener("ial-chem:progress-changed", readState);
      window.removeEventListener("storage", readState);
    };
  }, [storageKey]);

  const toggle = () => {
    const next = !done;
    setDone(next);
    try {
      if (next) localStorage.setItem(storageKey, "1");
      else localStorage.removeItem(storageKey);
    } catch {
      /* ignore */
    }
    // Notify the ProgressDashboard, TopicCards, and any other
    // MarkCompleteButton instances that a completion flag changed.
    window.dispatchEvent(new CustomEvent("ial-chem:progress-changed"));
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={done}
      className={`inline-flex items-center gap-2 border px-4 py-2 font-sans text-xs uppercase tracking-[0.1em] transition-colors ${
        done
          ? "border-moss/40 bg-moss/10 text-moss"
          : "border-ink/20 bg-transparent text-ink/70 hover:border-primary hover:text-primary"
      }`}
    >
      {done ? (
        <CheckCircle2 className="h-3.5 w-3.5" />
      ) : (
        <Circle className="h-3.5 w-3.5" />
      )}
      {done ? "Completed" : "Mark as read"}
    </button>
  );
}
