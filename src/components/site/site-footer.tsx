import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t-2 border-ink/10 bg-card/30">
      <div className="mx-auto max-w-[1280px] xl:max-w-[1440px] 2xl:max-w-[1600px] px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[2fr_1fr_1fr_1fr]">
          {/* Brand + description */}
          <div>
            <div className="flex items-baseline gap-1 font-sans text-xl font-semibold tracking-tight text-ink">
              <span class="italic">ial</span>
              <span class="text-primary not-italic">.</span>
              <span class="italic">chem</span>
            </div>
            <p className="mt-3 max-w-md font-serif text-sm leading-relaxed text-ink/70">
              A revision companion for Edexcel International A-Level Chemistry.
              Written like a textbook, not a template.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="rounded-md bg-muted px-2 py-1 font-sans text-[10px] uppercase tracking-wide text-muted-foreground">DM Serif · Outfit · JetBrains Mono</span>
              <span className="rounded-md bg-muted px-2 py-1 font-sans text-[10px] uppercase tracking-wide text-muted-foreground">KaTeX</span>
              <span className="rounded-md bg-muted px-2 py-1 font-sans text-[10px] uppercase tracking-wide text-muted-foreground">Next.js 16</span>
            </div>
          </div>

          {/* Units */}
          <div>
            <h3 className="font-sans text-[10px] uppercase tracking-[0.15em] text-primary">
              Units
            </h3>
            <ul className="mt-3 space-y-2 font-serif text-sm">
              <li><Link href="/#index" className="text-ink/70 transition-colors hover:text-primary">Unit I — Structure &amp; Bonding</Link></li>
              <li><Link href="/#index" className="text-ink/70 transition-colors hover:text-primary">Unit II — Energetics &amp; Groups</Link></li>
              <li><span className="text-ink/40">Unit III — Practical Skills <span className="font-sans text-[10px] uppercase tracking-wide italic">soon</span></span></li>
              <li><span className="text-ink/40">Unit IV — Rates &amp; Equilibria <span className="font-sans text-[10px] uppercase tracking-wide italic">soon</span></span></li>
              <li><span className="text-ink/40">Unit V — Transition Metals <span className="font-sans text-[10px] uppercase tracking-wide italic">soon</span></span></li>
            </ul>
          </div>

          {/* Features */}
          <div>
            <h3 className="font-sans text-[10px] uppercase tracking-[0.15em] text-primary">
              Features
            </h3>
            <ul className="mt-3 space-y-2 font-serif text-sm">
              <li><Link href="/#index" className="text-ink/70 transition-colors hover:text-primary">Bullet mode (¶/Auto/•)</Link></li>
              <li><Link href="/#index" className="text-ink/70 transition-colors hover:text-primary">Print / Save as PDF</Link></li>
              <li><Link href="/#index" className="text-ink/70 transition-colors hover:text-primary">Dark mode</Link></li>
              <li><Link href="/#index" className="text-ink/70 transition-colors hover:text-primary">Progress tracking</Link></li>
              <li><Link href="/#index" className="text-ink/70 transition-colors hover:text-primary">Keyboard shortcuts</Link></li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="font-sans text-[10px] uppercase tracking-[0.15em] text-primary">
              About
            </h3>
            <ul className="mt-3 space-y-2 font-serif text-sm">
              <li><Link href="/#index" className="text-ink/70 transition-colors hover:text-primary">How to use these notes</Link></li>
              <li><Link href="/#index" className="text-ink/70 transition-colors hover:text-primary">Full topic index</Link></li>
              <li><a href="https://qualifications.pearson.com/en/qualifications/edexcel-international-advanced-levels/chemistry-2018.html" target="_blank" rel="noopener noreferrer" className="text-ink/70 transition-colors hover:text-primary">Official Edexcel spec ↗</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex items-center justify-between border-t border-border pt-6">
          <p className="font-sans text-[11px] text-muted-foreground">
            © {new Date().getFullYear()} ial.chem — Independent study resource, not affiliated with Pearson Edexcel.
          </p>
          <Link
            href="#top"
            className="font-sans text-sm font-semibold italic text-primary hover:text-ink"
          >
            Back to top ↑
          </Link>
        </div>
      </div>
    </footer>
  );
}
