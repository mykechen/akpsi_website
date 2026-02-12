"use client";

import { useEffect, useState } from "react";
import Button from "@/components/ui/Button";
import CloudBackground from "@/components/ui/CloudBackground";
export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger entrance animation after mount
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-cloud-50 via-white to-white">
      <CloudBackground />
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        {/* Subtitle - ABOVE main heading for better hierarchy */}
        <p
          className={`
            text-sm md:text-base font-medium tracking-[0.2em] uppercase text-accent mb-6
            transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]
            ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
          `}
        >
          USC's Premier Business Society
        </p>

        {/* Main heading */}
        <h1
          className={`
            font-display text-[2.75rem] sm:text-[4.5rem] md:text-[6rem] lg:text-[8rem] xl:text-[10rem]
            tracking-wide text-secondary-light leading-[0.9] mb-8 whitespace-nowrap
            transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] delay-100
            ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
          `}
        >
          ALPHA KAPPA PSI
        </h1>

        {/* Supporting text */}
        <p
          className={`
            text-lg md:text-xl text-secondary-dark max-w-xl mx-auto mb-12 leading-relaxed
            transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] delay-200
            ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
          `}
        >
          Building future leaders through professional development, lifelong
          brotherhood, and career excellence since 1922.
        </p>

        {/* CTA */}
        <div
          className={`
            flex flex-col sm:flex-row items-center justify-center gap-4
            transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] delay-300
            ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
          `}
        >
          <Button href="https://tally.so/r/GxR5Rk" variant="primary" size="lg">
            Apply for Spring 2026
          </Button>
          <Button href="/careers" variant="outline" size="lg">
            Explore Careers
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className={`
          absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3
          transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] delay-500
          ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
        `}
      >
        <span className="text-xs uppercase tracking-[0.2em] text-secondary-dark/60">
          Scroll to explore
        </span>
        <div className="w-px h-10 bg-gradient-to-b from-secondary-dark/30 to-transparent" />
      </div>
    </section>
  );
}
