"use client";

import { Share2, Check } from "lucide-react";
import { useState } from "react";

/**
 * Share button — uses the Web Share API on mobile, falls back to
 * copying the URL to clipboard on desktop.
 */
export function ShareButton() {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const url = window.location.href;
    const title = document.title;

    if (navigator.share) {
      try {
        await navigator.share({ title, url });
      } catch {
        /* user cancelled */
      }
    } else {
      try {
        await navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch {
        /* clipboard not available */
      }
    }
  };

  return (
    <button
      type="button"
      onClick={handleShare}
      aria-label="Share this topic"
      title="Share"
      className="inline-flex items-center gap-2 border border-ink/20 bg-transparent px-4 py-2 font-sans text-xs uppercase tracking-[0.1em] text-ink/70 transition-colors hover:border-primary hover:text-primary"
    >
      {copied ? (
        <>
          <Check className="h-3.5 w-3.5" />
          Copied
        </>
      ) : (
        <>
          <Share2 className="h-3.5 w-3.5" />
          Share
        </>
      )}
    </button>
  );
}
