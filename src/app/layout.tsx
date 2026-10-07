import type { Metadata } from "next";
import { DM_Serif_Display, Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/site/theme-provider";

// ── Font strategy (matches the reference index.html exactly) ──
// Body / UI  : Outfit (sans-serif) — never serif, never Times
// Headings   : DM Serif Display (display face only, not body serif)
// Code / chem: JetBrains Mono
//
// All Tailwind `font-sans` and `font-serif` classes resolve to Outfit so
// existing component code keeps working without edits. `font-display`
// resolves to DM Serif Display.

const outfit = Outfit({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const dmSerifDisplay = DM_Serif_Display({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: {
    default: "The IAL Chemistry Companion",
    template: "%s · The IAL Chemistry Companion",
  },
  description:
    "A revision companion for Edexcel International A-Level Chemistry. Topic-by-topic notes, worked examples, and exam-focused explanations — written like a textbook, not a template.",
  keywords: [
    "Edexcel IAL Chemistry",
    "A-Level Chemistry",
    "revision notes",
    "intermolecular forces",
    "Unit 2",
  ],
  authors: [{ name: "The IAL Chemistry Companion" }],
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "The IAL Chemistry Companion",
    description:
      "A revision companion for Edexcel International A-Level Chemistry — written like a textbook, not a template.",
    type: "website",
  },
};

// Inline script — runs before paint to set the theme class on <html>,
// preventing a flash of the wrong theme. Reads localStorage first, then
// falls back to the OS prefers-color-scheme.
const themeInitScript = `
(function() {
  try {
    var stored = localStorage.getItem('ial-chem:theme');
    var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    var theme = stored || (prefersDark ? 'dark' : 'light');
    if (theme === 'dark') document.documentElement.classList.add('dark');
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning id="top">
      <head>
        <script
          dangerouslySetInnerHTML={{ __html: themeInitScript }}
        />
      </head>
      <body
        className={`${outfit.variable} ${dmSerifDisplay.variable} ${jetbrainsMono.variable} antialiased bg-background text-foreground`}
      >
        <ThemeProvider>{children}</ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}
