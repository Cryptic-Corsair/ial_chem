"use client";

import { createContext, useContext, useEffect, useState, useSyncExternalStore } from "react";

type Theme = "light" | "dark";

interface ThemeCtx {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (t: Theme) => void;
}

const Ctx = createContext<ThemeCtx>({
  theme: "light",
  toggleTheme: () => {},
  setTheme: () => {},
});

const STORAGE_KEY = "ial-chem:theme";

/**
 * Read the theme from localStorage (or OS preference) — used with
 * `useSyncExternalStore` so we get hydration-safe reads without
 * setState-in-effect. Returns "light" on the server and on the first
 * client render (so no hydration mismatch), then the real value after
 * mount.
 */
function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  return () => window.removeEventListener("storage", callback);
}

function getSnapshot(): Theme {
  try {
    const stored = localStorage.getItem(STORAGE_KEY) as Theme | null;
    if (stored === "light" || stored === "dark") return stored;
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) return "dark";
  } catch {
    /* ignore */
  }
  return "light";
}

// Server snapshot — always "light" to match the initial client render.
function getServerSnapshot(): Theme {
  return "light";
}

/**
 * Theme provider. Uses `useSyncExternalStore` to read the theme from
 * localStorage in a hydration-safe way (no setState-in-effect). The
 * `<html>` element's `dark` class is set by an inline script in
 * `layout.tsx` *before* React hydrates, so there's no flash of the wrong
 * theme. This provider keeps the class in sync with user toggles.
 */
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const [override, setOverride] = useState<Theme | null>(null);

  // The displayed theme is the override (if the user just toggled) or the
  // store value. This lets `setTheme` update instantly without waiting for
  // the storage event.
  const displayedTheme = override ?? theme;

  // Sync the `dark` class on <html> whenever the displayed theme changes.
  useEffect(() => {
    const root = document.documentElement;
    if (displayedTheme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [displayedTheme]);

  const setTheme = (t: Theme) => {
    setOverride(t);
    try {
      localStorage.setItem(STORAGE_KEY, t);
    } catch {
      /* ignore */
    }
    // Dispatch a storage event so `useSyncExternalStore` picks up the
    // change immediately (the native `storage` event only fires cross-tab).
    window.dispatchEvent(new Event("storage"));
  };

  const toggleTheme = () => setTheme(displayedTheme === "light" ? "dark" : "light");

  return (
    <Ctx.Provider value={{ theme: displayedTheme, toggleTheme, setTheme }}>
      {children}
    </Ctx.Provider>
  );
}

export function useTheme() {
  return useContext(Ctx);
}
