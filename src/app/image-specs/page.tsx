"use client";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";

interface ImageSpec {
  id: string;
  topic: string;
  title: string;
  description: string;
  category: "AI-friendly" | "Hand-coded SVG";
  status: "pending" | "done";
}

const SPECS: ImageSpec[] = [
  // ── Topic 8: Redox & Groups ──
  {
    id: "t8-flame",
    topic: "Topic 8",
    title: "Flame test colour chart",
    category: "AI-friendly",
    status: "pending",
    description: `A visual reference chart showing 6 flame test colours in a grid. Each cell shows a simple Bunsen burner flame in the correct colour with the ion label below:

- Li⁺ = red/crimson
- Na⁺ = yellow/orange  
- K⁺ = lilac
- Ca²⁺ = brick red
- Sr²⁺ = crimson red
- Ba²⁺ = apple green

Clean white background. Each flame drawn realistically with the colour radiating from the inner blue cone to the outer coloured flame. Labels in a clean sans-serif font below each flame.`,
  },
  {
    id: "t8-polarisation",
    topic: "Topic 8",
    title: "Cation polarisation of anion electron cloud",
    category: "Hand-coded SVG",
    status: "pending",
    description: `A diagram showing why small cations (like Li⁺, Mg²⁺) decompose nitrates/carbonates more easily than large cations (like Ba²⁺).

Left side: Small cation (Li⁺) — drawn as a small circle with +2 charge label. Next to it, a large nitrate ion (NO₃⁻) drawn as a large circle with electron cloud. The cation's positive charge strongly distorts/pulls the electron cloud toward it (arrow showing distortion). Label: "High charge density → strong polarisation → weakens N–O bond → low thermal stability"

Right side: Large cation (Ba²⁺) — drawn as a much larger circle with +2 charge. The same nitrate ion is barely distorted. Label: "Low charge density → weak polarisation → bonds stay strong → high thermal stability"

Use copper (δ⁻) for the electron cloud and teal for the cations.`,
  },
  {
    id: "t8-solubility",
    topic: "Topic 8",
    title: "Group 2 solubility trend chart",
    category: "AI-friendly",
    status: "pending",
    description: `A chart showing the opposite solubility trends of Group 2 hydroxides and sulfates.

Left Y-axis: "Solubility of hydroxides M(OH)₂" — starts low at Mg (insoluble) and increases to Ba (very soluble). Show as an upward arrow.

Right Y-axis: "Solubility of sulfates MSO₄" — starts high at Mg (soluble) and decreases to Ba (insoluble white precipitate). Show as a downward arrow.

X-axis: Mg → Ca → Sr → Ba (going down Group 2)

Include a note: "All Group 1 hydroxides and sulfates are completely soluble."

Clean chart style with teal for hydroxides (upward) and copper/amber for sulfates (downward). White background.`,
  },
  {
    id: "t8-displacement",
    topic: "Topic 8",
    title: "Halogen displacement reactions",
    category: "AI-friendly",
    status: "pending",
    description: `Three test tubes side by side showing halogen displacement reactions:

Tube 1: Chlorine water (pale green) added to sodium bromide solution → solution turns orange/yellow (bromine produced). Label: "Cl₂ + 2Br⁻ → 2Cl⁻ + Br₂"

Tube 2: Chlorine water (pale green) added to sodium iodide solution → solution turns brown (iodine produced). Label: "Cl₂ + 2I⁻ → 2Cl⁻ + I₂"

Tube 3: Bromine water (orange) added to sodium iodide solution → solution turns brown (iodine produced). Label: "Br₂ + 2I⁻ → 2Br⁻ + I₂"

Show the colour change clearly with before/after colours. White background, clean illustration style.`,
  },
  {
    id: "t8-halogen-colours",
    topic: "Topic 8",
    title: "Halogen physical appearance reference",
    category: "AI-friendly",
    status: "pending",
    description: `Four sealed tubes/jars showing the physical appearance of halogens at room temperature:

1. Chlorine = pale green gas in a sealed tube
2. Bromine = red-brown liquid with orange vapour above it in a sealed jar
3. Iodine = dark grey/black crystals with faint purple vapour in a sealed jar
4. Fluorine = pale yellow gas (labelled "too reactive to display safely")

Below each, show a second row with the colour in cyclohexane (organic solvent):
- Cl₂ in cyclohexane = pale green
- Br₂ in cyclohexane = orange/red
- I₂ in cyclohexane = violet/purple

Clean reference chart style on white background with clear labels.`,
  },
  {
    id: "t8-halide-tests",
    topic: "Topic 8",
    title: "Silver nitrate halide test flowchart",
    category: "AI-friendly",
    status: "pending",
    description: `A decision tree/flowchart for identifying halide ions:

Start: "Unknown halide solution" → "Acidify with dilute HNO₃" → "Add AgNO₃(aq)"

Three branches:
- White precipitate → "AgCl (Chloride)" → "Add dilute NH₃" → "Dissolves ✓ = Cl⁻ confirmed"
- Cream precipitate → "AgBr (Bromide)" → "Add dilute NH₃" → "Does not dissolve" → "Add conc. NH₃" → "Dissolves ✓ = Br⁻ confirmed"  
- Yellow precipitate → "AgI (Iodide)" → "Add dilute NH₃" → "Does not dissolve" → "Add conc. NH₃" → "Does not dissolve ✓ = I⁻ confirmed"

Use teal boxes for the start and product boxes, copper/amber for the precipitate boxes, and grey for the reagent steps. Clean flowchart style on white background.`,
  },
  {
    id: "t8-h2so4",
    topic: "Topic 8",
    title: "Halide + conc. H₂SO₄ comparison visual",
    category: "AI-friendly",
    status: "pending",
    description: `A visual comparison of three test tubes showing halide reactions with concentrated sulfuric acid:

Tube 1 (NaCl + conc. H₂SO₄): White steamy fumes rising from the tube. Label: "HCl gas — acid only (no redox)"

Tube 2 (NaBr + conc. H₂SO₄): Red-brown gas (Br₂) + choking fumes (SO₂) + white steamy fumes (HBr). Label: "Br₂ + SO₂ — H₂SO₄ acts as oxidising agent (S: +6→+4)"

Tube 3 (NaI + conc. H₂SO₄): Purple vapour (I₂) + yellow solid (S) + bad egg smell (H₂S) + choking (SO₂). Label: "I₂ + SO₂ + S + H₂S — strong reduction (S: +6→+4, 0, −2)"

Show the increasing intensity of reduction products going down. Clean illustration, white background.`,
  },

  // ── Topic 10: Organic Chemistry ──
  {
    id: "t10-reflux",
    topic: "Topic 10",
    title: "Reflux apparatus setup",
    category: "AI-friendly",
    status: "pending",
    description: `A clean technical illustration of a chemistry reflux apparatus. A round-bottomed flask at the bottom containing a liquid mixture with anti-bumping granules, heated by a Bunsen burner. A vertical Liebig condenser is attached directly above the flask. Cold water enters the condenser at the bottom inlet (blue arrow pointing in) and exits at the top outlet (blue arrow pointing out). The top of the condenser is open (not stoppered).

Labels: "Round-bottom flask", "Anti-bumping granules", "Condenser (vertical)", "Cold water in", "Water out", "Open top — never stopper!"

White background, flat illustration style, teal and grey colour scheme.`,
  },
  {
    id: "t10-distillation",
    topic: "Topic 10",
    title: "Distillation apparatus setup",
    category: "AI-friendly",
    status: "pending",
    description: `A clean technical illustration of a distillation apparatus. A round-bottomed flask on the left heated by a Bunsen burner, connected to a condenser angled downward at about 30 degrees. A thermometer is positioned at the T-junction where vapour enters the condenser, with the bulb level with the side-arm. Cold water enters the condenser at the lower end. A receiving flask collects the distilled product at the right end.

Labels: "Thermometer (bulb at side-arm level)", "Condenser (angled downward)", "Cold water in", "Water out", "Distillate collected here"

White background, flat illustration style, teal and grey colour scheme.`,
  },
  {
    id: "t10-separating-funnel",
    topic: "Topic 10",
    title: "Separating funnel technique (3 stages)",
    category: "AI-friendly",
    status: "pending",
    description: `A clean technical illustration showing a separating funnel in three stages:

Stage 1: Funnel containing two distinct liquid layers — organic layer on top (labelled "Organic layer — less dense"), aqueous layer on bottom (labelled "Aqueous layer — more dense").

Stage 2: Funnel being inverted with a finger on the stopper and the tap open to vent gas (labelled "Invert and vent pressure periodically").

Stage 3: Bottom aqueous layer being drained off through the tap into a beaker, leaving the organic layer behind (labelled "Drain lower layer through tap").

White background, flat illustration style, teal and grey.`,
  },
  {
    id: "t10-oxidation-flow",
    topic: "Topic 10",
    title: "Alcohol oxidation pathway flowchart",
    category: "AI-friendly",
    status: "pending",
    description: `A horizontal flowchart showing alcohol oxidation pathways:

Top row: Box "Primary Alcohol" → arrow labelled "distil immediately" → Box "Aldehyde (R-CHO)" → arrow labelled "reflux with excess oxidiser" → Box "Carboxylic Acid (R-COOH)"

Middle row: Box "Secondary Alcohol" → arrow labelled "reflux" → Box "Ketone (R-CO-R')"

Bottom row: Box "Tertiary Alcohol" → arrow labelled "reflux" → Box "No reaction (stays orange)" with a cross mark

Use teal arrows, green for products, orange for the "no reaction" box. Show the colour change "Orange → Green" on the arrows that represent successful oxidation. White background, clean flat design.`,
  },
  {
    id: "t10-sn2-mechanism",
    topic: "Topic 10",
    title: "SN2 mechanism with curly arrows",
    category: "Hand-coded SVG",
    status: "pending",
    description: `A reaction mechanism diagram showing nucleophilic substitution (SN2):

Left side: A hydroxide ion (:OH⁻) with lone pairs drawn as dots, approaching the δ⁺ carbon of CH₃CH₂Br. The C–Br bond is shown with δ⁺ on C and δ⁻ on Br.

Curly arrows: 
1. Arrow from the lone pair on :OH⁻ to the Cδ⁺ carbon (nucleophilic attack)
2. Arrow from the C–Br bond to the Br atom (bond breaking, heterolytic)

Right side: Products — CH₃CH₂OH (alcohol) + :Br⁻ (leaving group with lone pairs)

Transition state (optional, in the middle): [HO---C---Br]‡ with partial bonds shown as dashed lines.

Use copper for δ⁻ (Br), slate blue for δ⁺ (C), teal for curly arrows and the nucleophile. Clean chemistry textbook style.`,
  },
  {
    id: "t10-mass-spec",
    topic: "Topic 10",
    title: "Mass spectrum of bromoethane (illustrative)",
    category: "AI-friendly",
    status: "pending",
    description: `An illustrative mass spectrum chart for bromoethane (C₂H₅Br) showing:

X-axis: m/z (mass to charge ratio) from 0 to 120
Y-axis: Relative abundance (%)

Key peaks:
- M = 108 (M⁺ molecular ion, ⁷⁹Br)
- M+2 = 110 (molecular ion, ⁸¹Br) — same height as M (1:1 ratio for bromine)
- m/z = 29 (C₂H₅⁺ ethyl cation fragment)
- m/z = 79/81 (Br⁺ fragment)

Label the two equal-height molecular ion peaks clearly with "M (⁷⁹Br)" and "M+2 (⁸¹Br)" and "1:1 ratio = bromine present".

Clean chart style with teal bars on white background, labelled axes.`,
  },
  {
    id: "t10-ir-spectrum",
    topic: "Topic 10",
    title: "IR spectrum of ethanol (illustrative)",
    category: "AI-friendly",
    status: "pending",
    description: `An illustrative infrared (IR) spectrum chart for ethanol (C₂H₅OH) showing:

X-axis: Wavenumber (cm⁻¹) from 4000 to 400 (left to right, reversed as is standard for IR)
Y-axis: % Transmittance (100% at top, 0% at bottom)

Key absorptions (shown as downward dips):
- Broad dip at ~3300 cm⁻¹ labelled "O–H stretch (broad, hydrogen bonding)"
- Sharp dip at ~2900 cm⁻¹ labelled "C–H stretch"
- Sharp dip at ~1050 cm⁻¹ labelled "C–O stretch"
- Complex region below 1500 cm⁻¹ labelled "Fingerprint region"

Clean chart style with a black line on white background, labelled peaks with arrows pointing to each absorption. X-axis labels at 4000, 3000, 2000, 1500, 1000, 500.`,
  },
  {
    id: "t10-drying",
    topic: "Topic 10",
    title: "Drying organic liquid with anhydrous salt",
    category: "AI-friendly",
    status: "pending",
    description: `Two conical flasks side by side showing the drying process:

Left flask (before): Cloudy/milky organic liquid with clumped drying agent stuck to the bottom. Label: "Add anhydrous MgSO₄ — clumps together (water still present)"

Right flask (after): Crystal clear organic liquid with fine free-flowing powder swirling in it. Label: "Add more until powder swirls freely — liquid is now dry"

Arrow between them labelled "Keep adding drying agent until clear"

Small note below: "Filter or decant to remove the drying agent"

White background, clean illustration, teal and grey scheme.`,
  },
  {
    id: "t10-boiling-point",
    topic: "Topic 10",
    title: "Boiling point determination apparatus",
    category: "AI-friendly",
    status: "pending",
    description: `An illustration showing boiling point determination using a simple distillation setup:

A small test tube or flask containing the unknown liquid with a thermometer immersed (bulb in the liquid, not above it). The liquid is heated gently. The temperature is recorded when steady boiling occurs and vapour condenses on the thermometer.

Two callout boxes:
- "Pure liquid: boils sharply at one temperature (±1°C of literature value)"
- "Impure liquid: boiling range broadens, temperature may be elevated or depressed"

Show a thermometer reading a specific temperature with a clear reading marker. White background, clean illustration style.`,
  },
];

export default function ImageSpecsPage() {
  const aiFriendly = SPECS.filter((s) => s.category === "AI-friendly");
  const handCoded = SPECS.filter((s) => s.category === "Hand-coded SVG");

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <div className="mx-auto max-w-[900px] px-4 py-10 sm:px-6 lg:py-16">
          <Link
            href="/"
            className="mb-6 inline-flex items-center gap-1.5 font-sans text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to home
          </Link>

          <div className="mb-8 border-b border-border pb-4">
            <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-primary">
              Internal — temporary
            </p>
            <h1 className="mt-1 font-sans text-3xl font-bold tracking-tight text-ink">
              Image specifications
            </h1>
            <p className="mt-2 font-serif text-sm text-muted-foreground">
              Descriptions for diagrams to be generated. Copy the description
              text into your image generator, then upload the result. This page
              will be removed once all images are embedded.
            </p>
          </div>

          <div className="mb-8 grid grid-cols-3 gap-4">
            <div className="rounded-lg border border-border bg-card p-4 text-center">
              <p className="font-sans text-2xl font-bold text-ink">{SPECS.length}</p>
              <p className="text-xs text-muted-foreground">Total images</p>
            </div>
            <div className="rounded-lg border border-border bg-card p-4 text-center">
              <p className="font-sans text-2xl font-bold text-primary">{aiFriendly.length}</p>
              <p className="text-xs text-muted-foreground">AI-friendly</p>
            </div>
            <div className="rounded-lg border border-border bg-card p-4 text-center">
              <p className="font-sans text-2xl font-bold text-amber">{handCoded.length}</p>
              <p className="text-xs text-muted-foreground">Hand-coded SVG</p>
            </div>
          </div>

          <section className="mb-12">
            <h2 className="mb-4 font-sans text-lg font-bold text-ink">
              AI-friendly (apparatus, charts, observations)
            </h2>
            <p className="mb-4 font-serif text-sm text-muted-foreground">
              These can be generated with AI image tools. Copy the description
              and paste it into your image generator.
            </p>
            <div className="space-y-4">
              {aiFriendly.map((spec) => (
                <ImageSpecCard key={spec.id} spec={spec} />
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="mb-4 font-sans text-lg font-bold text-ink">
              Hand-coded SVG (molecular structures, mechanisms)
            </h2>
            <p className="mb-4 font-serif text-sm text-muted-foreground">
              These require precise molecular accuracy and will be hand-coded as
              SVG. AI image generators get the chemistry wrong on these.
            </p>
            <div className="space-y-4">
              {handCoded.map((spec) => (
                <ImageSpecCard key={spec.id} spec={spec} />
              ))}
            </div>
          </section>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}

function ImageSpecCard({ spec }: { spec: ImageSpec }) {
  return (
    <div className="rounded-lg border border-border bg-card p-5 shadow-card">
      <div className="mb-2 flex items-start justify-between gap-3">
        <div>
          <span className="font-mono text-[10px] font-bold uppercase tracking-wide text-primary">
            {spec.topic}
          </span>
          <h3 className="mt-1 font-sans text-base font-semibold text-ink">
            {spec.title}
          </h3>
        </div>
        <span className="flex-shrink-0 rounded-md bg-muted px-2 py-1 font-sans text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">
          {spec.status}
        </span>
      </div>
      <div className="mt-3 rounded-md bg-muted/40 p-4">
        <p className="font-sans text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">
          Description (copy into image generator)
        </p>
        <p className="mt-2 whitespace-pre-wrap font-mono text-[13px] leading-relaxed text-ink/80">
          {spec.description}
        </p>
      </div>
    </div>
  );
}
