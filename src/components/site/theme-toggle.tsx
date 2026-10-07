"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "./theme-provider";

/**
 * Sun/moon toggle for light/dark mode. Persists in localStorage via the
 * ThemeProvider. Respects prefers-color-scheme on first visit.
 */
export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="grid h-8 w-8 place-items-center rounded-sm text-ink/60 transition-colors hover:bg-accent hover:text-primary"
    >
      {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );
}
