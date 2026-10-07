import type { Topic } from "./types";

/**
 * Topic 6: Energetics
 * Verbatim spec points from the Edexcel IAL Chemistry specification (Unit 2).
 */
export const topic6: Topic = {
  number: 6,
  slug: "energetics",
  title: "Energetics",
  summary:
    "Enthalpy change, exothermic vs endothermic, standard enthalpy changes (formation, combustion, neutralisation, atomisation), calorimetry, Hess's Law, bond enthalpies.",
  unit: 2,
  estimatedTime: "3 hours",
  difficulty: 4,
  published: true,
  intro:
    "Energetics is the study of heat energy changes in chemical reactions. This topic covers enthalpy change (ΔH), standard conditions, the four key standard enthalpy changes, calorimetry calculations, Hess's Law cycles, and the use of mean bond enthalpies to estimate enthalpy changes.",
  objectives: [
    "Define enthalpy change ΔH and standard conditions (100 kPa, 298 K)",
    "Distinguish exothermic (ΔH negative) from endothermic (ΔH positive) and interpret enthalpy level diagrams",
    "Define standard enthalpy changes of reaction, formation, combustion, neutralisation and atomisation",
    "Calculate energy transferred using q = mcΔT and convert to kJ mol⁻¹",
    "Apply Hess's Law to construct enthalpy cycles and calculate ΔH from data",
    "Use mean bond enthalpies to calculate enthalpy changes, and understand the limitations",
    "Evaluate experimental results, identifying sources of error and uncertainty",
  ],
  keyTakeaways: [
    {
      label: "q = mcΔT",
      body: "q = energy (J), m = mass of solution (g), c = specific heat capacity (4.18 J g⁻¹ °C⁻¹), ΔT = temperature change. Divide by moles × 1000 for kJ mol⁻¹.",
    },
    {
      label: "Hess's Law",
      body: "ΔH for a reaction is the same regardless of the route taken. Build cycles via formation/combustion data: ΔH_reaction = ΣΔH_products − ΣΔH_reactants.",
    },
    {
      label: "Bond enthalpies",
      body: "ΔH = Σ(bonds broken) − Σ(bonds formed). Breaking = endothermic (+), making = exothermic (−). Limitation: mean bond enthalpies are averages.",
    },
    {
      label: "Sign convention",
      body: "Exothermic = negative ΔH (releases heat). Endothermic = positive ΔH (absorbs heat). All ionisation energies are endothermic.",
    },
  ],
  specGroups: [
    {
      points: [
        {
          code: "6.1",
          text: "know that the enthalpy change, ΔH, is the heat energy change measured at constant pressure and that standard conditions are 100 kPa and a specified temperature, usually 298 K",
        },
        {
          code: "6.2",
          text: "know that, by convention, exothermic reactions have a negative enthalpy change and endothermic reactions have a positive enthalpy change",
        },
        {
          code: "6.3",
          text: "be able to construct and interpret enthalpy level diagrams, showing exothermic and endothermic enthalpy changes",
        },
        {
          code: "6.4",
          text: "know the definition of standard enthalpy change of:",
          subPoints: [
            "reaction, ΔᵣH",
            "formation, ΔᶠH",
            "combustion, ΔᴄH",
            "neutralisation, ΔₙₑᵤₜH",
            "atomisation, ΔₐₜH",
          ],
        },
        {
          code: "6.5",
          text: "be able to use experimental data to calculate:",
          subPoints: [
            "energy transferred in a reaction recalling and using the expression: energy transferred (J) = mass (g) × specific heat capacity (J g⁻¹ °C⁻¹) × temperature change (°C)",
            "enthalpy change of the reaction in kJ mol⁻¹",
          ],
          notes:
            "This will be limited to experiments where substances are mixed in an insulated container and combustion experiments using a suitable calorimeter.",
        },
        {
          code: "6.6",
          text: "know Hess's Law and be able to apply it to:",
          subPoints: [
            "constructing enthalpy cycles",
            "calculating enthalpy changes of reaction using data provided, or data selected from a table or obtained from experiments",
          ],
        },
        {
          code: "6.7",
          text: "CORE PRACTICAL 2: Determination of the enthalpy change of a reaction using Hess's Law.",
          isCorePractical: true,
        },
        {
          code: "6.8",
          text: "be able to evaluate the results obtained from experiments and comment on sources of error and uncertainty and any assumptions made in the experiments",
          notes:
            "Students will need to consider experiments where substances are mixed in an insulated container and combustion experiments using, for example, a spirit burner and be able to draw suitable graphs and use cooling curve corrections.",
        },
        {
          code: "6.9",
          text: "understand the terms 'bond enthalpy' and 'mean bond enthalpy', and be able to use bond enthalpies to calculate enthalpy changes, understanding the limitations of this method",
        },
        {
          code: "6.10",
          text: "be able to calculate mean bond enthalpies from enthalpy changes of reaction",
        },
        {
          code: "6.11",
          text: "understand that bond enthalpy data gives some indication about which bond will break first in a reaction, how easy or difficult it is and therefore how rapidly a reaction will take place at room temperature",
        },
      ],
    },
  ],
};
