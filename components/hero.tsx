"use client";

import { useLanguage } from "./language-provider";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/dance-photo-1.jpg"
          alt="Salsa dancing"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/50 via-blue-800/40 to-blue-950/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        {/* Giant Banana Logo */}
        <div className="mb-8 animate-bounce-slow drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)]"></div>

        <h1 className="mb-6 text-balance font-bold text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)] text-5xl md:text-7xl lg:text-8xl">
          {t.hero.title}
        </h1>

        <p className="mb-10 max-w-2xl text-balance text-xl text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)] md:text-2xl">
          {t.hero.subtitle}
        </p>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-2 text-white drop-shadow-lg">
          <span className="text-sm font-medium">Scroll</span>
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
