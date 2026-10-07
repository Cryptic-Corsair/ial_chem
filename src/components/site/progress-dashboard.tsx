"use client";

import { useEffect, useMemo, useState } from "react";
import { topics } from "@/lib/topics";
import { CheckCircle2 } from "lucide-react";

/**
 * Progress dashboard — reads all `ial-chem:complete:*` keys from
 * localStorage and shows how many topics the student has marked as read.
 *
 * Listens for the `storage` event so the count updates live if the user
 * marks a topic complete in another tab. Also listens for a custom event
 * (`ial-chem:progress-changed`) that MarkCompleteButton dispatches so
 * same-tab updates are reflected immediately.
 */
export function ProgressDashboard() {
  // `topics` is a module-level constant, so the filtered list is stable.
  // Memoize to keep the effect deps stable (avoids re-adding listeners
  // on every render).
  const published = useMemo(() => topics.filter((t) => t.published), []);
  // `null` = not hydrated yet (avoid flash of "0 of 10" before localStorage
  // is read). Becomes a Set once read.
  const [completedSlugs, setCompletedSlugs] = useState<Set<string> | null>(null);

  useEffect(() => {
    const readProgress = () => {
      const completed = new Set<string>();
      for (const t of published) {
        try {
          if (localStorage.getItem(`ial-chem:complete:${t.slug}`) === "1") {
            completed.add(t.slug);
          }
        } catch {
          /* ignore */
        }
      }
      setCompletedSlugs(completed);
    };
    readProgress();

    // Listen for cross-tab changes
    window.addEventListener("storage", readProgress);
    // Listen for same-tab changes (dispatched by MarkCompleteButton)
    window.addEventListener("ial-chem:progress-changed", readProgress);
    return () => {
      window.removeEventListener("storage", readProgress);
      window.removeEventListener("ial-chem:progress-changed", readProgress);
    };
  }, [published]);

  // Not hydrated yet — don't render anything (avoids flash of "0 of 10")
  if (completedSlugs === null) return null;

  const total = published.length;
  const done = completedSlugs.size;
  const pct = total > 0 ? Math.round((done / total) * 100) : 0;

  return (
    <div className="rounded-sm border border-border bg-card/50 p-5 shadow-card">
      <div className="flex items-baseline justify-between gap-4">
        <div>
          <p className="font-sans text-[10px] uppercase tracking-[0.15em] text-primary">
            Your progress
          </p>
          <p className="mt-1 font-display text-2xl font-semibold text-ink">
            {done}{" "}
            <span className="font-serif text-base font-normal text-ink/50">
              of {total} topics read
            </span>
          </p>
        </div>
        {done > 0 && (
          <span className="inline-flex items-center gap-1.5 font-sans text-xs text-moss">
            <CheckCircle2 className="h-4 w-4" />
            {pct}%
          </span>
        )}
      </div>

      {/* Progress bar — editorial style, thin rule with oxblood fill */}
      <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-muted">
        <div
          className="h-full rounded-full bg-primary transition-all duration-500 ease-out"
          style={{ width: `${pct}%` }}
        />
      </div>

      {done === 0 ? (
        <p className="mt-3 font-serif text-sm italic text-ink/60">
          Mark a topic as read after you finish it — your progress shows up here.
        </p>
      ) : done === total ? (
        <p className="mt-3 font-serif text-sm italic text-moss">
          Units I &amp; II complete. Well done.
        </p>
      ) : (
        <p className="mt-3 font-serif text-sm italic text-ink/60">
          {total - done} {total - done === 1 ? "topic" : "topics"} to go.
        </p>
      )}
    </div>
  );
}
