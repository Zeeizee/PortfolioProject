"use client";

import { footerText } from "@/data/portfolio";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border bg-card">
      <div className="  mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row md:px-6">
        <p className="text-sm text-muted-foreground text-center ">{footerText.copyright}</p>
        <button
          type="button"
          onClick={scrollToTop}
          className="text-sm font-medium text-accent transition-opacity hover:opacity-80"
        >
          {footerText.backToTop}
        </button>
      </div>
    </footer>
  );
}
