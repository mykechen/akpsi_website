"use client";

import { useEffect, useState } from "react";
import Button from "@/components/ui/Button";

export default function RecruitmentHero() {
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

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Application status badge */}
        <div
          className={`
            inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-accent text-sm font-medium mb-8
            transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]
            ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
          `}
        >
          <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
          Applications Open
        </div>

        {/* Main heading */}
        <h1
          className={`
            font-display text-[2.5rem] sm:text-[3.5rem] md:text-[4.5rem] lg:text-[5.5rem]
            tracking-wide text-secondary-light leading-[1.1] mb-6
            transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] delay-100
            ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
          `}
        >
          JOIN ALPHA ZETA
        </h1>

        {/* Semester */}
        <p
          className={`
            text-2xl md:text-3xl font-semibold text-accent mb-4
            transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] delay-150
            ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
          `}
        >
          Spring 2026
        </p>

        {/* Deadline */}
        <p
          className={`
            text-lg text-secondary-dark/60 mb-12
            transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] delay-200
            ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
          `}
        >
          Application Deadline: January 14, 2026 at 11:59 PM
        </p>

        {/* CTA */}
        <div
          className={`
            flex flex-col sm:flex-row items-center justify-center gap-4
            transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] delay-300
            ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
          `}
        >
          <Button href="https://forms.google.com" variant="primary" size="lg">
            Apply Now
          </Button>
          <Button href="#timeline" variant="outline" size="lg">
            View Timeline
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
        <span className="text-xs uppercase tracking-[0.2em] text-secondary-dark/50">
          Learn more
        </span>
        <div className="w-px h-10 bg-gradient-to-b from-secondary-dark/30 to-transparent" />
      </div>
    </section>
  );
}
