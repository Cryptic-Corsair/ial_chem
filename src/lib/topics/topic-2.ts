import type { Topic } from "./types";

/**
 * Topic 2: Atomic Structure and the Periodic Table
 * Verbatim spec points from the Edexcel IAL Chemistry specification (Unit 1).
 */
export const topic2: Topic = {
  number: 2,
  slug: "atomic-structure-periodic-table",
  title: "Atomic Structure and the Periodic Table",
  summary:
    "Subatomic particles, isotopes, mass spectrometry, ionisation energies, electronic configuration using s, p, d notation, and periodic trends in melting points and ionisation energy.",
  unit: 1,
  estimatedTime: "3 hours",
  difficulty: 3,
  published: true,
  intro:
    "Understanding atomic structure is the key to explaining the patterns in the Periodic Table. This topic takes you from protons, neutrons and electrons through to electronic configurations and the trends that drive chemical behaviour across Periods 2 and 3.",
  objectives: [
    "Describe the structure of an atom in terms of electrons, protons and neutrons, including relative mass and charge",
    "Use atomic number and mass number to determine the number of each subatomic particle",
    "Understand isotopes and interpret mass spectra to deduce isotopic composition and calculate relative atomic mass",
    "Predict mass spectra for diatomic molecules such as chlorine",
    "Define first, second and third ionisation energies and explain why they are endothermic",
    "Explain how ionisation energies are influenced by nuclear charge, electron shielding and sub-shell",
    "Describe the shapes of s and p orbitals and apply the rules for filling orbitals (Hund's rule, Pauli exclusion)",
    "Predict electronic configurations of atoms (H to Kr) and ions using s, p, d notation and electron-in-boxes",
    "Explain periodic trends in melting/boiling points and ionisation energies across Periods 2 and 3 and down a group",
  ],
  keyTakeaways: [
    {
      label: "Orbitals",
      body: "An orbital holds max 2 electrons with opposite spin. s = 1 orbital (2 e⁻), p = 3 orbitals (6 e⁻), d = 5 orbitals (10 e⁻).",
    },
    {
      label: "Filling order",
      body: "1s → 2s → 2p → 3s → 3p → 4s → 3d → 4p. Single electrons fill each orbital before pairing (Hund's rule).",
    },
    {
      label: "Ionisation energy",
      body: "Increases across a period (higher nuclear charge, same shell), decreases down a group (more shielding, larger atom).",
    },
    {
      label: "Mass spec",
      body: "m/z axis = mass-to-charge. Peak heights = isotopic abundances. Use them to calculate relative atomic mass.",
    },
  ],
  atAGlance: [
    { label: "Subatomic", value: "Proton (+1, mass 1), neutron (0, mass 1), electron (−1, mass 1/1836)" },
    { label: "Isotopes", value: "Same protons, different neutrons → identical chemistry" },
    { label: "Mass spec", value: "m/z peaks reveal isotopic abundances and molecular mass" },
    { label: "IE trend", value: "↑ across a period, ↓ down a group — driven by nuclear charge, radius, shielding" },
  ],
  specGroups: [
    {
      points: [
        {
          code: "2.1",
          text: "know the structure of an atom in terms of electrons, protons and neutrons",
        },
        {
          code: "2.2",
          text: "know the relative mass and charge of protons, neutrons and electrons",
        },
        {
          code: "2.3",
          text: "know what is meant by the terms 'atomic (proton) number' and 'mass number'",
        },
        {
          code: "2.4",
          text: "be able to use the atomic number and the mass number to determine the number of each type of subatomic particle in an atom or ion",
        },
        {
          code: "2.5",
          text: "understand the term 'isotope'",
        },
        {
          code: "2.6",
          text: "understand the basic principles of a mass spectrometer and be able to analyse and interpret mass spectra to:",
          subPoints: [
            "deduce the isotopic composition of a sample of an element",
            "calculate the relative atomic mass of an element from relative abundances of isotopes and vice versa",
            "determine the relative molecular mass of a molecule, and hence identify molecules in a sample",
            "understand that ions in a mass spectrometer may have a 2+ charge",
          ],
        },
        {
          code: "2.7",
          text: "be able to predict mass spectra, including relative peak heights, for diatomic molecules, including chlorine, given the isotopic abundances",
        },
        {
          code: "2.8",
          text: "be able to define first, second and third ionisation energies and understand that all ionisation energies are endothermic",
        },
        {
          code: "2.9",
          text: "know that an orbital is a region within an atom that can hold up to two electrons with opposite spins",
        },
        {
          code: "2.10",
          text: "understand how ionisation energies are influenced by the number of protons in the nucleus, the electron shielding and the sub-shell from which the electron is removed",
        },
        {
          code: "2.11",
          text: "know that ideas about electronic structure developed from:",
          subPoints: [
            "an understanding that successive ionisation energies provide evidence for the existence of quantum shells and the group to which the element belongs",
            "an understanding that the first ionisation energy of successive elements provides evidence for electron sub-shells",
          ],
        },
        {
          code: "2.12",
          text: "be able to describe the shapes of s and p orbitals",
        },
        {
          code: "2.13",
          text: "know that orbitals in sub-shells:",
          subPoints: [
            "each take a single electron before pairing up",
            "pair up with two electrons of opposite spin",
          ],
        },
        {
          code: "2.14",
          text: "be able to predict the electronic configuration of atoms of the elements from hydrogen to krypton inclusive and their ions, using s, p, d notation and electron-in-boxes notation",
        },
        {
          code: "2.15",
          text: "understand that electronic configuration determines the chemical properties of an element",
        },
        {
          code: "2.16",
          text: "know that the Periodic Table is divided into blocks, such as s, p and d, and know the number of electrons that can occupy s, p and d sub-shells in the first four quantum shells",
        },
        {
          code: "2.17",
          text: "be able to represent data, in a graphical form (including the use of logarithms of first ionisation energies on a graph) for elements 1 to 36 and hence explain the meaning of the term 'periodic property'",
        },
        {
          code: "2.18",
          text: "be able to explain:",
          subPoints: [
            "the trends in melting and boiling temperatures of the elements of Periods 2 and 3 of the Periodic Table in terms of the structure of the element and the bonding between its atoms or molecules",
            "the general increase and the specific trends in ionisation energy of the elements across Periods 2 and 3 of the Periodic Table",
            "the decrease in first ionisation energy down a group",
          ],
        },
      ],
    },
  ],
  sections: [
    {
      id: "spec-2a",
      code: "2A",
      title: "Atomic Structure, Isotopes and Mass Spectrometry",
      blocks: [
        {
          kind: "lead",
          text: "Every chemical behaviour starts with the atom. This section covers subatomic particles, isotopes, and how a mass spectrometer reveals the isotopic composition of an element — the foundation for everything that follows in the course.",
        },
        {
          kind: "heading",
          level: 3,
          id: "spec-2-1-2",
          tag: "2.1–2.2",
          text: "Structure of the Atom and Subatomic Particles",
        },
        {
          kind: "definition-list",
          items: [
            { term: "Nuclear structure", body: "An atom consists of a central, extremely small, dense nucleus containing protons and neutrons (collectively termed nucleons)." },
            { term: "Extranuclear region", body: "Electrons orbit around the nucleus in defined quantum energy levels or shells." },
            { term: "Atomic volume", body: "Most of an atom's volume is empty space surrounding the dense nucleus." },
          ],
        },
        {
          kind: "table",
          caption: "Relative mass and charge of subatomic particles",
          columns: [
            { key: "particle", header: "Particle" },
            { key: "mass", header: "Relative mass" },
            { key: "charge", header: "Relative charge" },
            { key: "location", header: "Location" },
          ],
          rows: [
            { particle: "Proton", mass: "\\(1\\)", charge: "\\(+1\\)", location: "Nucleus" },
            { particle: "Neutron", mass: "\\(1\\)", charge: "\\(0\\) (neutral)", location: "Nucleus" },
            { particle: "Electron", mass: "\\(\\frac{1}{1836}\\) (or 0.00055)", charge: "\\(-1\\)", location: "Quantum shells" },
          ],
        },
        {
          kind: "heading",
          level: 3,
          id: "spec-2-3-4",
          tag: "2.3–2.4",
          text: "Atomic Number, Mass Number, and Subatomic Particle Counting",
        },
        {
          kind: "definition-list",
          items: [
            { term: "Atomic (proton) number (\\(Z\\))", body: "The total number of protons in the nucleus of an atom of an element. It uniquely defines the chemical identity of the element." },
            { term: "Mass number (\\(A\\))", body: "The total number of protons plus neutrons (nucleons) in the nucleus of an atom." },
            { term: "Neutral atom", body: "Protons = \\(Z\\). Electrons = \\(Z\\). Neutrons = \\(A - Z\\)." },
            { term: "Cation (\\(X^{n+}\\))", body: "Formed when electrons are lost. Protons = \\(Z\\), electrons = \\(Z - n\\), neutrons = \\(A - Z\\)." },
            { term: "Anion (\\(Y^{m-}\\))", body: "Formed when electrons are gained. Protons = \\(Z\\), electrons = \\(Z + m\\), neutrons = \\(A - Z\\)." },
          ],
        },
        {
          kind: "callout",
          tone: "exam-alert",
          title: "Worked example: aluminium ion",
          body: "For an aluminium ion, \\(^{27}_{13}\\text{Al}^{3+}\\): protons = 13, neutrons = \\(27 - 13 = 14\\), electrons = \\(13 - 3 = 10\\).",
        },
        {
          kind: "heading",
          level: 3,
          id: "spec-2-5",
          tag: "2.5",
          text: "Isotopes",
        },
        {
          kind: "definition-list",
          items: [
            { term: "Isotope definition", body: "Atoms of the same element with the same number of protons (same atomic number) but different numbers of neutrons (different mass number)." },
          ],
        },
        {
          kind: "callout",
          tone: "common-mistake",
          title: "Mark scheme alert",
          body: "Examiners strictly require the word 'atoms' in your definition. Stating 'elements with different numbers of neutrons' or 'molecules with the same proton number' will cost you the mark.",
        },
        {
          kind: "heading",
          level: 3,
          id: "spec-2-6",
          tag: "2.6",
          text: "Mass Spectrometry — Principles and Interpretation",
        },
        {
          kind: "steps",
          title: "Basic operating steps of a mass spectrometer",
          items: [
            { term: "Vapourisation", body: "Sample is converted to gas." },
            { term: "Ionisation", body: "High-energy electrons knock out electrons from sample atoms to produce positive ions: \\(\\text{X}(\\text{g}) + \\text{e}^- \\rightarrow \\text{X}^+(\\text{g}) + 2\\text{e}^-\\)." },
            { term: "Acceleration", body: "Positive ions are accelerated by an electric field to give equal kinetic energy." },
            { term: "Deflection", body: "Magnetic field deflects ions based on their mass-to-charge ratio (\\(m/z\\)). Lighter or more highly charged ions experience greater deflection." },
            { term: "Detection", body: "Ions hit a detector generating an electric current proportional to abundance." },
          ],
        },
        {
          kind: "definition-list",
          items: [
            { term: "Relative atomic mass (\\(A_r\\))", body: "\\(A_r = \\frac{\\sum (\\text{isotopic } m/z \\times \\text{relative abundance})}{\\text{total abundance}}\\). Report to 2 decimal places." },
            { term: "Molecular ion peak (\\(M^+\\))", body: "The peak with the highest \\(m/z\\) value (excluding small \\(M+1\\) carbon-13 peaks) represents the intact molecular ion (\\(\\text{M}^+\\)), giving the \\(M_r\\) of the molecule." },
            { term: "Fragment ions", body: "Lower \\(m/z\\) peaks are caused by covalent bond breakage during electron bombardment." },
            { term: "Double-charged ions (\\(2+\\) charge)", body: "If an atom loses two electrons during ionisation, it forms an \\(\\text{X}^{2+}\\) ion. Its recorded \\(m/z\\) value will be halved (e.g. \\(^{24}\\text{Mg}^{2+}\\) produces a peak at \\(m/z = 12\\))." },
          ],
        },
        {
          kind: "heading",
          level: 3,
          id: "spec-2-7",
          tag: "2.7",
          text: "Predicting Mass Spectra for Diatomic Molecules",
        },
        {
          kind: "definition-list",
          items: [
            { term: "Chlorine isotopes", body: "Chlorine naturally consists of \\(^{35}\\text{Cl}\\) (75% or \\(\\frac{3}{4}\\)) and \\(^{37}\\text{Cl}\\) (25% or \\(\\frac{1}{4}\\))." },
            { term: "Monoatomic peaks", body: "At \\(m/z = 35\\) and 37 in a \\(3 : 1\\) ratio (\\(^{35}\\text{Cl}^+\\) and \\(^{37}\\text{Cl}^+\\))." },
          ],
        },
        {
          kind: "table",
          caption: "Chlorine diatomic molecular ion peaks (Cl₂⁺) — probabilities and peak ratios",
          columns: [
            { key: "species", header: "Species" },
            { key: "mz", header: "m/z" },
            { key: "probability", header: "Probability" },
          ],
          rows: [
            { species: "\\(^{35}\\text{Cl}-^{35}\\text{Cl}^+\\)", mz: "70", probability: "\\(\\frac{3}{4} \\times \\frac{3}{4} = \\frac{9}{16}\\)" },
            { species: "\\(^{35}\\text{Cl}-^{37}\\text{Cl}^+\\) / \\(^{37}\\text{Cl}-^{35}\\text{Cl}^+\\)", mz: "72", probability: "\\(2 \\times (\\frac{3}{4} \\times \\frac{1}{4}) = \\frac{6}{16}\\)" },
            { species: "\\(^{37}\\text{Cl}-^{37}\\text{Cl}^+\\)", mz: "74", probability: "\\(\\frac{1}{4} \\times \\frac{1}{4} = \\frac{1}{16}\\)" },
          ],
        },
        {
          kind: "callout",
          tone: "key",
          title: "Peak height ratio",
          body: "For chlorine, the peak height ratio at \\(m/z = 70 : 72 : 74\\) is \\(9 : 6 : 1\\).",
        },
        {
          kind: "callout",
          tone: "tip",
          title: "Bromine — the easy one",
          body: "\\(^{79}\\text{Br}\\) (50%) and \\(^{81}\\text{Br}\\) (50%). Diatomic molecular ion peaks at \\(m/z = 158, 160, 162\\) occur in a ratio of \\(1 : 2 : 1\\).",
        },
        {
          kind: "qa",
          question: "A sample of chlorine gas is analysed in a mass spectrometer. Explain why the peak at \\(m/z = 72\\) is roughly twice the height of the peak at \\(m/z = 70\\), even though \\(^{35}\\text{Cl}\\) is more abundant than \\(^{37}\\text{Cl}\\).",
          hint: "Think about how many ways you can make each molecular ion.",
          answer: "The \\(m/z = 72\\) peak comes from \\(^{35}\\text{Cl}-^{37}\\text{Cl}^+\\) AND \\(^{37}\\text{Cl}-^{35}\\text{Cl}^+\\) — two different combinations. The \\(m/z = 70\\) peak comes only from \\(^{35}\\text{Cl}-^{35}\\text{Cl}^+\\). So the \\(m/z = 72\\) peak has two contributing pathways (probability \\(\\frac{6}{16}\\)) versus one pathway for \\(m/z = 70\\) (probability \\(\\frac{9}{16}\\)). The ratio is \\(9:6:1\\) for \\(70:72:74\\).",
        },
      ],
    },
    {
      id: "spec-2b",
      code: "2B",
      title: "Ionisation Energies and Electronic Structure",
      blocks: [
        {
          kind: "lead",
          text: "Ionisation energies are the experimental evidence that electrons live in quantised shells and sub-shells. This section connects the numbers to the underlying structure of the atom.",
        },
        {
          kind: "heading",
          level: 3,
          id: "spec-2-8",
          tag: "2.8",
          text: "First, Second and Third Ionisation Energies",
        },
        {
          kind: "definition-list",
          items: [
            { term: "First ionisation energy (\\(IE_1\\))", body: "The energy required to remove one mole of electrons from one mole of gaseous atoms to form one mole of gaseous 1+ ions." },
            { term: "Second ionisation energy (\\(IE_2\\))", body: "Energy to remove one mole of electrons from one mole of gaseous 1+ ions to form gaseous 2+ ions." },
            { term: "Third ionisation energy (\\(IE_3\\))", body: "Energy to remove one mole of electrons from one mole of gaseous 2+ ions to form gaseous 3+ ions." },
            { term: "Endothermic nature", body: "All ionisation energies are positive (\\(\\Delta H > 0\\)) because energy is absorbed to overcome the electrostatic attraction between the positively charged nucleus and the negative electron." },
          ],
        },
        {
          kind: "equation",
          label: "1. First ionisation energy",
          math: String.raw`\text{X}(\text{g}) \rightarrow \text{X}^+(\text{g}) + \text{e}^-`,
        },
        {
          kind: "equation",
          label: "2. Second ionisation energy",
          math: String.raw`\text{X}^+(\text{g}) \rightarrow \text{X}^{2+}(\text{g}) + \text{e}^-`,
        },
        {
          kind: "equation",
          label: "3. Third ionisation energy",
          math: String.raw`\text{X}^{2+}(\text{g}) \rightarrow \text{X}^{3+}(\text{g}) + \text{e}^-`,
        },
        {
          kind: "heading",
          level: 3,
          id: "spec-2-9",
          tag: "2.9",
          text: "Orbitals and Sub-shell Capacities",
        },
        {
          kind: "definition-list",
          items: [
            { term: "Atomic orbital", body: "A region within an atom that can hold up to two electrons with opposite spins (a region of high probability of finding an electron)." },
            { term: "s-subshell", body: "1 orbital \\(\\rightarrow\\) max 2 electrons." },
            { term: "p-subshell", body: "3 orbitals \\(\\rightarrow\\) max 6 electrons." },
            { term: "d-subshell", body: "5 orbitals \\(\\rightarrow\\) max 10 electrons." },
            { term: "f-subshell", body: "7 orbitals \\(\\rightarrow\\) max 14 electrons." },
          ],
        },
        {
          kind: "heading",
          level: 3,
          id: "spec-2-10",
          tag: "2.10",
          text: "Factors Influencing Ionisation Energies",
        },
        {
          kind: "definition-list",
          items: [
            { term: "Nuclear charge (protons)", body: "More protons \\(\\rightarrow\\) stronger electrostatic pull on outer electrons \\(\\rightarrow\\) higher \\(IE\\)." },
            { term: "Atomic radius / distance", body: "Outer electron further from nucleus \\(\\rightarrow\\) weaker electrostatic attraction \\(\\rightarrow\\) lower \\(IE\\)." },
            { term: "Electron shielding", body: "Inner shell electrons repel outer electrons, shielding them from full nuclear attraction \\(\\rightarrow\\) lower \\(IE\\)." },
            { term: "Sub-shell energy & pairing repulsion", body: "Electrons in higher energy subshells (3p vs 3s) or paired orbitals (electron-electron repulsion) require less energy to remove." },
          ],
        },
        {
          kind: "heading",
          level: 3,
          id: "spec-2-11",
          tag: "2.11",
          text: "Evidence for Quantum Shells and Sub-shells",
        },
        {
          kind: "definition-list",
          items: [
            { term: "Quantum shell evidence", body: "Large jumps between successive ionisation energies occur when an electron is removed from a new quantum shell closer to the nucleus (experiencing drastically less shielding). The number of electrons removed before the first huge jump equals the number of outer shell electrons, revealing the element's Group number." },
            { term: "Sub-shell evidence", body: "Small dips in first ionisation energy across Period 2 (\\(\\text{Be} \\rightarrow \\text{B}\\) and \\(\\text{N} \\rightarrow \\text{O}\\)) and Period 3 (\\(\\text{Mg} \\rightarrow \\text{Al}\\) and \\(\\text{P} \\rightarrow \\text{S}\\)) prove that main quantum shells are subdivided into s and p sub-shells." },
          ],
        },
        {
          kind: "heading",
          level: 3,
          id: "spec-2-12",
          tag: "2.12",
          text: "Shapes of s and p Orbitals",
        },
        {
          kind: "definition-list",
          items: [
            { term: "s-orbital", body: "Spherical / ball-shaped." },
            { term: "p-orbital", body: "Dumbbell-shaped, aligned along \\(x\\), \\(y\\), or \\(z\\) axes." },
          ],
        },
        {
          kind: "heading",
          level: 3,
          id: "spec-2-13",
          tag: "2.13",
          text: "Hund's Rule and Pauli Exclusion Principle",
        },
        {
          kind: "definition-list",
          items: [
            { term: "Hund's rule", body: "Degenerate orbitals (orbitals of equal energy, e.g. \\(2\\text{p}_x, 2\\text{p}_y, 2\\text{p}_z\\)) fill singly with parallel spins before pairing occurs." },
            { term: "Pauli exclusion principle", body: "An orbital can accommodate a maximum of two electrons, which must possess opposite spins (\\(\\uparrow\\downarrow\\)) to minimise mutual repulsion." },
          ],
        },
        {
          kind: "heading",
          level: 3,
          id: "spec-2-14",
          tag: "2.14",
          text: "Electronic Configuration (H to Kr) and Ions",
        },
        {
          kind: "definition-list",
          items: [
            { term: "Filling sequence", body: "\\(1\\text{s} \\rightarrow 2\\text{s} \\rightarrow 2\\text{p} \\rightarrow 3\\text{s} \\rightarrow 3\\text{p} \\rightarrow 4\\text{s} \\rightarrow 3\\text{d} \\rightarrow 4\\text{p}\\)." },
          ],
        },
        {
          kind: "callout",
          tone: "exam-alert",
          title: "Essential d-block exceptions",
          body: "Chromium (\\(Z=24\\)): \\(1\\text{s}^2 2\\text{s}^2 2\\text{p}^6 3\\text{s}^2 3\\text{p}^6 3\\text{d}^5 4\\text{s}^1\\) — half-filled \\(3\\text{d}\\) subshell provides extra stability. Copper (\\(Z=29\\)): \\(1\\text{s}^2 2\\text{s}^2 2\\text{p}^6 3\\text{s}^2 3\\text{p}^6 3\\text{d}^{10} 4\\text{s}^1\\) — fully filled \\(3\\text{d}\\) subshell provides extra stability.",
        },
        {
          kind: "callout",
          tone: "common-mistake",
          title: "Transition metal cation rule",
          body: "When transition metals lose electrons to form ions, \\(4\\text{s}\\) electrons are lost BEFORE \\(3\\text{d}\\) electrons. Example: \\(\\text{Fe}\\) (\\([\\text{Ar}]\\, 3\\text{d}^6 4\\text{s}^2\\)) \\(\\rightarrow\\) \\(\\text{Fe}^{2+}\\) (\\([\\text{Ar}]\\, 3\\text{d}^6\\)) and \\(\\text{Fe}^{3+}\\) (\\([\\text{Ar}]\\, 3\\text{d}^5\\)). Example: \\(\\text{Cu}^{2+}\\) is \\([\\text{Ar}]\\, 3\\text{d}^9\\).",
        },
        {
          kind: "heading",
          level: 3,
          id: "spec-2-15-16",
          tag: "2.15–2.16",
          text: "Electronic Configuration, Chemical Properties, and Periodic Blocks",
        },
        {
          kind: "definition-list",
          items: [
            { term: "Chemical properties", body: "Outer shell (valence) electron configuration dictates chemical reactivity, bonding behaviour, and valency. Elements in the same group have identical outer shell configurations and therefore undergo similar chemical reactions. Isotopes have identical electronic configurations, giving them identical chemical properties." },
            { term: "s-block", body: "Groups 1 & 2 (outermost electron in an s-orbital)." },
            { term: "p-block", body: "Groups 3 to 8/0 (outermost electron in a p-orbital)." },
            { term: "d-block", body: "Transition metals (filling d-orbitals)." },
          ],
        },
        {
          kind: "table",
          caption: "Quantum shell capacities (\\(n=1\\) to 4)",
          columns: [
            { key: "shell", header: "Quantum shell" },
            { key: "subshells", header: "Sub-shells" },
            { key: "electrons", header: "Max electrons" },
          ],
          rows: [
            { shell: "\\(n=1\\)", subshells: "\\(1\\text{s}^2\\)", electrons: "2" },
            { shell: "\\(n=2\\)", subshells: "\\(2\\text{s}^2 2\\text{p}^6\\)", electrons: "8" },
            { shell: "\\(n=3\\)", subshells: "\\(3\\text{s}^2 3\\text{p}^6 3\\text{d}^{10}\\)", electrons: "18" },
            { shell: "\\(n=4\\)", subshells: "\\(4\\text{s}^2 4\\text{p}^6 4\\text{d}^{10} 4\\text{f}^{14}\\)", electrons: "32" },
          ],
        },
        {
          kind: "heading",
          level: 3,
          id: "spec-2-17",
          tag: "2.17",
          text: "Periodic Properties and Logarithmic Graphs",
        },
        {
          kind: "definition-list",
          items: [
            { term: "Periodic property", body: "A property that shows a repeating pattern or trend across periods of the Periodic Table." },
            { term: "Logarithmic graphs (\\(\\log_{10} IE\\))", body: "Because successive ionisation energies span huge numerical ranges (from hundreds to tens of thousands of \\(\\text{kJ mol}^{-1}\\)), plotting \\(\\log_{10}(\\text{ionisation energy})\\) vs electron removed turns exponential jumps into distinct linear steps, allowing clear identification of quantum shell boundaries." },
          ],
        },
        {
          kind: "qa",
          question: "The successive ionisation energies of an element \\(X\\) show a large jump between the 5th and 6th ionisation energies. To which group does \\(X\\) belong?",
          hint: "Count how many electrons are removed before the big jump.",
          answer: "Group 5. The large jump occurs when an electron is removed from a new (inner) quantum shell. The number of electrons removed before the first huge jump equals the number of outer shell electrons, which equals the group number. Here, 5 electrons are removed before the jump, so \\(X\\) is in Group 5.",
        },
      ],
    },
    {
      id: "spec-2c",
      code: "2C",
      title: "Periodic Trends in Periods 2 and 3",
      blocks: [
        {
          kind: "lead",
          text: "The Periodic Table is a pattern, and the pattern is built from atomic structure. This section explains why melting points and ionisation energies change the way they do across Periods 2 and 3, and down a group.",
        },
        {
          kind: "heading",
          level: 3,
          id: "spec-2-18i",
          tag: "2.18(i)",
          text: "Trends in Melting and Boiling Temperatures (Periods 2 & 3)",
        },
        {
          kind: "definition-list",
          items: [
            { term: "Metallic elements (\\(\\text{Li}, \\text{Be}, \\text{Na}, \\text{Mg}, \\text{Al}\\))", body: "Melting points increase from Group 1 to Group 3 because ionic charge increases, more delocalised electrons are donated per cation, and ionic radii decrease \\(\\rightarrow\\) stronger metallic bonding." },
            { term: "Giant covalent elements (\\(\\text{B}, \\text{C}, \\text{Si}\\))", body: "Highest melting temperatures in Periods 2 & 3. Diamond, graphite, and silicon possess giant 3D macromolecular structures with strong covalent bonds extending throughout the lattice, requiring vast thermal energy to break." },
            { term: "Simple molecular elements (\\(\\text{P}_4, \\text{S}_8, \\text{Cl}_2\\)) & noble gases (\\(\\text{Ar}\\))", body: "Low melting points due to weak London dispersion forces between discrete molecules." },
          ],
        },
        {
          kind: "callout",
          tone: "key",
          title: "Melting point order (simple molecules)",
          body: "\\(\\text{S}_8 > \\text{P}_4 > \\text{Cl}_2 > \\text{Ar}\\). \\(\\text{S}_8\\) has the highest melting point among the simple molecules because it is a larger molecule with more electrons, creating stronger London dispersion forces.",
        },
        {
          kind: "heading",
          level: 3,
          id: "spec-2-18ii",
          tag: "2.18(ii)",
          text: "First Ionisation Energy Trends Across Periods 2 & 3",
        },
        {
          kind: "definition-list",
          items: [
            { term: "General trend", body: "\\(IE_1\\) increases across Period 2 and Period 3. Proton number / nuclear charge increases, atomic radius decreases, and shielding remains relatively constant \\(\\rightarrow\\) stronger attraction on outer electrons." },
            { term: "Drop 1: Group 2 \\(\\rightarrow\\) 3 (\\(\\text{Be} \\rightarrow \\text{B}\\), \\(\\text{Mg} \\rightarrow \\text{Al}\\))", body: "The outer electron in \\(\\text{B}\\)/\\(\\text{Al}\\) is in a p-subshell (\\(2\\text{p}\\) or \\(3\\text{p}\\)), which is at a higher energy level and shielded by the inner s-electrons (\\(2\\text{s}\\) or \\(3\\text{s}\\)) \\(\\rightarrow\\) requires less energy to remove." },
            { term: "Drop 2: Group 5 \\(\\rightarrow\\) 6 (\\(\\text{N} \\rightarrow \\text{O}\\), \\(\\text{P} \\rightarrow \\text{S}\\))", body: "In \\(\\text{O}\\)/\\(\\text{S}\\), the electron is removed from a paired p-orbital. Inter-electron repulsion between the two paired electrons in the same orbital makes it easier to remove." },
          ],
        },
        {
          kind: "heading",
          level: 3,
          id: "spec-2-18iii",
          tag: "2.18(iii)",
          text: "Decrease in First Ionisation Energy Down a Group",
        },
        {
          kind: "definition-list",
          items: [
            { term: "Trend", body: "Moving down a group, \\(IE_1\\) decreases." },
            { term: "Explanation", body: "Extra quantum shells are added \\(\\rightarrow\\) atomic radius increases \\(\\rightarrow\\) electron shielding increases \\(\\rightarrow\\) outer electrons experience a weaker electrostatic attraction to the nucleus despite the increasing nuclear charge." },
          ],
        },
        {
          kind: "callout",
          tone: "exam-alert",
          title: "Exam answer structure",
          body: "When asked to explain an ionisation energy trend, always state all three factors: (1) nuclear charge, (2) atomic radius / distance, (3) shielding. Then link them to the strength of electrostatic attraction and the energy required to remove the electron. Missing any factor costs marks.",
        },
      ],
    },
  ],
};
