"use client";

import { RichText, Math as MathExpr } from "./math";
import { ParagraphOrBullets, ForcedBullets } from "./paragraph-or-bullets";
import type { Block } from "@/lib/topics/types";
import {
  Lightbulb,
  ArrowRight,
  AlertTriangle,
  Sparkles,
  GraduationCap,
  XCircle,
  CheckCircle2,
  HelpCircle,
  Eye,
  EyeOff,
  useState,
} from "./_icons";

/**
 * Render a single content block. Each block kind maps to a specific visual
 * treatment. Keep this component pure — it takes a block and returns JSX.
 */
export function BlockRenderer({ block }: { block: Block }) {
  switch (block.kind) {
    // ─────────────────────────────────────────────────────────────────────
    // Existing block kinds (refined)
    // ─────────────────────────────────────────────────────────────────────
    case "lead":
      return (
        <div className="lead-block mb-5 border-l-2 border-primary/60 bg-card px-5 py-4 text-ink/85 shadow-card sm:px-6 sm:py-5" style={{ fontSize: "var(--text-lg)" }}>
          <ParagraphOrBullets>{block.text}</ParagraphOrBullets>
        </div>
      );

    case "paragraph":
      return (
        <ParagraphOrBullets className="mb-4">{block.text}</ParagraphOrBullets>
      );

    case "heading": {
      const HeadingTag = block.level === 3 ? "h3" : "h4";
      return (
        <HeadingTag
          id={block.id}
          className={
            block.level === 3
              ? "mt-8 mb-4 scroll-mt-24 flex items-baseline gap-3 border-b border-line-soft pb-2"
              : "mt-6 mb-3 scroll-mt-24"
          }
        >
          {block.tag && (
            <span className="font-mono text-xs font-bold text-accent">
              {block.tag}
            </span>
          )}
          <RichText>{block.text}</RichText>
        </HeadingTag>
      );
    }

    case "definition-list":
      return (
        <div className="my-5 rounded-lg border border-border bg-card p-5 shadow-card sm:p-6">
          <dl>
            {block.items.map((item, i) => (
              <div
                key={i}
                className={i === 0 ? "" : "mt-4 border-t border-line-soft pt-4"}
              >
                <dt className="mb-2 flex items-baseline gap-2.5">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" aria-hidden="true" />
                  <span className="font-semibold text-ink" style={{ fontSize: "var(--text-sm)" }}>
                    <RichText>{item.term}</RichText>
                  </span>
                </dt>
                <dd className="ml-4">
                  {item.body && (
                    <div className="rail-list" style={{ color: "var(--ink-2)" }}>
                      <ForcedBullets>{item.body}</ForcedBullets>
                    </div>
                  )}
                  {item.children && item.children.length > 0 && (
                    <ul className="rail-list mt-2" style={{ color: "var(--ink-2)" }}>
                      {item.children.map((c, j) => (
                        <li key={j}>
                          <RichText>{c}</RichText>
                        </li>
                      ))}
                    </ul>
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      );

    case "steps":
      return (
        <div className="my-5 rounded-lg border border-border bg-card p-5 shadow-card sm:p-6">
          <ol className="space-y-5">
          {block.title && (
            <p className="mb-2 font-semibold uppercase tracking-wide text-muted-foreground" style={{ fontSize: "var(--text-xs)" }}>
              {block.title}
            </p>
          )}
          {block.items.map((item, i) => (
            <li key={i} className="relative pl-11">
              <span className="absolute left-0 top-0 grid h-8 w-8 place-items-center rounded-full border border-primary-line bg-primary-soft font-bold text-primary" style={{ fontSize: "var(--text-xs)" }}>
                {i + 1}
              </span>
              {item.term && (
                <p className="mb-2 font-semibold text-ink" style={{ fontSize: "var(--text-sm)" }}>
                  <RichText>{item.term}</RichText>
                </p>
              )}
              <div className="ml-3">
                {item.body && (
                  <div className="rail-list" style={{ color: "var(--ink-2)" }}>
                    <ForcedBullets>{item.body}</ForcedBullets>
                  </div>
                )}
                {item.children && item.children.length > 0 && (
                  <ul className="rail-list mt-2" style={{ color: "var(--ink-2)" }}>
                    {item.children.map((c, j) => (
                      <li key={j}>
                        <RichText>{c}</RichText>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </li>
          ))}
        </ol>
        </div>
      );

    case "table":
      return (
        <figure className="my-4 overflow-x-auto rounded-lg border border-border shadow-card">
          <table className="w-full border-collapse text-[0.8125rem]">
            {block.caption && (
              <caption className="border-b border-border bg-muted/40 px-3.5 py-2 text-left font-sans text-[0.6875rem] font-medium text-muted-foreground">
                {block.caption}
              </caption>
            )}
            <thead>
              <tr className="border-b border-border bg-muted/30">
                {block.columns.map((col) => (
                  <th
                    key={col.key}
                    scope="col"
                    className="px-3.5 py-2 text-left font-sans text-[0.6875rem] font-semibold uppercase tracking-wide text-foreground/80"
                  >
                    {col.header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, i) => {
                const isHighlight =
                  (block.highlight === "first" && i === 0) ||
                  (block.highlight === "last" && i === block.rows.length - 1);
                return (
                  <tr
                    key={i}
                    className={`border-b border-border last:border-b-0 transition-colors hover:bg-accent/30 ${
                      isHighlight ? "bg-teal-soft/40 font-medium" : ""
                    }`}
                  >
                    {block.columns.map((col, ci) => {
                      const isRowHeader = ci === 0;
                      const Tag = isRowHeader ? "th" : "td";
                      return (
                        <Tag
                          key={col.key}
                          scope={isRowHeader ? "row" : undefined}
                          className={`px-3.5 py-2 align-top ${
                            isRowHeader
                              ? "font-sans font-medium text-foreground"
                              : "text-foreground/80"
                          }`}
                        >
                          <RichText>{row[col.key]}</RichText>
                        </Tag>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </figure>
      );

    case "callout": {
      const config = {
        key: {
          icon: Sparkles,
          bg: "bg-teal-soft/60",
          border: "border-primary/30",
          iconBg: "bg-primary text-primary-foreground",
          label: "text-primary",
        },
        next: {
          icon: ArrowRight,
          bg: "bg-amber-soft/60",
          border: "border-amber/30",
          iconBg: "bg-amber text-primary-foreground",
          label: "text-amber",
        },
        warning: {
          icon: AlertTriangle,
          bg: "bg-rose-soft/60",
          border: "border-rose/30",
          iconBg: "bg-rose text-primary-foreground",
          label: "text-rose",
        },
        tip: {
          icon: Lightbulb,
          bg: "bg-emerald-soft/60",
          border: "border-emerald/30",
          iconBg: "bg-emerald text-primary-foreground",
          label: "text-emerald",
        },
        "exam-alert": {
          icon: GraduationCap,
          bg: "bg-amber-soft/50",
          border: "border-amber/40",
          iconBg: "bg-amber text-primary-foreground",
          label: "text-amber",
        },
        "common-mistake": {
          icon: XCircle,
          bg: "bg-rose-soft/50",
          border: "border-rose/40",
          iconBg: "bg-rose text-primary-foreground",
          label: "text-rose",
        },
      }[block.tone];
      const Icon = config.icon;
      return (
        <aside
          role="note"
          className={`my-5 flex flex-col gap-3 rounded-lg border-l-2 ${config.border} ${config.bg} p-4 shadow-card sm:flex-row sm:gap-4 sm:p-5`}
        >
          <span
            className={`grid h-8 w-8 flex-shrink-0 place-items-center rounded-md ${config.iconBg}`}
            aria-hidden="true"
          >
            <Icon className="h-4 w-4" />
          </span>
          <div className="min-w-0 flex-1">
            <p
              className={`mb-1.5 font-bold uppercase tracking-wide ${config.label}`}
              style={{ fontSize: "var(--text-xs)" }}
            >
              <RichText>{block.title}</RichText>
            </p>
            <p className="leading-relaxed text-ink/90" style={{ fontSize: "var(--text-base)" }}>
              <RichText>{block.body}</RichText>
            </p>
          </div>
        </aside>
      );
    }

    case "strength-chart":
      return (
        <figure className="my-4 rounded-sm border border-border bg-card p-4 shadow-card sm:p-5">
          <figcaption className="mb-3 font-sans text-[0.625rem] uppercase tracking-[0.12em] text-muted-foreground">
            {block.title}
          </figcaption>
          <div className="space-y-3">
            {block.bars.map((bar, i) => {
              const fills = [
                "from-primary to-primary/80",
                "from-moss to-moss/80",
                "from-ochre to-ochre/80",
                "from-teal to-teal/80",
                "from-muted-foreground to-muted-foreground/80",
              ];
              return (
                <div
                  key={i}
                  className="grid grid-cols-[100px_1fr_auto] items-center gap-2 sm:grid-cols-[180px_1fr_110px] sm:gap-3 lg:grid-cols-[200px_1fr_120px]"
                >
                  <span className="font-sans text-[0.75rem] font-medium text-foreground sm:text-[0.8125rem]">
                    <RichText>{bar.label}</RichText>
                  </span>
                  <div
                    className="h-2.5 overflow-hidden rounded-full border border-border bg-muted sm:h-3"
                    role="img"
                    aria-label={`${bar.label}: ${bar.value}`}
                  >
                    <div
                      className={`h-full rounded-full bg-gradient-to-r ${
                        fills[i] ?? fills[fills.length - 1]
                      }`}
                      style={{ width: `${bar.width}%` }}
                    />
                  </div>
                  <span className="text-right font-mono text-[0.6875rem] text-muted-foreground sm:text-[0.75rem]">
                    {bar.value}
                  </span>
                </div>
              );
            })}
          </div>
        </figure>
      );

    case "card-grid": {
      const cols = block.columns ?? 3;
      const gridClass =
        cols === 2
          ? "sm:grid-cols-2"
          : cols === 3
            ? "sm:grid-cols-2 lg:grid-cols-3"
            : "sm:grid-cols-2 lg:grid-cols-4";
      return (
        <div className={`my-4 grid gap-3 ${gridClass}`}>
          {block.cards.map((card, i) => (
            <article
              key={i}
              className={`relative flex flex-col rounded-sm border bg-card p-4 shadow-card transition-all hover:shadow-raised ${
                card.highlight ? "border-primary/50 border-l-2 border-l-primary" : "border-border"
              }`}
            >
              {card.badge && (
                <span className="absolute -top-2 right-3 inline-flex items-center bg-primary px-1.5 py-0.5 font-display text-[0.625rem] font-semibold italic text-primary-foreground shadow-card">
                  {card.badge}
                </span>
              )}
              <h4 className="mb-1 flex items-baseline gap-2 font-display text-base font-semibold text-ink">
                <RichText>{card.title}</RichText>
                {card.formula && (
                  <span className="font-mono text-[0.6875rem] font-normal text-ink/60">
                    <RichText>{card.formula}</RichText>
                  </span>
                )}
              </h4>
              {card.svg && (
                <div
                  className="diagram-svg my-2.5 rounded-md bg-muted/30 p-2"
                  dangerouslySetInnerHTML={{ __html: card.svg }}
                />
              )}
              <div className="space-y-1.5 text-[0.8125rem] leading-relaxed text-ink/80">
                {card.lines.map((line, j) => (
                  <p key={j}>
                    <RichText>{line}</RichText>
                  </p>
                ))}
              </div>
              {card.stats && card.stats.length > 0 && (
                <dl className="mt-auto border-t border-border pt-2.5">
                  {card.stats.map((stat, j) => (
                    <div
                      key={j}
                      className="flex items-baseline justify-between gap-2 py-0.5 text-[0.75rem]"
                    >
                      <dt className="text-muted-foreground">{stat.term}</dt>
                      <dd
                        className={`font-display font-semibold ${
                          stat.highlight ? "text-primary" : "text-ink"
                        }`}
                      >
                        <RichText>{stat.value}</RichText>
                      </dd>
                    </div>
                  ))}
                </dl>
              )}
            </article>
          ))}
        </div>
      );
    }

    // ─────────────────────────────────────────────────────────────────────
    // NEW comprehension-focused block kinds
    // ─────────────────────────────────────────────────────────────────────
    case "objectives":
      return (
        <aside
          aria-label={block.title ?? "What you'll learn"}
          className="my-4 border-l-2 border-primary/40 bg-card/50 p-4 sm:p-5"
        >
          <header className="mb-2.5">
            <p className="font-sans text-[0.625rem] uppercase tracking-[0.15em] text-muted-foreground">
              In this topic
            </p>
            <h3 className="font-display text-lg font-semibold tracking-tight text-ink">
              {block.title ?? "What you'll learn"}
            </h3>
          </header>
          <ul className="grid gap-1.5 sm:grid-cols-2">
            {block.items.map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-2 font-serif text-[0.875rem] leading-relaxed text-ink/85"
              >
                <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-primary" aria-hidden="true" />
                <span>
                  <RichText>{item}</RichText>
                </span>
              </li>
            ))}
          </ul>
        </aside>
      );

    case "key-takeaways":
      return (
        <aside
          aria-label={block.title ?? "Key takeaways"}
          className="my-8 border-t-2 border-ink pt-5"
        >
          <header className="mb-4">
            <p className="font-sans text-[0.625rem] uppercase tracking-[0.15em] text-primary">
              Quick recall
            </p>
            <h3 className="font-display text-xl font-semibold italic tracking-tight text-ink">
              {block.title ?? "Key takeaways"}
            </h3>
            <p className="mt-1 font-serif text-[0.8125rem] italic text-ink/60">
              Scan these before your exam.
            </p>
          </header>
          <ul className="grid gap-2.5 sm:grid-cols-2">
            {block.items.map((item, i) => (
              <li
                key={i}
                className="border-l border-border bg-card/50 p-3.5 shadow-card"
              >
                {item.label && (
                  <p className="mb-1 font-display text-[0.6875rem] font-semibold uppercase tracking-[0.08em] text-primary">
                    {item.label}
                  </p>
                )}
                <p className="font-serif text-[0.875rem] leading-relaxed text-ink/90">
                  <RichText>{item.body}</RichText>
                </p>
              </li>
            ))}
          </ul>
        </aside>
      );

    case "equation": {
      // Parse leading number from label (e.g. "1. Water treatment" → {num: "1", title: "Water treatment"})
      const eqMatch = block.label?.match(/^(\d+)\.\s*(.+)$/);
      const eqNum = eqMatch?.[1];
      const eqTitle = eqMatch?.[2] ?? block.label;
      return (
        <figure className="equation-card group relative my-4 overflow-x-auto rounded-lg border border-border bg-card shadow-card transition-shadow hover:shadow-raised">
          <span className="absolute inset-y-0 left-0 w-1 bg-accent/60" aria-hidden="true" />
          <div className="px-5 py-4 sm:px-6 sm:py-5">
            {block.label && (
              <header className="mb-3 flex items-center gap-2.5 border-b border-line-soft pb-2.5">
                {eqNum && (
                  <span className="grid h-6 w-6 flex-shrink-0 place-items-center rounded-full bg-accent-soft font-bold text-accent-deep" style={{ fontSize: "var(--text-xs)" }}>
                    {eqNum}
                  </span>
                )}
                <h4 className="font-semibold uppercase tracking-wide text-ink" style={{ fontSize: "var(--text-sm)" }}>
                  {eqTitle}
                </h4>
              </header>
            )}
            <div className="text-left leading-relaxed" style={{ fontSize: "var(--text-base)" }}>
              <MathExpr display>{block.math}</MathExpr>
            </div>
            {block.caption && (
              <figcaption className="mt-3 border-t border-line-soft pt-2.5 leading-relaxed text-ink-2" style={{ fontSize: "var(--text-sm)" }}>
                {block.caption}
              </figcaption>
            )}
          </div>
        </figure>
      );
    }

    case "compare": {
      const cols = block.columns.length;
      return (
        <figure className="my-4 overflow-x-auto rounded-xl border border-border shadow-card scrollbar-chem">
          {block.label && (
            <figcaption className="border-b border-border bg-muted/40 px-3.5 py-2 text-left font-sans text-[0.6875rem] font-medium text-muted-foreground">
              {block.label}
            </figcaption>
          )}
          <div className="min-w-[480px]">
            <div className="grid border-b border-border bg-muted/30"
              style={{ gridTemplateColumns: `120px repeat(${cols}, minmax(0, 1fr))` }}
            >
              <div className="px-3 py-2" aria-hidden="true" />
              {block.columns.map((col, i) => (
                <div
                  key={i}
                  className="border-l border-border px-3 py-2 text-center"
                >
                  <p className="font-sans text-[0.8125rem] font-bold text-foreground">
                    <RichText>{col.title}</RichText>
                  </p>
                  {col.subtitle && (
                    <p className="mt-0.5 font-mono text-[0.6875rem] text-muted-foreground">
                      <RichText>{col.subtitle}</RichText>
                    </p>
                  )}
                  {col.badge && (
                    <span className="mt-1.5 inline-flex items-center rounded-full bg-primary/10 px-2 py-0.5 font-sans text-[0.625rem] font-bold uppercase tracking-wide text-primary">
                      {col.badge}
                    </span>
                  )}
                </div>
              ))}
            </div>
            {block.rows.map((row, i) => (
              <div
                key={i}
                className={`grid border-b border-border last:border-b-0 ${
                  i % 2 === 1 ? "bg-muted/20" : "bg-card"
                }`}
                style={{ gridTemplateColumns: `120px repeat(${cols}, minmax(0, 1fr))` }}
              >
                <div className="px-3 py-2 font-sans text-[0.6875rem] font-semibold uppercase tracking-wide text-muted-foreground">
                  {row.label}
                </div>
                {row.values.map((val, j) => (
                  <div
                    key={j}
                    className="border-l border-border px-3 py-2 text-center text-[0.75rem] text-foreground/90 sm:text-[0.8125rem]"
                  >
                    <RichText>{val}</RichText>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </figure>
      );
    }

    case "fact-box": {
      const toneConfig = {
        default: {
          wrap: "border-border bg-card",
          label: "text-muted-foreground",
        },
        key: {
          wrap: "border-primary/30 bg-teal-soft/30",
          label: "text-primary",
        },
        warning: {
          wrap: "border-rose/30 bg-rose-soft/30",
          label: "text-rose",
        },
      }[block.tone ?? "default"];
      return (
        <aside
          className={`my-4 rounded-xl border ${toneConfig.wrap} p-3.5 shadow-card sm:p-4`}
          aria-label={block.label ?? "Key facts"}
        >
          {block.label && (
            <p
              className={`mb-2.5 font-sans text-[0.6875rem] font-bold uppercase tracking-wider ${toneConfig.label}`}
            >
              {block.label}
            </p>
          )}
          <dl className="grid gap-2 sm:grid-cols-[auto_1fr] sm:gap-x-4">
            {block.facts.map((fact, i) => (
              <div key={i} className="contents">
                <dt className="font-sans text-[0.8125rem] font-semibold text-foreground">
                  <RichText>{fact.term}</RichText>
                </dt>
                <dd className="text-[0.8125rem] leading-relaxed text-foreground/85">
                  <RichText>{fact.value}</RichText>
                </dd>
              </div>
            ))}
          </dl>
        </aside>
      );
    }

    case "qa":
      return <QABlock question={block.question} hint={block.hint} answer={block.answer} />;

    // ─────────────────────────────────────────────────────────────────────
    // Visual / diagram block kinds
    // ─────────────────────────────────────────────────────────────────────
    case "diagram":
      return <DiagramBlock {...block} />;

    case "strength-ladder":
      return <StrengthLadderBlock {...block} />;

    case "diverging-chart":
      return <DivergingChartBlock {...block} />;

    case "decision-flow":
      return <DecisionFlowBlock {...block} />;

    case "image":
      return (
        <figure className="my-4 overflow-hidden rounded-lg border border-border bg-card shadow-card">
          <img
            src={block.src}
            alt={block.alt}
            className="w-full h-auto"
          />
          {block.caption && (
            <figcaption className="border-t border-dashed border-border px-4 py-2.5 text-[0.8125rem] leading-relaxed text-muted-foreground">
              <RichText>{block.caption}</RichText>
            </figcaption>
          )}
        </figure>
      );

    default:
      return null;
  }
}

// ─────────────────────────────────────────────────────────────────────────
// Self-contained Q&A component with reveal-on-click answer
// ─────────────────────────────────────────────────────────────────────────
function QABlock({
  question,
  hint,
  answer,
}: {
  question: string;
  hint?: string;
  answer: string;
}) {
  const [revealed, setRevealed] = useState(false);
  return (
    <aside
      aria-label="Check your understanding"
      className="my-4 rounded-xl border-2 border-dashed border-primary/30 bg-card p-4 shadow-card sm:p-5"
    >
      <header className="mb-2.5 flex items-center gap-2">
        <span className="grid h-7 w-7 place-items-center rounded-lg bg-primary text-primary-foreground shadow-card">
          <HelpCircle className="h-3.5 w-3.5" />
        </span>
        <p className="font-sans text-[0.6875rem] font-bold uppercase tracking-wider text-primary">
          Check your understanding
        </p>
      </header>
      <p className="text-[0.9375rem] font-medium leading-relaxed text-foreground">
        <RichText>{question}</RichText>
      </p>
      {hint && !revealed && (
        <p className="mt-2 text-[0.8125rem] italic text-muted-foreground">
          💡 {hint}
        </p>
      )}
      <button
        type="button"
        onClick={() => setRevealed((r) => !r)}
        aria-expanded={revealed}
        className="mt-2.5 inline-flex items-center gap-1.5 rounded-md bg-primary/10 px-2.5 py-1 font-sans text-[0.6875rem] font-semibold text-primary transition-colors hover:bg-primary/20"
      >
        {revealed ? (
          <>
            <EyeOff className="h-3 w-3" /> Hide answer
          </>
        ) : (
          <>
            <Eye className="h-3 w-3" /> Reveal answer
          </>
        )}
      </button>
      {revealed && (
        <div className="mt-2.5 rounded-lg border border-border bg-muted/30 px-3.5 py-2.5">
          <p className="text-[0.875rem] leading-relaxed text-foreground/90">
            <RichText>{answer}</RichText>
          </p>
        </div>
      )}
    </aside>
  );
}

// ═══════════════════════════════════════════════════════════════════════
// DIAGRAM — inline SVG in a figure with caption + accessible title/desc
// ═══════════════════════════════════════════════════════════════════════
function DiagramBlock({
  svg,
  title,
  desc,
  caption,
  variant = "default",
}: {
  svg: string;
  title: string;
  desc?: string;
  caption?: string;
  variant?: "default" | "soft";
}) {
  // Inject <title> and <desc> into the SVG for screen readers.
  // We do this by inserting right after the opening <svg tag.
  const accessibleSvg = svg.replace(
    /<svg([^>]*)>/,
    `<svg$1 role="img" aria-labelledby="dia-t">${desc ? `<title id="dia-t">${title}</title><desc>${desc}</desc>` : `<title id="dia-t">${title}</title>`}</svg>`,
  ).replace(/<\/svg>/, "");

  return (
    <figure
      className={`my-4 rounded-lg border border-border bg-card p-4 shadow-card sm:p-5 ${
        variant === "soft" ? "bg-surface-2" : ""
      }`}
      style={variant === "soft" ? { background: "var(--surface-2, var(--muted))" } : undefined}
    >
      <div
        className="diagram-svg"
        dangerouslySetInnerHTML={{ __html: accessibleSvg }}
      />
      {caption && (
        <figcaption className="mt-3 border-t border-dashed border-border pt-2.5 text-[0.8125rem] leading-relaxed text-muted-foreground">
          <RichText>{caption}</RichText>
        </figcaption>
      )}
    </figure>
  );
}

// ═══════════════════════════════════════════════════════════════════════
// STRENGTH LADDER — bars with an optional scale break
// ═══════════════════════════════════════════════════════════════════════
function StrengthLadderBlock({
  title,
  rungs,
  note,
}: {
  title?: string;
  rungs: {
    label: string;
    sublabel?: string;
    width: number;
    color: "primary" | "moss" | "ochre" | "teal" | "rose";
    barLabel?: string;
  }[];
  note?: string;
}) {
  const colorMap: Record<string, string> = {
    primary: "bg-primary",
    moss: "bg-moss",
    ochre: "bg-ochre",
    teal: "bg-teal",
    rose: "bg-rose",
  };
  // Show a scale break after the first rung if it's much stronger
  const showBreak = rungs.length > 1 && rungs[0].width >= 90;

  return (
    <figure className="my-4 rounded-sm border border-border bg-card p-4 shadow-card sm:p-5">
      {title && (
        <figcaption className="mb-3 font-sans text-[0.625rem] uppercase tracking-[0.15em] text-muted-foreground">
          {title}
        </figcaption>
      )}
      <div className="space-y-1">
        {rungs.map((rung, i) => (
          <div key={i}>
            {showBreak && i === 1 && (
              <div
                className="relative my-2 h-5"
                aria-hidden="true"
              >
                <div
                  className="absolute inset-x-0 top-1/2 border-t-2 border-dashed border-border"
                />
                <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-card px-2 font-sans text-[0.625rem] uppercase tracking-[0.1em] text-muted-foreground">
                  scale break
                </span>
              </div>
            )}
            <div className="grid grid-cols-[100px_1fr] items-center gap-2 sm:grid-cols-[180px_1fr] sm:gap-4 lg:grid-cols-[200px_1fr]">
              <div className="text-right text-[0.75rem] text-ink sm:text-[0.8125rem]">
                <span className="font-medium">{rung.label}</span>
                {rung.sublabel && (
                  <span className="mt-0.5 block text-[0.625rem] text-muted-foreground sm:text-[0.6875rem]">
                    {rung.sublabel}
                  </span>
                )}
              </div>
              <div className="h-5 overflow-hidden rounded bg-muted sm:h-6">
                <div
                  className={`flex h-full items-center rounded px-2 ${colorMap[rung.color]}`}
                  style={{ width: `${rung.width}%`, minWidth: "34px" }}
                >
                  {rung.barLabel && (
                    <span className="truncate text-[0.625rem] font-semibold text-primary-foreground sm:text-[0.6875rem]">
                      {rung.barLabel}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {note && (
        <div className="mt-3 border-t border-border pt-2.5 font-serif text-[0.8125rem] italic leading-relaxed text-ink/70">
          <RichText>{note}</RichText>
        </div>
      )}
    </figure>
  );
}

// ═══════════════════════════════════════════════════════════════════════
// DIVERGING CHART — bars that diverge from a zero line
// ═══════════════════════════════════════════════════════════════════════
function DivergingChartBlock({
  title,
  caption,
  rows,
  leftAxis,
  rightAxis,
  zeroPercent = 50,
}: {
  title?: string;
  caption?: string;
  rows: {
    label: string;
    sublabel?: string;
    value: number;
    display: string;
    side: "pos" | "neg";
  }[];
  leftAxis?: string;
  rightAxis?: string;
  zeroPercent?: number;
}) {
  // Find max absolute value for scaling
  const maxAbs = Math.max(...rows.map((r) => Math.abs(r.value)), 1);

  return (
    <figure className="my-4 rounded-sm border border-border bg-card p-4 shadow-card sm:p-5">
      {title && (
        <figcaption className="mb-3 font-sans text-[0.625rem] uppercase tracking-[0.15em] text-muted-foreground">
          {title}
        </figcaption>
      )}
      <div className="space-y-1.5">
        {rows.map((row, i) => {
          const barWidth = (Math.abs(row.value) / maxAbs) * (row.side === "pos" ? 100 - zeroPercent : zeroPercent);
          return (
            <div
              key={i}
              className="grid grid-cols-[100px_1fr_60px] items-center gap-2 sm:grid-cols-[150px_1fr_80px] sm:gap-4"
            >
              {/* Label */}
              <div className="text-right text-[0.75rem] text-ink sm:text-[0.8125rem]">
                <span className="font-medium">{row.label}</span>
                {row.sublabel && (
                  <span className="mt-0.5 block text-[0.625rem] text-muted-foreground sm:text-[0.6875rem]">
                    {row.sublabel}
                  </span>
                )}
              </div>
              {/* Track with zero line */}
              <div className="relative h-5 overflow-hidden rounded bg-muted sm:h-6">
                {/* Zero line */}
                <div
                  className="absolute inset-y-0 w-0.5 bg-ink/40"
                  style={{ left: `${zeroPercent}%` }}
                />
                {/* Bar */}
                {row.side === "pos" ? (
                  <div
                    className="absolute inset-y-0 rounded-l bg-gradient-to-r from-primary to-primary/80"
                    style={{
                      left: `${zeroPercent}%`,
                      width: `${barWidth}%`,
                    }}
                  />
                ) : (
                  <div
                    className="absolute inset-y-0 rounded-r bg-gradient-to-l from-pos to-pos/80"
                    style={{
                      right: `${100 - zeroPercent}%`,
                      width: `${barWidth}%`,
                    }}
                  />
                )}
              </div>
              {/* Value */}
              <span
                className={`text-right font-mono text-[0.6875rem] font-medium sm:text-[0.75rem] ${
                  row.side === "pos" ? "text-primary" : "text-pos"
                }`}
              >
                {row.display}
              </span>
            </div>
          );
        })}
      </div>
      {/* Axis labels */}
      {(leftAxis || rightAxis) && (
        <div className="mt-2 grid grid-cols-[100px_1fr_60px] gap-2 border-t border-border pt-2 sm:grid-cols-[150px_1fr_80px] sm:gap-4">
          <span />
          <div className="flex justify-between text-[0.625rem] uppercase tracking-[0.1em] text-muted-foreground sm:text-[0.6875rem]">
            {leftAxis && <span>{leftAxis}</span>}
            {rightAxis && <span>{rightAxis}</span>}
          </div>
          <span />
        </div>
      )}
      {caption && (
        <p className="mt-2.5 border-t border-border pt-2.5 font-serif text-[0.8125rem] italic leading-relaxed text-muted-foreground">
          <RichText>{caption}</RichText>
        </p>
      )}
    </figure>
  );
}

// ═══════════════════════════════════════════════════════════════════════
// DECISION FLOW — question → arrow → yes/no branches
// ═══════════════════════════════════════════════════════════════════════
function DecisionFlowBlock({
  title,
  question,
  yes,
  no,
}: {
  title?: string;
  question: string;
  yes: { label: string; body: string };
  no: { label: string; body: string };
}) {
  return (
    <div className="my-4">
      {title && (
        <p className="mb-2.5 font-sans text-[0.625rem] uppercase tracking-[0.15em] text-muted-foreground">
          {title}
        </p>
      )}
      {/* Question box */}
      <div className="flex items-center gap-3 rounded-sm border border-primary/30 bg-card p-3.5 shadow-card sm:p-4">
        <span className="grid h-6 w-6 flex-shrink-0 place-items-center rounded-full bg-primary font-sans text-[0.6875rem] font-bold text-primary-foreground sm:h-7 sm:w-7">
          ?
        </span>
        <p className="font-serif text-[0.875rem] font-medium text-ink">
          <RichText>{question}</RichText>
        </p>
      </div>
      {/* Arrow down */}
      <div className="flex justify-center py-1.5" aria-hidden="true">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary/40">
          <path d="M12 5v14M19 12l-7 7-7-7" />
        </svg>
      </div>
      {/* Two branches */}
      <div className="grid gap-2.5 sm:grid-cols-2">
        <div className="rounded-sm border border-primary/30 bg-primary-soft/30 p-3.5">
          <span className="mb-1.5 inline-flex items-center gap-1.5 font-display text-[0.6875rem] font-semibold uppercase tracking-[0.08em] text-primary">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 6 9 17l-5-5" /></svg>
            {yes.label}
          </span>
          <p className="font-serif text-[0.8125rem] leading-relaxed text-ink/85">
            <RichText>{yes.body}</RichText>
          </p>
        </div>
        <div className="rounded-sm border border-border bg-muted/20 p-3.5">
          <span className="mb-1.5 inline-flex items-center gap-1.5 font-display text-[0.6875rem] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 6 6 18M6 6l12 12" /></svg>
            {no.label}
          </span>
          <p className="font-serif text-[0.8125rem] leading-relaxed text-ink/70">
            <RichText>{no.body}</RichText>
          </p>
        </div>
      </div>
    </div>
  );
}
