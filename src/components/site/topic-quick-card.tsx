"use client";

import type { Topic } from "@/lib/topics/types";
import { RichText } from "./math";
import { Clock, Target, BarChart3, Sparkles } from "lucide-react";

/**
 * Sticky "at-a-glance" widget shown on desktop in the right rail.
 */
export function TopicQuickCard({ topic }: { topic: Topic }) {
  const specCount =
    (topic.sections?.length ?? 0) +
    (topic.specGroups?.reduce((n, g) => n + g.points.length, 0) ?? 0);

  return (
    <aside
      aria-label="Topic at a glance"
      className="border-l-2 border-primary/30 pl-4"
    >
      <p className="mb-3 font-sans text-[10px] uppercase tracking-[0.15em] text-primary">
        At a glance
      </p>

      <dl className="space-y-2.5 font-serif text-sm">
        <div className="flex items-center justify-between gap-2">
          <dt className="flex items-center gap-1.5 text-ink/60">
            <Clock className="h-3.5 w-3.5" />
            <span className="font-sans text-xs">Study time</span>
          </dt>
          <dd className="font-display font-semibold text-ink">{topic.estimatedTime}</dd>
        </div>

        <div className="flex items-center justify-between gap-2">
          <dt className="flex items-center gap-1.5 text-ink/60">
            <Target className="h-3.5 w-3.5" />
            <span className="font-sans text-xs">Spec points</span>
          </dt>
          <dd className="font-display font-semibold text-ink">{specCount}</dd>
        </div>

        {topic.difficulty && (
          <div className="flex items-center justify-between gap-2">
            <dt className="flex items-center gap-1.5 text-ink/60">
              <BarChart3 className="h-3.5 w-3.5" />
              <span className="font-sans text-xs">Difficulty</span>
            </dt>
            <dd
              className="inline-flex items-center gap-0.5"
              aria-label={`Difficulty ${topic.difficulty} of 5`}
            >
              {Array.from({ length: 5 }).map((_, i) => (
                <span
                  key={i}
                  className={`h-1.5 w-1.5 rounded-full ${
                    i < topic.difficulty ? "bg-primary" : "bg-border"
                  }`}
                />
              ))}
            </dd>
          </div>
        )}
      </dl>

      {topic.keyTakeaways && topic.keyTakeaways.length > 0 && (
        <div className="mt-5 border-t border-border pt-4">
          <p className="mb-2.5 flex items-center gap-1.5 font-sans text-[10px] uppercase tracking-[0.12em] text-primary">
            <Sparkles className="h-3 w-3" />
            Key takeaways
          </p>
          <ul className="space-y-2 font-serif text-[13px] leading-relaxed text-ink/75">
            {topic.keyTakeaways.slice(0, 4).map((kt, i) => (
              <li key={i} className="flex items-start gap-1.5">
                <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-primary" />
                <span>
                  {kt.label && (
                    <span className="font-display text-[11px] font-semibold uppercase tracking-wide text-primary">
                      {kt.label}:{" "}
                    </span>
                  )}
                  <RichText>{kt.body}</RichText>
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </aside>
  );
}
