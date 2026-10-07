"use client";

import type { SpecGroup, SpecPoint } from "@/lib/topics/types";
import { RichText } from "./math";
import { ParagraphOrBullets } from "./paragraph-or-bullets";
import { FlaskConical, BookMarked } from "lucide-react";

/**
 * Renders a topic's specification points as a clean, scannable list.
 * Each spec point shows its code (e.g. "1.1") prominently alongside the
 * verbatim spec text. Sub-points (i, ii, iii...) render as a nested list.
 * CORE PRACTICAL entries get a distinct badge.
 */
export function SpecList({ groups }: { groups: SpecGroup[] }) {
  return (
    <div className="space-y-8">
      {groups.map((group, gi) => (
        <section
          key={gi}
          id={group.code ? `group-${group.code.toLowerCase()}` : `group-${gi}`}
          className="scroll-mt-24"
          aria-labelledby={group.code && group.title ? `group-${gi}-title` : undefined}
        >
          {group.code && group.title && (
            <header className="mb-5">
              <div className="flex items-baseline gap-3">
                <span
                  className="font-display text-lg font-semibold italic text-primary"
                  aria-hidden="true"
                >
                  {group.code}
                </span>
                <span className="h-px flex-1 bg-border" aria-hidden="true" />
              </div>
              <h3
                id={`group-${gi}-title`}
                className="mt-2 font-display text-xl font-semibold tracking-tight text-ink"
              >
                {group.title}
              </h3>
            </header>
          )}

          <ol className="space-y-3">
            {group.points.map((point, pi) => (
              <SpecPointItem key={pi} point={point} />
            ))}
          </ol>
        </section>
      ))}
    </div>
  );
}

function SpecPointItem({ point }: { point: SpecPoint }) {
  return (
    <li
      className={`content-card relative rounded-sm border bg-card p-4 shadow-card transition-shadow hover:shadow-raised sm:p-5 ${
        point.isCorePractical
          ? "border-ochre/50 bg-amber-soft/15"
          : "border-border"
      }`}
    >
      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:gap-4">
        {/* Spec code — mono, oxblood, no badge background. Just the code. */}
        <div className="flex flex-shrink-0 items-center gap-2 sm:w-20 sm:flex-col sm:items-start sm:gap-1 lg:w-24">
          <span
            className={`font-mono text-sm font-semibold ${
              point.isCorePractical ? "text-ochre" : "text-primary"
            }`}
          >
            {point.code}
          </span>
          {point.isCorePractical && (
            <span className="inline-flex items-center gap-1 font-sans text-[10px] uppercase tracking-[0.1em] text-ochre">
              <FlaskConical className="h-3 w-3" />
              Core practical
            </span>
          )}
        </div>

        {/* Spec text */}
        <div className="min-w-0 flex-1">
          <ParagraphOrBullets className="text-[15px] leading-relaxed text-ink/90 sm:text-base">
            {point.text}
          </ParagraphOrBullets>

          {point.subPoints && point.subPoints.length > 0 && (
            <ul className="rail-list mt-2 text-[14.5px] sm:text-[15px]">
              {point.subPoints.map((sp, i) => (
                <li key={i} className="leading-relaxed">
                  <RichText>{sp}</RichText>
                </li>
              ))}
            </ul>
          )}

          {point.notes && (
            <p className="marginalia mt-3 !text-[13px]">
              {point.notes}
            </p>
          )}
        </div>
      </div>
    </li>
  );
}
