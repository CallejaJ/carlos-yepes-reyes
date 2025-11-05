"use client";

import { useLanguage } from "./language-provider";
import { Button } from "./ui/button";
import { LanguageSelector } from "./language-selector";
import { Music } from "lucide-react";

export function Header() {
  const { t } = useLanguage();

  const scrollToPricing = () => {
    const pricingSection = document.getElementById("pricing");
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Music className="h-8 w-8 text-white drop-shadow-lg" />
          <span className="text-xl font-bold text-white drop-shadow-lg">
            Carlos Yepes
          </span>
        </div>

        {/* Navigation - CTA and Language Selector */}
        <div className="flex items-center gap-4">
          <Button
            onClick={scrollToPricing}
            variant="outline"
            className="bg-white/10 hover:bg-white/20 text-white border-white/30 backdrop-blur-sm font-semibold"
          >
            {t.hero.cta}
          </Button>

          <LanguageSelector />
        </div>
      </div>
    </header>
  );
}
