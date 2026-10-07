import type { Topic } from "./types";
import { topic1 } from "./topic-1";
import { topic2 } from "./topic-2";
import { topic3 } from "./topic-3";
import { topic4 } from "./topic-4";
import { topic5 } from "./topic-5";
import { topic6 } from "./topic-6";
import { topic7 } from "./topic-7";
import { topic8 } from "./topic-8";
import { topic9 } from "./topic-9";
import { topic10 } from "./topic-10";

/**
 * Registry of all topics in the Edexcel IAL Chemistry course.
 *
 * To add a new topic:
 *   1. Create /src/lib/topics/topic-N.ts exporting a `topicN` const.
 *   2. Import it here and add it to the array below.
 *   3. Set `published: false` while in progress — the home page will show
 *      a "Coming soon" card and the /topic/<slug> route will redirect home.
 *
 * The order here is the order shown on the home page.
 *
 * Topics 1–5 = Unit 1 (Structure, Bonding and Introduction to Organic Chemistry)
 * Topics 6–10 = Unit 2 (Energetics, Group Chemistry, Halogenoalkanes and Alcohols)
 *
 * Topic 7 has full rich-block notes (detailed explanations, diagrams, examples).
 * All other topics currently show the verbatim specification points list
 * (spec numbers and titles exactly as in the official Edexcel spec) — rich
 * notes can be added incrementally by populating their `sections` field.
 */
export const topics: Topic[] = [
  // ───── Unit 1: Structure, Bonding and Introduction to Organic Chemistry ─────
  topic1,
  topic2,
  topic3,
  topic4,
  topic5,
  // ───── Unit 2: Energetics, Group Chemistry, Halogenoalkanes and Alcohols ─────
  topic6,
  topic7,
  topic8,
  topic9,
  topic10,
];

/** Get a topic by slug, or null if not found. */
export function getTopic(slug: string): Topic | null {
  return topics.find((t) => t.slug === slug) ?? null;
}

/** Get a topic by number, or null if not found. */
export function getTopicByNumber(num: number): Topic | null {
  return topics.find((t) => t.number === num) ?? null;
}

/** Get the next and previous published topics for prev/next nav. */
export function getAdjacentTopics(currentSlug: string): {
  prev: Topic | null;
  next: Topic | null;
} {
  const published = topics.filter((t) => t.published);
  const idx = published.findIndex((t) => t.slug === currentSlug);
  if (idx === -1) return { prev: null, next: null };
  return {
    prev: idx > 0 ? published[idx - 1] : null,
    next: idx < published.length - 1 ? published[idx + 1] : null,
  };
}
