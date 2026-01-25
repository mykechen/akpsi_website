"use client";

import { useEffect, useState } from "react";

export default function MembersHero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-cloud-100 via-cloud-50 to-white">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-32 right-1/4 w-80 h-80 bg-cloud-200/50 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        {/* Eyebrow */}
        <p
          className={`
            text-sm md:text-base font-medium tracking-[0.2em] uppercase text-accent mb-6
            transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]
            ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
          `}
        >
          Our Community
        </p>

        {/* Main heading */}
        <h1
          className={`
            font-display text-[3rem] sm:text-[4rem] md:text-[5rem] lg:text-[6rem] xl:text-[7rem]
            tracking-wide text-secondary-light leading-[1.1] mb-6
            transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] delay-100
            ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
          `}
        >
          OUR MEMBERS
        </h1>

        {/* Supporting text */}
        <p
          className={`
            text-lg md:text-xl text-secondary-dark/70 max-w-2xl mx-auto leading-relaxed
            transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] delay-200
            ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
          `}
        >
          Meet the talented individuals who make up Alpha Zeta - a diverse community
          of future leaders in business, tech, and beyond.
        </p>
      </div>

      {/* Scroll indicator */}
      <div
        className={`
          absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3
          transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] delay-500
          ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
        `}
      >
        <span className="text-xs uppercase tracking-[0.2em] text-secondary-dark/50">
          Meet the team
        </span>
        <div className="w-px h-10 bg-gradient-to-b from-secondary-dark/30 to-transparent" />
      </div>
    </section>
  );
}
