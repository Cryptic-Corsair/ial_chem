"use client";

import { useState, useMemo } from "react";
import { topics } from "@/lib/topics";
import { Search, X } from "lucide-react";

/**
 * Client-side search filter for the topic index. Filters topic cards by
 * title, summary, spec codes, or spec text. As you type, the home page's
 * topic grid updates to show only matching topics.
 *
 * Emits a `ial-chem:search` CustomEvent with the (lowercased) query string
 * so TopicCard instances can decide whether to show or hide themselves.
 */
export function TopicSearch() {
  const [query, setQuery] = useState("");

  const stats = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return null;
    let matches = 0;
    for (const t of topics) {
      if (!t.published) continue;
      const titleMatch = t.title.toLowerCase().includes(q);
      const summaryMatch = t.summary.toLowerCase().includes(q);
      const codeMatch = String(t.number).includes(q);
      const specMatch =
        t.specGroups?.some((g) =>
          g.points.some((p) =>
            p.code.includes(q) || p.text.toLowerCase().includes(q),
          ),
        ) ?? false;
      if (titleMatch || summaryMatch || codeMatch || specMatch) matches++;
    }
    return { matches, total: topics.filter((t) => t.published).length };
  }, [query]);

  const onChange = (value: string) => {
    setQuery(value);
    window.dispatchEvent(
      new CustomEvent("ial-chem:search", {
        detail: value.trim().toLowerCase(),
      }),
    );
  };

  const clear = () => {
    setQuery("");
    window.dispatchEvent(new CustomEvent("ial-chem:search", { detail: "" }));
  };

  return (
    <div className="relative">
      <div className="relative">
        <Search
          className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
          aria-hidden="true"
        />
        <input
          type="search"
          value={query}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Search topics, spec codes, or content…"
          aria-label="Search topics"
          className="w-full rounded-sm border border-border bg-card py-2.5 pl-9 pr-9 font-serif text-sm text-ink shadow-card outline-none transition-colors placeholder:text-ink/40 focus:border-primary focus:ring-1 focus:ring-primary"
        />
        {query && (
          <button
            type="button"
            onClick={clear}
            aria-label="Clear search"
            className="absolute right-2 top-1/2 grid h-6 w-6 -translate-y-1/2 place-items-center rounded-sm text-muted-foreground transition-colors hover:bg-accent hover:text-primary"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        )}
      </div>
      {stats && (
        <p className="mt-2 font-serif text-xs italic text-ink/60">
          {stats.matches === 0
            ? "No matches."
            : `${stats.matches} of ${stats.total} topics match "${query}".`}
        </p>
      )}
    </div>
  );
}
