import type { Topic } from "./types";

/**
 * Topic 9: Introduction to Kinetics and Equilibria
 * Rich notes built from the uploaded PDF study guide.
 * Two sub-sections: 9A Kinetics, 9B Equilibria.
 */
export const topic9: Topic = {
  number: 9,
  slug: "kinetics-equilibria",
  title: "Introduction to Kinetics and Equilibria",
  summary:
    "Collision theory, activation energy, Maxwell-Boltzmann distribution, catalysts; dynamic equilibrium, Le Chatelier's principle, industrial compromises.",
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
    "Evaluate the compromise between yield and rate in industrial processes (Haber, Contact)",
  ],
  atAGlance: [
    { label: "Collision theory", value: "Reactions need: collision + sufficient energy (≥ Ea) + correct orientation" },
    { label: "Maxwell-Boltzmann", value: "Higher T → peak shifts right, lowers, more molecules exceed Ea" },
    { label: "Catalysts", value: "Lower Ea → more molecules have enough energy → faster. ΔH unchanged." },
    { label: "Le Chatelier", value: "System at equilibrium counters a change. ↑T → endothermic direction; ↑P → fewer gas moles." },
  ],
  keyTakeaways: [
    { label: "Three conditions", body: "Particles must collide, have ≥ Ea energy, and correct orientation for a reaction to occur." },
    { label: "Temperature effect", body: "Small ↑T → large ↑rate. More molecules exceed Ea (not just faster collisions)." },
    { label: "Catalyst", body: "Provides alternative route with lower Ea. Doesn't change ΔH or equilibrium position. Speeds up attainment of equilibrium." },
    { label: "Dynamic equilibrium", body: "Forward rate = backward rate. Concentrations constant (not necessarily equal). Only in a closed system." },
    { label: "Pressure shift", body: "↑P → shifts to side with fewer gas moles. Catalyst has NO effect on position." },
    { label: "Haber compromise", body: "450°C (rate vs yield), 200 atm (yield vs cost/safety), Fe catalyst. Unreacted gases recycled." },
  ],
  sections: [
    {
      id: "spec-9a",
      code: "9A",
      title: "Kinetics",
      blocks: [
        {
          kind: "lead",
          text: "Kinetics is about how fast reactions go. Collision theory explains why temperature, concentration, pressure and surface area affect the rate.",
        },
        {
          kind: "heading",
          level: 3,
          id: "spec-9-1",
          tag: "9.1",
          text: "Collision Theory and Factors Affecting Reaction Rate",
        },
        {
          kind: "definition-list",
          items: [
            { term: "Collision", body: "The particles must physically collide with one another." },
            { term: "Activation energy (Ea)", body: "The colliding particles must possess a minimum amount of kinetic energy equal to or greater than the activation energy." },
            { term: "Correct orientation", body: "The particles must collide in a favourable spatial orientation so that the relevant reactive bonds can break and new bonds can form." },
            { term: "Effective collisions", body: "Collisions where particles have both sufficient energy (≥ Ea) and correct alignment, resulting in chemical change." },
          ],
        },
        {
          kind: "table",
          caption: "Factors affecting reaction rate",
          columns: [
            { key: "factor", header: "Factor" },
            { key: "effect", header: "Effect on rate" },
            { key: "reason", header: "Reason" },
          ],
          rows: [
            { factor: "↑ Concentration", effect: "Increases rate", reason: "More particles per unit volume → higher collision frequency" },
            { factor: "↑ Pressure (gas)", effect: "Increases rate", reason: "Same particles in smaller volume → higher collision frequency" },
            { factor: "↑ Surface area", effect: "Increases rate", reason: "More solid atoms exposed → more collisions at surface" },
            { factor: "↑ Temperature", effect: "Greatly increases rate", reason: "More molecules exceed Ea (not just faster collisions)" },
          ],
        },
        {
          kind: "heading",
          level: 3,
          id: "spec-9-2",
          tag: "9.2",
          text: "Activation Energy",
        },
        {
          kind: "definition-list",
          items: [
            { term: "Definition", body: "The activation energy (Ea) is the minimum energy that colliding particles must possess for a reaction to occur." },
            { term: "Role in bond breaking", body: "Activation energy represents the energy barrier required to stretch and break the original chemical bonds in the reactants before new bonds can form in the products." },
            { term: "Kinetic vs thermodynamic stability", body: "A reaction may be strongly exothermic (thermodynamically unstable) yet fail to proceed at room temperature if it has a high Ea. The reactants are described as kinetically stable because very few particles possess energy ≥ Ea at ambient conditions." },
          ],
        },
        {
          kind: "heading",
          level: 3,
          id: "spec-9-3",
          tag: "9.3",
          text: "Calculating Reaction Rates",
        },
        {
          kind: "equation",
          label: "Rate definition",
          math: String.raw`\text{Rate} = \frac{\Delta \text{Concentration}}{\Delta t} \quad (\text{mol dm}^{-3} \text{ s}^{-1})`,
          caption: "Change in concentration of a reactant or product per unit time.",
        },
        {
          kind: "equation",
          label: "Initial rate (clock reactions)",
          math: String.raw`\text{Initial Rate} \propto \frac{1}{t} \quad (\text{s}^{-1})`,
          caption: "For experiments measuring time (t) to reach a fixed visual end-point.",
        },
        {
          kind: "definition-list",
          items: [
            { term: "Initial rate", body: "Draw a tangent to the curve at t = 0 and calculate its gradient (Δy / Δx)." },
            { term: "Rate at time t", body: "Draw a tangent at a specific time t on the curve and find its gradient." },
            { term: "Gradient trend", body: "The gradient is steepest at t = 0 (highest reactant concentration). The slope flattens over time as reactants are consumed, eventually reaching zero when the reaction goes to completion." },
          ],
        },
        {
          kind: "heading",
          level: 3,
          id: "spec-9-4",
          tag: "9.4",
          text: "Maxwell-Boltzmann Distribution and Temperature Effects",
        },
        {
          kind: "image",
          src: "/images/t9-maxwell-boltzmann.png",
          alt: "Maxwell-Boltzmann energy distribution curve showing molecular energy distribution, with activation energy marked and the effect of increasing temperature",
          caption: "The Maxwell-Boltzmann distribution. At higher temperature (T₂), the peak shifts right and lowers. The shaded area beyond Ea increases significantly — more molecules have sufficient energy to react.",
        },
        {
          kind: "definition-list",
          items: [
            { term: "Origin (0,0)", body: "The curve starts at the origin because no molecules have zero kinetic energy." },
            { term: "Peak (Emp)", body: "The peak corresponds to the most probable energy possessed by the greatest number of molecules." },
            { term: "Mean energy", body: "The mean energy lies to the right of the peak because the distribution is asymmetric (skewed right)." },
            { term: "High-energy tail", body: "The curve approaches the x-axis at high energy but never touches it (asymptotic). There is no theoretical upper limit to molecular energy." },
            { term: "Area under curve", body: "Represents the total number of particles in the system. This stays constant when temperature changes." },
          ],
        },
        {
          kind: "callout",
          tone: "key",
          title: "Why temperature has a large effect",
          body: "A small increase in temperature produces a large increase in rate. This is not because particles move slightly faster — it's because the proportion of particles with energy ≥ Ea increases significantly, leading to a much higher frequency of effective collisions.",
        },
        {
          kind: "heading",
          level: 3,
          id: "spec-9-5-8",
          tag: "9.5–9.8",
          text: "Catalysts, Reaction Profiles, and Sustainability",
        },
        {
          kind: "definition-list",
          items: [
            { term: "Catalyst definition", body: "A substance that increases the rate of a chemical reaction without undergoing any permanent chemical change or being used up." },
            { term: "Mechanism", body: "Provides an alternative reaction pathway with a lower activation energy (Ea)." },
            { term: "Maxwell-Boltzmann with catalyst", body: "The energy distribution curve itself does not shift. Instead, the activation energy position moves left (from Ea uncatalysed to Ea catalysed). A much larger area under the curve now lies beyond Ea catalysed." },
            { term: "ΔH unchanged", body: "The enthalpy change of reaction remains completely unchanged by the presence of a catalyst. Catalysts affect kinetics, not thermodynamics." },
          ],
        },
        {
          kind: "image",
          src: "/images/t9-catalyst-profile.png",
          alt: "Reaction energy profiles comparing catalysed and uncatalysed reactions, showing the catalyst provides a lower activation energy pathway",
          caption: "Catalysed vs uncatalysed energy profiles. The catalyst provides an alternative route with lower Ea. ΔH stays the same.",
        },
        {
          kind: "definition-list",
          items: [
            { term: "Industrial advantage: energy", body: "Allows reactions to proceed rapidly at lower temperatures and pressures, reducing fossil fuel consumption and production costs." },
            { term: "Industrial advantage: selectivity", body: "High-selectivity catalysts direct reactions toward desired products with minimal side-reactions, increasing atom economy and reducing waste." },
            { term: "Heterogeneous catalysis", body: "Gas reactants are adsorbed onto the solid catalyst surface, weakening internal bonds and holding molecules in the correct orientation. Products then desorb." },
          ],
        },
      ],
    },
    {
      id: "spec-9b",
      code: "9B",
      title: "Equilibria",
      blocks: [
        {
          kind: "heading",
          level: 3,
          id: "spec-9-9",
          tag: "9.9",
          text: "Dynamic Equilibrium in Reversible Reactions",
        },
        {
          kind: "definition-list",
          items: [
            { term: "Reversible reaction", body: "The reaction must be reversible (⇌)." },
            { term: "Closed system", body: "No reactants or products can enter or escape." },
            { term: "Equal rates", body: "The rate of the forward reaction equals the rate of the backward reaction." },
            { term: "Constant concentrations", body: "The concentrations of all reactants and products remain constant over time (though not necessarily equal)." },
            { term: "Continuous motion", body: "Both forward and backward reactions continue to occur simultaneously at the microscopic level." },
          ],
        },
        {
          kind: "heading",
          level: 3,
          id: "spec-9-10",
          tag: "9.10",
          text: "Le Chatelier's Principle",
        },
        {
          kind: "callout",
          tone: "key",
          title: "Le Chatelier's Principle",
          body: "If a system at dynamic equilibrium is subjected to a change in conditions (concentration, pressure, or temperature), the position of equilibrium will shift in the direction that opposes and minimizes that change.",
        },
        {
          kind: "image",
          src: "/images/t9-equilibrium-shifts.png",
          alt: "Infographic showing how equilibrium shifts in response to changes in concentration, pressure, and temperature",
          caption: "How equilibrium shifts. The system always opposes the change you make.",
        },
        {
          kind: "table",
          caption: "Summary of qualitative effects on homogeneous systems",
          columns: [
            { key: "change", header: "Change" },
            { key: "shift", header: "Direction of shift" },
            { key: "reason", header: "Reason" },
          ],
          rows: [
            { change: "↑ Reactant concentration", shift: "RIGHT (products)", reason: "System consumes added reactant" },
            { change: "↓ Reactant concentration", shift: "LEFT (reactants)", reason: "System reforms reactant" },
            { change: "↑ Total pressure", shift: "Side with FEWER gas moles", reason: "System reduces gas molecule count" },
            { change: "↓ Total pressure", shift: "Side with MORE gas moles", reason: "System generates more gas molecules" },
            { change: "↑ Temperature", shift: "Endothermic direction (+ΔH)", reason: "System absorbs thermal energy" },
            { change: "↓ Temperature", shift: "Exothermic direction (−ΔH)", reason: "System releases thermal energy" },
            { change: "Add catalyst", shift: "NO EFFECT", reason: "Increases forward and backward rates equally" },
          ],
        },
        {
          kind: "callout",
          tone: "exam-alert",
          title: "NO₂ / N₂O₄ colour changes",
          body: "2NO₂(g, brown) ⇌ N₂O₄(g, colourless), ΔH = −57.2 kJ/mol. Cooling → shifts right (exothermic) → paler/colourless. Heating → shifts left (endothermic) → darker brown.",
        },
        {
          kind: "heading",
          level: 3,
          id: "spec-9-11",
          tag: "9.11",
          text: "Industrial Processes — Yield vs Rate Compromises",
        },
        {
          kind: "fact-box",
          label: "Haber Process (Ammonia)",
          tone: "key",
          facts: [
            { term: "Reaction", value: "N₂ + 3H₂ ⇌ 2NH₃, ΔH = −92.4 kJ/mol" },
            { term: "Temperature", value: "450°C — low T gives high yield but slow rate; 450°C is the compromise" },
            { term: "Pressure", value: "200–250 atm — high P favours products (4→2 moles) but is expensive/dangerous" },
            { term: "Catalyst", value: "Iron (Fe) — speeds up attainment of equilibrium" },
            { term: "Recycling", value: "Unreacted N₂ and H₂ recycled; NH₃ liquefied and removed" },
          ],
        },
        {
          kind: "fact-box",
          label: "Contact Process (Sulfur Trioxide)",
          tone: "key",
          facts: [
            { term: "Reaction", value: "2SO₂ + O₂ ⇌ 2SO₃, ΔH = −96 kJ/mol" },
            { term: "Temperature", value: "450°C — compromise between rate and exothermic yield" },
            { term: "Pressure", value: "1–2 atm — conversion already >96% at atmospheric pressure" },
            { term: "Catalyst", value: "V₂O₅ (vanadium(V) oxide) — cycles between +5 and +4 oxidation states" },
          ],
        },
      ],
    },
  ],
};
