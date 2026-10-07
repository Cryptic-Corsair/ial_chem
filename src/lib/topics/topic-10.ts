import type { Topic } from "./types";

/**
 * Topic 10: Organic Chemistry — Halogenoalkanes, Alcohols and Spectra
 * Rich notes version — built from the uploaded PDF study guide.
 * Four sub-sections: 10A General, 10B Halogenoalkanes, 10C Alcohols, 10D Spectra.
 */
export const topic10: Topic = {
  number: 10,
  slug: "halogenoalkanes-alcohols-spectra",
  title: "Organic Chemistry: Halogenoalkanes, Alcohols and Spectra",
  summary:
    "Reaction mechanisms, nucleophiles, halogenoalkane substitution/elimination, alcohol oxidation and halogenation, reflux/distillation technique, mass spectrometry fragmentation, IR spectroscopy of functional groups.",
  unit: 2,
  estimatedTime: "5 hours",
  difficulty: 4,
  published: true,
  intro:
    "This topic dives into organic reaction mechanisms — how and why reactions happen at the molecular level. You'll meet nucleophiles, see how halogenoalkanes undergo substitution and elimination, learn how to oxidise alcohols to aldehydes, ketones and carboxylic acids, and use mass spectrometry + IR spectroscopy to identify unknown organic compounds. Related topics in Units 4 and 5 will assume knowledge of this material.",
  objectives: [
    "Classify reactions as addition, elimination, substitution, oxidation, reduction, hydrolysis or polymerisation",
    "Understand reaction mechanisms and the link between bond polarity and mechanism type",
    "Define nucleophile and explain why heterolytic bond breaking produces electrophiles/nucleophiles",
    "Name and draw halogenoalkanes (structural, displayed, skeletal formulae)",
    "Distinguish primary, secondary and tertiary halogenoalkanes",
    "Describe reactions of halogenoalkanes with KOH(aq), KOH(ethanol), AgNO₃(aq)/ethanol, NH₃, KCN",
    "Draw SN2 and SN1 mechanisms for nucleophilic substitution of primary halogenoalkanes",
    "Compare rates of hydrolysis of 1°/2°/3° halogenoalkanes and of chloro/bromo/iodoalkanes",
    "Name and draw alcohols; classify as primary, secondary, tertiary",
    "Describe combustion, halogenation (PCl₅, H₂SO₄/KBr, P/I₂) and dehydration of alcohols",
    "Use acidified K₂Cr₂O₇ to oxidise 1° alcohols to aldehydes (distil) or carboxylic acids (reflux), and 2° to ketones",
    "Recall positive tests: aldehydes with Benedict's/Fehling's; carboxylic acids with Na₂CO₃/NaHCO₃",
    "Use reflux, separating funnel, distillation, drying, and boiling point determination in organic preparation",
    "Interpret mass spectra: molecular ion (M⁺), fragmentation patterns",
    "Use IR spectra and wavenumber data to identify functional groups (C–H, C=C, O–H, C=O, C–X, N–H)",
  ],
  atAGlance: [
    { label: "Nucleophile", value: "Electron-pair donor (OH⁻, H₂O, NH₃, CN⁻) — attacks δ⁺ carbon" },
    { label: "SN2", value: "One-step backside attack; primary halogenoalkanes; inversion of configuration" },
    { label: "Oxidation rule", value: "1° → aldehyde (distil) → carboxylic acid (reflux); 2° → ketone; 3° → no reaction" },
    { label: "IR fingerprint", value: "O–H (alcohol) ~3200–3650 broad; C=O ~1680–1750 sharp; O–H (acid) ~2500–3300 very broad" },
  ],
  keyTakeaways: [
    { label: "Bond enthalpy wins", body: "C–I > C–Br > C–Cl in reactivity — weaker bonds break faster, despite C–F being most polar." },
    { label: "SN2 mechanism", body: "Curly arrow from nucleophile lone pair to Cδ⁺; simultaneous C–X bond breaks. One step, no intermediate." },
    { label: "Distil vs reflux", body: "Distil = remove product as it forms (aldehyde). Reflux = keep reacting (carboxylic acid). The difference is whether the product escapes." },
    { label: "Tertiary ≠ oxidised", body: "Tertiary alcohols have no H on the C–OH carbon, so acidified dichromate cannot oxidise them. Solution stays orange." },
    { label: "Mass spec isotopes", body: "Cl gives M and M+2 in 3:1 ratio. Br gives M and M+2 in 1:1 ratio. I gives a single peak (one isotope)." },
    { label: "Chain extension", body: "KCN adds a carbon: R–X → R–CN (nitrile). This is the only chain-extension reaction in Unit 2." },
  ],
  sections: [
    {
      id: "spec-10a",
      code: "10A",
      title: "General Principles",
      blocks: [
        {
          kind: "lead",
          text: "An organic reaction mechanism is the step-by-step sequence of elementary reactions by which overall chemical change occurs, showing the explicit movement of electrons using curly arrows.",
        },
        {
          kind: "heading",
          level: 3,
          id: "spec-10-1-2",
          tag: "10.1–10.2",
          text: "Classification of Reaction Types and Reaction Mechanisms",
        },
        {
          kind: "definition-list",
          items: [
            { term: "Addition", body: "Two reactant molecules combine to form a single product species with 100% atom economy (e.g. electrophilic addition of HBr to alkenes)." },
            { term: "Elimination", body: "A small molecule (such as H₂O or HX) is removed from a single reactant molecule, forming a C=C double bond (e.g. dehydration of alcohols or dehydrohalogenation of halogenoalkanes)." },
            { term: "Substitution", body: "An atom or group of atoms in a molecule is replaced by a different atom or group (e.g. nucleophilic substitution of halogenoalkanes)." },
            { term: "Oxidation", body: "Reaction involving the gain of oxygen atoms, loss of hydrogen atoms, or loss of electrons (e.g. primary alcohols to aldehydes/carboxylic acids)." },
            { term: "Reduction", body: "Reaction involving the gain of hydrogen atoms, loss of oxygen atoms, or gain of electrons (e.g. reduction of aldehydes using LiAlH₄)." },
            { term: "Hydrolysis", body: "A reaction where a covalent bond in a molecule is cleaved by interaction with water or aqueous hydroxide ions (OH⁻)." },
            { term: "Polymerisation", body: "Joining together of many small monomer units to form a long-chain macromolecule." },
          ],
        },
        {
          kind: "heading",
          level: 3,
          id: "spec-10-3-4-5",
          tag: "10.3–10.5",
          text: "Bond Fission, Nucleophiles, and Bond Polarity",
        },
        {
          kind: "definition-list",
          items: [
            { term: "Heterolytic fission", body: "A covalent bond breaks unsymmetrically. Both bonding electrons are retained by one of the atoms. This produces oppositely charged ions (a cation and an anion): X–Y → X⁺ + :Y⁻." },
            { term: "Homolytic fission", body: "A covalent bond breaks symmetrically. Each atom retains one bonding electron. This produces two uncharged free radicals: X–Y → X• + Y•." },
            { term: "Nucleophile", body: "An electron-rich species possessing a lone pair of electrons (or a full negative charge) that it can donate to an electron-deficient carbon atom (δ⁺) to form a new covalent bond." },
            { term: "Common nucleophiles", body: "Hydroxide ion (:OH⁻), Water (:OH₂), Ammonia (:NH₃), Cyanide ion (:CN⁻)." },
            { term: "Bond polarity link", body: "Carbon–halogen bonds (C–X) are polar because halogens are more electronegative than carbon. The electron density is pulled toward the halogen, inducing δ⁻ on the halogen and δ⁺ on the carbon. The electron-deficient Cδ⁺ carbon acts as an electrophilic centre, attracting incoming nucleophiles." },
          ],
        },
      ],
    },
    {
      id: "spec-10b",
      code: "10B",
      title: "Halogenoalkanes",
      blocks: [
        {
          kind: "heading",
          level: 3,
          id: "spec-10-6-7",
          tag: "10.6–10.7",
          text: "Nomenclature and Classification of Halogenoalkanes",
        },
        {
          kind: "paragraph",
          text: "Halogenoalkanes have the general formula \\(C_nH_{2n+1}X\\) (or R–X).",
        },
        {
          kind: "definition-list",
          items: [
            { term: "Primary (1°)", body: "The carbon carrying the halogen atom is attached to one alkyl group (or no alkyl groups, as in CH₃X)." },
            { term: "Secondary (2°)", body: "The carbon carrying the halogen atom is attached directly to two alkyl groups." },
            { term: "Tertiary (3°)", body: "The carbon carrying the halogen atom is attached directly to three alkyl groups." },
          ],
        },
        {
          kind: "heading",
          level: 3,
          id: "spec-10-8",
          tag: "10.8",
          text: "Chemical Reactions of Halogenoalkanes",
        },
        {
          kind: "table",
          caption: "Five reactions of halogenoalkanes — products, reagents, and roles",
          columns: [
            { key: "reagent", header: "Reagent" },
            { key: "product", header: "Product" },
            { key: "role", header: "Role of reagent" },
          ],
          rows: [
            { reagent: "KOH(aq), reflux", product: "Alcohol", role: "OH⁻ acts as nucleophile (substitution)" },
            { reagent: "KOH(ethanol), reflux", product: "Alkene", role: "OH⁻ acts as base (elimination)" },
            { reagent: "AgNO₃(aq)/ethanol", product: "Alcohol + AgX ppt", role: "Water acts as nucleophile (hydrolysis)" },
            { reagent: "NH₃(ethanol), pressure", product: "Primary amine", role: "NH₃ acts as nucleophile (chain length unchanged)" },
            { reagent: "KCN(ethanol), reflux", product: "Nitrile", role: "CN⁻ acts as nucleophile (chain length +1)" },
          ],
        },
        {
          kind: "callout",
          tone: "exam-alert",
          title: "Chain extension",
          body: "KCN is the only reagent in Unit 2 that extends the carbon chain. R–X → R–CN adds one carbon. This is exam-critical.",
        },
        {
          kind: "heading",
          level: 3,
          id: "spec-10-9",
          tag: "10.9",
          text: "Mechanisms of Nucleophilic Substitution for Primary Halogenoalkanes",
        },
        {
          kind: "steps",
          title: "Mechanism with aqueous KOH (OH⁻)",
          items: [
            { term: "Step 1", body: "The lone pair on the OH⁻ ion attacks the electron-deficient carbon atom (Cδ⁺)." },
            { term: "Step 2", body: "A curly arrow is drawn from the lone pair on :OH⁻ to the Cδ⁺ atom." },
            { term: "Step 3", body: "Simultaneously, heterolytic fission of the C–X bond occurs. A curly arrow is drawn from the C–X bond to the halogen atom (Xδ⁻)." },
            { term: "Step 4", body: "The product is an alcohol and a halide ion (:X⁻)." },
          ],
        },
        {
          kind: "steps",
          title: "Mechanism with ammonia (NH₃) — two-step",
          items: [
            { term: "Step 1: Nucleophilic attack", body: "The lone pair on the nitrogen atom of :NH₃ attacks the Cδ⁺ carbon. The C–X bond breaks heterolytically. This forms an intermediate alkylammonium ion (R–NH₃⁺) and a halide ion (X⁻)." },
            { term: "Step 2: Deprotonation", body: "A second ammonia molecule acts as a base. It uses its lone pair to remove a proton (H⁺) from the nitrogen atom of the intermediate. This yields the neutral primary amine (R–NH₂) and an ammonium ion (NH₄⁺)." },
          ],
        },
        {
          kind: "heading",
          level: 3,
          id: "spec-10-10-13",
          tag: "10.10–10.13",
          text: "Hydrolysis Rates, Bond Enthalpy & Core Practicals 5–6",
        },
        {
          kind: "fact-box",
          label: "Core Practical 5: Rates of hydrolysis comparison",
          tone: "key",
          facts: [
            { term: "Setup", value: "Test tubes in a 50–60°C water bath with equal volumes of ethanol and aqueous AgNO₃. Add equal drops of 1-chlorobutane, 1-bromobutane, and 1-iodobutane." },
            { term: "Measure", value: "Time taken for silver halide precipitate to appear." },
            { term: "Ethanol role", value: "Mutual solvent — dissolves both the water/silver nitrate and the insoluble organic halogenoalkanes into a single homogeneous phase." },
          ],
        },
        {
          kind: "table",
          caption: "Reactivity trend across halogens: C–I > C–Br > C–Cl > C–F",
          columns: [
            { key: "halide", header: "Halogenoalkane" },
            { key: "ppt", header: "Precipitate" },
            { key: "speed", header: "Speed" },
            { key: "be", header: "Bond enthalpy (kJ/mol)" },
          ],
          rows: [
            { halide: "1-iodobutane", ppt: "Yellow (AgI)", speed: "Fastest", be: "228" },
            { halide: "1-bromobutane", ppt: "Cream (AgBr)", speed: "Short delay", be: "290" },
            { halide: "1-chlorobutane", ppt: "White (AgCl)", speed: "Slowest", be: "346" },
          ],
        },
        {
          kind: "callout",
          tone: "key",
          title: "Bond enthalpy vs bond polarity",
          body: "Bond polarity would predict C–F reacts fastest (most polar). But bond enthalpy is the dominant factor. C–I has the lowest bond enthalpy, requiring the least energy to break. So iodoalkanes hydrolyse fastest despite being the least polar.",
        },
        {
          kind: "fact-box",
          label: "Core Practical 6: Chlorination of 2-methylpropan-2-ol",
          tone: "key",
          facts: [
            { term: "Reaction", value: "(CH₃)₃COH + HCl → (CH₃)₃CCl + H₂O at room temperature" },
            { term: "Procedure", value: "Shake 2-methylpropan-2-ol with conc. HCl in a separating funnel. Release pressure periodically. Allow layers to separate." },
          ],
        },
        {
          kind: "callout",
          tone: "exam-alert",
          title: "50% H₂SO₄ for bromoalkane synthesis",
          body: "Use 50% conc. H₂SO₄ (not concentrated) when making bromoalkanes from KBr + H₂SO₄ + alcohol. Concentrated H₂SO₄ would oxidise Br⁻ into Br₂ and SO₂.",
        },
      ],
    },
    {
      id: "spec-10c",
      code: "10C",
      title: "Alcohols and Practical Purification Techniques",
      blocks: [
        {
          kind: "heading",
          level: 3,
          id: "spec-10-15-16",
          tag: "10.15–10.16",
          text: "Nomenclature, Classification, and Physical Properties of Alcohols",
        },
        {
          kind: "paragraph",
          text: "Alcohols have the general formula \\(C_nH_{2n+1}OH\\).",
        },
        {
          kind: "definition-list",
          items: [
            { term: "H–C–H and C–C–O bond angles", body: "109.5° (tetrahedral), governed by 4 bonding electron pairs repelling to positions of maximum separation." },
            { term: "C–O–H bond angle", body: "104.5° (V-shaped / bent). The oxygen atom has 2 bonding pairs and 2 lone pairs. Lone pairs exert greater electrostatic repulsion than bond pairs, reducing the bond angle from 109.5° to 104.5°." },
            { term: "Boiling points", body: "Alcohols have much higher boiling points than alkanes or halogenoalkanes of comparable molar mass. This is due to intermolecular hydrogen bonding between hydroxyl (–OH) groups." },
            { term: "Solubility", body: "Small alcohols (methanol, ethanol, propanol) are completely miscible in water due to hydrogen bonding. As alkyl chain length increases, solubility drops rapidly. The non-polar hydrophobic hydrocarbon chain disrupts the water hydrogen-bonding network." },
          ],
        },
        {
          kind: "heading",
          level: 3,
          id: "spec-10-17",
          tag: "10.17",
          text: "Chemical Reactions of Alcohols",
        },
        {
          kind: "definition-list",
          items: [
            { term: "Combustion", body: "Alcohols burn cleanly in oxygen to produce CO₂ and H₂O." },
            { term: "Chlorination (PCl₅)", body: "Solid PCl₅ at room temperature converts alcohols to chloroalkanes. Misty white fumes of HCl gas are produced. This is the standard qualitative test for the –OH group in dry organic liquids." },
            { term: "Bromination (KBr + 50% H₂SO₄)", body: "KBr reacts with 50% H₂SO₄ to produce HBr in situ. The HBr then converts the alcohol to a bromoalkane under reflux." },
            { term: "Iodination (P + I₂)", body: "Red phosphorus and iodine react to form PI₃ in situ. PI₃ then converts the alcohol to an iodoalkane under reflux." },
            { term: "Dehydration (conc. H₃PO₄)", body: "Concentrated phosphoric acid at 170°C removes the –OH group and a hydrogen from an adjacent carbon. This forms a C=C double bond. Unsymmetrical alcohols yield a mixture of structural and geometric isomeric alkenes." },
          ],
        },
        {
          kind: "heading",
          level: 3,
          id: "spec-10-18-20",
          tag: "10.18 & 10.20",
          text: "Oxidation of Alcohols & Core Practical 7",
        },
        {
          kind: "paragraph",
          text: "Oxidising agent: acidified potassium dichromate(VI) (K₂Cr₂O₇ / dilute H₂SO₄). Colour change: orange Cr₂O₇²⁻ reduced to green Cr³⁺.",
        },
        {
          kind: "image",
          src: "/images/t10-oxidation-pathways.png",
          alt: "Flowchart showing oxidation pathways: primary alcohol → aldehyde (distil) → carboxylic acid (reflux); secondary alcohol → ketone; tertiary alcohol → no reaction",
          caption: "Alcohol oxidation pathways. Distil = remove product as it forms (aldehyde). Reflux = keep reacting (carboxylic acid). Tertiary = no reaction.",
        },
        {
          kind: "table",
          caption: "Oxidation pathways for primary, secondary, and tertiary alcohols",
          columns: [
            { key: "alcohol", header: "Alcohol type" },
            { key: "conditions", header: "Conditions" },
            { key: "product", header: "Product" },
            { key: "test", header: "Diagnostic test" },
          ],
          rows: [
            { alcohol: "Primary (1°)", conditions: "Distil immediately", product: "Aldehyde (R–CHO)", test: "Benedict's/Fehling's → brick-red ppt" },
            { alcohol: "Primary (1°)", conditions: "Reflux with excess oxidiser", product: "Carboxylic acid (R–COOH)", test: "Na₂CO₃ → effervescence (CO₂)" },
            { alcohol: "Secondary (2°)", conditions: "Reflux", product: "Ketone (R–CO–R)", test: "Benedict's/Fehling's → no reaction (stays blue)" },
            { alcohol: "Tertiary (3°)", conditions: "Reflux", product: "No reaction", test: "Solution stays orange" },
          ],
        },
        {
          kind: "callout",
          tone: "exam-alert",
          title: "Why distillation gives aldehydes",
          body: "Aldehydes lack hydrogen bonding between their molecules. This gives them lower boiling points than the parent alcohol and carboxylic acid. Distilling removes the aldehyde from the reaction mixture before it can be further oxidised. Refluxing keeps it in contact with the oxidiser, so it goes all the way to carboxylic acid.",
        },
        {
          kind: "callout",
          tone: "common-mistake",
          title: "Tertiary alcohols don't oxidise",
          body: "The carbon carrying the –OH group in a tertiary alcohol has no hydrogen atom attached to it. Without that H to lose, oxidation cannot occur. The dichromate solution stays orange.",
        },
        {
          kind: "heading",
          level: 3,
          id: "spec-10-19",
          tag: "10.19",
          text: "Organic Laboratory Techniques",
        },
        {
          kind: "definition-list",
          items: [
            { term: "Heating under reflux", body: "Allows volatile organic liquids to be heated at elevated temperatures for extended periods without losing reactants or products through evaporation. The condenser is fitted vertically. Cold water enters at the bottom and exits at the top. Anti-bumping granules are added. The top must remain OPEN (never stoppered)." },
            { term: "Separating funnel", body: "Separates an organic product from an aqueous mixture based on differing solubilities and densities. Pour mixture in, add immiscible solvent, stopper, invert, and shake. Vent periodically. Allow layers to settle. Run off the bottom layer through the tap." },
            { term: "Distillation", body: "Separates a liquid product from a reaction mixture based on differences in boiling temperatures. The thermometer bulb must be level with the side-arm T-junction. The condenser is inclined downwards with cold water entering at the bottom." },
            { term: "Drying with anhydrous salt", body: "Removes trace water from a crude organic liquid. Add anhydrous MgSO₄, Na₂SO₄, or CaCl₂. Swirl. Add more until the salt swirls freely as an unclumped powder and the liquid turns clear. Filter or decant." },
            { term: "Boiling temperature determination", body: "A pure organic liquid boils sharply at a single temperature matching the literature value (±1°C). Impurities broaden the boiling range and alter the boiling temperature." },
          ],
        },
      ],
    },
    {
      id: "spec-10d",
      code: "10D",
      title: "Mass Spectra and IR",
      blocks: [
        {
          kind: "heading",
          level: 3,
          id: "spec-10-21",
          tag: "10.21",
          text: "Interpretation of Mass Spectra",
        },
        {
          kind: "definition-list",
          items: [
            { term: "Molecular ion peak (M⁺)", body: "Gas molecules are bombarded with high-energy electrons, knocking out an electron to form a radical cation known as the molecular ion (M⁺•). The m/z ratio of this peak gives the exact relative molecular mass (Mr) of the compound." },
            { term: "M+1 peak", body: "A tiny peak 1 mass unit higher than M⁺, caused by the natural abundance (~1.1%) of the Carbon-13 isotope." },
            { term: "Chlorine isotopes", body: "³⁵Cl : ³⁷Cl ≈ 3:1 ratio. Mono-chlorinated compounds show two molecular ion peaks (M and M+2) in a 3:1 height ratio. Di-chlorinated compounds show three peaks (M : M+2 : M+4) in a 9:6:1 ratio." },
            { term: "Bromine isotopes", body: "⁷⁹Br : ⁸¹Br ≈ 1:1 ratio. Mono-brominated compounds show two molecular ion peaks (M and M+2) of equal height." },
            { term: "Iodine", body: "Iodine exists as a single isotope (¹²⁷I). Iodoalkanes show only one single molecular ion peak." },
          ],
        },
        {
          kind: "table",
          caption: "Common fragment ions in mass spectra",
          columns: [
            { key: "mz", header: "m/z" },
            { key: "fragment", header: "Fragment ion" },
            { key: "origin", header: "Structural origin" },
          ],
          rows: [
            { mz: "15", fragment: "CH₃⁺", origin: "Methyl cation" },
            { mz: "17", fragment: "OH⁺", origin: "Hydroxyl fragment" },
            { mz: "29", fragment: "C₂H₅⁺ or CHO⁺", origin: "Ethyl cation or formyl cation" },
            { mz: "31", fragment: "CH₂OH⁺", origin: "Diagnostic for primary alcohols" },
            { mz: "43", fragment: "C₃H₇⁺ or CH₃CO⁺", origin: "Propyl cation or acetyl cation" },
            { mz: "57", fragment: "C₄H₉⁺", origin: "Butyl cation" },
            { mz: "M−18", fragment: "M − H₂O⁺", origin: "Loss of water (typical of alcohols)" },
          ],
        },
        {
          kind: "heading",
          level: 3,
          id: "spec-10-22",
          tag: "10.22",
          text: "Infrared (IR) Spectroscopy",
        },
        {
          kind: "paragraph",
          text: "Covalent bonds absorb specific frequencies of infrared radiation, causing them to vibrate by stretching or bending. The frequency absorbed depends on the bond strength and the masses of the bonded atoms. Absorbance is plotted against wavenumber (cm⁻¹).",
        },
        {
          kind: "table",
          caption: "Characteristic IR absorption ranges",
          columns: [
            { key: "bond", header: "Bond" },
            { key: "group", header: "Functional group" },
            { key: "range", header: "Wavenumber (cm⁻¹)" },
            { key: "shape", header: "Peak appearance" },
          ],
          rows: [
            { bond: "C–H", group: "Alkanes, alkenes, aldehydes", range: "2850–3100", shape: "Sharp, medium-strong" },
            { bond: "C=C", group: "Alkenes", range: "1620–1680", shape: "Medium, sharp" },
            { bond: "C=O", group: "Aldehydes, ketones, carboxylic acids", range: "1680–1750", shape: "Strong, sharp" },
            { bond: "O–H", group: "Alcohols", range: "3200–3650", shape: "Strong, BROAD (H-bonding)" },
            { bond: "O–H", group: "Carboxylic acids", range: "2500–3300", shape: "Extremely broad (overlaps C–H)" },
            { bond: "N–H", group: "Amines, amides", range: "3300–3500", shape: "Medium (1° = double, 2° = single)" },
            { bond: "C–O", group: "Alcohols, esters", range: "1000–1300", shape: "Strong, sharp" },
            { bond: "C–Cl", group: "Halogenoalkanes", range: "600–800", shape: "Strong" },
          ],
        },
        {
          kind: "callout",
          tone: "tip",
          title: "Fingerprint region",
          body: "The region below 1500 cm⁻¹ contains a complex series of absorptions unique to a specific compound. An unknown spectrum is matched against a computer database of known spectra to confirm structural identity or verify chemical purity.",
        },
        {
          kind: "fact-box",
          label: "Core Practical 8: Qualitative identification of unknowns",
          tone: "key",
          facts: [
            { term: "C=C test", value: "Bromine water: orange → colourless" },
            { term: "–OH test", value: "PCl₅: misty HCl fumes" },
            { term: "Aldehyde vs ketone", value: "Fehling's → brick-red ppt (aldehyde); Tollens' → silver mirror (aldehyde)" },
            { term: "Carboxylic acid", value: "Na₂CO₃ → effervescence, CO₂ turns limewater milky" },
            { term: "NH₄⁺ test", value: "NaOH + warm → damp red litmus turns blue" },
            { term: "Anion tests", value: "CO₃²⁻: acid + limewater; SO₄²⁻: BaCl₂ white ppt; X⁻: AgNO₃ + NH₃" },
          ],
        },
      ],
    },
  ],
};
