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
};
