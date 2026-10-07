import Link from "next/link";
import { notFound } from "next/navigation";
import { topics, getTopic, getAdjacentTopics } from "@/lib/topics";
import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";
import { BlockRenderer } from "@/components/site/block-renderer";
import { RichText } from "@/components/site/math";
import { ReadingProgress } from "@/components/site/reading-progress";
import { MarkCompleteButton } from "@/components/site/mark-complete";
import { SpecList } from "@/components/site/spec-list";
import { InlineQuickStrip, FloatingTocFab } from "@/components/site/topic-inline-widgets";
import { ReadingModeProvider } from "@/components/site/paragraph-or-bullets";
import { ReadingModeToggle } from "@/components/site/reading-mode-toggle";
import { PrintButton } from "@/components/site/print-button";
import { ShareButton } from "@/components/site/share-button";
import { BackToTop } from "@/components/site/back-to-top";
import { KeyboardShortcuts } from "@/components/site/keyboard-shortcuts";
import {
  Clock,
  ArrowLeft,
  ArrowRight,
  ChevronRight,
} from "lucide-react";

export const dynamicParams = false;

export function generateStaticParams() {
  return topics
    .filter((t) => t.published)
    .map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const topic = getTopic(slug);
  if (!topic || !topic.published) {
    return { title: "Topic not found" };
  }
  return {
    title: `Topic ${topic.number}: ${topic.title}`,
    description: topic.summary,
  };
}

export default async function TopicPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const topic = getTopic(slug);

  if (!topic || !topic.published) {
    notFound();
  }

  const { prev, next } = getAdjacentTopics(topic.slug);

  return (
    <ReadingModeProvider>
    <div className="topic-page flex min-h-screen flex-col">
      <SiteHeader />
      <ReadingProgress />

      {/* Print-only masthead — hidden on screen, shown when printing. */}
      <div className="print-masthead" aria-hidden="true">
        <p className="pm-title">{topic.title}</p>
        <p className="pm-meta">
          {`Topic ${String(topic.number).padStart(2, "0")} · Unit ${topic.unit === 1 ? "I" : "II"} · Edexcel IAL Chemistry`}
        </p>
        <p className="pm-url">ial.chem</p>
        <div className="print-toc"></div>
      </div>

      {/* Print footer — appears at the bottom of every printed page. */}
      <div className="print-footer" aria-hidden="true">
        ial.chem · The IAL Chemistry Companion
      </div>

      {/* ─────────── Topic masthead — editorial style ─────────── */}
      <div className="topic-masthead border-b-2 border-ink/10">
        <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 xl:max-w-[1440px] 2xl:max-w-[1600px]">
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-1.5 py-3 font-sans text-[11px] uppercase tracking-[0.12em] text-muted-foreground"
          >
            <Link href="/" className="transition-colors hover:text-primary">
              Index
            </Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-ink/70">Unit {topic.unit === 1 ? "I" : "II"}</span>
            <ChevronRight className="h-3 w-3" />
            <span className="font-medium text-ink">Topic {String(topic.number).padStart(2, "0")}</span>
          </nav>

          <div className="grid gap-6 py-8 sm:py-10 lg:grid-cols-[auto_1fr] lg:gap-10">
            {/* Huge typographic topic number — like a book chapter number */}
            <div className="flex items-start lg:block">
              <span
                className="font-display text-7xl font-semibold italic leading-[0.85] text-primary/80 sm:text-8xl lg:text-9xl"
                aria-hidden="true"
              >
                {String(topic.number).padStart(2, "0")}
              </span>
            </div>

            <div className="min-w-0 lg:border-l lg:border-ink/15 lg:pl-10">
              {/* Metadata line — small caps, editorial */}
              <div className="mb-3 flex flex-wrap items-center gap-x-4 gap-y-1 font-sans text-[11px] uppercase tracking-[0.12em] text-muted-foreground">
                <span className="text-primary">Topic {String(topic.number).padStart(2, "0")}</span>
                <span className="h-3 w-px bg-border" aria-hidden="true" />
                <span>Unit {topic.unit === 1 ? "I" : "II"}</span>
                {topic.estimatedTime && (
                  <>
                    <span className="h-3 w-px bg-border" aria-hidden="true" />
                    <span className="inline-flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {topic.estimatedTime}
                    </span>
                  </>
                )}
                {topic.difficulty && (
                  <>
                    <span className="h-3 w-px bg-border" aria-hidden="true" />
                    <span
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
                    </span>
                  </>
                )}
              </div>

              <h1 className="font-display text-3xl font-semibold leading-[1.1] tracking-tight text-balance text-ink sm:text-4xl lg:text-5xl">
                <RichText>{topic.title}</RichText>
              </h1>
              <p className="mt-4 max-w-2xl font-serif text-lg leading-relaxed text-ink/75">
                <RichText>{topic.intro}</RichText>
              </p>

              {/* At a glance — the reference file's signature key-value strip.
                  Shows 4 essential facts in a glass card right in the hero. */}
              {topic.atAGlance && topic.atAGlance.length > 0 && (
                <dl className="at-a-glance-grid mt-6 grid grid-cols-1 gap-x-6 gap-y-4 rounded-lg border border-border bg-card p-5 shadow-card sm:grid-cols-2 lg:grid-cols-4">
                  {topic.atAGlance.map((item, i) => (
                    <div key={i} className="border-t border-dashed border-border pt-3 sm:border-t-0 sm:pt-0">
                      <dt className="font-sans text-[11px] font-semibold uppercase tracking-[0.08em] text-primary">
                        {item.label}
                      </dt>
                      <dd className="mt-1 font-serif text-[14px] leading-relaxed text-ink/80">
                        {item.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              )}

              {/* Inline at-a-glance strip for phone & tablet */}
              <div className="mt-6 lg:hidden">
                <InlineQuickStrip topic={topic} />
              </div>

              {/* Reading-mode toggle + Mark as read + Print + Share */}
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <ReadingModeToggle />
                <MarkCompleteButton topicSlug={topic.slug} />
                <PrintButton
                  topicTitle={topic.title}
                  topicNumber={topic.number}
                  unitNumber={topic.unit}
                />
                <ShareButton />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ─────────── Objectives opener (if provided) ─────────── */}
      {topic.objectives && topic.objectives.length > 0 && (
        <div className="border-b border-border bg-gradient-to-b from-teal-soft/20 to-background">
          <div className="mx-auto max-w-[1400px] px-4 py-6 sm:px-6 lg:px-8">
            <BlockRenderer
              block={{
                kind: "objectives",
                title: "What you'll learn",
                items: topic.objectives,
              }}
            />
          </div>
        </div>
      )}

      {/* ─────────── Main layout — single full-width content column ───────────
          No sidebars. The TOC is accessible via the floating FAB button
          (visible on all breakpoints). The at-a-glance info is inline in
          the hero. Content gets the full width for maximum readability.
      */}
      <div className="mx-auto w-full max-w-[820px] flex-1 px-4 py-6 sm:px-6 sm:py-8 lg:py-10 xl:max-w-[900px] 2xl:max-w-[960px]">

          {/* Center: content */}
          <main id="main" className="min-w-0">
            <article className="prose-chem">
              {/* Mode 1: Rich block-based sections (e.g. Topic 7) */}
              {topic.sections && topic.sections.length > 0 && (
                <>
                  {topic.sections.map((section) => (
                    <section
                      key={section.id}
                      id={section.id}
                      className="scroll-mt-24 border-b border-border pb-12 pt-8 first:pt-0 last:border-b-0"
                      aria-labelledby={`${section.id}-title`}
                    >
                      {/* Section header — matches the reference file's .sec-head pattern:
                          spec-num with a horizontal line before it, h2 title, dek subtitle,
                          all in a border-bottom container. */}
                      <header className="mb-6 border-b border-border pb-4">
                        <div className="mb-2 flex items-center gap-2.5">
                          <span className="h-0.5 w-5 rounded bg-primary" aria-hidden="true" />
                          <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.14em] text-primary">
                            Specification Point {section.code}
                          </span>
                        </div>
                        <h2
                          id={`${section.id}-title`}
                          className="font-display text-2xl font-normal leading-tight tracking-tight text-ink sm:text-[1.75rem]"
                        >
                          <RichText>{section.title}</RichText>
                        </h2>
                      </header>

                      {section.blocks.map((block, i) => (
                        <BlockRenderer key={i} block={block} />
                      ))}
                    </section>
                  ))}
                </>
              )}

              {/* Divider between rich sections and the spec-list appendix
                  (only when both are present) */}
              {topic.sections &&
                topic.sections.length > 0 &&
                topic.specGroups &&
                topic.specGroups.length > 0 && (
                  <hr className="my-10 border-border" />
                )}

              {/* Mode 2: Spec-list (verbatim spec points) */}
              {topic.specGroups && topic.specGroups.length > 0 && (
                <>
                  <header className="mb-8">
                    <div className="flex items-baseline gap-3">
                      <span className="font-display text-sm font-semibold italic text-primary">
                        §
                      </span>
                      <span className="h-px flex-1 bg-border" aria-hidden="true" />
                      <span className="font-sans text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
                        Specification
                      </span>
                    </div>
                    <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                      What you need to know
                    </h2>
                    <p className="mt-2 max-w-2xl font-serif text-sm italic leading-relaxed text-ink/60">
                      Verbatim from the Edexcel International A-Level Chemistry
                      specification. Spec codes are kept exactly as printed.
                    </p>
                  </header>
                  <div className="spec-list-wrapper">
                    <SpecList groups={topic.specGroups} />
                  </div>
                </>
              )}
            </article>

            {/* ─────────── Key takeaways closer ─────────── */}
            {topic.keyTakeaways && topic.keyTakeaways.length > 0 && (
              <BlockRenderer
                block={{
                  kind: "key-takeaways",
                  title: "Key takeaways",
                  items: topic.keyTakeaways,
                }}
              />
            )}

            {/* Mark complete CTA */}
            <div className="mt-6 flex flex-wrap items-center justify-between gap-4 rounded-xl border border-border bg-card p-5 shadow-card">
              <div>
                <p className="font-sans text-sm font-bold text-foreground">
                  Finished with Topic {topic.number}?
                </p>
                <p className="text-xs text-muted-foreground">
                  Mark it complete so you can track your revision progress.
                </p>
              </div>
              <MarkCompleteButton topicSlug={topic.slug} />
            </div>

            {/* Prev / Next */}
            <nav
              aria-label="Topic navigation"
              className="prev-next-nav mt-6 grid gap-3 border-t border-border pt-6 sm:grid-cols-2"
            >
              {prev ? (
                <Link
                  href={`/topic/${prev.slug}`}
                  className="group flex items-center gap-3 rounded-lg border border-border bg-card p-4 shadow-card transition-colors hover:border-primary/40 hover:bg-accent/30"
                >
                  <ArrowLeft className="h-5 w-5 text-muted-foreground transition-transform group-hover:-translate-x-0.5" />
                  <span className="min-w-0">
                    <span className="block font-sans text-xs text-muted-foreground">
                      Previous topic
                    </span>
                    <span className="block truncate font-sans text-sm font-semibold text-foreground">
                      Topic {prev.number}: {prev.title}
                    </span>
                  </span>
                </Link>
              ) : (
                <span />
              )}
              {next ? (
                <Link
                  href={`/topic/${next.slug}`}
                  className="group flex items-center justify-end gap-3 rounded-lg border border-border bg-card p-4 text-right shadow-card transition-colors hover:border-primary/40 hover:bg-accent/30"
                >
                  <span className="min-w-0">
                    <span className="block font-sans text-xs text-muted-foreground">
                      Next topic
                    </span>
                    <span className="block truncate font-sans text-sm font-semibold text-foreground">
                      Topic {next.number}: {next.title}
                    </span>
                  </span>
                  <ArrowRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
                </Link>
              ) : (
                <span />
              )}
            </nav>
          </main>
      </div>

      {/* Floating TOC button — visible on ALL breakpoints. */}
      <FloatingTocFab topic={topic} />

      {/* Back-to-top button — bottom-left */}
      <BackToTop />

      {/* Keyboard shortcuts — invisible, just listens */}
      <KeyboardShortcuts />

      <SiteFooter />
    </div>
    </ReadingModeProvider>
  );
}
