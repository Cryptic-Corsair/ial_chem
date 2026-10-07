/**
 * Split a string into sentences, handling the common false-positive cases
 * that occur in chemistry text:
 *
 *  - Inline LaTeX delimiters: \(...\) — the dots inside are math, not text
 *  - Roman-numeral list markers: "i.", "ii.", "iii.", "iv." at start of item
 *  - Latin abbreviations: "e.g.", "i.e.", "vs.", "cf.", "etc."
 *  - Titles: "Mr.", "Dr.", "St.", "Mrs.", "Ms."
 *  - Decimal numbers: "0.5", "298.15"
 *  - Ordinals: "1st.", "2nd.", "3rd." (rare but possible)
 *  - Single-letter capitals followed by "." inside acronyms: "U.S.", "I.A.L."
 *
 * Strategy: we protect LaTeX spans first (by replacing them with placeholders),
 * then split on ". " / "? " / "! " followed by a capital letter or end-of-
 * string, then restore the LaTeX spans.
 *
 * The algorithm is deliberately conservative — when in doubt, don't split.
 * A missed split is harmless; a false split looks broken.
 */

import { type Part, parseInlineMath } from "./math";

/**
 * Split rich text (which may contain inline \(...\) LaTeX) into sentences.
 * Each returned sentence is itself an array of {text|math} segments so the
 * caller can render each segment with the right component.
 *
 * Sentences that end up empty (e.g. trailing whitespace after a split) are
 * dropped.
 */
export function splitIntoSentences(src: string): Part[][] {
  // Step 1: protect LaTeX spans by replacing them with sentinels so the
  // dots/periods inside math don't trigger sentence splits.
  const placeholders: string[] = [];
  let flat = src.replace(/\\\((.+?)\\\)/gs, (_, inner) => {
    const idx = placeholders.length;
    placeholders.push(inner);
    return `\u0000${idx}\u0000`;
  });

  // Step 2: protect known false-positive dots by replacing them with \u0001.
  // Latin abbreviations
  flat = flat.replace(/\be\.g\./gi, (m) => m.replace(/\./g, "\u0001"));
  flat = flat.replace(/\bi\.e\./gi, (m) => m.replace(/\./g, "\u0001"));
  flat = flat.replace(/\bvs\./gi, (m) => m.replace(/\./g, "\u0001"));
  flat = flat.replace(/\bcf\./gi, (m) => m.replace(/\./g, "\u0001"));
  flat = flat.replace(/\betc\./gi, (m) => m.replace(/\./g, "\u0001"));
  flat = flat.replace(/\bca\./gi, (m) => m.replace(/\./g, "\u0001"));
  // Titles
  flat = flat.replace(/\b(Mr|Mrs|Ms|Dr|Prof|St)\./g, (m) =>
    m.replace(/\./g, "\u0001"),
  );
  // Acronym dots between single capital letters: U.S., I.A.L. → protect
  // the dots that sit between two capitals. Match "X." where the next char
  // is a capital.
  flat = flat.replace(/\b([A-Z])\.(?=[A-Z])/g, "$1\u0001");
  // Decimal numbers: 0.5, 298.15
  flat = flat.replace(/(\d)\.(?=\d)/g, "$1\u0001");
  // Roman-numeral list markers at start of item: "i. ", "ii. " followed by
  // a lowercase letter.
  flat = flat.replace(/\b([ivx]{1,4})\.(?=\s+[a-z])/g, "$1\u0001");

  // Step 3: split on sentence-ending punctuation (. ? !) followed by
  // whitespace and a capital letter, digit, opening quote/paren, or LaTeX
  // sentinel — or by end-of-string.
  const sentences: string[] = [];
  let current = "";
  for (let i = 0; i < flat.length; i++) {
    const ch = flat[i];
    current += ch;

    if (ch === "." || ch === "?" || ch === "!") {
      // Look ahead past any whitespace
      let j = i + 1;
      while (j < flat.length && /\s/.test(flat[j])) j++;
      const next = flat[j];
      const isEnd = j >= flat.length;
      const startsNew =
        next !== undefined &&
        (/[A-Z0-9"(]/.test(next) || next === "\u0000");

      if (isEnd || startsNew) {
        sentences.push(current.trim());
        current = "";
        // Skip only the whitespace between sentences — keep j pointing at
        // the first char of the next sentence so it gets included.
        i = j - 1; // -1 because the for-loop will i++ next
        continue;
      }
    }
  }
  if (current.trim()) sentences.push(current.trim());

  // Step 4: restore protected dots and LaTeX placeholders, then re-parse
  // each sentence into Part[] using the shared parseInlineMath.
  return sentences
    .map((s) => {
      const restored = s
        .replace(/\u0001/g, ".")
        .replace(/\u0000(\d+)\u0000/g, (_, idx) => {
          return `\\(${placeholders[parseInt(idx, 10)]}\\)`;
        });
      return parseInlineMath(restored);
    })
    .filter(
      (parts) => parts.length > 0 && parts.some((p) => p.value.trim()),
    );
}
