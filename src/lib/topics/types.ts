/**
 * Edexcel IAL Chemistry — Topic content schema
 * --------------------------------------------
 * Each topic is a structured document. Add a new topic by:
 *   1. Creating a new file in /src/lib/topics/ (e.g. topic-8.ts)
 *   2. Exporting a `Topic` object that matches this schema.
 *   3. Registering it in /src/lib/topics/index.ts.
 *
 * The schema is intentionally flexible: every "block" is a discriminated
 * union so the renderer knows exactly how to draw it. Add new block kinds
 * as the course grows (e.g. diagrams, embedded video, equation steps).
 */

export type Block =
  | { kind: "paragraph"; text: string }
  | { kind: "lead"; text: string }                        // larger intro paragraph
  | { kind: "heading"; level: 3 | 4; id: string; text: string; tag?: string }
  | {
      kind: "definition-list";
      items: { term: string; body: string; children?: string[] }[];
    }
  | {
      kind: "steps";
      title?: string;
      items: { term?: string; body: string; children?: string[] }[];
    }
  | {
      kind: "table";
      caption?: string;
      columns: { key: string; header: string }[];
      rows: Record<string, string>[];   // each value may contain inline LaTeX \(...\)
      highlight?: "first" | "last";
    }
  | {
      kind: "callout";
      tone: "key" | "next" | "warning" | "tip" | "exam-alert" | "common-mistake";
      title: string;
      body: string;
    }
  | {
      kind: "strength-chart";
      title: string;
      bars: { label: string; width: number; value: string }[];
    }
  | {
      kind: "card-grid";
      columns?: number;
      cards: {
        title: string;
        formula?: string;
        lines: string[];
        badge?: string;       // e.g. "★ Most H-bonds"
        highlight?: boolean;
        /** Optional inline SVG (molecule structure diagram, etc.) */
        svg?: string;
        /** Optional stats shown at the bottom of the card */
        stats?: { term: string; value: string; highlight?: boolean }[];
      }[];
    }
  // ───── New comprehension-focused block kinds ─────
  | {
      kind: "objectives";
      title?: string;        // defaults to "What you'll learn"
      items: string[];       // 4–6 short bullet objectives
    }
  | {
      kind: "key-takeaways";
      title?: string;        // defaults to "Quick recall"
      items: { label?: string; body: string }[];
    }
  | {
      kind: "equation";
      label?: string;        // e.g. "Strength hierarchy"
      math: string;          // KaTeX display source
      caption?: string;
    }
  | {
      kind: "compare";
      label?: string;
      columns: { title: string; subtitle?: string; badge?: string }[];
      rows: { label: string; values: string[] }[];   // values[i] aligns with columns[i]
    }
  | {
      kind: "fact-box";
      label?: string;        // e.g. "Remember this"
      facts: { term: string; value: string }[];
      tone?: "default" | "key" | "warning";
    }
  | {
      kind: "qa";
      question: string;
      answer: string;
      hint?: string;
    }
  // ───── Visual / diagram block kinds ─────
  | {
      kind: "diagram";
      /** Raw SVG markup. Uses CSS variables for theming (var(--neg), etc.). */
      svg: string;
      /** Accessible title for screen readers */
      title: string;
      /** Longer accessible description */
      desc?: string;
      /** Visible caption below the diagram */
      caption?: string;
      /** Optional two-column variant (lighter background) */
      variant?: "default" | "soft";
    }
  | {
      kind: "strength-ladder";
      title?: string;
      /** The rungs, from strongest to weakest. The first can be marked
       *  as `break: true` to show a scale-break between it and the rest. */
      rungs: {
        label: string;
        sublabel?: string;
        /** Bar width as percentage (0–100) */
        width: number;
        /** Bar fill colour: one of the semantic tokens */
        color: "primary" | "moss" | "ochre" | "teal" | "rose";
        /** Text shown inside the bar (e.g. "strong", "weak") */
        barLabel?: string;
      }[];
      /** Note shown below the ladder */
      note?: string;
    }
  | {
      kind: "diverging-chart";
      title?: string;
      caption?: string;
      /** Each row has a label and a value. Positive values extend right
       *  from the zero line; negative values extend left. */
      rows: {
        label: string;
        sublabel?: string;
        value: number;
        /** Display string for the value (e.g. "−42 °C") */
        display: string;
        /** "pos" = right of zero (primary colour), "neg" = left (pos colour) */
        side: "pos" | "neg";
      }[];
      /** Axis label for the left end */
      leftAxis?: string;
      /** Axis label for the right end */
      rightAxis?: string;
      /** The zero-line position as a percentage (0–100). Defaults to 50. */
      zeroPercent?: number;
    }
  | {
      kind: "decision-flow";
      title?: string;
      question: string;
      /** The yes branch */
      yes: { label: string; body: string };
      /** The no branch */
      no: { label: string; body: string };
    }
  // ───── Image block (for embedded PNG/JPG diagrams) ─────
  | {
      kind: "image";
      /** Path to the image in /public/images/ */
      src: string;
      /** Alt text for accessibility */
      alt: string;
      /** Visible caption below the image */
      caption?: string;
    };

export interface Section {
  /** Slug-style id, used for anchor links */
  id: string;
  /** Spec point label, e.g. "7.1", "7.1(i)" */
  code: string;
  /** Human title, e.g. "Understand the Nature of Intermolecular Forces" */
  title: string;
  /** Optional short subtitle shown under the section header */
  subtitle?: string;
  /** Content blocks, rendered in order */
  blocks: Block[];
}

/**
 * A single verbatim specification point, e.g.:
 *   { code: "1.1", text: "know the terms 'atom', 'element', ...", notes?: "..." }
 * Used by the spec-list rendering mode for topics whose detailed notes
 * haven't been written yet but where the official spec points must be shown.
 */
export interface SpecPoint {
  /** The spec code, e.g. "1.1", "3.18", "8.26 iii" */
  code: string;
  /** The verbatim spec text from the official Edexcel specification */
  text: string;
  /** Optional sub-points (e.g. for "i ... ii ... iii ..." enumerations) */
  subPoints?: string[];
  /** Optional editor's note shown under the spec text (callout style) */
  notes?: string;
  /** Marks CORE PRACTICAL entries so they can be visually distinguished */
  isCorePractical?: boolean;
}

/**
 * A grouping of spec points under a sub-heading, e.g. Topic 3's "3A: Ionic bonding".
 * Most topics have a single group with no sub-heading.
 */
export interface SpecGroup {
  /** Group code/label, e.g. "3A", "8B", or empty for ungrouped topics */
  code?: string;
  /** Group title, e.g. "Ionic bonding" */
  title?: string;
  /** The spec points in this group, in order */
  points: SpecPoint[];
}

export interface Topic {
  /** Topic number as integer, e.g. 7 */
  number: number;
  /** URL slug, e.g. "intermolecular-forces" → /topic/intermolecular-forces */
  slug: string;
  /** Topic title, e.g. "Intermolecular Forces" */
  title: string;
  /** One-line summary for cards & meta */
  summary: string;
  /** Which Unit this topic belongs to (1, 2, 3, 4, 5) */
  unit: number;
  /** Approximate study time, e.g. "2 hours" */
  estimatedTime?: string;
  /** Difficulty 1–5 */
  difficulty?: number;
  /** Hex/oklch accent color used for this topic's branding */
  accent?: string;
  /** Whether this topic is published. false → shows "Coming soon" */
  published: boolean;
  /** Intro lead shown at the top of the topic page */
  intro: string;
  /** 4–6 short bullet objectives shown in the "What you'll learn" panel up front */
  objectives?: string[];
  /**
   * 4 key-value facts shown in the "At a glance" strip in the topic hero.
   * Each item has a short label (dt) and a one-line value (dd).
   * This is the reference file's signature hero element — it gives the
   * student the essential facts before they start reading.
   */
  atAGlance?: { label: string; value: string }[];
  /** Quick-recall summary items shown in the "Key takeaways" panel at the end */
  keyTakeaways?: { label?: string; body: string }[];

  /**
   * TWO rendering modes:
   *
   * 1. "rich" — full Block-based sections (used by Topic 7). When `sections`
   *    is provided and `specGroups` is omitted, the page renders the rich
   *    block layout.
   *
   * 2. "spec-list" — verbatim spec points grouped by sub-section (used by
   *    Topics 1–6, 8–10). When `specGroups` is provided, the page renders
   *    a clean specification list with each spec code + text.
   *
   * A topic can have BOTH: rich sections for the studied points and a
   * specGroups appendix showing the full official spec. If both are present,
   * the rich sections render first, then the spec list.
   */
  sections?: Section[];
  specGroups?: SpecGroup[];
}
