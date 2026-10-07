"use client";

import { Printer } from "lucide-react";

/**
 * Print / Save-as-PDF button. Before calling window.print(), it:
 *   1. Populates the print masthead (title, meta, URL, date)
 *   2. Builds a mini table-of-contents from the page's section headings
 *   3. Forces all paragraphs to paragraph mode (not bullets) for print
 *   4. Expands any collapsed Q&A answers
 */
export function PrintButton({
  topicTitle,
  topicNumber,
  unitNumber,
}: {
  topicTitle: string;
  topicNumber: number;
  unitNumber: number;
}) {
  const handlePrint = () => {
    // 1. Populate the print masthead
    const masthead = document.querySelector(".print-masthead");
    if (masthead) {
      const titleEl = masthead.querySelector(".pm-title");
      const metaEl = masthead.querySelector(".pm-meta");
      const urlEl = masthead.querySelector(".pm-url");
      if (titleEl) titleEl.textContent = topicTitle;
      if (metaEl) {
        const roman = unitNumber === 1 ? "I" : unitNumber === 2 ? "II" : String(unitNumber);
        const date = new Date().toLocaleDateString("en-GB", {
          day: "numeric",
          month: "short",
          year: "numeric",
        });
        metaEl.textContent = `Topic ${String(topicNumber).padStart(2, "0")} · Unit ${roman} · Edexcel IAL Chemistry · Printed ${date}`;
      }
      if (urlEl) urlEl.textContent = window.location.href;
    }

    // 2. Build a mini-TOC for the print masthead
    const tocEl = document.querySelector(".print-toc");
    if (tocEl) {
      const sections = document.querySelectorAll("section[id] h2");
      const items = Array.from(sections)
        .map((h) => {
          const text = h.textContent?.trim() || "";
          const id = h.id;
          return id ? `<li>${text}</li>` : "";
        })
        .join("");
      tocEl.innerHTML = items ? `<ol class="print-toc-list">${items}</ol>` : "";
    }

    // 3. Expand all Q&A answers for print
    document.querySelectorAll("aside[aria-label='Check your understanding'] button[aria-expanded]").forEach((btn) => {
      if (btn.getAttribute("aria-expanded") === "false") {
        (btn as HTMLButtonElement).click();
      }
    });

    // 4. Set reading mode to paragraph for print
    const radios = document.querySelectorAll("[role='radio']");
    const paraRadio = Array.from(radios).find((r) => r.textContent?.trim() === "¶");
    (paraRadio as HTMLButtonElement)?.click();

    // Wait a tick for React to re-render, then print
    setTimeout(() => window.print(), 300);
  };

  return (
    <button
      type="button"
      onClick={handlePrint}
      className="inline-flex items-center gap-2 border border-ink/20 bg-transparent px-4 py-2 font-sans text-xs uppercase tracking-[0.1em] text-ink/70 transition-colors hover:border-primary hover:text-primary"
      title="Print or save as PDF"
    >
      <Printer className="h-3.5 w-3.5" />
      Print / PDF
    </button>
  );
}
