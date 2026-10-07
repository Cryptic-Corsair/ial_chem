"use client";

import { useEffect } from "react";

/**
 * Keyboard shortcuts for topic pages:
 *   j / ↓  — scroll to next section
 *   k / ↑  — scroll to previous section
 *   t      — open/close the TOC (dispatches a custom event)
 *   b      — toggle reading mode (paragraph ↔ bullets)
 *   Home   — scroll to top
 *   End    — scroll to bottom
 *
 * Only active when not typing in an input/textarea.
 */
export function KeyboardShortcuts() {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      // Don't interfere with typing
      const target = e.target as HTMLElement;
      if (target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.isContentEditable) return;
      // Don't interfere with modifier keys
      if (e.ctrlKey || e.metaKey || e.altKey) return;

      switch (e.key) {
        case "j":
        case "ArrowDown": {
          e.preventDefault();
          const sections = document.querySelectorAll("section[id]");
          const scrollY = window.scrollY + 120;
          for (const s of sections) {
            if (s.getBoundingClientRect().top + window.scrollY > scrollY) {
              s.scrollIntoView({ behavior: "smooth", block: "start" });
              return;
            }
          }
          break;
        }
        case "k":
        case "ArrowUp": {
          e.preventDefault();
          const sections = document.querySelectorAll("section[id]");
          const scrollY = window.scrollY;
          const arr = Array.from(sections).reverse();
          for (const s of arr) {
            if (s.getBoundingClientRect().top + window.scrollY < scrollY - 10) {
              s.scrollIntoView({ behavior: "smooth", block: "start" });
              return;
            }
          }
          break;
        }
        case "t": {
          e.preventDefault();
          // Toggle the FAB's sheet by clicking the FAB button
          const fab = document.querySelector(".floating-toc-fab") as HTMLButtonElement;
          fab?.click();
          break;
        }
        case "b": {
          e.preventDefault();
          // Cycle reading mode: auto → bullets → paragraph → auto
          const radios = document.querySelectorAll("[role='radio']");
          const arr = Array.from(radios);
          const activeIdx = arr.findIndex((r) => r.getAttribute("aria-checked") === "true");
          const nextIdx = (activeIdx + 1) % arr.length;
          (arr[nextIdx] as HTMLButtonElement)?.click();
          break;
        }
        case "Home": {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: "smooth" });
          break;
        }
        case "End": {
          e.preventDefault();
          window.scrollTo({ top: document.documentElement.scrollHeight, behavior: "smooth" });
          break;
        }
      }
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return null;
}
