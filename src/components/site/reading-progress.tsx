"use client";

import { useEffect, useState } from "react";

/**
 * Slim progress bar fixed under the site header. Tracks how far the user
 * has scrolled through the article. Hidden until the user scrolls past the
 * hero (so it doesn't clutter the initial view).
 */
export function ReadingProgress() {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const scrollTop = doc.scrollTop;
      const height = doc.scrollHeight - doc.clientHeight;
      const pct = height > 0 ? (scrollTop / height) * 100 : 0;
      setProgress(Math.min(100, Math.max(0, pct)));
      setVisible(scrollTop > 200);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div
      className={`fixed left-0 right-0 top-14 z-30 h-0.5 bg-transparent transition-opacity duration-300 sm:top-16 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
      aria-hidden="true"
    >
      <div
        className="h-full bg-gradient-to-r from-primary to-primary/70 transition-[width] duration-150 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
