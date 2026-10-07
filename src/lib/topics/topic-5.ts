import type { Topic } from "./types";

/**
 * Topic 5: Alkenes
 * Verbatim spec points from the Edexcel IAL Chemistry specification (Unit 1).
 * Related topics in Units 2, 4 and 5 will assume knowledge of this material.
 */
export const topic5: Topic = {
  number: 5,
  slug: "alkenes",
  title: "Alkenes",
  summary:
    "Alkenes and cycloalkenes as unsaturated hydrocarbons, σ and π bonds, geometric (E–Z) isomerism, electrophilic addition mechanisms, addition polymerisation, polymer disposal.",
  unit: 1,
  estimatedTime: "2 hours",
  difficulty: 3,
  published: true,
  intro:
    "Alkenes are unsaturated hydrocarbons containing a carbon–carbon double bond — a σ bond plus a π bond. The π bond is the region of high electron density that makes alkenes reactive towards electrophiles. This topic covers E–Z isomerism, the electrophilic addition mechanism (with curly arrows and carbocation intermediates), and addition polymerisation. Related topics in Units 2, 4 and 5 will assume knowledge of this material.",
  objectives: [
    "State the general formula of alkenes and explain what 'unsaturated' means (σ + π bond)",
    "Explain geometric (cis/trans, E/Z) isomerism in terms of restricted rotation around C=C",
    "Apply the E–Z naming system and know when cis/trans breaks down",
    "Describe the addition reactions of alkenes: H₂, halogens, HX, steam, KMnO₄",
    "Recall the qualitative test for C=C using bromine water",
    "Draw the mechanism of electrophilic addition of Br₂ and HBr to ethene and propene, using curly arrows",
    "Explain the relative stability of primary, secondary and tertiary carbocations",
    "Draw the repeat unit of an addition polymer from the monomer, and vice versa",
    "Discuss biodegradable polymers and the problems of polymer disposal",
  ],
  keyTakeaways: [
    {
      label: "C=C bond",
      body: "One σ bond + one π bond. π electrons are above/below the bond axis — exposed, so alkenes react with electrophiles.",
    },
    {
      label: "E/Z isomerism",
      body: "Requires restricted rotation (C=C) AND two different groups on each carbon of the double bond. E = high-priority groups opposite, Z = same side.",
    },
    {
      label: "Electrophilic addition",
      body: "Curly arrow from π bond to electrophile, curly arrow from bond to leaving group. Forms carbocation intermediate, then nucleophile attacks. Markovnikov: H goes to C with more H's (more stable carbocation).",
    },
    {
      label: "Carbocation stability",
      body: "Tertiary > secondary > primary (alkyl groups donate electron density, stabilising the positive charge).",
    },
  ],
  specGroups: [
    {
      points: [
        {
          code: "5.1",
          text: "know the general formula of alkenes and understand that alkenes and cycloalkenes are hydrocarbons which are unsaturated (have a carbon-carbon double bond which consists of a σ bond and a π bond)",
        },
        {
          code: "5.2",
          text: "be able to explain geometric isomerism in terms of restricted rotation around a C=C double bond and the nature of the substituents on the carbon atoms",
        },
        {
          code: "5.3",
          text: "understand the E–Z naming system for geometric isomers and why it is necessary to use this when the cis- and trans- naming system breaks down",
        },
        {
          code: "5.4",
          text: "be able to describe the reactions of alkenes, limited to:",
          subPoints: [
            "the addition of hydrogen, using a nickel catalyst, to form an alkane",
            "the addition of halogens to produce a di-substituted halogenoalkane",
            "the addition of hydrogen halides to produce mono-substituted halogenoalkanes",
            "the addition of steam, in the presence of an acid catalyst, to produce alcohols",
            "oxidation of the double bond by acidified potassium manganate(VII) to produce a diol",
          ],
        },
        {
          code: "5.5",
          text: "know the qualitative test for a C=C double bond using bromine or bromine water",
        },
        {
          code: "5.6",
          text: "be able to describe the mechanism (including diagrams), giving evidence where possible, of:",
          subPoints: [
            "the electrophilic addition of bromine and hydrogen bromide to ethene",
            "the electrophilic addition of hydrogen bromide to propene",
          ],
          notes:
            "Use of the curly arrow notation is expected — the curly arrows should start from either a bond or from a lone pair of electrons. Knowledge of the relative stability of primary, secondary and tertiary carbocation intermediates is expected.",
        },
        {
          code: "5.7",
          text: "be able to describe the addition polymerisation of alkenes and draw the repeat unit given the monomer, and vice versa",
        },
        {
          code: "5.8",
          text: "understand how chemists limit the problems caused by polymer disposal by:",
          subPoints: [
            "developing biodegradable polymers",
            "removing toxic waste gases produced by the incineration of polymers",
          ],
        },
      ],
    },
  ],
};
