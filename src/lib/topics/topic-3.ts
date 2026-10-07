import type { Topic } from "./types";

/**
 * Topic 3: Bonding and Structure
 * Verbatim spec points from the Edexcel IAL Chemistry specification (Unit 1).
 * Organised into four sub-sections: 3A Ionic, 3B Covalent, 3C Shapes, 3D Metallic.
 */
export const topic3: Topic = {
  number: 3,
  slug: "bonding-and-structure",
  title: "Bonding and Structure",
  summary:
    "Ionic, covalent and metallic bonding; dot-and-cross diagrams; electronegativity and polarity; shapes of molecules by electron-pair repulsion; properties of giant structures.",
  unit: 1,
  estimatedTime: "4 hours",
  difficulty: 4,
  published: true,
  intro:
    "Three types of strong chemical bonding — ionic, covalent and metallic — explain the properties of almost every substance you'll meet. This topic also covers electronegativity, bond polarity, and how to predict the shapes of molecules using electron-pair repulsion theory.",
  objectives: [
    "Interpret evidence for ions and describe ionic bonding as electrostatic attraction in giant lattices",
    "Explain trends in ionic radii and the effects of ionic radius and charge on bond strength",
    "Understand polarisation, polarising power and polarisability",
    "Draw dot-and-cross diagrams for covalent molecules, including those with dative bonds (Al₂Cl₆, NH₄⁺)",
    "Describe giant covalent structures: graphite, diamond, graphene",
    "Use electronegativity to predict bond polarity and ionic character",
    "Distinguish polar bonds from polar molecules",
    "Apply electron-pair repulsion theory to predict shapes and bond angles of common molecules and ions",
    "Describe metallic bonding and use it to explain electrical conductivity and high melting points",
  ],
  keyTakeaways: [
    {
      label: "Three bond types",
      body: "Ionic (electrostatic attraction between ions), covalent (shared electron pair between two nuclei), metallic (cation lattice in a sea of delocalised electrons).",
    },
    {
      label: "Electronegativity",
      body: "Large ΔEN → ionic. Small ΔEN → polar covalent. ~0 → non-polar covalent. Polar bond ≠ polar molecule (symmetry matters).",
    },
    {
      label: "Shapes (VSEPR)",
      body: "2 pairs = linear (180°), 3 = trigonal planar (120°), 4 = tetrahedral (109.5°), 5 = trigonal bipyramidal, 6 = octahedral. Lone pairs compress bond angles.",
    },
    {
      label: "Giant vs simple",
      body: "Giant ionic/covalent/metallic = high mp. Simple molecular = low mp, governed by intermolecular forces (Topic 7).",
    },
  ],
  specGroups: [
    {
      code: "3A",
      title: "Ionic bonding",
      points: [
        {
          code: "3.1",
          text: "know and be able to interpret evidence for the existence of ions, limited to physical properties of ionic compounds, electron density maps and the migration of ions",
        },
        {
          code: "3.2",
          text: "be able to describe the formation of ions in terms of loss or gain of electrons",
        },
        {
          code: "3.3",
          text: "be able to draw dot-and-cross diagrams to show electrons in cations and anions",
        },
        {
          code: "3.4",
          text: "be able to describe ionic crystals as giant lattices of ions",
        },
        {
          code: "3.5",
          text: "know that ionic bonding is the result of strong net electrostatic attraction between ions",
        },
        {
          code: "3.6",
          text: "understand the effects of ionic radius and ionic charge on the strength of ionic bonding",
        },
        {
          code: "3.7",
          text: "understand reasons for the trends in ionic radii down a group in the Periodic Table, and for a set of isoelectronic ions, including N³⁻ to Al³⁺",
        },
        {
          code: "3.8",
          text: "understand the meaning of the term 'polarisation' as applied to ions",
        },
        {
          code: "3.9",
          text: "understand that the polarising power of a cation depends on its radius and charge, and the polarisability of an anion also depends on its radius and charge",
        },
      ],
    },
    {
      code: "3B",
      title: "Covalent bonding",
      points: [
        {
          code: "3.10",
          text: "understand that covalent bonding is the strong electrostatic attraction between two nuclei and the shared pair of electrons between them, based on the evidence:",
          subPoints: [
            "the physical properties of giant atomic structures",
            "electron density maps for simple molecules",
          ],
        },
        {
          code: "3.11",
          text: "be able to draw dot-and-cross diagrams to show electrons in covalent substances, including:",
          subPoints: [
            "molecules with single, double and triple bonds",
            "species with dative covalent (coordinate) bonds, including Al₂Cl₆ and the ammonium ion",
          ],
        },
        {
          code: "3.12",
          text: "be able to describe the different structures formed by giant lattices of carbon atoms, including graphite, diamond and graphene, and discuss the applications of each",
        },
        {
          code: "3.13",
          text: "understand the meaning of the term 'electronegativity' as applied to atoms in a covalent bond",
        },
        {
          code: "3.14",
          text: "know that ionic and covalent bonding are the extremes of a continuum of bonding type and be able to explain this in terms of electronegativity differences, leading to bond polarity in bonds and molecules, and to ionic bonding if the electronegativity is large enough",
        },
        {
          code: "3.15",
          text: "be able to distinguish between polar bonds and polar molecules and predict whether or not a given molecule is likely to be polar",
        },
      ],
    },
    {
      code: "3C",
      title: "Shapes of molecules",
      points: [
        {
          code: "3.16",
          text: "understand the principles of the electron-pair repulsion theory, used to interpret and predict the shapes of simple molecules and ions",
        },
        {
          code: "3.17",
          text: "understand the terms 'bond length' and 'bond angle'",
        },
        {
          code: "3.18",
          text: "know and be able to explain the shapes of, and bond angles in, BeCl₂, BCl₃, CH₄, NH₃, NH₄⁺, H₂O, CO₂, gaseous PCl₅, SF₆ and C₂H₄",
        },
        {
          code: "3.19",
          text: "be able to apply the electron-pair repulsion theory to predict the shapes of, and bond angles in, molecules and ions analogous to those in 3.18",
        },
      ],
    },
    {
      code: "3D",
      title: "Metallic bonding",
      points: [
        {
          code: "3.20",
          text: "understand that metals consist of giant lattices of metal ions in a sea of delocalised electrons",
        },
        {
          code: "3.21",
          text: "know that metallic bonding is the strong electrostatic attraction between metal ions and the delocalised electrons",
        },
        {
          code: "3.22",
          text: "be able to use the models in 3.20 and 3.21 to interpret simple properties of metals, including electrical conductivity and high melting temperature",
        },
      ],
    },
  ],
};
