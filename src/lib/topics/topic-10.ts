import type { Topic } from "./types";

/**
 * Topic 10: Organic Chemistry — Halogenoalkanes, Alcohols and Spectra
 * Verbatim spec points from the Edexcel IAL Chemistry specification (Unit 2).
 * Four sub-sections: 10A General, 10B Halogenoalkanes, 10C Alcohols, 10D Mass spectra & IR.
 * Related topics in Units 4 and 5 will assume knowledge of this material.
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
    "Name and draw halogenoalkanes (structural, displayed, skeletal)",
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
  keyTakeaways: [
    {
      label: "Nucleophile",
      body: "Electron-pair donor. Examples: OH⁻, H₂O, NH₃, CN⁻. Attacks electron-deficient carbon (e.g. C–X in halogenoalkanes).",
    },
    {
      label: "Halogenoalkane rate",
      body: "C–I > C–Br > C–Cl (weaker bonds break faster). Tertiary > secondary > primary (carbocation stability for SN1).",
    },
    {
      label: "Alcohol oxidation",
      body: "1° → aldehyde (distil) → carboxylic acid (reflux). 2° → ketone. 3° → not oxidised by K₂Cr₂O₇/H⁺. Orange Cr(VI) → green Cr(III).",
    },
    {
      label: "Mass spec",
      body: "M⁺ peak = molecular mass. Fragments reveal structure (e.g. M–15 = loss of CH₃). Chlorine gives M and M+2 peaks in 3:1 ratio.",
    },
    {
      label: "IR fingerprint",
      body: "O–H (alcohol) ~3200–3600 broad; O–H (acid) ~2500–3300 very broad; C=O ~1680–1750 sharp; C=C ~1620–1680; C–X < 800.",
    },
  ],
  specGroups: [
    {
      code: "10A",
      title: "General principles",
      points: [
        {
          code: "10.1",
          text: "be able to classify reactions (including those in Unit 1) as addition, elimination, substitution, oxidation, reduction, hydrolysis or polymerisation",
        },
        {
          code: "10.2",
          text: "understand the concept of a reaction mechanism",
        },
        {
          code: "10.3",
          text: "understand that heterolytic bond breaking results in species that are electrophiles or nucleophiles",
        },
        {
          code: "10.4",
          text: "know the definition of the term 'nucleophile'",
        },
        {
          code: "10.5",
          text: "understand the link between bond polarity and the type of reaction mechanism a compound will undergo",
        },
      ],
    },
    {
      code: "10B",
      title: "Halogenoalkanes",
      points: [
        {
          code: "10.6",
          text: "understand the nomenclature of halogenoalkanes and be able to draw their structural, displayed and skeletal formulae",
        },
        {
          code: "10.7",
          text: "understand the distinction between primary, secondary and tertiary halogenoalkanes",
        },
        {
          code: "10.8",
          text: "understand the reactions of halogenoalkanes with:",
          subPoints: [
            "aqueous alkali, including KOH(aq) to produce alcohols (where the hydroxide ion acts as a nucleophile)",
            "ethanolic potassium hydroxide to produce alkenes by an elimination reaction (where the hydroxide ion acts as a base)",
            "aqueous silver nitrate in ethanol (where water acts as a nucleophile)",
            "alcoholic ammonia under pressure to produce amines (where the ammonia acts as a nucleophile)",
            "alcoholic potassium cyanide to produce nitriles (where the cyanide ion acts as a nucleophile)",
          ],
          notes:
            "Students should know this is an example of increasing the length of the carbon chain.",
        },
        {
          code: "10.9",
          text: "understand the mechanisms of the nucleophilic substitution reactions between primary halogenoalkanes and:",
          subPoints: [
            "aqueous potassium hydroxide",
            "ammonia",
          ],
          notes: "SN1 and SN2 substitution mechanisms will be tested in Unit 4.",
        },
        {
          code: "10.10",
          text: "understand that experimental observations and data can be used to compare the relative rates of hydrolysis of:",
          subPoints: [
            "primary, secondary and tertiary structural isomers of a halogenoalkane",
            "primary chloro-, bromo- and iodoalkanes using aqueous silver nitrate in ethanol",
          ],
        },
        {
          code: "10.11",
          text: "CORE PRACTICAL 5: Investigation of the rates of hydrolysis of some halogenoalkanes.",
          isCorePractical: true,
        },
        {
          code: "10.12",
          text: "know the trend in reactivity of primary, secondary and tertiary halogenoalkanes",
        },
        {
          code: "10.13",
          text: "understand, in terms of bond enthalpy, the trend in reactivity of chloro-, bromo- and iodoalkanes",
        },
        {
          code: "10.14",
          text: "CORE PRACTICAL 6: Chlorination of 2-methylpropan-2-ol with concentrated hydrochloric acid.",
          isCorePractical: true,
        },
      ],
    },
    {
      code: "10C",
      title: "Alcohols",
      points: [
        {
          code: "10.15",
          text: "understand the nomenclature of alcohols and be able to draw their structural, displayed and skeletal formulae",
        },
        {
          code: "10.16",
          text: "understand the distinction between primary, secondary and tertiary alcohols",
        },
        {
          code: "10.17",
          text: "understand the reactions of alcohols with:",
          subPoints: [
            "oxygen in air (combustion)",
            "halogenating agents: PCl₅ to produce chloroalkanes (including its use as a qualitative test for the presence of the –OH group); 50% concentrated sulfuric acid and potassium bromide to produce bromoalkanes; red phosphorus and iodine to produce iodoalkanes",
            "concentrated phosphoric acid to form alkenes by elimination",
          ],
          notes: "Descriptions of the mechanisms of these reactions are not required.",
        },
        {
          code: "10.18",
          text: "understand that potassium dichromate(VI) in dilute sulfuric acid can oxidise:",
          subPoints: [
            "primary alcohols to produce aldehydes (which give a positive result with Benedict's or Fehling's solution) if the product is distilled as it forms",
            "primary alcohols to produce carboxylic acids (which give a positive result with sodium carbonate or sodium hydrogencarbonate) if the reagents are heated under reflux",
            "secondary alcohols to produce ketones",
          ],
          notes: "In equations, the oxidising agent can be represented by [O].",
        },
        {
          code: "10.19",
          text: "understand, the following techniques in the preparation and purification of a liquid organic compound:",
          subPoints: [
            "heating under reflux",
            "extraction with a solvent using a separating funnel",
            "distillation",
            "drying with an anhydrous salt",
            "boiling temperature determination",
          ],
        },
        {
          code: "10.20",
          text: "CORE PRACTICAL 7: The oxidation of propan-1-ol to produce propanal and propanoic acid.",
          isCorePractical: true,
        },
      ],
    },
    {
      code: "10D",
      title: "Mass spectra and IR",
      points: [
        {
          code: "10.21",
          text: "be able to interpret data from mass spectra to suggest possible structures of simple organic compounds using the m/z of the molecular ion and fragmentation patterns",
        },
        {
          code: "10.22",
          text: "be able to use infrared spectra, or data from infrared spectra, to deduce functional groups present in organic compounds, and predict infrared absorptions, given wavenumber data, due to familiar functional groups including:",
          subPoints: [
            "C–H stretching absorptions in alkanes, alkenes and aldehydes",
            "C=C stretching absorption in alkenes",
            "O–H stretching absorptions in alcohols and carboxylic acids",
            "C=O stretching absorptions in aldehydes, ketones and carboxylic acids",
            "C–X stretching absorption in halogenoalkanes",
            "N–H stretching absorption in amines",
          ],
        },
        {
          code: "10.23",
          text: "CORE PRACTICAL 8: Analysis of some inorganic and organic unknowns.",
          isCorePractical: true,
        },
      ],
    },
  ],
};
