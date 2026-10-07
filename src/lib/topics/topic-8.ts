import type { Topic } from "./types";

/**
 * Topic 8: Redox Chemistry and Groups 1, 2 and 7
 * Rich notes version — built from the uploaded PDF study guide.
 * Three sub-sections: 8A Redox, 8B Groups 1 & 2, 8C Group 7.
 */
export const topic8: Topic = {
  number: 8,
  slug: "redox-groups-1-2-7",
  title: "Redox Chemistry and Groups 1, 2 and 7",
  summary:
    "Oxidation numbers, half-equations, disproportionation; trends and reactions of Groups 1 and 2; Group 7 halogens, displacement, and qualitative tests.",
  unit: 2,
  estimatedTime: "5 hours",
  difficulty: 4,
  published: true,
  intro:
    "This topic unifies redox chemistry (oxidation numbers, half-equations, disproportionation) with the descriptive chemistry of Groups 1, 2 and 7. You'll learn to assign oxidation numbers, balance redox equations via half-equations, predict trends down groups, write reactions of s-block metals and their compounds, and explain the disproportionation chemistry of chlorine — including its use in water treatment and bleach.",
  objectives: [
    "Assign oxidation numbers to elements in compounds and ions, including peroxides and metal hydrides",
    "Use Roman numerals (Stock notation) to indicate oxidation states in names",
    "Define oxidation and reduction in terms of electron transfer and oxidation number change",
    "Identify oxidising/reducing agents and disproportionation reactions",
    "Write ionic half-equations and combine them into full ionic equations",
    "Explain the trend in ionisation energy and reactivity down Groups 1 and 2",
    "Describe reactions of Group 1 & 2 elements with oxygen, chlorine and water",
    "Know the trends in solubility of Group 2 hydroxides and sulfates",
    "Explain trends in thermal stability of Group 1 & 2 nitrates and carbonates",
    "Recall flame colours for Group 1 and 2 compounds and explain them via electron transitions",
    "Describe tests for carbonate, hydrogencarbonate, sulfate and ammonium ions",
    "Perform acid–base titration calculations (mol dm⁻³ and g dm⁻³)",
    "Explain trends in Group 7: melting/boiling points, electronegativity, reactivity",
    "Write displacement, disproportionation (Cl₂ + water, cold alkali, hot alkali) and halide reactions",
    "Describe tests for halide ions using acidified silver nitrate",
    "Make predictions about fluorine and astatine based on trends",
  ],
  atAGlance: [
    { label: "Oxidation number", value: "Formal charge if all bonds were ionic" },
    { label: "OIL RIG", value: "Oxidation Is Loss, Reduction Is Gain (of electrons)" },
    { label: "Disproportionation", value: "Same element simultaneously oxidised and reduced" },
    { label: "Group trends", value: "Reactivity ↑ down Groups 1/2, ↓ down Group 7" },
  ],
  keyTakeaways: [
    { label: "Oxidation rules", body: "Elements = 0; ions = charge; H = +1 (−1 in hydrides); O = −2 (−1 in peroxides); F = −1 always." },
    { label: "Half-equations", body: "Balance atoms → add H₂O for O → add H⁺ for H → add e⁻ for charge. Multiply to equalise electrons, then add." },
    { label: "Thermal stability", body: "Increases DOWN Groups 1/2 — larger cation = lower charge density = less polarisation = more stable." },
    { label: "Solubility", body: "Group 2 hydroxides: ↑ down group. Group 2 sulfates: ↓ down group. Group 1: all soluble." },
    { label: "Halogen reactivity", body: "Decreases down Group 7 (harder to gain electron). Cl₂ > Br₂ > I₂ as oxidising agents." },
    { label: "Halide test", body: "Acidify with HNO₃, add AgNO₃: white = Cl⁻ (soluble in dilute NH₃), cream = Br⁻ (soluble in conc NH₃), yellow = I⁻ (insoluble)." },
  ],
  sections: [
    {
      id: "spec-8a",
      code: "8A",
      title: "Redox Chemistry",
      blocks: [
        {
          kind: "lead",
          text: "Redox chemistry is about electron transfer. Oxidation numbers give us a bookkeeping system to track which atoms lose and gain electrons in a reaction.",
        },
        {
          kind: "heading",
          level: 3,
          id: "spec-8-1-2",
          tag: "8.1–8.2",
          text: "Oxidation Numbers and Rules",
        },
        {
          kind: "definition-list",
          items: [
            { term: "Uncombined elements", body: "Any element in its elemental state has an oxidation number of 0 (e.g. \\(H_2\\), \\(O_2\\), \\(Fe\\), \\(S_8\\))." },
            { term: "Simple monatomic ions", body: "Equal to the charge on the ion (e.g. \\(Na^+ = +1\\), \\(Mg^{2+} = +2\\), \\(Cl^- = -1\\))." },
            { term: "Group 1, 2, 3 metals", body: "Always +1, +2, and +3 respectively in compounds." },
            { term: "Fluorine", body: "Always −1 in compounds (most electronegative element)." },
            { term: "Hydrogen", body: "Usually +1, except in metal hydrides (e.g. \\(NaH\\), \\(CaH_2\\)) where it is −1." },
            { term: "Oxygen", body: "Usually −2. Exceptions: peroxides (−1, e.g. \\(H_2O_2\\)), superoxides (\\(-\\frac{1}{2}\\), e.g. \\(KO_2\\)), and compounds with fluorine (e.g. \\(F_2O\\) where O = +2)." },
            { term: "Neutral molecules", body: "The sum of all oxidation numbers equals 0." },
            { term: "Polyatomic ions", body: "The sum equals the overall charge (e.g. in \\(SO_4^{2-}\\), \\(S = +6\\) and \\(4 \\times (-2) = -8\\), sum = −2)." },
          ],
        },
        {
          kind: "heading",
          level: 3,
          id: "spec-8-3-4",
          tag: "8.3–8.4",
          text: "Stock Notation and Chemical Formulae",
        },
        {
          kind: "paragraph",
          text: "Roman numerals in parentheses indicate the positive oxidation state of an element that exhibits variable oxidation numbers. For example, \\(FeCl_2\\) is iron(II) chloride and \\(FeCl_3\\) is iron(III) chloride. Similarly, \\(K_2SO_3\\) is potassium sulfate(IV) and \\(K_2SO_4\\) is potassium sulfate(VI).",
        },
        {
          kind: "heading",
          level: 3,
          id: "spec-8-5-6-9",
          tag: "8.5–8.6, 8.9",
          text: "Oxidation, Reduction, and Redox Agents",
        },
        {
          kind: "table",
          caption: "Oxidation vs Reduction — four ways to define the same process",
          columns: [
            { key: "process", header: "Process" },
            { key: "electron", header: "Electron transfer" },
            { key: "oxnum", header: "Oxidation number" },
            { key: "oh", header: "O / H change" },
          ],
          rows: [
            { process: "Oxidation", electron: "Loss of electrons (OIL)", oxnum: "Increase", oh: "Gain O / Loss H" },
            { process: "Reduction", electron: "Gain of electrons (RIG)", oxnum: "Decrease", oh: "Loss O / Gain H" },
          ],
        },
        {
          kind: "definition-list",
          items: [
            { term: "Oxidising agent", body: "A species that gains electrons (is reduced) and causes another species to be oxidised. Its oxidation number decreases." },
            { term: "Reducing agent", body: "A species that donates electrons (is oxidised) and causes another species to be reduced. Its oxidation number increases." },
            { term: "Metals", body: "In general, metals form positive ions by loss of electrons with an increase in oxidation number." },
            { term: "Non-metals", body: "In general, non-metals form negative ions by gain of electrons with a decrease in oxidation number." },
          ],
        },
        {
          kind: "heading",
          level: 3,
          id: "spec-8-7-8",
          tag: "8.7–8.8",
          text: "Disproportionation Reactions",
        },
        {
          kind: "paragraph",
          text: "A disproportionation reaction is a specific redox reaction where an element in a single species is simultaneously oxidised and reduced.",
        },
        {
          kind: "equation",
          label: "Chlorine in water",
          math: String.raw`\text{Cl}_2(\text{aq}) + \text{H}_2\text{O}(\text{l}) \rightleftharpoons \text{HCl}(\text{aq}) + \text{HClO}(\text{aq})`,
          caption: "Chlorine's oxidation state changes from 0 in Cl₂ to −1 in HCl (reduction) and +1 in HClO (oxidation).",
        },
        {
          kind: "equation",
          label: "Decomposition of hydrogen peroxide",
          math: String.raw`2\text{H}_2\text{O}_2(\text{aq}) \rightarrow 2\text{H}_2\text{O}(\text{l}) + \text{O}_2(\text{g})`,
          caption: "Oxygen changes from −1 in H₂O₂ to −2 in H₂O (reduction) and 0 in O₂ (oxidation).",
        },
        {
          kind: "heading",
          level: 3,
          id: "spec-8-10",
          tag: "8.10",
          text: "Ionic Half-Equations and Full Equations",
        },
        {
          kind: "steps",
          title: "Constructing half-equations in acidic conditions",
          items: [
            { term: "Step 1", body: "Balance atoms being oxidised/reduced." },
            { term: "Step 2", body: "Add \\(H_2O\\) to balance oxygen atoms." },
            { term: "Step 3", body: "Add \\(H^+\\) ions to balance hydrogen atoms." },
            { term: "Step 4", body: "Add \\(e^-\\) to balance overall electrical charges." },
          ],
        },
        {
          kind: "equation",
          label: "Worked example: Fe²⁺ + Cr₂O₇²⁻",
          math: String.raw`6\text{Fe}^{2+} + \text{Cr}_2\text{O}_7^{2-} + 14\text{H}^+ \rightarrow 6\text{Fe}^{3+} + 2\text{Cr}^{3+} + 7\text{H}_2\text{O}`,
          caption: "Oxidation: Fe²⁺ → Fe³⁺ + e⁻ (×6). Reduction: Cr₂O₇²⁻ + 14H⁺ + 6e⁻ → 2Cr³⁺ + 7H₂O.",
        },
      ],
    },
    {
      id: "spec-8b",
      code: "8B",
      title: "The Elements of Groups 1 and 2",
      blocks: [
        {
          kind: "heading",
          level: 3,
          id: "spec-8-11",
          tag: "8.11",
          text: "Trend in Ionisation Energy",
        },
        {
          kind: "definition-list",
          items: [
            { term: "Trend", body: "First and second ionisation energies decrease down Groups 1 and 2." },
            { term: "Explanation", body: "Atomic radius increases down the group. The number of inner filled electron shells increases, leading to increased shielding. Increased distance and shielding outweigh the increase in nuclear charge. This weakens the electrostatic attraction between the nucleus and outermost valence electron(s)." },
          ],
        },
        {
          kind: "heading",
          level: 3,
          id: "spec-8-12",
          tag: "8.12",
          text: "Trend in Reactivity",
        },
        {
          kind: "paragraph",
          text: "Chemical reactivity increases down Groups 1 and 2. These metals react by losing outer valence electrons to form positive ions (\\(M^+\\) or \\(M^{2+}\\)). Because ionisation energies decrease down the group, less energy is required to remove valence electrons. This facilitates faster and more vigorous reactions.",
        },
        {
          kind: "heading",
          level: 3,
          id: "spec-8-13",
          tag: "8.13",
          text: "Reactions with Oxygen, Chlorine, and Water",
        },
        {
          kind: "table",
          caption: "Reactions of Group 1 and 2 elements with O₂, Cl₂, and H₂O",
          columns: [
            { key: "reactant", header: "Reactant" },
            { key: "g1", header: "Group 1" },
            { key: "g2", header: "Group 2" },
          ],
          rows: [
            { reactant: "Oxygen", g1: "\\(4M + O_2 \\rightarrow 2M_2O\\)", g2: "\\(2M + O_2 \\rightarrow 2MO\\)" },
            { reactant: "Chlorine", g1: "\\(2M + Cl_2 \\rightarrow 2MCl\\)", g2: "\\(M + Cl_2 \\rightarrow MCl_2\\)" },
            { reactant: "Water", g1: "\\(2M + 2H_2O \\rightarrow 2MOH + H_2\\)", g2: "\\(M + 2H_2O \\rightarrow M(OH)_2 + H_2\\)" },
          ],
        },
        {
          kind: "callout",
          tone: "exam-alert",
          title: "Lithium, sodium, potassium anomalies",
          body: "Lithium forms a simple oxide \\(Li_2O\\); sodium forms a peroxide \\(Na_2O_2\\); potassium forms a superoxide \\(KO_2\\). Magnesium reacts very slowly with cold water but vigorously with steam, forming MgO (not Mg(OH)₂).",
        },
        {
          kind: "heading",
          level: 3,
          id: "spec-8-14",
          tag: "8.14",
          text: "Reactions of Oxides and Hydroxides",
        },
        {
          kind: "definition-list",
          items: [
            { term: "Oxides + water", body: "Group 1: \\(M_2O + H_2O \\rightarrow 2MOH\\). Group 2: \\(MO + H_2O \\rightarrow M(OH)_2\\). Ionic: \\(O^{2-} + H_2O \\rightarrow 2OH^-\\)." },
            { term: "Oxides + dilute acid", body: "\\(MO + 2HCl \\rightarrow MCl_2 + H_2O\\)." },
            { term: "Hydroxides + dilute acid", body: "\\(M(OH)_2 + 2HCl \\rightarrow MCl_2 + 2H_2O\\)." },
          ],
        },
        {
          kind: "callout",
          tone: "exam-alert",
          title: "Sulfuric acid caution",
          body: "Reacting \\(Ca(OH)_2\\), \\(Sr(OH)_2\\), or \\(Ba(OH)_2\\) with dilute \\(H_2SO_4\\) forms an insoluble sulfate layer (e.g. \\(BaSO_4\\)) over the solid, preventing further reaction.",
        },
        {
          kind: "heading",
          level: 3,
          id: "spec-8-15",
          tag: "8.15",
          text: "Trends in Solubility of Group 2 Hydroxides and Sulfates",
        },
        {
          kind: "table",
          caption: "Group 2 solubility trends — opposite directions",
          columns: [
            { key: "compound", header: "Compound" },
            { key: "top", header: "Mg (top)" },
            { key: "bottom", header: "Ba (bottom)" },
            { key: "trend", header: "Trend" },
          ],
          rows: [
            { compound: "Hydroxides \\(M(OH)_2\\)", top: "Insoluble", bottom: "Very soluble", trend: "Solubility ↑ down group" },
            { compound: "Sulfates \\(MSO_4\\)", top: "Soluble", bottom: "Insoluble (white ppt)", trend: "Solubility ↓ down group" },
          ],
        },
        {
          kind: "callout",
          tone: "tip",
          title: "Exam tip",
          body: "All Group 1 hydroxides and sulfates are completely soluble in water. Only Group 2 shows the opposite solubility trends.",
        },
        {
          kind: "heading",
          level: 3,
          id: "spec-8-16",
          tag: "8.16",
          text: "Thermal Stability of Nitrates and Carbonates",
        },
        {
          kind: "definition-list",
          items: [
            { term: "Trend", body: "Thermal stability of Group 1 and 2 nitrates and carbonates increases down the group." },
            { term: "Mechanism", body: "Down the group, cation ionic radius increases while charge stays the same, so charge density decreases. Smaller cations (e.g. \\(Li^+\\), \\(Mg^{2+}\\)) have high charge density and strongly polarise large anions (\\(CO_3^{2-}\\) or \\(NO_3^-\\)). This weakens internal C–O or N–O bonds and lowers decomposition temperature." },
          ],
        },
        {
          kind: "table",
          caption: "Thermal decomposition patterns",
          columns: [
            { key: "compound", header: "Compound" },
            { key: "products", header: "Products" },
            { key: "notes", header: "Notes" },
          ],
          rows: [
            { compound: "Group 2 nitrates", products: "\\(2MO + 4NO_2 + O_2\\)", notes: "Brown NO₂ fumes" },
            { compound: "Group 1 nitrates (Na–Cs)", products: "\\(2MNO_2 + O_2\\)", notes: "No brown fumes" },
            { compound: "\\(LiNO_3\\) (anomaly)", products: "\\(2Li_2O + 4NO_2 + O_2\\)", notes: "Behaves like Group 2" },
            { compound: "Group 2 carbonates", products: "\\(MO + CO_2\\)", notes: "All decompose" },
            { compound: "Group 1 carbonates (Na–Cs)", products: "No decomposition", notes: "Thermally stable at Bunsen temps" },
            { compound: "\\(Li_2CO_3\\) (anomaly)", products: "\\(Li_2O + CO_2\\)", notes: "Behaves like Group 2" },
          ],
        },
        {
          kind: "heading",
          level: 3,
          id: "spec-8-17-18",
          tag: "8.17–8.18",
          text: "Flame Tests and Colours",
        },
        {
          kind: "paragraph",
          text: "Heat energy from the flame promotes electrons from ground state to higher quantum energy levels (excited state). As electrons drop back to lower levels, energy is emitted as visible light of specific wavelength (\\(\\Delta E = hf\\)).",
        },
        {
          kind: "table",
          caption: "Flame test colours",
          columns: [
            { key: "cation", header: "Cation" },
            { key: "colour", header: "Flame colour" },
            { key: "cation2", header: "Cation" },
            { key: "colour2", header: "Flame colour" },
          ],
          rows: [
            { cation: "\\(Li^+\\)", colour: "Red / Crimson", cation2: "\\(Ca^{2+}\\)", colour2: "Brick red" },
            { cation: "\\(Na^+\\)", colour: "Yellow / Orange", cation2: "\\(Sr^{2+}\\)", colour2: "Crimson red" },
            { cation: "\\(K^+\\)", colour: "Lilac", cation2: "\\(Ba^{2+}\\)", colour2: "Apple green" },
            { cation: "\\(Rb^+\\)", colour: "Red / Purple", cation2: "\\(Be^{2+}\\) / \\(Mg^{2+}\\)", colour2: "No colour" },
          ],
        },
        {
          kind: "heading",
          level: 3,
          id: "spec-8-19",
          tag: "8.19",
          text: "Qualitative Tests for Anions and Cations",
        },
        {
          kind: "table",
          caption: "Summary of qualitative tests",
          columns: [
            { key: "ion", header: "Ion" },
            { key: "reagent", header: "Reagent" },
            { key: "result", header: "Positive result" },
          ],
          rows: [
            { ion: "\\(CO_3^{2-}\\) / \\(HCO_3^-\\)", reagent: "Dilute acid, then limewater", result: "Effervescence; gas turns limewater milky" },
            { ion: "\\(SO_4^{2-}\\)", reagent: "Acidify with HCl, add \\(BaCl_2\\)", result: "White precipitate of \\(BaSO_4\\)" },
            { ion: "\\(NH_4^+\\)", reagent: "NaOH, warm gently", result: "Pungent \\(NH_3\\) gas; turns damp red litmus blue" },
          ],
        },
      ],
    },
    {
      id: "spec-8c",
      code: "8C",
      title: "Inorganic Chemistry of Group 7 (Halogens)",
      blocks: [
        {
          kind: "heading",
          level: 3,
          id: "spec-8-24",
          tag: "8.24",
          text: "Trends in Group 7 Elements",
        },
        {
          kind: "table",
          caption: "Group 7 halogens — physical properties and colours",
          columns: [
            { key: "halogen", header: "Halogen" },
            { key: "state", header: "State at RTP" },
            { key: "colour", header: "Colour (standard)" },
            { key: "water", header: "Colour in water" },
            { key: "organic", header: "Colour in cyclohexane" },
          ],
          rows: [
            { halogen: "Fluorine", state: "Gas", colour: "Pale yellow", water: "Reacts violently", organic: "Reacts violently" },
            { halogen: "Chlorine", state: "Gas", colour: "Yellow-green", water: "Pale green", organic: "Pale green" },
            { halogen: "Bromine", state: "Liquid", colour: "Red-brown", water: "Orange / yellow", organic: "Orange / red" },
            { halogen: "Iodine", state: "Solid", colour: "Dark grey / black", water: "Brown", organic: "Violet / purple" },
          ],
        },
        {
          kind: "definition-list",
          items: [
            { term: "Melting & boiling points", body: "Increase down the group. Halogens are non-polar diatomic molecules held by London dispersion forces. Larger molecules have more electrons, so stronger London forces. More thermal energy is needed to separate the molecules." },
            { term: "Electronegativity", body: "Decreases down the group. Atomic radius increases and inner electron shielding increases. This weakens the nucleus's pull on shared bonding electrons." },
            { term: "Reactivity & oxidising power", body: "Decreases down the group. Halogens react by gaining an electron (\\(X_2 + 2e^- \\rightarrow 2X^-\\)). Down the group, outer shells are further from the nucleus with greater shielding. This makes it harder to attract an incoming electron." },
          ],
        },
        {
          kind: "heading",
          level: 3,
          id: "spec-8-25",
          tag: "8.25",
          text: "Halogen Displacement Reactions",
        },
        {
          kind: "paragraph",
          text: "A more reactive halogen displaces a less reactive halide ion from aqueous solution. Chlorine displaces both bromide and iodide; bromine displaces iodide only.",
        },
        {
          kind: "equation",
          label: "Chlorine displaces bromide",
          math: String.raw`\text{Cl}_2(\text{aq}) + 2\text{Br}^-(\text{aq}) \rightarrow 2\text{Cl}^-(\text{aq}) + \text{Br}_2(\text{aq})`,
          caption: "Solution turns yellow/orange.",
        },
        {
          kind: "callout",
          tone: "tip",
          title: "Cyclohexane test",
          body: "Halogens are non-polar and more soluble in cyclohexane than water. Adding cyclohexane and shaking separates the mixture into two layers: the top organic layer shows distinct colours (orange for Br₂, violet for I₂).",
        },
        {
          kind: "heading",
          level: 3,
          id: "spec-8-26",
          tag: "8.26",
          text: "Disproportionation Reactions of Chlorine",
        },
        {
          kind: "equation",
          label: "1. Water treatment (sterilisation)",
          math: String.raw`\text{Cl}_2(\text{aq}) + \text{H}_2\text{O}(\text{l}) \rightleftharpoons \text{HCl}(\text{aq}) + \text{HClO}(\text{aq})`,
          caption: "Cl reduced to −1 in HCl, oxidised to +1 in HClO. HClO kills bacteria.",
        },
        {
          kind: "equation",
          label: "2. Cold dilute alkali (15–20°C) — bleach",
          math: String.raw`\text{Cl}_2 + 2\text{NaOH} \rightarrow \text{NaCl} + \text{NaClO} + \text{H}_2\text{O}`,
          caption: "Cl reduced to −1 (NaCl), oxidised to +1 (NaClO = sodium chlorate(I) = bleach).",
        },
        {
          kind: "equation",
          label: "3. Hot concentrated alkali (70°C)",
          math: String.raw`3\text{Cl}_2 + 6\text{NaOH} \rightarrow 5\text{NaCl} + \text{NaClO}_3 + 3\text{H}_2\text{O}`,
          caption: "Cl reduced to −1 (NaCl), oxidised to +5 (NaClO₃ = sodium chlorate(V) = weedkiller).",
        },
        {
          kind: "heading",
          level: 3,
          id: "spec-8-27i",
          tag: "8.27(i)",
          text: "Reactions of Solid Halides with Concentrated Sulfuric Acid",
        },
        {
          kind: "paragraph",
          text: "Trend in halide reducing ability: increases down Group 7 (\\(F^- < Cl^- < Br^- < I^-\\)). Larger halide ions have lower electron attraction due to increased radius and shielding, donating electrons more easily.",
        },
        {
          kind: "table",
          caption: "Halide + conc. H₂SO₄ — products, observations, and role of acid",
          columns: [
            { key: "halide", header: "Halide" },
            { key: "products", header: "Products & observations" },
            { key: "role", header: "Role of H₂SO₄" },
          ],
          rows: [
            { halide: "\\(Cl^-\\)", products: "Steamy white fumes of HCl", role: "Acid only (Cl⁻ cannot reduce H₂SO₄)" },
            { halide: "\\(Br^-\\)", products: "Red-brown Br₂ gas, choking SO₂, steamy HBr", role: "Oxidising agent (S: +6 → +4)" },
            { halide: "\\(I^-\\)", products: "Purple I₂ vapour, yellow S, H₂S (bad egg smell), SO₂", role: "Strong oxidising agent (S: +6 → +4, 0, −2)" },
          ],
        },
        {
          kind: "heading",
          level: 3,
          id: "spec-8-27ii",
          tag: "8.27(ii)",
          text: "Silver Nitrate and Ammonia Tests for Halide Ions",
        },
        {
          kind: "steps",
          title: "Procedure",
          items: [
            { term: "Step 1", body: "Acidify test solution with dilute nitric acid (\\(HNO_3\\)) to prevent false precipitates from \\(CO_3^{2-}\\) or \\(OH^-\\) ions." },
            { term: "Step 2", body: "Add silver nitrate solution (\\(AgNO_3\\))." },
            { term: "Step 3", body: "Add dilute aqueous ammonia (\\(NH_3\\)), followed by concentrated \\(NH_3\\) if needed." },
          ],
        },
        {
          kind: "table",
          caption: "Halide identification by precipitate colour and ammonia solubility",
          columns: [
            { key: "halide", header: "Halide" },
            { key: "precipitate", header: "Precipitate colour" },
            { key: "dilute", header: "Dilute NH₃" },
            { key: "conc", header: "Conc. NH₃" },
          ],
          rows: [
            { halide: "\\(Cl^-\\)", precipitate: "White (AgCl)", dilute: "Soluble", conc: "Soluble" },
            { halide: "\\(Br^-\\)", precipitate: "Cream (AgBr)", dilute: "Insoluble", conc: "Soluble" },
            { halide: "\\(I^-\\)", precipitate: "Yellow (AgI)", dilute: "Insoluble", conc: "Insoluble" },
          ],
        },
        {
          kind: "heading",
          level: 3,
          id: "spec-8-27iii",
          tag: "8.27(iii)",
          text: "Reactions of Hydrogen Halides",
        },
        {
          kind: "definition-list",
          items: [
            { term: "With ammonia gas", body: "Forms dense white smoke of ammonium halide: \\(HX(g) + NH_3(g) \\rightarrow NH_4X(s)\\)." },
            { term: "With water", body: "Dissolves readily to form strong acidic solutions: \\(HCl(g) + H_2O(l) \\rightarrow H_3O^+(aq) + Cl^-(aq)\\)." },
          ],
        },
        {
          kind: "heading",
          level: 3,
          id: "spec-8-28",
          tag: "8.28",
          text: "Predictions for Fluorine and Astatine",
        },
        {
          kind: "definition-list",
          items: [
            { term: "Fluorine (F₂)", body: "Most reactive halogen. Highest electronegativity. Strongest oxidising agent. Note: \\(AgF\\) is soluble (unlike AgCl, AgBr, AgI), so the silver nitrate test does not work for fluoride." },
            { term: "Astatine (At₂)", body: "Predicted to be a dark/black solid (trend: darker down the group). Least reactive halogen. Lowest electronegativity. Weakest oxidising agent. \\(AgAt\\) would be insoluble in both dilute and concentrated ammonia." },
          ],
        },
        {
          kind: "callout",
          tone: "key",
          title: "Key insight",
          body: "All Group 7 trends can be predicted from a single principle: down the group, atomic radius increases and shielding increases. The nucleus finds it harder to attract electrons. This explains decreasing electronegativity, decreasing reactivity, increasing boiling points (more electrons → stronger London forces), and increasing reducing power of halide ions.",
        },
      ],
    },
  ],
};
