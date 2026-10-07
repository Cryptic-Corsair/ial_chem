import type { Topic } from "./types";

/**
 * Topic 9: Introduction to Kinetics and Equilibria
 * Verbatim spec points from the Edexcel IAL Chemistry specification (Unit 2).
 * Two sub-sections: 9A Kinetics, 9B Equilibria.
 */
export const topic9: Topic = {
  number: 9,
  slug: "kinetics-equilibria",
  title: "Introduction to Kinetics and Equilibria",
  summary:
    "Collision theory, factors affecting rate, Maxwell-Boltzmann distribution, catalysts; dynamic equilibrium, qualitative effects of temperature/pressure/concentration on position of equilibrium, industrial compromises.",
  unit: 2,
  estimatedTime: "3 hours",
  difficulty: 3,
  published: true,
  intro:
    "This topic is mostly qualitative — it's about how fast reactions go (kinetics) and how far they go (equilibria). You'll use collision theory and the Maxwell–Boltzmann distribution to explain why temperature, concentration, pressure and surface area affect rate, and you'll use Le Chatelier's principle to predict how equilibrium shifts when conditions change.",
  objectives: [
    "Use collision theory to explain the effect of concentration, temperature, pressure and surface area on rate",
    "Define activation energy and explain why collisions need it to result in reaction",
    "Calculate rate from reaction time (rate = 1/time) or from the gradient of a concentration–time graph",
    "Use the Maxwell-Boltzmann distribution to explain how temperature and catalysts affect rate",
    "Explain how catalysts provide an alternative route of lower activation energy",
    "Draw reaction profiles for uncatalysed and catalysed reactions, including the intermediate",
    "Discuss the industrial use of catalysts for sustainability",
    "Define dynamic equilibrium (forward rate = backward rate, concentrations constant)",
    "Predict the qualitative effect of changing T, P or concentration on the position of equilibrium",
    "Evaluate the compromise between yield and rate in industrial processes",
  ],
  keyTakeaways: [
    {
      label: "Collision theory",
      body: "Reactions need: (1) collisions, (2) sufficient energy (≥ Ea), (3) correct orientation. ↑ concentration/pressure/surface area = ↑ collisions. ↑ T = more collisions AND more exceed Ea.",
    },
    {
      label: "Maxwell-Boltzmann",
      body: "Curve of molecular energies. Area under curve = total molecules. Area past Ea = molecules with enough energy to react. Higher T → curve shifts right and flattens; more molecules exceed Ea.",
    },
    {
      label: "Catalysts",
      body: "Provide alternative route with lower Ea. More molecules now have enough energy → faster. Not used up. Doesn't change ΔH or position of equilibrium.",
    },
    {
      label: "Le Chatelier",
      body: "System at equilibrium counters a change. ↑ T → shifts endothermic direction. ↑ P → shifts to side with fewer gas moles. ↑ concentration of reactant → shifts forward.",
    },
    {
      label: "Industrial compromise",
      body: "Haber process: low T gives high yield but slow rate → compromise at ~450°C. High pressure gives high yield but is expensive/dangerous → ~200 atm.",
    },
  ],
  specGroups: [
    {
      code: "9A",
      title: "Kinetics",
      points: [
        {
          code: "9.1",
          text: "understand, in terms of the collision theory, the effect of changes in concentration, temperature, pressure and surface area on the rate of a chemical reaction",
        },
        {
          code: "9.2",
          text: "understand that reactions take place only when collisions have sufficient energy, known as the activation energy",
        },
        {
          code: "9.3",
          text: "be able to calculate the rate of a reaction from:",
          subPoints: [
            "the time taken for a reaction, using rate = 1/time",
            "the gradient of suitable graph, by drawing a tangent, either for initial rate, or at a time, t",
          ],
        },
        {
          code: "9.4",
          text: "understand qualitatively, in terms of the Maxwell-Boltzmann distribution of molecular energies, how changes in temperature affect the rate of a reaction",
        },
        {
          code: "9.5",
          text: "understand the role of catalysts in providing alternative reaction routes of lower activation energy",
        },
        {
          code: "9.6",
          text: "be able to draw the reaction profiles for uncatalysed and catalysed reactions, including the energy level of the intermediate formed with the catalyst",
        },
        {
          code: "9.7",
          text: "understand the use of catalysts in industry to make processes more sustainable by using less energy and/or higher atom economy",
        },
        {
          code: "9.8",
          text: "be able to interpret the action of a catalyst in terms of a qualitative understanding of the Maxwell-Boltzmann distribution of molecular energies",
        },
      ],
    },
    {
      code: "9B",
      title: "Equilibria",
      points: [
        {
          code: "9.9",
          text: "know that many reactions are readily reversible and that they can reach a state of dynamic equilibrium in which:",
          subPoints: [
            "the rate of the forward reaction is equal to the rate of the backward reaction",
            "the concentrations of the reactants and the products remain constant",
          ],
        },
        {
          code: "9.10",
          text: "be able to predict and justify the qualitative effects of changes of temperature, pressure and concentration on the position of equilibrium in a homogeneous system",
        },
        {
          code: "9.11",
          text: "evaluate data to explain the necessity, for many industrial processes, to reach a compromise between the yield and the rate of reaction",
        },
      ],
    },
  ],
};
