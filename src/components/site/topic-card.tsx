"use client";

import Link from "next/link";
import type { Topic } from "@/lib/topics/types";
import { Clock, CheckCircle2 } from "lucide-react";
import { useEffect, useState } from "react";

/**
 * Topic card — editorial style.
 *
 * The card leads with a large typographic topic number (set in Fraunces
 * italic, like a chapter number in a book), followed by the title and a
 * short summary. No colored left stripe — the topic number itself is the
 * visual anchor. Sharp corners (rounded-sm, not rounded-xl) for a printed,
 * textbook feel rather than a soft app-card feel.
 *
 * Also reads its own completion state from localStorage and shows a small
 * moss-green "Read" badge if the student has marked the topic as read.
 */
export function TopicCard({
  topic,
  unitNumber: _unitNumber,
}: {
  topic: Topic;
  unitNumber?: number;
}) {
  const isPublished = topic.published;
  const num = String(topic.number).padStart(2, "0");
  const [isRead, setIsRead] = useState(false);
  const [searchHidden, setSearchHidden] = useState(false);

  // Read completion state from localStorage + listen for changes
  useEffect(() => {
    if (!isPublished) return;
    const checkRead = () => {
      try {
        setIsRead(localStorage.getItem(`ial-chem:complete:${topic.slug}`) === "1");
      } catch {
        /* ignore */
      }
    };
    checkRead();
    window.addEventListener("ial-chem:progress-changed", checkRead);
    window.addEventListener("storage", checkRead);
    return () => {
      window.removeEventListener("ial-chem:progress-changed", checkRead);
      window.removeEventListener("storage", checkRead);
    };
  }, [topic.slug, isPublished]);

  // Listen for search events from TopicSearch and hide/show this card
  useEffect(() => {
    const onSearch = (e: Event) => {
      const query = (e as CustomEvent<string>).detail ?? "";
      if (!query) {
        setSearchHidden(false);
        return;
      }
      // Match against title, summary, topic number, and spec text
      const titleMatch = topic.title.toLowerCase().includes(query);
      const summaryMatch = topic.summary.toLowerCase().includes(query);
      const codeMatch = String(topic.number).includes(query);
      const specMatch =
        topic.specGroups?.some((g) =>
          g.points.some((p) =>
            p.code.includes(query) || p.text.toLowerCase().includes(query),
          ),
        ) ?? false;
      const sectionMatch =
        topic.sections?.some((s) =>
          s.title.toLowerCase().includes(query) ||
          s.code.includes(query),
        ) ?? false;
      setSearchHidden(!(titleMatch || summaryMatch || codeMatch || specMatch || sectionMatch));
    };
    window.addEventListener("ial-chem:search", onSearch as EventListener);
    return () => window.removeEventListener("ial-chem:search", onSearch as EventListener);
  }, [topic]);

  if (!isPublished || searchHidden) return null;

  return (
    <Link
      href={`/topic/${topic.slug}`}
      className="group relative flex flex-col rounded-sm border border-border bg-card p-5 shadow-card transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-raised"
    >
      <TopicCardHeader num={num} isRead={isRead} />
      <TopicCardBody topic={topic} />
      <TopicCardFooter topic={topic} />
    </Link>
  );
}

function TopicCardHeader({
  num,
  isRead,
}: {
  num: string;
  isRead: boolean;
}) {
  return (
    <div className="mb-3 flex items-start justify-between">
      {/* The topic number as a design element — large, italic, oxblood */}
      <span className="font-display text-4xl font-semibold italic leading-none text-primary/80">
        {num}
      </span>
      {isRead && (
        <span
          className="mt-1 inline-flex items-center gap-1 font-sans text-[10px] uppercase tracking-[0.08em] text-moss"
          title="Marked as read"
        >
          <CheckCircle2 className="h-3.5 w-3.5" />
          Read
        </span>
      )}
    </div>
  );
}

function TopicCardBody({ topic }: { topic: Topic }) {
  return (
    <div className="flex-1">
      <h3 className="font-display text-base font-semibold leading-snug tracking-tight text-ink">
        {topic.title}
      </h3>
      <p className="mt-1.5 font-serif text-sm leading-relaxed text-ink/65">
        {topic.summary}
      </p>
    </div>
  );
}

function TopicCardFooter({ topic }: { topic: Topic }) {
  return (
    <div className="mt-4 flex items-center justify-between border-t border-border pt-3">
      {topic.estimatedTime ? (
        <span className="inline-flex items-center gap-1 font-sans text-[11px] text-muted-foreground">
          <Clock className="h-3 w-3" />
          {topic.estimatedTime}
        </span>
      ) : (
        <span />
      )}
      <span className="font-sans text-[11px] uppercase tracking-wide text-muted-foreground">
        Unit {topic.unit === 1 ? "I" : topic.unit === 2 ? "II" : topic.unit}
      </span>
    </div>
  );
}
