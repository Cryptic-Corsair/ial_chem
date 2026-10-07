"use client";

import { useState, useMemo, useEffect } from "react";
import { ArrowLeft, Copy, Check, Filter } from "lucide-react";
import Link from "next/link";
import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";

interface ImageSpec {
  id: string;
  topic: string;
  topicNum: number;
  title: string;
  description: string;
  category: "AI-friendly" | "Hand-coded SVG";
  impact: "high" | "medium" | "low";
}

const SPECS: ImageSpec[] = [
  // ════════ Topic 1: Formulae, Equations & Amount of Substance ════════
  {
    id: "t1-mole-wheel",
    topic: "Topic 1",
    topicNum: 1,
    title: "The mole triangle / calculation wheel",
    category: "Hand-coded SVG",
    impact: "high",
    description: `A triangular diagram showing the relationship between moles, mass, and molar mass:

Top vertex: "Moles (mol)" — formula: n = mass ÷ M
Bottom left: "Mass (g)" — formula: mass = n × M
Bottom right: "Molar Mass (g/mol)" — formula: M = mass ÷ n

Below the triangle, show 4 more relationships in a wheel:
- Moles = concentration × volume (for solutions)
- Moles = volume ÷ molar volume (for gases at RTP, 24 dm³)
- pV = nRT (ideal gas equation, with each variable labelled)
- Atom economy = (Mr of desired product ÷ sum of Mr of all products) × 100%

Clean diagram, teal and grey, white background. Each formula clearly readable.`,
  },
  {
    id: "t1-pv=nrt",
    topic: "Topic 1",
    topicNum: 1,
    title: "Ideal gas equation visual (pV = nRT)",
    category: "Hand-coded SVG",
    impact: "medium",
    description: `A visual breakdown of pV = nRT showing each variable with its SI unit:

p = pressure (Pa) — show a gas cylinder with an arrow pushing inward
V = volume (m³) — show a container with dotted outline expanding
n = moles (mol) — show molecules as dots inside the container
R = gas constant (8.31 J/mol/K) — show as a constant badge
T = temperature (K) — show a thermometer

Include conversion reminders:
- °C → K: add 273
- kPa → Pa: ×1000
- dm³ → m³: ÷1000
- cm³ → dm³: ÷1000

Clean textbook style, teal accents, white background.`,
  },

  // ════════ Topic 2: Atomic Structure & Periodic Table ════════
  {
    id: "t2-mass-spec",
    topic: "Topic 2",
    topicNum: 2,
    title: "Mass spectrometer diagram (how it works)",
    category: "AI-friendly",
    impact: "high",
    description: `A labelled cross-section diagram of a mass spectrometer showing the four stages:

1. Ionisation: Sample is vaporised and bombarded with high-energy electrons. Show electrons (e⁻) hitting atoms and knocking off an electron to form positive ions (M⁺•).

2. Acceleration: Positive ions are accelerated by an electric field. Show parallel plates with + and − charges, ions speeding up between them.

3. Deflection: Ions pass through a magnetic field. Show a curved path — lighter ions bend more, heavier ions bend less. Label "magnetic field" with field lines.

4. Detection: Ions hit a detector at the end. Show an ion beam hitting a plate and a signal output.

Labels: "Ionisation", "Acceleration", "Deflection", "Detection", "Electron beam", "Electric field", "Magnetic field", "Detector". Clean technical illustration, teal and grey, white background.`,
  },
  {
    id: "t2-orbitals",
    topic: "Topic 2",
    topicNum: 2,
    title: "s and p orbital shapes",
    category: "Hand-coded SVG",
    impact: "high",
    description: `Two 3D-style shapes showing orbital geometry:

Left: s orbital — a perfect sphere (ball shape). Label: "s orbital — spherical, holds max 2 electrons"

Right: p orbitals — three dumbbell-shaped lobes oriented along x, y, and z axes at 90° to each other. Label: "p orbitals — 3 mutually perpendicular dumbbells (px, py, pz), holds max 6 electrons total"

Below: show electron-in-boxes notation for:
- s sub-shell: 1 box (can hold 2 electrons)
- p sub-shell: 3 boxes (can hold 6 electrons)
- d sub-shell: 5 boxes (can hold 10 electrons)

Use teal for s, copper for p, clean textbook style.`,
  },
  {
    id: "t2-ie-trend",
    topic: "Topic 2",
    topicNum: 2,
    title: "First ionisation energy across Periods 2 & 3",
    category: "AI-friendly",
    impact: "high",
    description: `A graph showing first ionisation energy (y-axis, kJ/mol) plotted against atomic number (x-axis) for elements 1–20 (H to Ca):

Show the characteristic "sawtooth" pattern with:
- General increase across each period
- Drops between Group 2→3 (Be→B, Mg→Al) — label "sub-shell change (s→p)"
- Drops between Group 5→6 (N→O, P→S) — label "electron pairing"
- Big drop at the end of each period (noble gas → alkali metal)
- Helium at the highest peak

Label key elements: H, He, Li, Be, B, C, N, O, F, Ne, Na, Mg, Al, Si, P, S, Cl, Ar, K, Ca.

Annotate the two drops with brief explanations. Clean graph, teal line, white background, labelled axes.`,
  },
  {
    id: "t2-electron-config",
    topic: "Topic 2",
    topicNum: 2,
    title: "Electronic configuration filling order",
    category: "Hand-coded SVG",
    impact: "medium",
    description: `A diagonal diagram showing the order in which sub-shells fill:

Write the sub-shells in a grid:
1s
2s  2p
3s  3p  3d
4s  4p  4d  4f

Draw diagonal arrows going from top-right to bottom-left:
1s → 2s → 2p → 3s → 3p → 4s → 3d → 4p

Show the filling order as: 1s, 2s, 2p, 3s, 3p, 4s, 3d, 4p

Include electron capacity labels: s=2, p=6, d=10

Clean diagram, teal arrows, white background.`,
  },

  // ════════ Topic 3: Bonding & Structure ════════
  {
    id: "t3-dot-cross",
    topic: "Topic 3",
    topicNum: 3,
    title: "Dot-and-cross diagrams (ionic + covalent examples)",
    category: "Hand-coded SVG",
    impact: "high",
    description: `Four dot-and-cross diagrams side by side:

1. NaCl (ionic): Na atom (with x electrons) losing 1 electron to become Na⁺. Cl atom (with • electrons) gaining 1 electron to become Cl⁻. Show the transfer with an arrow.

2. MgO (ionic): Mg losing 2 electrons, O gaining 2 electrons. Show [Mg]²⁺ and [O]²⁻ with outer shells.

3. H₂O (covalent): O in centre sharing 2 pairs of electrons with 2 H atoms. Show shared pairs as one x + one •.

4. NH₄⁺ (dative): N in centre with 4 bonds (3 normal + 1 dative from H⁺). Show the dative bond with both electrons coming from N.

Use x for one atom's electrons, • for the other's. Clean, large enough to read, white background.`,
  },
  {
    id: "t3-shapes",
    topic: "Topic 3",
    topicNum: 3,
    title: "Molecular shapes diagram (VSEPR)",
    category: "Hand-coded SVG",
    impact: "high",
    description: `A reference chart showing 8 molecular shapes with bond angles:

1. BeCl₂ — Linear — 180° — 2 bonding pairs, 0 lone pairs
2. BCl₃ — Trigonal planar — 120° — 3 bonding pairs, 0 lone pairs
3. CH₄ — Tetrahedral — 109.5° — 4 bonding pairs, 0 lone pairs
4. NH₃ — Trigonal pyramidal — 107° — 3 bonding pairs, 1 lone pair
5. H₂O — Bent/V-shaped — 104.5° — 2 bonding pairs, 2 lone pairs
6. CO₂ — Linear — 180° — 2 double bonds
7. PCl₅ — Trigonal bipyramidal — 90°/120°
8. SF₆ — Octahedral — 90°

Show each shape as a 3D ball-and-stick model. Include lone pairs as shaded lobes. Label bond angles clearly.

Clean reference chart, teal for atoms, copper for lone pairs, white background.`,
  },
  {
    id: "t3-giant-structures",
    topic: "Topic 3",
    topicNum: 3,
    title: "Giant covalent structures (diamond, graphite, graphene)",
    category: "AI-friendly",
    impact: "medium",
    description: `Three structures side by side:

1. Diamond: 3D tetrahedral lattice — each carbon bonded to 4 others in a rigid 3D network. Label: "4 bonds per C — extremely hard — no conductivity"

2. Graphite: Layered hexagonal sheets — each carbon bonded to 3 others in flat sheets, with delocalised electrons between layers. Label: "3 bonds per C + delocalised e⁻ — soft/slippery — conducts electricity"

3. Graphene: Single layer of hexagonal carbon sheet. Label: "1 atom thick — extremely strong — conducts electricity"

Show the hexagonal bonding clearly. Clean illustration, dark grey for carbon, white background.`,
  },
  {
    id: "t3-bonding-continuum",
    topic: "Topic 3",
    topicNum: 3,
    title: "Bonding continuum (ionic → polar covalent → non-polar)",
    category: "Hand-coded SVG",
    impact: "medium",
    description: `A horizontal spectrum/continuum showing how bonding type depends on electronegativity difference (ΔEN):

Left end: "Ionic" (ΔEN > 2.0) — show NaCl with full electron transfer, charges + and −
Middle: "Polar covalent" (0.5 < ΔEN < 2.0) — show HCl with unequal sharing, δ+ and δ−
Right end: "Non-polar covalent" (ΔEN < 0.5) — show Cl₂ with equal sharing, no charges

Show ΔEN values: NaCl = 2.1, HCl = 0.9, Cl₂ = 0.0

Label the arrow underneath: "Increasing electronegativity difference →"

Clean diagram, teal for ionic, copper for polar, grey for non-polar.`,
  },

  // ════════ Topic 4: Organic Chemistry & Alkanes ════════
  {
    id: "t4-homolytic-heterolytic",
    topic: "Topic 4",
    topicNum: 4,
    title: "Homolytic vs heterolytic bond fission",
    category: "Hand-coded SVG",
    impact: "high",
    description: `Two diagrams side by side:

Left: Homolytic fission
- Show X–Y bond breaking symmetrically
- Each atom keeps one electron (one • from X, one • from Y)
- Products: X• + Y• (two free radicals, uncharged)
- Label: "Homolytic — one electron each — free radicals formed"
- Show the curly half-arrow (fishhook arrow) from bond to each atom

Right: Heterolytic fission
- Show X–Y bond breaking unsymmetrically
- Both electrons go to Y (more electronegative)
- Products: X⁺ + :Y⁻ (ions, charged)
- Label: "Heterolytic — both electrons to one atom — ions formed"
- Show the full curly arrow from bond to Y

Use teal for electrons, clean style, white background.`,
  },
  {
    id: "t4-radical-sub",
    topic: "Topic 4",
    topicNum: 4,
    title: "Free radical substitution mechanism (3 stages)",
    category: "Hand-coded SVG",
    impact: "high",
    description: `Three panels showing the mechanism of methane + chlorine under UV:

Panel 1 — Initiation:
Cl₂ → 2Cl• (show UV light symbol, fishhook arrows from Cl-Cl bond to each Cl)

Panel 2 — Propagation (two steps):
Step a: Cl• + CH₄ → HCl + •CH₃ (fishhook arrows: Cl• attacks H, C-H bond breaks to form •CH₃)
Step b: •CH₃ + Cl₂ → CH₃Cl + Cl• (fishhook arrows: •CH₃ attacks Cl, Cl-Cl bond breaks)

Panel 3 — Termination (show 3 possible reactions):
•CH₃ + •CH₃ → C₂H₆
Cl• + Cl• → Cl₂
•CH₃ + Cl• → CH₃Cl

Label each stage clearly. Use fishhook (half) arrows for all radical steps. Teal and copper, white background.`,
  },
  {
    id: "t4-cracking",
    topic: "Topic 4",
    topicNum: 4,
    title: "Fractional distillation of crude oil",
    category: "AI-friendly",
    impact: "medium",
    description: `A distillation column/fractionating tower showing crude oil separation:

Bottom: hottest (~400°C) — bitumen/tar (dark, thick)
Lower section: fuel oil, diesel (dark brown)
Middle: kerosene, jet fuel (yellow)
Upper middle: naphtha, petrol (light yellow)
Top: coolest (~20°C) — refinery gases (LPG) (pale)

Show temperature gradient from bottom (hot) to top (cool). Label each fraction with:
- Name
- Carbon chain length range (e.g. C1-C4 gases, C5-C12 petrol, etc.)
- Use (e.g. "fuel for cars", "heating", "road surfacing")

Show crude oil entering at the bottom and fractions drawn off at different heights. Clean industrial illustration style, white background.`,
  },

  // ════════ Topic 5: Alkenes ════════
  {
    id: "t5-sigma-pi",
    topic: "Topic 5",
    topicNum: 5,
    title: "Sigma and pi bonds in C=C double bond",
    category: "Hand-coded SVG",
    impact: "high",
    description: `A 3D-style diagram of the C=C double bond in ethene (C₂H₄):

Left: Side view showing both bonds:
- σ bond: direct head-on overlap of two sp² hybrid orbitals between the two carbons (shown as a solid line in the plane)
- π bond: sideways overlap of two unhybridised p orbitals above and below the plane (shown as two lobes, one above and one below the bond axis)

Right: End-on view looking down the C=C axis:
- Show the σ bond as a circle (head-on overlap)
- Show the π bond as two lobes above and below

Labels: "σ bond — head-on overlap, stronger", "π bond — sideways overlap, weaker, more exposed to electrophiles"

Also show why this makes alkenes reactive: the π electrons are exposed above and below the bond, making them attractive to electrophiles.

Use teal for σ, copper for π. Clean textbook style.`,
  },
  {
    id: "t5-ez-isomerism",
    topic: "Topic 5",
    topicNum: 5,
    title: "E/Z (cis/trans) geometric isomerism",
    category: "Hand-coded SVG",
    impact: "high",
    description: `Two molecules side by side showing restricted rotation around C=C:

Left: Z-isomer (cis) — both high-priority groups on the SAME side of the double bond. Example: 1,2-dichloroethene with both Cl atoms on top.

Right: E-isomer (trans) — high-priority groups on OPPOSITE sides. Example: 1,2-dichloroethene with one Cl on top, one on bottom.

Show the C=C double bond clearly. Label priority groups (Cl > H by CIP rules).

Below: show why E/Z is needed when cis/trans fails — use 1-bromo-1-chloro-2-fluoroethene as an example where "cis" and "trans" are ambiguous but E/Z still works.

Clean structural formula style, teal for carbons, white background.`,
  },
  {
    id: "t5-electrophilic-addition",
    topic: "Topic 5",
    topicNum: 5,
    title: "Electrophilic addition of Br₂ to ethene (mechanism)",
    category: "Hand-coded SVG",
    impact: "high",
    description: `A two-step mechanism diagram:

Step 1: Br₂ approaches ethene. The π electrons of C=C attack the Br₂ molecule (curly arrow from π bond to Br). The Br-Br bond breaks heterolytically (curly arrow from Br-Br bond to the far Br). This forms a cyclic bromonium ion intermediate (show the 3-membered ring with Br bridging the two carbons) and a Br⁻ ion.

Step 2: The Br⁻ ion attacks the bromonium ion from the opposite side (anti attack, backside). The C-Br bridge breaks. Product: 1,2-dibromoethane (anti addition product).

Show all curly arrows clearly:
- Arrow from C=C π bond to Br (electrophilic attack)
- Arrow from Br-Br bond to Br (bond breaking)
- Arrow from Br⁻ lone pair to C (nucleophilic attack)

Labels: "Step 1: Electrophilic attack — bromonium ion formed", "Step 2: Nucleophilic attack by Br⁻ — anti addition"

Use teal for curly arrows, copper for δ⁻, slate blue for δ⁺. Clean mechanism style.`,
  },
  {
    id: "t5-carbocation",
    topic: "Topic 5",
    topicNum: 5,
    title: "Carbocation stability (1° vs 2° vs 3°)",
    category: "Hand-coded SVG",
    impact: "medium",
    description: `Three carbocations shown side by side with increasing stability:

Left: Primary (1°) — CH₃CH₂⁺ (ethyl cation). Show the C⁺ with only 1 alkyl group. Label: "Least stable — 1 alkyl group donating electrons"

Middle: Secondary (2°) — (CH₃)₂CH⁺ (isopropyl cation). Show C⁺ with 2 alkyl groups. Label: "More stable — 2 alkyl groups donating electrons"

Right: Tertiary (3°) — (CH₃)₃C⁺ (tert-butyl cation). Show C⁺ with 3 alkyl groups. Label: "Most stable — 3 alkyl groups donating electrons"

Show alkyl groups as electron-donating (arrows pointing toward C⁺) to explain stabilisation via inductive effect.

Arrow at bottom: "Increasing stability →"

Also note: "This explains Markovnikov's rule — the more stable carbocation forms faster."

Clean, teal for alkyl groups, copper for the positive charge. White background.`,
  },

  // ════════ Topic 6: Energetics ════════
  {
    id: "t6-hess-cycle",
    topic: "Topic 6",
    topicNum: 6,
    title: "Hess's Law enthalpy cycle diagram",
    category: "Hand-coded SVG",
    impact: "high",
    description: `A triangular enthalpy cycle showing how to calculate ΔH of reaction using formation data:

Top: Reactants (e.g. C + O₂) → Products (e.g. CO₂) — direct arrow labelled "ΔH = ?" (the unknown)

Bottom vertex: Elements in standard states (C(s) + O₂(g))

Two arrows going DOWN from elements:
- Left arrow down to reactants: labelled "ΔHf(reactants)" with values
- Right arrow down to products: labelled "ΔHf(products)" with values

Formula at bottom: "ΔH = ΣΔHf(products) − ΣΔHf(reactants)"

Also show an alternative cycle using combustion data (arrows going UP to combustion products like CO₂ + H₂O).

Clean, clear arrows, teal for known values, copper for the unknown. White background.`,
  },
  {
    id: "t6-calorimetry",
    topic: "Topic 6",
    topicNum: 6,
    title: "Calorimetry setup (polystyrene cup)",
    category: "AI-friendly",
    impact: "medium",
    description: `A simple calorimetry apparatus:

A polystyrene cup (shown in cross-section) containing a reaction mixture. A thermometer is immersed in the liquid with a clear temperature reading. The cup is shown with a lid (with a hole for the thermometer) to reduce heat loss.

Labels:
- "Polystyrene cup (insulated — reduces heat loss)"
- "Thermometer (measures ΔT)"
- "Lid (reduces heat loss by evaporation)"
- "Stirrer (ensures uniform temperature)"
- "Known mass of solution"
- "ΔT = T_final − T_initial"

Show the formula: q = mcΔT, where m = mass of solution (g), c = 4.18 J/g/°C, ΔT = temperature change.

Clean illustration, teal and grey, white background.`,
  },
  {
    id: "t6-energy-profiles",
    topic: "Topic 6",
    topicNum: 6,
    title: "Enthalpy level diagrams (exothermic vs endothermic)",
    category: "Hand-coded SVG",
    impact: "high",
    description: `Two energy profile diagrams side by side:

Left: Exothermic reaction
- Y-axis: "Enthalpy (H)"
- X-axis: "Reaction progress"
- Reactants start higher than products
- Curve goes up to a peak (activation energy, Ea) then down to products
- Label: "ΔH = negative (heat released)"
- Show Ea as a vertical arrow from reactants to peak
- Show ΔH as a vertical arrow from reactants to products (pointing down)

Right: Endothermic reaction
- Same axes
- Reactants start lower than products
- Curve goes up to a peak (Ea) then down to products (but products are higher than reactants)
- Label: "ΔH = positive (heat absorbed)"
- Show Ea as a larger vertical arrow
- Show ΔH pointing up

Clean graphs, teal lines, copper arrows for Ea, white background.`,
  },

  // ════════ Topic 7: Intermolecular Forces (existing diagrams already done) ════════
  {
    id: "t7-hbond-network",
    topic: "Topic 7",
    topicNum: 7,
    title: "Water's 3D hydrogen-bonded network (ice lattice)",
    category: "Hand-coded SVG",
    impact: "medium",
    description: `Already partially done (ice vs water diagram exists). This would be a more detailed 3D representation of water molecules in ice, showing the tetrahedral arrangement where each oxygen is hydrogen-bonded to 4 neighbouring molecules.

Show multiple water molecules arranged in a 3D hexagonal cage. Each O atom has 2 covalent O-H bonds and 2 hydrogen bonds (dotted lines). The cage-like structure with empty space in the centre should be clearly visible.

Label: "4 H-bonds per molecule (2 donor + 2 acceptor)", "Open cage = low density", "Tetrahedral arrangement"

Use copper for O, slate blue for H, teal dotted lines for H-bonds.`,
  },

  // ════════ Topic 8 (existing specs already on the page) ════════
  {
    id: "t8-flame",
    topic: "Topic 8",
    topicNum: 8,
    title: "Flame test colour chart",
    category: "AI-friendly",
    impact: "high",
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
    topicNum: 8,
    title: "Cation polarisation of anion electron cloud",
    category: "Hand-coded SVG",
    impact: "high",
    description: `A diagram showing why small cations (like Li⁺, Mg²⁺) decompose nitrates/carbonates more easily than large cations (like Ba²⁺).

Left side: Small cation (Li⁺) — drawn as a small circle with +2 charge label. Next to it, a large nitrate ion (NO₃⁻) drawn as a large circle with electron cloud. The cation's positive charge strongly distorts/pulls the electron cloud toward it (arrow showing distortion). Label: "High charge density → strong polarisation → weakens N–O bond → low thermal stability"

Right side: Large cation (Ba²⁺) — drawn as a much larger circle with +2 charge. The same nitrate ion is barely distorted. Label: "Low charge density → weak polarisation → bonds stay strong → high thermal stability"

Use copper (δ⁻) for the electron cloud and teal for the cations.`,
  },
  {
    id: "t8-solubility",
    topic: "Topic 8",
    topicNum: 8,
    title: "Group 2 solubility trend chart",
    category: "AI-friendly",
    impact: "medium",
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
    topicNum: 8,
    title: "Halogen displacement reactions",
    category: "AI-friendly",
    impact: "high",
    description: `Three test tubes side by side showing halogen displacement reactions:

Tube 1: Chlorine water (pale green) added to sodium bromide solution → solution turns orange/yellow (bromine produced). Label: "Cl₂ + 2Br⁻ → 2Cl⁻ + Br₂"

Tube 2: Chlorine water (pale green) added to sodium iodide solution → solution turns brown (iodine produced). Label: "Cl₂ + 2I⁻ → 2Cl⁻ + I₂"

Tube 3: Bromine water (orange) added to sodium iodide solution → solution turns brown (iodine produced). Label: "Br₂ + 2I⁻ → 2Br⁻ + I₂"

Show the colour change clearly with before/after colours. White background, clean illustration style.`,
  },
  {
    id: "t8-halogen-colours",
    topic: "Topic 8",
    topicNum: 8,
    title: "Halogen physical appearance reference",
    category: "AI-friendly",
    impact: "medium",
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
    topicNum: 8,
    title: "Silver nitrate halide test flowchart",
    category: "AI-friendly",
    impact: "high",
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
    topicNum: 8,
    title: "Halide + conc. H₂SO₄ comparison visual",
    category: "AI-friendly",
    impact: "medium",
    description: `A visual comparison of three test tubes showing halide reactions with concentrated sulfuric acid:

Tube 1 (NaCl + conc. H₂SO₄): White steamy fumes rising from the tube. Label: "HCl gas — acid only (no redox)"

Tube 2 (NaBr + conc. H₂SO₄): Red-brown gas (Br₂) + choking fumes (SO₂) + white steamy fumes (HBr). Label: "Br₂ + SO₂ — H₂SO₄ acts as oxidising agent (S: +6→+4)"

Tube 3 (NaI + conc. H₂SO₄): Purple vapour (I₂) + yellow solid (S) + bad egg smell (H₂S) + choking (SO₂). Label: "I₂ + SO₂ + S + H₂S — strong reduction (S: +6→+4, 0, −2)"

Show the increasing intensity of reduction products going down. Clean illustration, white background.`,
  },

  // ════════ Topic 9: Kinetics & Equilibria ════════
  {
    id: "t9-maxwell-boltzmann",
    topic: "Topic 9",
    topicNum: 9,
    title: "Maxwell-Boltzmann distribution curve",
    category: "Hand-coded SVG",
    impact: "high",
    description: `A Maxwell-Boltzmann molecular energy distribution curve:

X-axis: "Molecular energy"
Y-axis: "Number of molecules" (or "Fraction of molecules")

The curve: starts at origin (0 molecules have 0 energy), rises to a peak (most probable energy), then tails off to the right asymptotically (never reaches zero).

Key labels on the curve:
- Peak: "Most probable energy (Emp)"
- Vertical dashed line: "Mean energy (Ē)" — slightly right of peak
- Vertical dashed line further right: "Activation energy (Ea)"
- Shade the area under the curve to the RIGHT of Ea: label "Molecules with sufficient energy to react"

Also show a second curve (dashed) at higher temperature — the peak shifts right and lowers, and the shaded area beyond Ea increases. Label: "At higher T — more molecules exceed Ea".

Clean graph, teal for the curve, copper for the shaded area, white background.`,
  },
  {
    id: "t9-catalyst-profile",
    topic: "Topic 9",
    topicNum: 9,
    title: "Reaction profile with and without catalyst",
    category: "Hand-coded SVG",
    impact: "high",
    description: `An energy profile diagram showing two pathways:

X-axis: "Reaction progress"
Y-axis: "Enthalpy (H)"

Solid curve (uncatalysed): Reactants → high peak (Ea₁, large) → Products
Dashed curve (catalysed): Reactants → lower peak (Ea₂, smaller, via an intermediate) → same Products

Show:
- Ea₁ (uncatalysed) as a large vertical arrow
- Ea₂ (catalysed) as a smaller vertical arrow
- The intermediate (catalyst-bound) as a small dip in the dashed curve
- ΔH stays the same for both pathways (catalysts don't change ΔH)

Label: "Ea (uncatalysed) = large", "Ea (catalysed) = smaller", "ΔH unchanged", "Catalyst provides alternative route"

Clean graph, teal for uncatalysed, copper for catalysed. White background.`,
  },
  {
    id: "t9-equilibrium-shift",
    topic: "Topic 9",
    topicNum: 9,
    title: "Le Chatelier's principle visual (equilibrium shifts)",
    category: "Hand-coded SVG",
    impact: "medium",
    description: `Three panels showing how equilibrium shifts:

Panel 1 — Effect of temperature:
Show a reversible reaction A ⇌ B (forward = endothermic). 
- Left: equilibrium at normal T
- Right: when T increases, equilibrium shifts RIGHT (toward endothermic direction) to absorb the added heat. Show more B, less A.

Panel 2 — Effect of pressure (for gases):
Show 2A(g) ⇌ A₂(g) (fewer moles on right).
- Left: equilibrium at normal P
- Right: when P increases, equilibrium shifts RIGHT (toward fewer gas molecules) to reduce pressure.

Panel 3 — Effect of concentration:
Show A + B ⇌ C + D.
- Left: equilibrium
- Right: when more A is added, equilibrium shifts RIGHT to consume the added A.

Use arrows showing the direction of shift. Clean, teal for reactants, copper for products. White background.`,
  },

  // ════════ Topic 10 (existing specs already on the page) ════════
  {
    id: "t10-reflux",
    topic: "Topic 10",
    topicNum: 10,
    title: "Reflux apparatus setup",
    category: "AI-friendly",
    impact: "high",
    description: `A clean technical illustration of a chemistry reflux apparatus. A round-bottomed flask at the bottom containing a liquid mixture with anti-bumping granules, heated by a Bunsen burner. A vertical Liebig condenser is attached directly above the flask. Cold water enters the condenser at the bottom inlet (blue arrow pointing in) and exits at the top outlet (blue arrow pointing out). The top of the condenser is open (not stoppered).

Labels: "Round-bottom flask", "Anti-bumping granules", "Condenser (vertical)", "Cold water in", "Water out", "Open top — never stopper!"

White background, flat illustration style, teal and grey colour scheme.`,
  },
  {
    id: "t10-distillation",
    topic: "Topic 10",
    topicNum: 10,
    title: "Distillation apparatus setup",
    category: "AI-friendly",
    impact: "high",
    description: `A clean technical illustration of a distillation apparatus. A round-bottomed flask on the left heated by a Bunsen burner, connected to a condenser angled downward at about 30 degrees. A thermometer is positioned at the T-junction where vapour enters the condenser, with the bulb level with the side-arm. Cold water enters the condenser at the lower end. A receiving flask collects the distilled product at the right end.

Labels: "Thermometer (bulb at side-arm level)", "Condenser (angled downward)", "Cold water in", "Water out", "Distillate collected here"

White background, flat illustration style, teal and grey colour scheme.`,
  },
  {
    id: "t10-separating-funnel",
    topic: "Topic 10",
    topicNum: 10,
    title: "Separating funnel technique (3 stages)",
    category: "AI-friendly",
    impact: "medium",
    description: `A clean technical illustration showing a separating funnel in three stages:

Stage 1: Funnel containing two distinct liquid layers — organic layer on top (labelled "Organic layer — less dense"), aqueous layer on bottom (labelled "Aqueous layer — more dense").

Stage 2: Funnel being inverted with a finger on the stopper and the tap open to vent gas (labelled "Invert and vent pressure periodically").

Stage 3: Bottom aqueous layer being drained off through the tap into a beaker, leaving the organic layer behind (labelled "Drain lower layer through tap").

White background, flat illustration style, teal and grey.`,
  },
  {
    id: "t10-oxidation-flow",
    topic: "Topic 10",
    topicNum: 10,
    title: "Alcohol oxidation pathway flowchart",
    category: "AI-friendly",
    impact: "high",
    description: `A horizontal flowchart showing alcohol oxidation pathways:

Top row: Box "Primary Alcohol" → arrow labelled "distil immediately" → Box "Aldehyde (R-CHO)" → arrow labelled "reflux with excess oxidiser" → Box "Carboxylic Acid (R-COOH)"

Middle row: Box "Secondary Alcohol" → arrow labelled "reflux" → Box "Ketone (R-CO-R')"

Bottom row: Box "Tertiary Alcohol" → arrow labelled "reflux" → Box "No reaction (stays orange)" with a cross mark

Use teal arrows, green for products, orange for the "no reaction" box. Show the colour change "Orange → Green" on the arrows that represent successful oxidation. White background, clean flat design.`,
  },
  {
    id: "t10-sn2-mechanism",
    topic: "Topic 10",
    topicNum: 10,
    title: "SN2 mechanism with curly arrows",
    category: "Hand-coded SVG",
    impact: "high",
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
    topicNum: 10,
    title: "Mass spectrum of bromoethane (illustrative)",
    category: "AI-friendly",
    impact: "medium",
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
    topicNum: 10,
    title: "IR spectrum of ethanol (illustrative)",
    category: "AI-friendly",
    impact: "medium",
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
    topicNum: 10,
    title: "Drying organic liquid with anhydrous salt",
    category: "AI-friendly",
    impact: "low",
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
    topicNum: 10,
    title: "Boiling point determination apparatus",
    category: "AI-friendly",
    impact: "low",
    description: `An illustration showing boiling point determination using a simple distillation setup:

A small test tube or flask containing the unknown liquid with a thermometer immersed (bulb in the liquid, not above it). The liquid is heated gently. The temperature is recorded when steady boiling occurs and vapour condenses on the thermometer.

Two callout boxes:
- "Pure liquid: boils sharply at one temperature (±1°C of literature value)"
- "Impure liquid: boiling range broadens, temperature may be elevated or depressed"

Show a thermometer reading a specific temperature with a clear reading marker. White background, clean illustration style.`,
  },
];

export default function ImageSpecsPage() {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [filterTopic, setFilterTopic] = useState<number | "all">("all");
  const [filterCategory, setFilterCategory] = useState<string>("all");
  // Load checked state from localStorage lazily on first render
  const [checked, setChecked] = useState<Set<string>>(() => {
    if (typeof window === "undefined") return new Set();
    try {
      const stored = localStorage.getItem("image-specs-checked");
      return stored ? new Set(JSON.parse(stored)) : new Set();
    } catch {
      return new Set();
    }
  });

  // Save checked state
  const toggleCheck = (id: string) => {
    const next = new Set(checked);
    if (next.has(id)) next.delete(id);
    else next.add(id);
    setChecked(next);
    try {
      localStorage.setItem("image-specs-checked", JSON.stringify([...next]));
    } catch { /* ignore */ }
  };

  const copyToClipboard = (id: string, text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    });
  };

  const filtered = useMemo(() => {
    return SPECS.filter((s) => {
      if (filterTopic !== "all" && s.topicNum !== filterTopic) return false;
      if (filterCategory !== "all" && s.category !== filterCategory) return false;
      return true;
    });
  }, [filterTopic, filterCategory]);

  const topics = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const doneCount = checked.size;
  const highImpact = filtered.filter((s) => s.impact === "high").length;

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
              Descriptions for diagrams that will genuinely help students.
              Copy into your image generator, create the image, then check the box.
            </p>
          </div>

          {/* Stats */}
          <div className="mb-6 grid grid-cols-4 gap-3">
            <div className="rounded-lg border border-border bg-card p-3 text-center">
              <p className="font-sans text-xl font-bold text-ink">{SPECS.length}</p>
              <p className="text-[10px] text-muted-foreground">Total</p>
            </div>
            <div className="rounded-lg border border-border bg-card p-3 text-center">
              <p className="font-sans text-xl font-bold text-primary">{doneCount}</p>
              <p className="text-[10px] text-muted-foreground">Done ✓</p>
            </div>
            <div className="rounded-lg border border-border bg-card p-3 text-center">
              <p className="font-sans text-xl font-bold text-amber">{SPECS.length - doneCount}</p>
              <p className="text-[10px] text-muted-foreground">Remaining</p>
            </div>
            <div className="rounded-lg border border-border bg-card p-3 text-center">
              <p className="font-sans text-xl font-bold text-rose">{SPECS.filter(s => s.impact === "high").length}</p>
              <p className="text-[10px] text-muted-foreground">High impact</p>
            </div>
          </div>

          {/* Filters */}
          <div className="mb-6 flex flex-wrap items-center gap-2">
            <Filter className="h-4 w-4 text-muted-foreground" />
            <button
              onClick={() => setFilterTopic("all")}
              className={`rounded-md px-3 py-1.5 font-sans text-xs font-medium transition-colors ${
                filterTopic === "all" ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:text-foreground"
              }`}
            >
              All topics
            </button>
            {topics.map((t) => (
              <button
                key={t}
                onClick={() => setFilterTopic(t)}
                className={`rounded-md px-3 py-1.5 font-sans text-xs font-medium transition-colors ${
                  filterTopic === t ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:text-foreground"
                }`}
              >
                T{t}
              </button>
            ))}
            <span className="mx-2 h-4 w-px bg-border" />
            <button
              onClick={() => setFilterCategory("all")}
              className={`rounded-md px-3 py-1.5 font-sans text-xs font-medium transition-colors ${
                filterCategory === "all" ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:text-foreground"
              }`}
            >
              All types
            </button>
            <button
              onClick={() => setFilterCategory("AI-friendly")}
              className={`rounded-md px-3 py-1.5 font-sans text-xs font-medium transition-colors ${
                filterCategory === "AI-friendly" ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:text-foreground"
              }`}
            >
              AI-friendly
            </button>
            <button
              onClick={() => setFilterCategory("Hand-coded SVG")}
              className={`rounded-md px-3 py-1.5 font-sans text-xs font-medium transition-colors ${
                filterCategory === "Hand-coded SVG" ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:text-foreground"
              }`}
            >
              SVG
            </button>
          </div>

          {/* Cards */}
          <div className="space-y-4">
            {filtered.map((spec) => {
              const isChecked = checked.has(spec.id);
              return (
                <div
                  key={spec.id}
                  className={`rounded-lg border p-5 shadow-card transition-all ${
                    isChecked ? "border-emerald/40 bg-emerald-soft/10 opacity-75" : "border-border bg-card"
                  }`}
                >
                  <div className="mb-2 flex items-start justify-between gap-3">
                    <div className="flex items-start gap-3">
                      {/* Checkbox */}
                      <button
                        onClick={() => toggleCheck(spec.id)}
                        className={`mt-0.5 grid h-5 w-5 flex-shrink-0 place-items-center rounded border-2 transition-colors ${
                          isChecked
                            ? "border-emerald bg-emerald text-white"
                            : "border-border hover:border-primary"
                        }`}
                        aria-label={isChecked ? "Mark as not done" : "Mark as done"}
                      >
                        {isChecked && <Check className="h-3 w-3" />}
                      </button>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-[10px] font-bold uppercase tracking-wide text-primary">
                            {spec.topic}
                          </span>
                          <span className={`rounded px-1.5 py-0.5 font-sans text-[9px] font-bold uppercase tracking-wide ${
                            spec.impact === "high" ? "bg-rose-soft text-rose" :
                            spec.impact === "medium" ? "bg-amber-soft text-amber" :
                            "bg-muted text-muted-foreground"
                          }`}>
                            {spec.impact} impact
                          </span>
                        </div>
                        <h3 className={`mt-1 font-sans text-base font-semibold ${isChecked ? "text-muted-foreground line-through" : "text-ink"}`}>
                          {spec.title}
                        </h3>
                      </div>
                    </div>
                    <div className="flex flex-shrink-0 flex-col items-end gap-1">
                      <span className="rounded-md bg-muted px-2 py-0.5 font-sans text-[9px] font-semibold uppercase tracking-wide text-muted-foreground">
                        {spec.category}
                      </span>
                    </div>
                  </div>
                  <div className="mt-3 rounded-md bg-muted/40 p-4">
                    <div className="flex items-center justify-between">
                      <p className="font-sans text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">
                        Description
                      </p>
                      <button
                        onClick={() => copyToClipboard(spec.id, spec.description)}
                        className="inline-flex items-center gap-1.5 rounded-md bg-primary/10 px-2.5 py-1 font-sans text-[11px] font-semibold text-primary transition-colors hover:bg-primary/20"
                      >
                        {copiedId === spec.id ? (
                          <><Check className="h-3 w-3" /> Copied!</>
                        ) : (
                          <><Copy className="h-3 w-3" /> Copy</>
                        )}
                      </button>
                    </div>
                    <p className="mt-2 whitespace-pre-wrap font-mono text-[13px] leading-relaxed text-ink/80">
                      {spec.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {filtered.length === 0 && (
            <p className="py-8 text-center font-serif text-sm text-muted-foreground">
              No images match this filter.
            </p>
          )}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
