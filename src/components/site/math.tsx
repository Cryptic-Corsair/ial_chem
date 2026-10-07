"use client";

import katex from "katex";
import { useMemo } from "react";

interface MathProps {
  children: string;
  display?: boolean;
  className?: string;
}

/**
 * Render a LaTeX string with KaTeX.
 *
 * Usage:
 *   <Math>{String.raw`\delta^+`}</Math>            → inline
 *   <Math display>{String.raw`H_2O`}</Math>         → block
 *
 * The text content is the LaTeX source. We deliberately use the imperative
 * katex.renderToString API rather than react-katex so the component works
 * identically on server and client without hydration mismatch.
 */
export function Math({ children, display = false, className }: MathProps) {
  const html = useMemo(() => {
    try {
      return katex.renderToString(children, {
        displayMode: display,
        throwOnError: false,
        strict: false,
        output: "html",
        trust: false,
      });
    } catch {
      // If KaTeX fails, fall back to the raw source so the page never breaks.
      return `<span class="katex-error">${escapeHtml(children)}</span>`;
    }
  }, [children, display]);

  return (
    <span
      className={className}
      // KaTeX output is trusted (it sanitizes by default) and is the only way
      // to get correct math rendering. We disable trust mode above so no
      // dangerous extensions can run.
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

/**
 * Render a string that may contain inline LaTeX delimited by \( ... \).
 * Plain text outside the delimiters is escaped and rendered as-is.
 *
 * Example: <RichText>{"The \\(\\delta^+\\) end attracts..."}</RichText>
 */
interface RichTextProps {
  children: string;
  className?: string;
}

export function RichText({ children, className }: RichTextProps) {
  const parts = useMemo(() => parseInlineMath(children), [children]);
  return <RenderParts parts={parts} className={className} />;
}

/**
 * Render pre-parsed parts (text + inline math). Used by RichText and by the
 * sentence-splitter, which produces Part[][] from a paragraph.
 */
export function RenderParts({
  parts,
  className,
}: {
  parts: Part[];
  className?: string;
}) {
  return (
    <span className={className}>
      {parts.map((p, i) =>
        p.type === "text" ? (
          <span key={i}>{p.value}</span>
        ) : (
          <Math key={i}>{p.value}</Math>
        )
      )}
    </span>
  );
}

export type Part = { type: "text"; value: string } | { type: "math"; value: string };

export function parseInlineMath(src: string): Part[] {
  const parts: Part[] = [];
  const re = /\\\((.+?)\\\)/gs;
  let last = 0;
  let m: RegExpExecArray | null;
  while ((m = re.exec(src)) !== null) {
    if (m.index > last) {
      parts.push({ type: "text", value: src.slice(last, m.index) });
    }
    parts.push({ type: "math", value: m[1] });
    last = m.index + m[0].length;
  }
  if (last < src.length) {
    parts.push({ type: "text", value: src.slice(last) });
  }
  return parts.length ? parts : [{ type: "text", value: src }];
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
