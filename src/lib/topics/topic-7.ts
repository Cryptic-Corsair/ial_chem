import type { Topic } from "./types";

export const topic7: Topic = {
  number: 7,
  slug: "intermolecular-forces",
  title: "Intermolecular Forces",
  summary:
    "London forces, permanent dipole–dipole interactions, hydrogen bonding, and how they shape the physical properties of matter.",
  unit: 2,
  estimatedTime: "2 hours",
  difficulty: 3,
  published: true,
  intro:
    "Intermolecular forces are the weak attractions between molecules — distinct from the strong covalent, ionic, and metallic bonds inside them. They dictate melting points, boiling points, solubility, and volatility, and they explain why water behaves so strangely.",
  objectives: [
    "Distinguish the three main types of intermolecular force and rank them by strength",
    "Explain how London (dispersion) forces arise and what makes them stronger",
    "Identify when hydrogen bonding is possible and why it is unusually strong",
    "Account for the anomalous physical properties of water",
    "Predict boiling point trends in alkanes, alcohols, and hydrogen halides",
    "Choose the right solvent for a given solute using the 'like dissolves like' rule",
  ],
  atAGlance: [
    { label: "Weak attractions", value: "Between separate molecules or uncombined noble gas atoms" },
    { label: "Not to confuse", value: "Strong intramolecular ionic, metallic, or covalent bonds within molecules" },
    { label: "Strength order", value: "Covalent ≫ Hydrogen bonds > Permanent dipole–dipole > London dispersion" },
    { label: "H-bond elements", value: "Nitrogen (N), Oxygen (O), or Fluorine (F)" },
  ],
  keyTakeaways: [
    {
      label: "Strength order",
      body: "Covalent ≫ hydrogen bonds > permanent dipole–dipole > London dispersion.",
    },
    {
      label: "H-bond rule",
      body: "H must be bonded directly to N, O, or F. No H–F/H–O/H–N? No hydrogen bonding.",
    },
    {
      label: "More electrons = stronger London",
      body: "Larger electron clouds fluctuate more, so longer/heavier molecules have stronger dispersion forces.",
    },
    {
      label: "Branching lowers bp",
      body: "Compact, spherical molecules have less surface contact → weaker London forces → lower boiling point.",
    },
    {
      label: "Water's two anomalies",
      body: "High mp/bp (extensive H-bond network) and ice floats (open hexagonal cage in solid state).",
    },
    {
      label: "Solubility",
      body: "'Like dissolves like': polar solutes in polar solvents, non-polar in non-polar. The new attractions must pay for breaking the old ones.",
    },
  ],
  sections: [
    {
      id: "spec-7-1",
      code: "7.1",
      title: "Understand the Nature of Intermolecular Forces",
      blocks: [
        {
          kind: "lead",
          text: "Intermolecular forces (non-bonded interactions) are weak attractive forces that exist between separate molecules or uncombined noble gas atoms, distinct from strong intramolecular ionic, metallic, or covalent bonds within molecules.",
        },
        {
          kind: "fact-box",
          label: "Remember this",
          tone: "key",
          facts: [
            { term: "Inside molecules", value: "Strong bonds — covalent, ionic, metallic (~100–1000 kJ/mol)" },
            { term: "Between molecules", value: "Weak intermolecular forces (~1–40 kJ/mol)" },
            { term: "Key idea", value: "Boiling/melting breaks the BETWEEN forces, not the INSIDE bonds." },
          ],
        },
        {
          kind: "heading",
          level: 3,
          id: "spec-7-1-i",
          tag: "7.1(i)",
          text: "London Forces (Instantaneous Dipole–Induced Dipole / Dispersion Forces)",
        },
        {
          kind: "diagram",
          title: "An instantaneous dipole in one molecule inducing a dipole in a neighbouring molecule",
          desc: "The left molecule is non-polar overall, but its electron cloud has momentarily shifted to one side, creating a temporary negative end and a temporary positive end. That negative end distorts the electron cloud of the molecule on the right, inducing a positive end facing left. The two opposite charges attract each other.",
          caption: "The temporary dipole on the left distorts the neighbouring electron cloud, and the resulting \\(\\delta^+\\) / \\(\\delta^-\\) ends face each other across the gap.",
          svg: `<svg viewBox="48 44 624 202"><ellipse cx="150" cy="120" rx="86" ry="52" fill="var(--neg-soft)" stroke="var(--neg)" stroke-width="1.2" stroke-dasharray="4 3"/><path d="M150 68 A86 52 0 0 0 150 172 Z" fill="var(--neg-soft)"/><circle cx="150" cy="120" r="25" fill="var(--card)" stroke="var(--ink-2)" stroke-width="1.6"/><text x="150" y="125" text-anchor="middle" class="lbl" fill="var(--ink)">C</text><text x="96" y="98" text-anchor="middle" class="lbl" fill="var(--neg)">&#948;&#8722;</text><text x="204" y="98" text-anchor="middle" class="lbl" fill="var(--pos)">&#948;&#8314;</text><text x="150" y="200" text-anchor="middle" class="lbl-s" fill="var(--ink-3)">instantaneous dipole</text><ellipse cx="570" cy="120" rx="86" ry="52" fill="var(--pos-soft)" stroke="var(--pos)" stroke-width="1.2" stroke-dasharray="4 3"/><path d="M570 68 A86 52 0 0 0 570 172 Z" fill="var(--pos-soft)"/><circle cx="570" cy="120" r="25" fill="var(--card)" stroke="var(--ink-2)" stroke-width="1.6"/><text x="570" y="125" text-anchor="middle" class="lbl" fill="var(--ink)">C</text><text x="516" y="98" text-anchor="middle" class="lbl" fill="var(--pos)">&#948;&#8314;</text><text x="624" y="98" text-anchor="middle" class="lbl" fill="var(--neg)">&#948;&#8722;</text><text x="570" y="200" text-anchor="middle" class="lbl-s" fill="var(--ink-3)">induced dipole</text><g stroke="var(--primary)" stroke-width="1.8" stroke-linecap="round"><path d="M268 120 L332 120"/><path d="m326 114 8 6-8 6" fill="none"/><path d="M452 120 L388 120"/><path d="m394 114-8 6 8 6" fill="none"/></g><text x="360" y="106" text-anchor="middle" class="lbl" fill="var(--primary)">attraction</text><text x="360" y="235" text-anchor="middle" class="lbl-s" fill="var(--ink-3)">opposite charges attract</text></svg>`,
        },
        {
          kind: "definition-list",
          items: [
            {
              term: "Mechanism",
              body: "Electrons within an atom or non-polar molecule are in continuous, random motion. At any given instant, the electron cloud density may fluctuate unevenly across the molecule, giving rise to an instantaneous (temporary) dipole.",
            },
            {
              term: "Induction",
              body: "This temporary dipole distorts the electron cloud of a neighbouring molecule, inducing an induced dipole of opposite charge.",
            },
            {
              term: "Attraction",
              body: "The \\(\\delta^+\\) end of one temporary dipole attracts the \\(\\delta^-\\) end of the neighbouring induced dipole.",
            },
            {
              term: "Occurrence",
              body: "London forces exist between all atoms and molecular species (whether polar or non-polar), as well as monatomic noble gases, but do not exist in giant ionic lattices.",
            },
          ],
        },
        {
          kind: "callout",
          tone: "common-mistake",
          title: "Common mistake",
          body: "London forces are NOT only found in non-polar molecules. They exist between ALL molecules (polar and non-polar). Polar molecules just have additional permanent dipole–dipole forces on top.",
        },
        {
          kind: "heading",
          level: 3,
          id: "spec-7-1-ii",
          tag: "7.1(ii)",
          text: "Permanent Dipole–Permanent Dipole Interactions",
        },
        {
          kind: "diagram",
          title: "Attraction between two permanent dipoles",
          desc: "Two polar molecules sit side by side. Each has a permanent positive end and a permanent negative end, caused by differences in electronegativity. The positive region of one molecule lines up against the negative region of the other, and the two attract electrostatically.",
          caption: "The dipoles line up \\(\\delta^- \\cdots \\delta^+\\) so that opposite regions sit next to each other.",
          svg: `<svg viewBox="0 0 720 210"><g><circle cx="150" cy="105" r="34" fill="var(--pos-soft)" stroke="var(--pos)" stroke-width="1.5"/><text x="150" y="111" text-anchor="middle" class="lbl" fill="var(--pos)">&#948;&#8314;</text><circle cx="245" cy="105" r="34" fill="var(--neg-soft)" stroke="var(--neg)" stroke-width="1.5"/><text x="245" y="111" text-anchor="middle" class="lbl" fill="var(--neg)">&#948;&#8722;</text><text x="197" y="175" text-anchor="middle" class="lbl-s" fill="var(--ink-3)">molecule 1 &middot; polar</text></g><g><circle cx="475" cy="105" r="34" fill="var(--pos-soft)" stroke="var(--pos)" stroke-width="1.5"/><text x="475" y="111" text-anchor="middle" class="lbl" fill="var(--pos)">&#948;&#8314;</text><circle cx="570" cy="105" r="34" fill="var(--neg-soft)" stroke="var(--neg)" stroke-width="1.5"/><text x="570" y="111" text-anchor="middle" class="lbl" fill="var(--neg)">&#948;&#8722;</text><text x="522" y="175" text-anchor="middle" class="lbl-s" fill="var(--ink-3)">molecule 2 &middot; polar</text></g><g stroke="var(--primary)" stroke-width="1.8" stroke-linecap="round"><path d="M300 105 L400 105"/><path d="m394 99 8 6-8 6" fill="none"/><path d="M420 105 L320 105"/><path d="m326 99-8 6 8 6" fill="none"/></g><text x="360" y="88" text-anchor="middle" class="lbl" fill="var(--primary)">electrostatic attraction</text></svg>`,
        },
        {
          kind: "definition-list",
          items: [
            {
              term: "Mechanism",
              body: "These forces occur between polar molecules that possess permanent dipoles resulting from differences in electronegativity across covalent bonds.",
            },
            {
              term: "Attraction",
              body: "Electrostatic attraction occurs between the permanent \\(\\delta^+\\) region of one molecule and the permanent \\(\\delta^-\\) region of an adjacent molecule.",
            },
            {
              term: "Relative Strength",
              body: "For small molecules containing similar numbers of total electrons, permanent dipole–dipole interactions are generally stronger than London forces. For instance, propanone (polar) has a higher boiling temperature (\\(56^\\circ\\text{C}\\)) than butane (non-polar, \\(0^\\circ\\text{C}\\)) because more energy is required to break permanent dipole forces.",
            },
          ],
        },
        {
          kind: "compare",
          label: "Worked example · propanone vs butane",
          columns: [
            { title: "Propanone", subtitle: "\\(\\text{CH}_3\\text{COCH}_3\\)", badge: "Polar" },
            { title: "Butane", subtitle: "\\(\\text{C}_4\\text{H}_{10}\\)", badge: "Non-polar" },
          ],
          rows: [
            { label: "Polarity", values: ["Polar (C=O)", "Non-polar"] },
            { label: "Dominant IMF", values: ["Dipole–dipole + London", "London only"] },
            { label: "Boiling point", values: ["\\(56\\,^\\circ\\text{C}\\)", "\\(0\\,^\\circ\\text{C}\\)"] },
            { label: "Δ vs the other", values: ["+56 °C higher", "Baseline"] },
          ],
        },
        {
          kind: "heading",
          level: 3,
          id: "spec-7-1-iii",
          tag: "7.1(iii)",
          text: "Hydrogen Bonds",
        },
        {
          kind: "diagram",
          title: "A hydrogen bond forming between a hydrogen and a lone pair",
          desc: "Two water molecules. On the left, a hydrogen with a strong positive charge sits on an oxygen and has two lone pairs. One lone pair reaches across a dotted line to the hydrogen of the molecule on the right. That hydrogen is itself attached to the second oxygen, which also carries two lone pairs.",
          caption: "Both requirements in one picture: a high \\(\\delta^+\\) charge density on a hydrogen attached to N, O or F, meeting a lone pair on an adjacent N, O or F.",
          svg: `<svg viewBox="0 0 720 258"><circle cx="150" cy="110" r="30" fill="var(--neg-soft)" stroke="var(--neg)" stroke-width="1.6"/><text x="150" y="116" text-anchor="middle" class="lbl" fill="var(--ink)">O</text><line x1="128" y1="90" x2="80" y2="52" stroke="var(--ink-3)" stroke-width="1.8" stroke-linecap="round"/><circle cx="72" cy="46" r="15" fill="var(--pos-soft)" stroke="var(--pos)" stroke-width="1.4"/><text x="72" y="51" text-anchor="middle" class="lbl" fill="var(--pos)">H</text><line x1="128" y1="130" x2="80" y2="168" stroke="var(--ink-3)" stroke-width="1.8" stroke-linecap="round"/><circle cx="72" cy="174" r="15" fill="var(--pos-soft)" stroke="var(--pos)" stroke-width="1.4"/><text x="72" y="179" text-anchor="middle" class="lbl" fill="var(--pos)">H</text><g fill="var(--accent)"><circle cx="183" cy="88" r="3.4"/><circle cx="193" cy="84" r="3.4"/><circle cx="183" cy="132" r="3.4"/><circle cx="193" cy="136" r="3.4"/></g><line x1="198" y1="134" x2="330" y2="134" stroke="var(--primary)" stroke-width="2.6" stroke-linecap="round" stroke-dasharray="2 7"/><circle cx="380" cy="134" r="15" fill="var(--pos-soft)" stroke="var(--pos)" stroke-width="1.4"/><text x="380" y="139" text-anchor="middle" class="lbl" fill="var(--pos)">H</text><line x1="395" y1="134" x2="450" y2="134" stroke="var(--ink-3)" stroke-width="1.8" stroke-linecap="round"/><circle cx="480" cy="134" r="30" fill="var(--neg-soft)" stroke="var(--neg)" stroke-width="1.6"/><text x="480" y="140" text-anchor="middle" class="lbl" fill="var(--ink)">O</text><line x1="500" y1="116" x2="545" y2="80" stroke="var(--ink-3)" stroke-width="1.8" stroke-linecap="round"/><circle cx="553" cy="73" r="15" fill="var(--pos-soft)" stroke="var(--pos)" stroke-width="1.4"/><text x="553" y="78" text-anchor="middle" class="lbl" fill="var(--pos)">H</text><g fill="var(--accent)"><circle cx="464" cy="166" r="3.4"/><circle cx="474" cy="170" r="3.4"/><circle cx="464" cy="104" r="3.4"/><circle cx="474" cy="100" r="3.4"/></g><text x="264" y="120" text-anchor="middle" class="lbl" fill="var(--primary)">hydrogen bond</text><text x="212" y="160" text-anchor="middle" class="lbl-s" fill="var(--accent)">lone pair</text><text x="132" y="228" text-anchor="middle" class="lbl-s" fill="var(--ink-3)">donor O&ndash;H</text><text x="512" y="200" text-anchor="middle" class="lbl-s" fill="var(--ink-3)">acceptor O</text></svg>`,
        },
        {
          kind: "steps",
          title: "Hydrogen bonding, step by step",
          items: [
            {
              term: "Mechanism",
              body: "Hydrogen bonding is a particularly strong, specialized form of permanent dipole–permanent dipole interaction.",
            },
            {
              term: "Requirements",
              body: "",
              children: [
                "A hydrogen atom covalently attached directly to one of the three most electronegative elements: Nitrogen (N), Oxygen (O), or Fluorine (F).",
                "A lone pair of electrons on the N, O, or F atom of an adjacent molecule.",
              ],
            },
            {
              term: "Explanation",
              body: "The high electronegativity difference strongly pulls shared electrons away from the hydrogen atom. Because hydrogen has no inner shell of shielding electrons, its positive nucleus is exposed, creating a high \\(\\delta^+\\) charge density that strongly attracts the lone pair on a neighbouring N, O, or F atom.",
            },
          ],
        },
        {
          kind: "callout",
          tone: "exam-alert",
          title: "Exam alert",
          body: "Hydrogen bonding requires H bonded DIRECTLY to N, O, or F. A molecule can contain F, O, or N atoms but still NOT form hydrogen bonds if H is not attached to them (e.g. CH₃F cannot H-bond with itself — H is on C, not F).",
        },
        {
          kind: "equation",
          label: "Strength hierarchy",
          math: String.raw`\text{Covalent} \;\gg\; \text{Hydrogen bonds} \;>\; \text{Permanent dipole–dipole} \;>\; \text{London dispersion}`,
          caption: "Typical energies: 400 / 20–40 / 5–25 / 1–10 kJ·mol⁻¹",
        },
        {
          kind: "strength-ladder",
          title: "Relative strength hierarchy (typical energies)",
          rungs: [
            { label: "Covalent bonds", sublabel: "Within a molecule", width: 100, color: "ochre", barLabel: "≈ 400 kJ/mol" },
            { label: "Hydrogen bonds", sublabel: "Specialized dipole–dipole", width: 34, color: "primary", barLabel: "≈ 20–40" },
            { label: "Permanent dipole–dipole", sublabel: "Between polar molecules", width: 19, color: "teal", barLabel: "≈ 5–25" },
            { label: "London dispersion", sublabel: "Between all species", width: 11, color: "rose", barLabel: "≈ 1–10" },
          ],
          note: "The covalent bond sits in a different category entirely — it holds atoms together *inside* a molecule, while everything below it holds *separate molecules together*. That gap is why covalent bonds use a broken axis here: they are not merely the strongest force on the scale, they are an order of magnitude apart.",
        },
      ],
    },
    {
      id: "spec-7-2",
      code: "7.2",
      title: "Hydrogen Bonding in \\(H_2O\\), Liquid \\(NH_3\\), and Liquid \\(HF\\)",
      blocks: [
        {
          kind: "lead",
          text: "Hydrogen bonding significantly dictates the behaviour of simple hydrides containing N, O, and F:",
        },
        {
          kind: "card-grid",
          columns: 3,
          cards: [
            {
              title: "Water",
              formula: "\\(H_2O\\)",
              lines: [
                "Each oxygen atom has two O–H bonds and two lone pairs of electrons.",
                "Water molecules can form an extensive 3D hydrogen-bonded network with up to four hydrogen bonds per molecule.",
              ],
              badge: "★ Most H-bonds",
              highlight: true,
              svg: `<svg viewBox="0 0 200 130"><g stroke="var(--ink)" stroke-width="2" fill="none"><line x1="100" y1="65" x2="60" y2="95"/><line x1="100" y1="65" x2="140" y2="95"/></g><circle cx="100" cy="65" r="18" fill="var(--neg-soft)" stroke="var(--neg)" stroke-width="1.5"/><text x="100" y="70" text-anchor="middle" class="lbl" fill="var(--neg)">O</text><circle cx="60" cy="95" r="12" fill="var(--pos-soft)" stroke="var(--pos)" stroke-width="1.2"/><text x="60" y="99" text-anchor="middle" class="lbl-s" fill="var(--pos)">H</text><circle cx="140" cy="95" r="12" fill="var(--pos-soft)" stroke="var(--pos)" stroke-width="1.2"/><text x="140" y="99" text-anchor="middle" class="lbl-s" fill="var(--pos)">H</text><g fill="var(--neg)"><circle cx="82" cy="48" r="3"/><circle cx="118" cy="48" r="3"/></g><text x="100" y="120" text-anchor="middle" class="lbl-s" fill="var(--ink-3)">2 lone pairs · 2 O–H bonds</text></svg>`,
              stats: [
                { term: "H-bonds per molecule", value: "Up to 4", highlight: true },
                { term: "Donors", value: "2 (O–H)" },
                { term: "Acceptors", value: "2 (lone pairs)" },
              ],
            },
            {
              title: "Ammonia",
              formula: "\\(NH_3\\)",
              lines: [
                "Nitrogen forms three N–H bonds and possesses one lone pair of electrons.",
                "Because it has only one lone pair, ammonia forms an average of one hydrogen bond per molecule, making its intermolecular attraction less extensive than water's.",
              ],
              svg: `<svg viewBox="0 0 200 130"><g stroke="var(--ink)" stroke-width="2" fill="none"><line x1="100" y1="60" x2="65" y2="95"/><line x1="100" y1="60" x2="135" y2="95"/><line x1="100" y1="60" x2="100" y2="100"/></g><circle cx="100" cy="60" r="18" fill="var(--neg-soft)" stroke="var(--neg)" stroke-width="1.5"/><text x="100" y="65" text-anchor="middle" class="lbl" fill="var(--neg)">N</text><circle cx="65" cy="95" r="11" fill="var(--pos-soft)" stroke="var(--pos)" stroke-width="1.2"/><text x="65" y="99" text-anchor="middle" class="lbl-s" fill="var(--pos)">H</text><circle cx="135" cy="95" r="11" fill="var(--pos-soft)" stroke="var(--pos)" stroke-width="1.2"/><text x="135" y="99" text-anchor="middle" class="lbl-s" fill="var(--pos)">H</text><circle cx="100" cy="100" r="11" fill="var(--pos-soft)" stroke="var(--pos)" stroke-width="1.2"/><text x="100" y="104" text-anchor="middle" class="lbl-s" fill="var(--pos)">H</text><g fill="var(--neg)"><circle cx="100" cy="42" r="3"/></g><text x="100" y="125" text-anchor="middle" class="lbl-s" fill="var(--ink-3)">1 lone pair · 3 N–H bonds</text></svg>`,
              stats: [
                { term: "H-bonds per molecule", value: "Average 1" },
                { term: "Donors", value: "3 (N–H)" },
                { term: "Acceptors", value: "1 (lone pair)" },
              ],
            },
            {
              title: "Hydrogen Fluoride",
              formula: "\\(HF\\)",
              lines: [
                "Fluorine is the most electronegative element and has three lone pairs, but only one hydrogen atom per molecule.",
                "\\(HF\\) forms long linear hydrogen-bonded chains \\((HF)_n\\). Despite having strong individual hydrogen bonds, \\(HF\\) forms fewer hydrogen bonds per molecule overall compared to water.",
              ],
              svg: `<svg viewBox="0 0 200 130"><g stroke="var(--ink)" stroke-width="2" fill="none"><line x1="100" y1="65" x2="140" y2="65"/></g><circle cx="100" cy="65" r="18" fill="var(--neg-soft)" stroke="var(--neg)" stroke-width="1.5"/><text x="100" y="70" text-anchor="middle" class="lbl" fill="var(--neg)">F</text><circle cx="140" cy="65" r="12" fill="var(--pos-soft)" stroke="var(--pos)" stroke-width="1.2"/><text x="140" y="69" text-anchor="middle" class="lbl-s" fill="var(--pos)">H</text><g fill="var(--neg)"><circle cx="78" cy="50" r="3"/><circle cx="78" cy="65" r="3"/><circle cx="78" cy="80" r="3"/></g><text x="100" y="110" text-anchor="middle" class="lbl-s" fill="var(--ink-3)">3 lone pairs · 1 H–F bond</text></svg>`,
              stats: [
                { term: "H-bonds per molecule", value: "Average 2" },
                { term: "Donors", value: "1 (H–F)" },
                { term: "Acceptors", value: "3 (lone pairs)" },
              ],
            },
          ],
        },
        {
          kind: "diagram",
          title: "Hydrogen fluoride forming linear chains",
          desc: "A row of hydrogen fluoride molecules linked end to end by dotted hydrogen bonds, forming one long straight chain.",
          caption: "Hydrogen fluoride is the only one of the three with enough lone pairs but too few hydrogens — the result is a chain rather than the 3D network water builds.",
          svg: `<svg viewBox="0 0 720 190"><g><g><circle cx="105" cy="95" r="15" fill="var(--pos-soft)" stroke="var(--pos)" stroke-width="1.4"/><text x="105" y="100" text-anchor="middle" class="lbl" fill="var(--pos)">H</text><circle cx="140" cy="95" r="21" fill="var(--neg-soft)" stroke="var(--neg)" stroke-width="1.5"/><text x="140" y="100" text-anchor="middle" class="lbl" fill="var(--ink)">F</text></g><line x1="163" y1="95" x2="199" y2="95" stroke="var(--primary)" stroke-width="2.4" stroke-dasharray="2 6" stroke-linecap="round"/><g><circle cx="215" cy="95" r="15" fill="var(--pos-soft)" stroke="var(--pos)" stroke-width="1.4"/><text x="215" y="100" text-anchor="middle" class="lbl" fill="var(--pos)">H</text><circle cx="250" cy="95" r="21" fill="var(--neg-soft)" stroke="var(--neg)" stroke-width="1.5"/><text x="250" y="100" text-anchor="middle" class="lbl" fill="var(--ink)">F</text></g><line x1="273" y1="95" x2="309" y2="95" stroke="var(--primary)" stroke-width="2.4" stroke-dasharray="2 6" stroke-linecap="round"/><g><circle cx="325" cy="95" r="15" fill="var(--pos-soft)" stroke="var(--pos)" stroke-width="1.4"/><text x="325" y="100" text-anchor="middle" class="lbl" fill="var(--pos)">H</text><circle cx="360" cy="95" r="21" fill="var(--neg-soft)" stroke="var(--neg)" stroke-width="1.5"/><text x="360" y="100" text-anchor="middle" class="lbl" fill="var(--ink)">F</text></g><line x1="383" y1="95" x2="419" y2="95" stroke="var(--primary)" stroke-width="2.4" stroke-dasharray="2 6" stroke-linecap="round"/><g><circle cx="435" cy="95" r="15" fill="var(--pos-soft)" stroke="var(--pos)" stroke-width="1.4"/><text x="435" y="100" text-anchor="middle" class="lbl" fill="var(--pos)">H</text><circle cx="470" cy="95" r="21" fill="var(--neg-soft)" stroke="var(--neg)" stroke-width="1.5"/><text x="470" y="100" text-anchor="middle" class="lbl" fill="var(--ink)">F</text></g><line x1="493" y1="95" x2="529" y2="95" stroke="var(--primary)" stroke-width="2.4" stroke-dasharray="2 6" stroke-linecap="round"/><g><circle cx="545" cy="95" r="15" fill="var(--pos-soft)" stroke="var(--pos)" stroke-width="1.4"/><text x="545" y="100" text-anchor="middle" class="lbl" fill="var(--pos)">H</text><circle cx="580" cy="95" r="21" fill="var(--neg-soft)" stroke="var(--neg)" stroke-width="1.5"/><text x="580" y="100" text-anchor="middle" class="lbl" fill="var(--ink)">F</text></g></g><text x="345" y="45" text-anchor="middle" class="lbl" fill="var(--primary)">(HF)<tspan baseline-shift="sub" font-size="10">n</tspan></text><text x="345" y="155" text-anchor="middle" class="lbl-s" fill="var(--ink-3)">long linear hydrogen-bonded chains</text></svg>`,
        },
        {
          kind: "callout",
          tone: "key",
          title: "Why water wins",
          body: "Water's combination of two lone pairs AND two O–H bonds lets each molecule act as both a double donor and a double acceptor — that's why water beats both \\(NH_3\\) and \\(HF\\) in the number of hydrogen bonds per molecule, even though individual O–H⋯O bonds are weaker than F–H⋯F bonds.",
        },
        {
          kind: "fact-box",
          label: "Hydrogen bonds per molecule",
          facts: [
            { term: "\\(H_2O\\)", value: "Up to 4 (2 donors + 2 acceptors)" },
            { term: "\\(NH_3\\)", value: "Average 1 (1 lone pair, 3 N–H)" },
            { term: "\\(HF\\)", value: "Average 2 (3 lone pairs, 1 H) — chains" },
          ],
        },
      ],
    },
    {
      id: "spec-7-3",
      code: "7.3",
      title: "Anomalous Properties of Water Resulting from Hydrogen Bonding",
      blocks: [
        {
          kind: "lead",
          text: "Water exhibits two major anomalous physical properties directly caused by its extensive hydrogen bonding network:",
        },
        {
          kind: "fact-box",
          label: "Water's two anomalies at a glance",
          tone: "key",
          facts: [
            { term: "Anomaly 1", value: "Unusually high melting and boiling points vs other Group 6 hydrides" },
            { term: "Anomaly 2", value: "Solid ice is LESS dense than liquid water (ice floats)" },
          ],
        },
        {
          kind: "heading",
          level: 3,
          id: "spec-7-3-i",
          tag: "7.3(i)",
          text: "High Melting and Boiling Temperatures",
        },
        {
          kind: "definition-list",
          items: [
            {
              term: "Observation",
              body: "Water has anomalously high melting and boiling points (and enthalpy of vaporisation) compared to other Group 6 hydrides (\\(H_2S\\), \\(H_2Se\\), \\(H_2Te\\)) and molecules of comparable molar mass.",
            },
            {
              term: "Explanation",
              body: "While \\(H_2S\\), \\(H_2Se\\), and \\(H_2Te\\) are held together primarily by weaker London dispersion forces, liquid water requires a large amount of thermal energy to overcome its extensive network of strong hydrogen bonds.",
            },
          ],
        },
        {
          kind: "table",
          caption: "Group 6 hydrides · Note the huge gap between H₂O and H₂S",
          columns: [
            { key: "hydride", header: "Hydride" },
            { key: "formula", header: "Formula" },
            { key: "bp", header: "Boiling point" },
            { key: "imf", header: "Dominant IMF" },
          ],
          highlight: "first",
          rows: [
            { hydride: "Water", formula: "\\(H_2O\\)", bp: "\\(100\\,^\\circ\\text{C}\\)", imf: "Hydrogen bonding" },
            { hydride: "Hydrogen sulfide", formula: "\\(H_2S\\)", bp: "\\(-60\\,^\\circ\\text{C}\\)", imf: "London / dipole–dipole" },
            { hydride: "Hydrogen selenide", formula: "\\(H_2Se\\)", bp: "\\(-42\\,^\\circ\\text{C}\\)", imf: "London / dipole–dipole" },
            { hydride: "Hydrogen telluride", formula: "\\(H_2Te\\)", bp: "\\(-2\\,^\\circ\\text{C}\\)", imf: "London / dipole–dipole" },
          ],
        },
        {
          kind: "callout",
          tone: "exam-alert",
          title: "160 °C gap",
          body: "Water boils at +100 °C while H₂S boils at −60 °C — a 160 °C jump. That gap is the fingerprint of hydrogen bonding. If H₂O only had London forces like its neighbours, water would boil around −80 °C and Earth would have no liquid oceans.",
        },
        {
          kind: "heading",
          level: 3,
          id: "spec-7-3-ii",
          tag: "7.3(ii)",
          text: "Lower Density of Ice Compared to Liquid Water",
        },
        {
          kind: "diagram",
          title: "Ice compared with liquid water",
          desc: "On the left, six water molecules lock into an open hexagonal ring around an empty space, giving ice a cage-like structure and a low density. On the right, the ring framework has collapsed, the molecules sit closer together and there is no empty space, so liquid water is denser.",
          caption: "The empty space in the middle of the hexagonal ring is the whole story: open spaces lower the density, so ice floats.",
          svg: `<svg viewBox="0 0 720 260"><g><rect x="20" y="20" width="320" height="230" rx="14" fill="var(--pos-soft)" stroke="var(--primary-line)" stroke-width="1.3"/><text x="180" y="46" text-anchor="middle" class="lbl" fill="var(--primary)">Solid ice at 0&deg;C</text><g stroke="var(--primary)" stroke-width="2" stroke-dasharray="2 5" stroke-linecap="round"><line x1="180" y1="76" x2="227" y2="100"/><line x1="227" y1="100" x2="227" y2="148"/><line x1="227" y1="148" x2="180" y2="172"/><line x1="180" y1="172" x2="133" y2="148"/><line x1="133" y1="148" x2="133" y2="100"/><line x1="133" y1="100" x2="180" y2="76"/></g><g fill="var(--surface)" stroke="var(--primary)" stroke-width="1.8"><circle cx="180" cy="76" r="16"/><circle cx="227" cy="100" r="16"/><circle cx="227" cy="148" r="16"/><circle cx="180" cy="172" r="16"/><circle cx="133" cy="148" r="16"/><circle cx="133" cy="100" r="16"/></g><circle cx="180" cy="124" r="22" fill="none" stroke="var(--accent)" stroke-width="1.8" stroke-dasharray="3 4"/><text x="180" y="128" text-anchor="middle" class="lbl-s" fill="var(--accent)">void</text><text x="180" y="206" text-anchor="middle" class="lbl" fill="var(--ink-2)">open, cage-like structure</text><text x="180" y="226" text-anchor="middle" class="lbl-s" fill="var(--ink-3)">large empty spaces &middot; less dense &middot; floats</text></g><g><rect x="380" y="20" width="320" height="230" rx="14" fill="var(--bg-tint)" stroke="var(--line)" stroke-width="1.2"/><text x="540" y="46" text-anchor="middle" class="lbl" fill="var(--ink-2)">Liquid water at 0&deg;C</text><g><g fill="var(--surface)" stroke="var(--ink-2)" stroke-width="1.5"><circle cx="470" cy="86" r="16"/><circle cx="508" cy="78" r="16"/><circle cx="546" cy="88" r="16"/><circle cx="584" cy="80" r="16"/><circle cx="464" cy="124" r="16"/><circle cx="502" cy="118" r="16"/><circle cx="540" cy="126" r="16"/><circle cx="578" cy="118" r="16"/><circle cx="470" cy="162" r="16"/><circle cx="508" cy="156" r="16"/><circle cx="546" cy="164" r="16"/><circle cx="584" cy="156" r="16"/></g></g><text x="540" y="206" text-anchor="middle" class="lbl" fill="var(--ink-2)">ring framework collapsed</text><text x="540" y="226" text-anchor="middle" class="lbl-s" fill="var(--ink-3)">molecules pack closer &middot; more dense</text></g></svg>`,
        },
        {
          kind: "definition-list",
          items: [
            {
              term: "Observation",
              body: "Ice floats on liquid water because solid ice at \\(0^\\circ\\text{C}\\) is less dense than liquid water at \\(0^\\circ\\text{C}\\).",
            },
            {
              term: "Explanation",
              body: "In liquid water, hydrogen bonds constantly break and re-form dynamically. When water freezes into ice, the molecules are locked into a fixed, rigid 3D hexagonal ring structure held open by 4 hydrogen bonds per molecule. This arrangement creates an open, cage-like structure with large empty spaces. When ice melts, this open ring framework collapses, allowing water molecules to pack closer together, which increases the liquid's density.",
            },
          ],
        },
        {
          kind: "compare",
          label: "Liquid water vs ice — same molecule, different structure",
          columns: [
            { title: "Liquid water", subtitle: "\\(H_2O(l)\\)" },
            { title: "Ice", subtitle: "\\(H_2O(s)\\)", badge: "Less dense" },
          ],
          rows: [
            { label: "H-bonds", values: ["Constantly break & re-form", "Fixed, 4 per molecule"] },
            { label: "Structure", values: ["Disordered, close-packed", "Open 3D hexagonal cage"] },
            { label: "Empty space", values: ["Less", "More (large gaps)"] },
            { label: "Density", values: ["Higher", "Lower → ice floats"] },
          ],
        },
      ],
    },
    {
      id: "spec-7-4",
      code: "7.4",
      title: "Predicting Hydrogen Bonding in Analogous Molecules",
      blocks: [
        {
          kind: "lead",
          text: "Hydrogen bonding can be predicted in any compound where hydrogen is bonded to nitrogen or oxygen:",
        },
        {
          kind: "decision-flow",
          title: "Quick check",
          question: "Is the H atom bonded directly to N, O, or F?",
          yes: {
            label: "Yes — H bonds to N, O, or F",
            body: "The molecule CAN form hydrogen bonds. Look for a lone pair on a neighbouring N, O, or F atom to complete the bond.",
          },
          no: {
            label: "No — H bonds to C, S, Cl, etc.",
            body: "The molecule CANNOT form hydrogen bonds, even if it contains N, O, or F elsewhere. Example: \\(\\text{CH}_3\\text{F}\\) has F but no H–F bond, so it cannot hydrogen-bond with itself.",
          },
        },
        {
          kind: "definition-list",
          items: [
            {
              term: "Alcohols \\(R\\text{--OH}\\)",
              body: "Form intermolecular hydrogen bonds via the hydroxyl group.",
            },
            {
              term: "Carboxylic Acids \\(R\\text{--COOH}\\)",
              body: "Form hydrogen-bonded dimers in non-polar solvents.",
            },
            {
              term: "Amines \\(R\\text{--NH}_2\\), \\(R_2\\text{--NH}\\) & Amides \\(R\\text{--CONH}_2\\)",
              body: "Form hydrogen bonds via N–H groups and lone pairs on nitrogen.",
            },
            {
              term: "Proteins & Biological Macromolecules",
              body: "Rely on N–H\\(\\cdots\\)O=C hydrogen bonds to maintain secondary structures.",
            },
          ],
        },
        {
          kind: "callout",
          tone: "tip",
          title: "Quick check",
          body: "To decide if a molecule can hydrogen-bond, scan its structure: is there an H attached directly to N, O, or F? If yes → it can H-bond. If no (e.g. CH₃Cl, CH₃OCH₃) → it cannot, even if it contains those atoms elsewhere.",
        },
      ],
    },
    {
      id: "spec-7-5",
      code: "7.5",
      title: "Intermolecular Forces and Physical Properties",
      blocks: [
        {
          kind: "fact-box",
          label: "Three trends you must memorise",
          tone: "key",
          facts: [
            { term: "Longer chain", value: "↑ electrons → ↑ London forces → ↑ boiling point" },
            { term: "More branching", value: "↓ surface contact → ↓ London forces → ↓ boiling point" },
            { term: "Add –OH (alcohol)", value: "Adds H-bonding → ↑↑ boiling point vs alkane" },
          ],
        },
        {
          kind: "heading",
          level: 3,
          id: "spec-7-5-i",
          tag: "7.5(i)",
          text: "Boiling Temperatures of Alkanes with Increasing Chain Length",
        },
        {
          kind: "diagram",
          title: "Alkane chains of increasing length",
          desc: "Three unbranched alkane chains of increasing length. The longer the chain, the more electrons the molecule has, the larger the electron cloud, and the greater the surface area of contact between neighbouring molecules, shown as a shaded band alongside each chain.",
          caption: "Two things grow together as the chain lengthens: the number of electrons (bigger electron cloud, bigger dipoles) and the surface area of contact (more total London forces).",
          svg: `<svg viewBox="0 0 720 250"><g><text x="40" y="58" class="lbl" fill="var(--ink-2)">C</text><line x1="52" y1="54" x2="86" y2="54" stroke="var(--ink-3)" stroke-width="2.6" stroke-linecap="round"/><text x="102" y="58" class="lbl" fill="var(--ink-2)">C</text><text x="40" y="42" class="lbl-s" fill="var(--ink-3)">short</text><rect x="150" y="38" width="120" height="34" rx="7" fill="var(--neg-soft)" stroke="var(--neg)" stroke-width="1" stroke-dasharray="3 3"/><text x="210" y="60" text-anchor="middle" class="lbl-s" fill="var(--neg)">small contact</text></g><g><text x="40" y="123" class="lbl" fill="var(--ink-2)">C</text><line x1="52" y1="119" x2="72" y2="119" stroke="var(--ink-3)" stroke-width="2.6" stroke-linecap="round"/><text x="88" y="123" class="lbl" fill="var(--ink-2)">C</text><line x1="100" y1="119" x2="120" y2="119" stroke="var(--ink-3)" stroke-width="2.6" stroke-linecap="round"/><text x="136" y="123" class="lbl" fill="var(--ink-2)">C</text><text x="40" y="107" class="lbl-s" fill="var(--ink-3)">medium</text><rect x="150" y="103" width="240" height="34" rx="7" fill="var(--neg-soft)" stroke="var(--neg)" stroke-width="1" stroke-dasharray="3 3"/><text x="270" y="125" text-anchor="middle" class="lbl-s" fill="var(--neg)">larger contact</text></g><g><text x="40" y="188" class="lbl" fill="var(--ink-2)">C</text><line x1="52" y1="184" x2="62" y2="184" stroke="var(--ink-3)" stroke-width="2.6" stroke-linecap="round"/><text x="78" y="188" class="lbl" fill="var(--ink-2)">C</text><line x1="90" y1="184" x2="100" y2="184" stroke="var(--ink-3)" stroke-width="2.6" stroke-linecap="round"/><text x="116" y="188" class="lbl" fill="var(--ink-2)">C</text><line x1="128" y1="184" x2="138" y2="184" stroke="var(--ink-3)" stroke-width="2.6" stroke-linecap="round"/><text x="40" y="172" class="lbl-s" fill="var(--ink-3)">long</text><rect x="150" y="168" width="360" height="34" rx="7" fill="var(--neg-soft)" stroke="var(--neg)" stroke-width="1" stroke-dasharray="3 3"/><text x="330" y="190" text-anchor="middle" class="lbl-s" fill="var(--neg)">largest contact</text></g><text x="360" y="232" text-anchor="middle" class="lbl-s" fill="var(--ink-3)">surface area of contact between molecules increases with chain length</text></svg>`,
        },
        {
          kind: "definition-list",
          items: [
            {
              term: "Trend",
              body: "Boiling temperatures of unbranched alkanes increase steadily as carbon chain length increases.",
            },
            {
              term: "Explanation",
              body: "As chain length grows, relative molecular mass and the total number of electrons per molecule increase. Larger electron clouds undergo greater fluctuations in electron density, generating stronger instantaneous and induced dipoles. Furthermore, longer straight chains offer a larger surface area of contact between molecules, increasing total London dispersion forces and requiring more energy to separate molecules.",
            },
          ],
        },
        {
          kind: "heading",
          level: 3,
          id: "spec-7-5-ii",
          tag: "7.5(ii)",
          text: "Effect of Branching on Alkane Boiling Temperatures",
        },
        {
          kind: "definition-list",
          items: [
            {
              term: "Trend",
              body: "Branched-chain alkanes have lower boiling temperatures than their unbranched structural isomers.",
            },
            {
              term: "Explanation",
              body: "Branching makes molecules more compact and spherical, which reduces the surface area of contact between adjacent molecules. Fewer points of contact weaken the overall London dispersion forces, requiring less thermal energy to overcome. For example, pentane boils at \\(309\\,\\text{K}\\), 2-methylbutane at \\(301\\,\\text{K}\\), and 2,2-dimethylpropane at \\(283\\,\\text{K}\\).",
            },
          ],
        },
        {
          kind: "table",
          caption: "C₅H₁₂ isomers · 26 K spread across three isomers",
          columns: [
            { key: "isomer", header: "Isomer" },
            { key: "structure", header: "Structure" },
            { key: "bp", header: "Boiling point" },
          ],
          rows: [
            { isomer: "Pentane", structure: "Unbranched chain", bp: "\\(309\\,\\text{K}\\)" },
            { isomer: "2-methylbutane", structure: "One branch", bp: "\\(301\\,\\text{K}\\)" },
            { isomer: "2,2-dimethylpropane", structure: "Two branches (compact)", bp: "\\(283\\,\\text{K}\\)" },
          ],
        },
        {
          kind: "heading",
          level: 3,
          id: "spec-7-5-iii",
          tag: "7.5(iii)",
          text: "Low Volatility (Higher Boiling Points) of Alcohols Compared to Alkanes",
        },
        {
          kind: "definition-list",
          items: [
            {
              term: "Trend",
              body: "Alcohols have significantly higher boiling points (lower volatility) than alkanes with similar electron numbers or chain lengths.",
            },
            {
              term: "Explanation",
              body: "Alkanes are non-polar and held together solely by weak London dispersion forces. Alcohols contain the polar –OH group, allowing them to form strong intermolecular hydrogen bonds in addition to London forces. Breaking these extra hydrogen bonds requires substantially higher thermal energy. For instance, propane boils at \\(-42^\\circ\\text{C}\\) while propan-1-ol boils at \\(97^\\circ\\text{C}\\).",
            },
          ],
        },
        {
          kind: "compare",
          label: "Propane vs propan-1-ol — same 3-carbon chain, +139 °C gap",
          columns: [
            { title: "Propane", subtitle: "\\(C_3H_8\\)", badge: "Alkane" },
            { title: "Propan-1-ol", subtitle: "\\(C_3H_7OH\\)", badge: "Alcohol", },
          ],
          rows: [
            { label: "Functional group", values: ["None (C–H only)", "–OH (polar)"] },
            { label: "IMFs present", values: ["London only", "H-bonding + London"] },
            { label: "Boiling point", values: ["\\(-42\\,^\\circ\\text{C}\\)", "\\(97\\,^\\circ\\text{C}\\)"] },
            { label: "Δ boiling point", values: ["Baseline", "+139 °C"] },
          ],
        },
        {
          kind: "diverging-chart",
          title: "Boiling points — propane vs propan-1-ol",
          caption: "The –OH group adds hydrogen bonding on top of London forces, pushing the boiling point 139 °C higher for the same 3-carbon chain.",
          leftAxis: "← below 0 °C",
          rightAxis: "above 0 °C →",
          zeroPercent: 30,
          rows: [
            { label: "Propane", sublabel: "\\(C_3H_8\\)", value: -42, display: "−42 °C", side: "neg" },
            { label: "Propan-1-ol", sublabel: "\\(C_3H_7OH\\)", value: 97, display: "+97 °C", side: "pos" },
          ],
        },
        {
          kind: "heading",
          level: 3,
          id: "spec-7-5-iv",
          tag: "7.5(iv)",
          text: "Trends in Boiling Temperatures of Hydrogen Halides (\\(HF\\) to \\(HI\\))",
        },
        {
          kind: "steps",
          title: "The hydrogen-halide boiling-point curve",
          items: [
            {
              term: "Observation",
              body: "\\(HF\\) has an anomalously high boiling point (\\(293\\,\\text{K}\\)). From \\(HCl\\) to \\(HI\\), boiling points drop sharply to \\(HCl\\) (\\(188\\,\\text{K}\\)) and then rise steadily through \\(HBr\\) (\\(207\\,\\text{K}\\)) to \\(HI\\) (\\(238\\,\\text{K}\\)).",
            },
            {
              term: "Explanation",
              body: "",
              children: [
                "\\(HF\\) Anomaly: \\(HF\\) forms strong intermolecular hydrogen bonds due to the extreme polarity of the H–F bond and small, intense lone pairs on fluorine.",
                "\\(HCl\\) to \\(HI\\) Trend: \\(HCl\\), \\(HBr\\), and \\(HI\\) cannot form hydrogen bonds; they experience permanent dipole–dipole forces and London forces. Going from \\(HCl\\) to \\(HI\\), electronegativity decreases, so permanent dipole forces weaken. However, the number of electrons increases significantly (\\(HCl < HBr < HI\\)), strengthening the London dispersion forces enough to overcome the drop in permanent dipole attractions and increase the boiling point.",
              ],
            },
          ],
        },
        {
          kind: "table",
          caption: "Hydrogen halides · Note HF spikes high, then bp rises HCl → HI",
          columns: [
            { key: "halide", header: "Halide" },
            { key: "formula", header: "Formula" },
            { key: "bp", header: "Boiling point" },
            { key: "imf", header: "Dominant IMF" },
          ],
          highlight: "first",
          rows: [
            { halide: "Hydrogen fluoride", formula: "\\(HF\\)", bp: "\\(293\\,\\text{K}\\)", imf: "Hydrogen bonding" },
            { halide: "Hydrogen chloride", formula: "\\(HCl\\)", bp: "\\(188\\,\\text{K}\\)", imf: "Dipole–dipole + London" },
            { halide: "Hydrogen bromide", formula: "\\(HBr\\)", bp: "\\(207\\,\\text{K}\\)", imf: "Dipole–dipole + London" },
            { halide: "Hydrogen iodide", formula: "\\(HI\\)", bp: "\\(238\\,\\text{K}\\)", imf: "Dipole–dipole + London" },
          ],
        },
        {
          kind: "callout",
          tone: "common-mistake",
          title: "Common mistake",
          body: "HF can hydrogen-bond, but HCl, HBr, and HI CANNOT — even though they all contain H bonded to a halogen. Only F (alongside N and O) is electronegative enough. The rise from HCl → HI is driven by stronger London forces (more electrons), NOT by hydrogen bonding.",
        },
      ],
    },
    {
      id: "spec-7-6",
      code: "7.6",
      title: "Factors Influencing Solvent Choice",
      blocks: [
        {
          kind: "lead",
          text: 'Dissolution depends on the balance of intermolecular interactions: a solute dissolves when the solute–solvent attractions are strong enough to overcome both solute–solute and solvent–solvent forces ("like dissolves like").',
        },
        {
          kind: "equation",
          label: "The dissolution rule",
          math: String.raw`\text{Solute–solvent attractions} \;\ge\; \text{Solute–solute} + \text{Solvent–solvent}`,
          caption: "If the new attractions can pay the energetic cost of breaking the old ones, dissolving happens.",
        },
        {
          kind: "diagram",
          title: "The solute-solvent forces that must be overcome",
          desc: "Three sets of interactions sit around a central solute-solvent attraction. Two of them, solute-solute and solvent-solvent, must be broken apart. The solute-solvent attraction formed in their place must be strong enough to compensate.",
          caption: "Two sets of forces come apart; one set of attractions has to form that is strong enough to pay for both.",
          variant: "soft",
          svg: `<svg viewBox="0 0 720 170"><rect x="256" y="60" width="208" height="52" rx="12" fill="var(--primary-soft)" stroke="var(--primary)" stroke-width="1.5"/><text x="360" y="82" text-anchor="middle" class="lbl" fill="var(--primary)">solute&ndash;solvent attractions</text><text x="360" y="101" text-anchor="middle" class="lbl-s" fill="var(--primary)">must be strong enough</text><rect x="20" y="60" width="200" height="52" rx="12" fill="var(--card)" stroke="var(--line)" stroke-width="1.2"/><text x="120" y="82" text-anchor="middle" class="lbl" fill="var(--ink-2)">solute&ndash;solute</text><text x="120" y="101" text-anchor="middle" class="lbl-s" fill="var(--ink-3)">must be broken</text><g stroke="var(--ink-3)" stroke-width="1.6" stroke-linecap="round"><line x1="226" y1="78" x2="248" y2="78"/><path d="M242 72 L250 78 L242 84" fill="none"/><line x1="226" y1="96" x2="248" y2="96"/><path d="M242 90 L250 96 L242 102" fill="none"/></g><rect x="500" y="60" width="200" height="52" rx="12" fill="var(--card)" stroke="var(--line)" stroke-width="1.2"/><text x="600" y="82" text-anchor="middle" class="lbl" fill="var(--ink-2)">solvent&ndash;solvent</text><text x="600" y="101" text-anchor="middle" class="lbl-s" fill="var(--ink-3)">must be broken</text><g stroke="var(--ink-3)" stroke-width="1.6" stroke-linecap="round"><line x1="472" y1="78" x2="450" y2="78"/><path d="M456 72 L448 78 L456 84" fill="none"/><line x1="472" y1="96" x2="450" y2="96"/><path d="M456 90 L448 96 L456 102" fill="none"/></g><text x="360" y="146" text-anchor="middle" class="lbl" fill="var(--ink-2)">&ldquo;like dissolves like&rdquo;</text></svg>`,
        },
        {
          kind: "heading",
          level: 3,
          id: "spec-7-6-i",
          tag: "7.6(i)",
          text: "Water as a Solvent for Ionic Compounds",
        },
        {
          kind: "definition-list",
          items: [
            {
              term: "Mechanism",
              body: "Giant ionic lattices are held together by strong electrostatic ionic bonds.",
            },
            {
              term: "Hydration",
              body: "Water is a polar solvent (\\(\\delta^+\\) H, \\(\\delta^-\\) O). When an ionic solid is placed in water, the \\(\\delta^+\\) hydrogen atoms attract negative anions, while \\(\\delta^-\\) oxygen atoms attract positive cations.",
            },
            {
              term: "Energetics",
              body: "The energy released during ion hydration (hydration enthalpy) supplies the energy needed to break apart the ionic lattice (lattice enthalpy).",
            },
          ],
        },
        {
          kind: "heading",
          level: 3,
          id: "spec-7-6-ii",
          tag: "7.6(ii)",
          text: "Water as a Solvent for Simple Alcohols",
        },
        {
          kind: "definition-list",
          items: [
            {
              term: "Mechanism",
              body: "Small alcohols (methanol, ethanol, propan-1-ol) are completely soluble in water because their hydroxyl (–OH) groups form hydrogen bonds with water molecules.",
            },
            {
              term: "Chain Length Effect",
              body: "As the non-polar hydrocarbon chain lengthens (e.g., hexanol, octanol), solubility in water decreases markedly. The non-polar alkyl chain cannot form hydrogen bonds with water and disrupts water's hydrogen-bonded network; hydrophobic London forces between long alkyl chains become predominant.",
            },
          ],
        },
        {
          kind: "heading",
          level: 3,
          id: "spec-7-6-iii",
          tag: "7.6(iii)",
          text: "Water as a Poor Solvent for Halogenoalkanes and Non-Polar Compounds",
        },
        {
          kind: "definition-list",
          items: [
            {
              term: "Explanation",
              body: "Halogenoalkanes contain polar C–X bonds but lack H–F, H–O, or H–N bonds, meaning they cannot form hydrogen bonds with water.",
            },
            {
              term: "Energetics",
              body: "The permanent dipole–dipole forces formed between halogenoalkanes and water are too weak to break the strong hydrogen bonds between water molecules, rendering halogenoalkanes insoluble or only sparingly soluble in water.",
            },
          ],
        },
        {
          kind: "heading",
          level: 3,
          id: "spec-7-6-iv",
          tag: "7.6(iv)",
          text: "Non-Aqueous Solvents for Non-Polar Compounds",
        },
        {
          kind: "definition-list",
          items: [
            {
              term: "Explanation",
              body: "Non-polar solutes (such as alkanes or iodine) readily dissolve in non-polar organic solvents (such as hexane or cyclohexane).",
            },
            {
              term: "Interactions",
              body: "The weak London forces broken between solute molecules and between solvent molecules are replaced by London forces of comparable strength between solute and solvent molecules.",
            },
          ],
        },
        {
          kind: "fact-box",
          label: "Solubility quick reference",
          tone: "key",
          facts: [
            { term: "Ionic in water", value: "✓ Soluble — hydration enthalpy pays lattice enthalpy" },
            { term: "Small alcohol in water", value: "✓ Soluble — H-bonds form with water" },
            { term: "Long-chain alcohol in water", value: "✗ Low solubility — hydrophobic chain dominates" },
            { term: "Halogenoalkane in water", value: "✗ Insoluble — cannot H-bond with water" },
            { term: "Non-polar in hexane", value: "✓ Soluble — 'like dissolves like'" },
          ],
        },
        {
          kind: "qa",
          question: "Why does propan-1-ol dissolve in water but propane does not, even though both have 3 carbons?",
          hint: "Think about which intermolecular forces each substance can form with water.",
          answer:
            "Propan-1-ol has a polar –OH group that forms strong hydrogen bonds with water, providing enough energy to break water's hydrogen-bond network. Propane is non-polar and can only form weak London forces with water — far too weak to break the existing water–water hydrogen bonds.",
        },
        {
          kind: "callout",
          tone: "key",
          title: '"Like dissolves like"',
          body: "Polar solutes dissolve in polar solvents; non-polar solutes dissolve in non-polar solvents. The deciding factor is whether the new solute–solvent attractions can pay the energetic cost of breaking the existing solute–solute and solvent–solvent interactions.",
        },
      ],
    },
  ],
};
