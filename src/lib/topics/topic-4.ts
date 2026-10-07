import type { Topic } from "./types";

/**
 * Topic 4: Introductory Organic Chemistry and Alkanes
 * Verbatim spec points from the Edexcel IAL Chemistry specification (Unit 1).
 * Related topics in Units 2, 4 and 5 will assume knowledge of this material.
 */
export const topic4: Topic = {
  number: 4,
  slug: "introductory-organic-chemistry-alkanes",
  title: "Introductory Organic Chemistry and Alkanes",
  summary:
    "Hazard and risk, IUPAC nomenclature, structural/displayed/skeletal formulae, reaction types, homolytic vs heterolytic bond breaking, alkanes as fuels, free-radical substitution.",
  unit: 1,
  estimatedTime: "3 hours",
  difficulty: 3,
  published: true,
  intro:
    "This topic introduces the language and conventions of organic chemistry — nomenclature, formulae, reaction types, and bond-breaking modes — then applies them to alkanes: their use as fuels, the pollutants from combustion, and the free-radical substitution mechanism with halogens. Related topics in Units 2, 4 and 5 will assume knowledge of this material.",
  objectives: [
    "Distinguish hazard from risk and suggest ways to reduce risk in organic reactions",
    "Apply IUPAC nomenclature to name and draw organic compounds (structural, displayed, skeletal formulae) up to C10",
    "Classify reactions as addition, substitution, oxidation, reduction or polymerisation",
    "Distinguish homolytic (free radicals) from heterolytic (ions) bond breaking",
    "Know the general formulae of alkanes and cycloalkanes and the meaning of 'saturated'",
    "Draw and name structural isomers of alkanes/cycloalkanes with up to 6 carbons",
    "Describe fractional distillation, cracking and reforming of crude oil",
    "Discuss pollutants from alkane combustion and the case for alternative fuels",
    "Apply the concept of carbon neutrality to fuels (petrol, bioethanol, hydrogen)",
    "Describe and write the mechanism of free-radical substitution of alkanes with halogens (initiation, propagation, termination)",
  ],
  keyTakeaways: [
    {
      label: "Hazard vs risk",
      body: "Hazard = inherent danger of a substance. Risk = likelihood of harm in a given procedure. Reduce risk via smaller scale, precautions, or safer alternatives.",
    },
    {
      label: "Alkanes",
      body: "General formula CₙH₂ₙ₊₂ (cycloalkanes CₙH₂ₙ). Saturated — single bonds only. Unreactive except combustion and free-radical substitution.",
    },
    {
      label: "Free radical sub",
      body: "Initiation (Cl₂ → 2Cl·, UV), propagation (Cl· + CH₄ → CH₃· + HCl; CH₃· + Cl₂ → CH₃Cl + Cl·), termination (radicals combine).",
    },
    {
      label: "Carbon neutrality",
      body: "Bioethanol is more carbon-neutral than petrol because the CO₂ released on combustion was recently absorbed by photosynthesis.",
    },
  ],
  specGroups: [
    {
      code: "4A",
      title: "Introduction",
      points: [
        {
          code: "4.1",
          text: "understand the difference between hazard and risk",
        },
        {
          code: "4.2",
          text: "understand the hazards associated with organic compounds and why it is necessary to carry out risk assessments when dealing with potentially hazardous materials",
        },
        {
          code: "4.3",
          text: "be able to suggest ways in which risks can be reduced and reactions carried out safely, for example:",
          subPoints: [
            "working on a smaller scale",
            "taking precautions specific to the hazard",
            "using an alternative method that involves less hazardous substances",
          ],
        },
        {
          code: "4.4",
          text: "understand the concepts of homologous series and functional group",
        },
        {
          code: "4.5",
          text: "be able to apply the rules of International Union of Pure and Applied Chemistry (IUPAC) nomenclature to:",
          subPoints: [
            "name compounds relevant to this specification",
            "draw these compounds, as they are encountered in the specification, using structural, displayed and skeletal formulae. Students will be expected to know prefixes for compounds up to C10",
          ],
        },
        {
          code: "4.6",
          text: "be able to classify reactions as addition, substitution, oxidation, reduction or polymerisation",
        },
        {
          code: "4.7",
          text: "understand that bond breaking can be:",
          subPoints: [
            "homolytic, to produce free radicals",
            "heterolytic, to produce ions",
          ],
        },
        {
          code: "4.8",
          text: "know definitions of the terms 'free radical' and 'electrophile'",
        },
      ],
    },
    {
      code: "4B",
      title: "Alkanes",
      points: [
        {
          code: "4.9",
          text: "know the general formula of alkanes and cycloalkanes, and understand that they are hydrocarbons (compounds of carbon and hydrogen only) which are saturated (contain single bonds only)",
        },
        {
          code: "4.10",
          text: "understand the term 'structural isomerism' and be able to draw the structural isomers of organic molecules, given their molecular formula",
        },
        {
          code: "4.11",
          text: "be able to draw and name the structural isomers of alkanes and cycloalkanes with up to six carbon atoms",
        },
        {
          code: "4.12",
          text: "know that alkanes are used as fuels and obtained from the fractional distillation, cracking and reforming of crude oil, and be able to write equations for these reactions",
        },
        {
          code: "4.13",
          text: "know that pollutants, including carbon monoxide, oxides of nitrogen and sulfur, carbon particulates and unburned hydrocarbons, are emitted during the combustion of alkane fuels",
        },
        {
          code: "4.14",
          text: "understand the problems arising from pollutants from the combustion of alkane fuels, limited to the toxicity of carbon monoxide and why it is toxic, and the acidity of oxides of nitrogen and sulfur",
        },
        {
          code: "4.15",
          text: "be able to discuss the reasons for developing alternative fuels in terms of sustainability and reducing emissions, including the emission of CO₂ and its relationship to climate change",
        },
        {
          code: "4.16",
          text: "be able to apply the concept of carbon neutrality to different fuels, such as petrol, bioethanol and hydrogen",
        },
        {
          code: "4.17",
          text: "understand the reactions of alkanes with:",
          subPoints: [
            "oxygen in the air (combustion)",
            "halogens",
          ],
        },
        {
          code: "4.18",
          text: "understand the mechanism of the free radical substitution reaction between an alkane and a halogen:",
          subPoints: [
            "using free radicals, which are species with an unpaired electron, represented by a single dot",
            "showing the initiation step of the mechanism, with curly half-arrows for free radical formation",
            "showing the propagation and termination steps of the mechanism",
            "having limited use in synthesis because of further substitution reactions",
          ],
        },
      ],
    },
  ],
};
