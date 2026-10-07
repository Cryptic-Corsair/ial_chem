import type { Topic } from "./types";

/**
 * Topic 1: Formulae, Equations and Amount of Substance
 * Verbatim spec points from the Edexcel International A-Level Chemistry
 * specification (Unit 1).
 */
export const topic1: Topic = {
  number: 1,
  slug: "formulae-equations-amount-of-substance",
  title: "Formulae, Equations and Amount of Substance",
  summary:
    "Writing formulae and equations, the mole, Avogadro's constant, molar volume, ideal gas equation, empirical/molecular formulae, reacting masses, percentage yield and atom economy.",
  unit: 1,
  estimatedTime: "3 hours",
  difficulty: 3,
  published: true,
  intro:
    "Application of ideas from this topic will be applied to all other units. This is the foundation of all quantitative chemistry — master the mole and everything else follows.",
  objectives: [
    "Use the terms atom, element, ion, molecule, compound, empirical formula and molecular formula correctly",
    "Perform calculations using the Avogadro constant, L (6.02 × 10²³ mol⁻¹)",
    "Write balanced full and ionic equations, including state symbols",
    "Calculate relative atomic, molecular and formula masses, molar mass, and use ppm",
    "Calculate solution concentrations in mol dm⁻³ and g dm⁻³",
    "Determine empirical and molecular formulae from experimental data",
    "Use chemical equations for reacting masses, gas volumes, and the ideal gas equation pV = nRT",
    "Calculate percentage yields and percentage atom economies",
  ],
  keyTakeaways: [
    {
      label: "The mole",
      body: "1 mole = 6.02 × 10²³ particles (Avogadro's constant, L). Mass of 1 mole = molar mass in g.",
    },
    {
      label: "Conversions",
      body: "moles = mass ÷ molar mass = concentration × volume ÷ 1000 = volume (gas) ÷ molar volume (24 dm³ at RTP).",
    },
    {
      label: "Ideal gas",
      body: "pV = nRT. Use SI units: p in Pa, V in m³, T in K. R = 8.31 J mol⁻¹ K⁻¹.",
    },
    {
      label: "Atom economy",
      body: "(molar mass of desired product ÷ sum of molar masses of all products) × 100%. Different from % yield.",
    },
  ],
  specGroups: [
    {
      points: [
        {
          code: "1.1",
          text: "know the terms 'atom', 'element', 'ion', 'molecule', 'compound', 'empirical formula' and 'molecular formula'",
        },
        {
          code: "1.2",
          text: "know that the mole (mol) is the unit for the amount of a substance and be able to perform calculations using the Avogadro constant L (6.02 × 10²³ mol⁻¹)",
        },
        {
          code: "1.3",
          text: "write balanced full and ionic equations, including state symbols, for chemical reactions",
        },
        {
          code: "1.4",
          text: "understand the terms:",
          subPoints: [
            "'relative atomic mass' based on the ¹²C scale",
            "'relative molecular mass' and 'relative formula mass', including calculating these values from relative atomic masses. The term 'relative formula mass' should be used for compounds with giant structures.",
            "'molar mass' as the mass per mole of a substance in g mol⁻¹",
            "parts per million (ppm), including gases in the atmosphere",
          ],
        },
        {
          code: "1.5",
          text: "calculate the concentration of a solution in mol dm⁻³ and g dm⁻³. Titration calculations are not required at this stage.",
        },
        {
          code: "1.6",
          text: "be able to use experimental data to calculate empirical and molecular formulae",
        },
        {
          code: "1.7",
          text: "be able to use chemical equations to calculate reacting masses and vice versa, using the concepts of amount of substance and molar mass",
        },
        {
          code: "1.8",
          text: "be able to use chemical equations to calculate volumes of gases and vice versa, using:",
          subPoints: [
            "the concepts of amount of substance",
            "the molar volume of gases",
            "the expression pV = nRT for gases and volatile liquids",
          ],
        },
        {
          code: "1.9",
          text: "be able to calculate percentage yields and percentage atom economies (by mass) in laboratory and industrial processes, using chemical equations and experimental results. Atom economy = (molar mass of the desired product × 100%) ÷ sum of the molar masses of all products",
        },
        {
          code: "1.10",
          text: "be able to determine a formula or confirm an equation by experiment, including evaluation of the data",
        },
        {
          code: "1.11",
          text: "CORE PRACTICAL 1: Measurement of the molar volume of a gas.",
          isCorePractical: true,
        },
        {
          code: "1.12",
          text: "be able to relate ionic and full equations, with state symbols, to observations from simple test-tube experiments, to include:",
          subPoints: [
            "displacement reactions",
            "typical reactions of acids",
            "precipitation reactions",
          ],
        },
      ],
    },
  ],
};
