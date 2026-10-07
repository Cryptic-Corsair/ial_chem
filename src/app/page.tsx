"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { topics } from "@/lib/topics";
import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";
import { TopicCard } from "@/components/site/topic-card";
import { ProgressDashboard } from "@/components/site/progress-dashboard";
import { TopicSearch } from "@/components/site/topic-search";
import { Clock, ArrowRight, Search, BookOpen, Zap, FileText, Printer } from "lucide-react";

export default function Home() {
  const published = topics.filter((t) => t.published);
  const totalSpecPoints = published.reduce((sum, t) => {
    const sectionCount = t.sections?.length ?? 0;
    const specPointCount =
      t.specGroups?.reduce((n, g) => n + g.points.length, 0) ?? 0;
    return sum + sectionCount + specPointCount;
  }, 0);

  const unit1Topics = published.filter((t) => t.unit === 1);
  const unit2Topics = published.filter((t) => t.unit === 2);
  const featuredTopic = published.find((t) => t.number === 7) ?? published[0];

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1">
        {/* ═══ Hero ═══ */}
        <section className="border-b border-line">
          <div className="mx-auto max-w-[1180px] px-6 py-14 sm:py-20 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
              {/* Left: headline + CTAs */}
              <div>
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary-line bg-primary-soft px-3 py-1.5 font-sans text-[0.74rem] font-semibold uppercase tracking-[0.13em] text-primary">
                  <span>Vol. I &amp; II</span>
                  <span className="h-3 w-px bg-primary-line" />
                  <span>Edexcel IAL</span>
                </div>
                <h1
                  className="font-display text-ink"
                  style={{ fontSize: "clamp(2.3rem, 5.4vw, 3.5rem)", lineHeight: 1.2, letterSpacing: "-0.018em" }}
                >
                  Chemistry,
                  <br />
                  <span className="italic text-primary">read properly.</span>
                </h1>
                <p
                  className="mt-5 max-w-xl text-ink/75"
                  style={{ fontSize: "1.11rem", lineHeight: 1.62 }}
                >
                  Every specification point in Units I and II, written out
                  step by step — with worked examples, diagrams, key-takeaway
                  boxes, and the kind of margin notes a good teacher leaves.
                </p>

                <div className="mt-7 flex flex-wrap items-center gap-4">
                  <Link
                    href={featuredTopic ? `/topic/${featuredTopic.slug}` : "/#index"}
                    className="group inline-flex items-center gap-2 rounded-[10px] bg-primary px-5 py-2.5 font-sans text-[0.875rem] font-semibold text-on-primary shadow-card transition-all hover:bg-primary/90 hover:shadow-raised"
                  >
                    {featuredTopic
                      ? `Start with Topic ${String(featuredTopic.number).padStart(2, "0")}`
                      : "Browse topics"}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                  <a
                    href="#index"
                    className="font-sans text-[0.875rem] text-muted-foreground underline-offset-4 hover:text-ink hover:underline"
                  >
                    or browse the full index
                  </a>
                </div>

                {/* Stats */}
                <dl className="mt-10 flex flex-wrap gap-x-8 gap-y-3 border-t border-border pt-6 font-sans text-sm">
                  <div className="flex items-baseline gap-2">
                    <dt className="sr-only">Topics published</dt>
                    <dd className="font-sans text-2xl font-bold text-ink">{published.length}</dd>
                    <dd className="text-muted-foreground">topics</dd>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <dt className="sr-only">Specification points</dt>
                    <dd className="font-sans text-2xl font-bold text-ink">{totalSpecPoints}</dd>
                    <dd className="text-muted-foreground">spec points</dd>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <dt className="sr-only">Units covered</dt>
                    <dd className="font-sans text-2xl font-bold text-ink">2</dd>
                    <dd className="text-muted-foreground">units covered</dd>
                  </div>
                </dl>
              </div>

              {/* Right: featured topic */}
              {featuredTopic && (
                <aside className="lg:border-l lg:border-border lg:pl-12">
                  <p className="mb-3 font-sans text-[11px] uppercase tracking-[0.15em] text-muted-foreground">
                    Featured notes
                  </p>
                  <FeaturedTopicCard topic={featuredTopic} />
                </aside>
              )}
            </div>
          </div>
        </section>

        {/* ═══ Index ═══ */}
        <section
          id="index"
          className="mx-auto max-w-[1280px] xl:max-w-[1440px] 2xl:max-w-[1600px] px-4 py-14 sm:px-6 lg:px-8 lg:py-20"
        >
          {/* Progress + Search */}
          <div className="mb-10 grid gap-4 lg:grid-cols-[1fr_1fr] lg:items-start">
            <ProgressDashboard />
            <div className="pt-1">
              <TopicSearch />
            </div>
          </div>

          {/* Feature strip */}
          <div className="mb-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <FeatureChip icon={BookOpen} label="Spec-first" desc="Every spec point covered" />
            <FeatureChip icon={Zap} label="Bullet mode" desc="Toggle paragraphs to bullets" />
            <FeatureChip icon={FileText} label="Print / PDF" desc="Clean revision handouts" />
            <FeatureChip icon={Printer} label="Dark mode" desc="Easy on the eyes" />
          </div>

          <div className="mb-10 flex items-end justify-between gap-4 border-b border-border pb-4">
            <div>
              <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-primary">
                The Index
              </p>
              <h2 className="mt-1 font-sans text-2xl font-bold tracking-tight text-ink sm:text-3xl">
                All topics, in order
              </h2>
            </div>
            <p className="hidden max-w-xs text-right text-[0.875rem] italic text-muted-foreground sm:block">
              From the mole to mass spectrometry — follow the course end to end.
            </p>
          </div>

          <UnitSection
            unitNumber={1}
            unitTitle="Structure, Bonding & Introduction to Organic Chemistry"
            topics={unit1Topics}
          />

          <hr className="rule-ornament" aria-hidden="true" />

          <UnitSection
            unitNumber={2}
            unitTitle="Energetics, Group Chemistry, Halogenoalkanes & Alcohols"
            topics={unit2Topics}
          />
        </section>

        {/* ═══ Colophon ═══ */}
        <section className="border-t border-border bg-card/30">
          <div className="mx-auto max-w-[1280px] xl:max-w-[1440px] 2xl:max-w-[1600px] px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
            <div className="grid gap-10 lg:grid-cols-[1fr_2fr] lg:gap-16">
              <div>
                <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-primary">
                  Colophon
                </p>
                <h2 className="mt-1 font-sans text-2xl font-bold tracking-tight text-ink sm:text-3xl">
                  How these notes are made
                </h2>
              </div>
              <div className="prose-chem max-w-none">
                <p className="drop-cap">
                  Each topic opens with a short list of what you&rsquo;ll
                  learn, then walks through every specification point with
                  worked examples, comparison tables, and callouts at the
                  exact points where students tend to slip up. The page
                  closes with a key-takeaways panel — six cards you can
                  scan in thirty seconds before an exam.
                </p>
                <p>
                  Specification numbers and titles are kept verbatim from the
                  official Edexcel document, so you can always map a note back
                  to the syllabus. Where rich notes haven&rsquo;t been
                  written yet, the verbatim spec list still appears, with
                  Core Practicals marked out in ochre.
                </p>
                <p className="marginalia mt-6">
                  Keyboard shortcuts: <strong>j/k</strong> to jump sections,{" "}
                  <strong>t</strong> for table of contents,{" "}
                  <strong>b</strong> to toggle bullet mode.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

/* ── Featured topic card ── */
function FeaturedTopicCard({ topic }: { topic: (typeof topics)[number] }) {
  return (
    <Link
      href={`/topic/${topic.slug}`}
      className="group block border-t-2 border-ink pt-4"
    >
      <p className="mb-2 font-sans text-[11px] uppercase tracking-[0.15em] text-muted-foreground">
        Topic {String(topic.number).padStart(2, "0")} · Unit {topic.unit === 1 ? "I" : "II"}
      </p>
      <h3 className="font-sans text-2xl font-bold leading-tight tracking-tight text-ink group-hover:text-primary sm:text-3xl">
        {topic.title}
      </h3>
      <p className="mt-3 text-[0.95rem] leading-relaxed text-ink/70">
        {topic.summary}
      </p>
      {topic.intro && (
        <p className="mt-4 border-l-2 border-primary/30 pl-4 text-[0.875rem] italic leading-relaxed text-ink/60">
          {topic.intro.length > 140 ? topic.intro.slice(0, 140) + "…" : topic.intro}
        </p>
      )}
      <div className="mt-5 flex items-center gap-4 font-sans text-xs text-muted-foreground">
        {topic.estimatedTime && (
          <span className="inline-flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" />
            {topic.estimatedTime}
          </span>
        )}
        <span className="inline-flex items-center gap-1 font-display italic text-primary group-hover:text-ink">
          Read the notes
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
        </span>
      </div>
    </Link>
  );
}

/* ── Feature chip ── */
function FeatureChip({ icon: Icon, label, desc }: { icon: React.ComponentType<{ className?: string }>; label: string; desc: string }) {
  return (
    <div className="flex items-center gap-3 rounded-lg border border-border bg-card p-4 shadow-card">
      <span className="grid h-9 w-9 flex-shrink-0 place-items-center rounded-lg bg-primary-soft text-primary">
        <Icon className="h-4 w-4" />
      </span>
      <div className="min-w-0">
        <p className="font-sans text-sm font-semibold text-ink">{label}</p>
        <p className="font-sans text-xs text-muted-foreground">{desc}</p>
      </div>
    </div>
  );
}

/* ── Unit section ── */
function UnitSection({
  unitNumber,
  unitTitle,
  topics,
}: {
  unitNumber: number;
  unitTitle: string;
  topics: typeof import("@/lib/topics").topics;
}) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const onSearch = (e: Event) => {
      setQuery((e as CustomEvent<string>).detail ?? "");
    };
    window.addEventListener("ial-chem:search", onSearch as EventListener);
    return () => window.removeEventListener("ial-chem:search", onSearch as EventListener);
  }, []);

  if (topics.length === 0) return null;

  const hasVisibleTopics =
    !query ||
    topics.some((t) => {
      const q = query.toLowerCase();
      return (
        t.title.toLowerCase().includes(q) ||
        t.summary.toLowerCase().includes(q) ||
        String(t.number).includes(q) ||
        t.specGroups?.some((g) =>
          g.points.some((p) => p.code.includes(q) || p.text.toLowerCase().includes(q)),
        ) ||
        t.sections?.some((s) => s.title.toLowerCase().includes(q) || s.code.includes(q))
      );
    });

  if (!hasVisibleTopics) return null;

  const roman = unitNumber === 1 ? "I" : unitNumber === 2 ? "II" : String(unitNumber);
  return (
    <div className="mb-12">
      <header className="mb-6 flex items-baseline gap-4">
        <span className="font-sans text-5xl font-bold italic text-primary/80 sm:text-6xl">
          {roman}
        </span>
        <div className="border-l-2 border-ink/20 pl-4">
          <p className="font-sans text-[11px] uppercase tracking-[0.15em] text-muted-foreground">
            Unit {roman}
          </p>
          <h3 className="font-sans text-lg font-bold tracking-tight text-ink sm:text-xl">
            {unitTitle}
          </h3>
        </div>
      </header>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:gap-5 xl:grid-cols-4 2xl:gap-6">
        {topics.map((topic) => (
          <TopicCard key={topic.slug} topic={topic} unitNumber={unitNumber} />
        ))}
      </div>
    </div>
  );
}
