import type { Topic } from "./types";

/**
 * Topic 8: Redox Chemistry and Groups 1, 2 and 7
 * Verbatim spec points from the Edexcel IAL Chemistry specification (Unit 2).
 * Three sub-sections: 8A Redox, 8B Groups 1 & 2, 8C Group 7.
 */
export const topic8: Topic = {
  number: 8,
  slug: "redox-groups-1-2-7",
  title: "Redox Chemistry and Groups 1, 2 and 7",
  summary:
    "Oxidation numbers, half-equations, disproportionation; trends and reactions of Groups 1 and 2 (ionisation energy, reactivity, oxides, hydroxides, nitrates, carbonates, flame tests); Group 7 trends, displacement, disproportionation of chlorine, tests for ions.",
  unit: 2,
  estimatedTime: "5 hours",
  difficulty: 4,
  published: true,
  intro:
    "This topic unifies redox chemistry (oxidation numbers, half-equations, disproportionation) with the descriptive chemistry of Groups 1, 2 and 7. You'll learn to assign oxidation numbers, balance redox equations via half-equations, predict trends down groups, write reactions of s-block metals and their compounds, and explain the disproportionation chemistry of chlorine — including its use in water treatment and bleach.",
  objectives: [
    "Assign oxidation numbers to elements in compounds and ions (including peroxides and metal hydrides)",
    "Use Roman numerals to indicate oxidation number in names",
    "Define oxidation and reduction in terms of electron transfer and oxidation number change",
    "Identify oxidising/reducing agents and disproportionation reactions",
    "Write ionic half-equations and combine them into full ionic equations",
    "Explain the trend in ionisation energy and reactivity down Groups 1 and 2",
    "Describe reactions of Group 1 & 2 elements with oxygen, chlorine and water",
    "Describe reactions of Group 1 & 2 oxides/hydroxides with water and dilute acid",
    "Know the trends in solubility of Group 2 hydroxides and sulfates",
    "Explain trends in thermal stability of Group 1 & 2 nitrates and carbonates",
    "Recall flame colours for Group 1 & 2 compounds and explain them via electron transitions",
    "Describe tests for carbonate, hydrogencarbonate, sulfate and ammonium ions",
    "Perform acid–base titration calculations (mol dm⁻³ and g dm⁻³)",
    "Explain trends in Group 7: melting/boiling points, electronegativity, reactivity",
    "Write displacement, disproportionation (Cl₂ + water, cold alkali, hot alkali) and halide reactions",
    "Describe tests for halide ions using acidified silver nitrate",
    "Make predictions about fluorine and astatine based on trends",
  ],
  keyTakeaways: [
    {
      label: "Oxidation number rules",
      body: "Elements = 0. Ions = charge. H = +1 (−1 in metal hydrides). O = −2 (−1 in peroxides). Group 1 = +1, Group 2 = +2, Group 7 = −1 (with metals).",
    },
    {
      label: "Disproportionation",
      body: "Same element both oxidised and reduced. Cl₂ + cold dilute NaOH → NaCl + NaClO (bleach). Cl₂ + H₂O → HCl + HClO.",
    },
    {
      label: "Group 1/2 trends",
      body: "Reactivity increases DOWN (ionisation energy decreases). Thermal stability of nitrates/carbonates increases DOWN (cation polarising power decreases). Solubility of Group 2 hydroxides increases DOWN; sulfates decrease DOWN.",
    },
    {
      label: "Group 7 trends",
      body: "Melting point, boiling point and density increase DOWN (stronger London forces). Electronegativity and reactivity DECREASE down. Cl₂ > Br₂ > I₂ as oxidising agents.",
    },
    {
      label: "Halide test",
      body: "Add HNO₃ then AgNO₃(aq): white = Cl⁻, cream = Br⁻, yellow = I⁻. Solubility in NH₃(aq): Cl⁻ dissolves in dilute, Br⁻ in conc, I⁻ insoluble.",
    },
  ],
  specGroups: [
    {
      code: "8A",
      title: "Redox chemistry",
      points: [
        {
          code: "8.1",
          text: "know what is meant by the term 'oxidation number' and understand the rules for assigning oxidation numbers",
        },
        {
          code: "8.2",
          text: "be able to calculate the oxidation number of elements in compounds and ions, including in peroxides and metal hydrides",
        },
        {
          code: "8.3",
          text: "be able to indicate the oxidation number of an element in a compound or an ion, using a Roman numeral",
        },
        {
          code: "8.4",
          text: "be able to write formulae given oxidation numbers",
        },
        {
          code: "8.5",
          text: "understand oxidation and reduction in terms of electron transfer and changes in oxidation number, and the application of these ideas to reactions of s-block and p-block elements",
        },
        {
          code: "8.6",
          text: "know that oxidising agents gain electrons and reducing agents lose electrons",
        },
        {
          code: "8.7",
          text: "understand that a disproportionation reaction involves an element in a single species being simultaneously oxidised and reduced",
        },
        {
          code: "8.8",
          text: "know that oxidation number is a useful concept in terms of the classification of reactions as redox and as disproportionation",
        },
        {
          code: "8.9",
          text: "understand that metals, in general, form positive ions by loss of electrons with an increase in oxidation number whereas non-metals, in general, form negative ions by gain of electrons with a decrease in oxidation number",
        },
        {
          code: "8.10",
          text: "be able to write ionic half-equations and use them to construct full ionic equations",
        },
      ],
    },
    {
      code: "8B",
      title: "The elements of Groups 1 and 2",
      points: [
        {
          code: "8.11",
          text: "understand reasons for the trend in ionisation energy down Groups 1 and 2",
        },
        {
          code: "8.12",
          text: "understand reasons for the trend in reactivity of the elements down Group 1 (Li to K) and Group 2 (Mg to Ba)",
        },
        {
          code: "8.13",
          text: "know the reactions of the elements of Group 1 (Li to K) and Group 2 (Mg to Ba) with oxygen, chlorine and water",
        },
        {
          code: "8.14",
          text: "know the reactions of:",
          subPoints: [
            "oxides of Group 1 and 2 elements with water and dilute acid",
            "hydroxides of Group 1 and 2 elements with dilute acid",
          ],
        },
        {
          code: "8.15",
          text: "know the trends in solubility of the hydroxides and sulfates of Group 2 elements",
        },
        {
          code: "8.16",
          text: "understand the reasons for the trends in thermal stability of the nitrates and the carbonates of the elements in Groups 1 and 2 in terms of the size and charge of the cations involved",
        },
        {
          code: "8.17",
          text: "understand the formation of characteristic flame colours by Group 1 and 2 compounds in terms of electron transitions",
          notes: "Students will be expected to know the flame colours for Group 1 and 2 compounds.",
        },
        {
          code: "8.18",
          text: "know experimental procedures to show:",
          subPoints: [
            "patterns in the thermal decomposition of Group 1 and 2 nitrates and carbonates",
            "flame colours in compounds of Group 1 and 2 elements",
          ],
          notes:
            "Students will be expected to know tests for carbon dioxide and oxygen; and to recognise nitrogen dioxide by its colour and acidic pH.",
        },
        {
          code: "8.19",
          text: "know reactions, including ionic equations where appropriate, for identifying:",
          subPoints: [
            "carbonate ions, CO₃²⁻, and hydrogencarbonate ions, HCO₃⁻, using an aqueous acid to form carbon dioxide (and testing the gas with limewater)",
            "sulfate ions, SO₄²⁻, using acidified barium chloride solution",
            "ammonium ions, NH₄⁺, using sodium hydroxide solution and warming to form ammonia (and testing with litmus and HCl fumes)",
          ],
        },
        {
          code: "8.20",
          text: "be able to calculate solution concentrations, in mol dm⁻³ and g dm⁻³, including simple acid-base titrations using the indicators methyl orange and phenolphthalein",
        },
        {
          code: "8.21",
          text: "CORE PRACTICAL 3: Finding the concentration of a solution of hydrochloric acid.",
          isCorePractical: true,
        },
        {
          code: "8.22",
          text: "understand how to minimise the sources of measurement uncertainty in volumetric analysis and estimate the overall uncertainty in the calculated result",
        },
        {
          code: "8.23",
          text: "CORE PRACTICAL 4: Preparation of a standard solution from a solid acid and use it to find the concentration of a solution of sodium hydroxide.",
          isCorePractical: true,
        },
      ],
    },
    {
      code: "8C",
      title: "Inorganic chemistry of Group 7 (limited to chlorine, bromine and iodine)",
      points: [
        {
          code: "8.24",
          text: "understand reasons for the trends for Group 7 elements in:",
          subPoints: [
            "melting and boiling temperatures and physical state at room temperature",
            "electronegativity",
            "reactivity down the group",
          ],
        },
        {
          code: "8.25",
          text: "understand the trend in reactivity of Group 7 elements in terms of the redox reactions of Cl₂, Br₂ and I₂ with halide ions in aqueous solution",
          notes:
            "Students are expected to know the colours of the elements in standard conditions, in aqueous solution and in a non-polar organic solvent.",
        },
        {
          code: "8.26",
          text: "understand, in terms of changes in oxidation number, the following reactions of the halogens:",
          subPoints: [
            "oxidation reactions with Group 1 and 2 metals",
            "the disproportionation reaction of chlorine with water and the use of chlorine in water treatment",
            "the disproportionation reaction of chlorine with cold, dilute aqueous sodium hydroxide to form bleach",
            "the disproportionation reaction of chlorine with hot alkali",
            "reactions analogous to those specified above",
          ],
        },
        {
          code: "8.27",
          text: "understand the following reactions:",
          subPoints: [
            "solid Group 1 halides with concentrated sulfuric acid, to illustrate the trend in reducing ability of the hydrogen halides",
            "precipitation reactions of the aqueous anions Cl⁻, Br⁻ and I⁻ with aqueous silver nitrate solution and nitric acid, and the solubility of the precipitates in aqueous ammonia solution",
            "hydrogen halides with ammonia gas (to produce ammonium halides) and with water (to produce acids)",
          ],
        },
        {
          code: "8.28",
          text: "be able to make predictions about fluorine and astatine and their compounds, in terms of knowledge of trends in halogen chemistry",
        },
      ],
    },
  ],
};
