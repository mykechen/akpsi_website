"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function About() {
  const { ref, isRevealed } = useScrollReveal<HTMLElement>();

  return (
    <section ref={ref} className="py-24 md:py-40 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div
          className={`
            text-center
            transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]
            ${isRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
          `}
        >
          {/* Eyebrow */}
          <span className="inline-block text-sm font-medium tracking-[0.2em] uppercase text-accent mb-6">
            Who We Are
          </span>

          {/* Main statement */}
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-secondary-light leading-tight mb-8 uppercase">
            USC's premier business society
          </h2>

          {/* Supporting paragraphs with proper spacing */}
          <div className="space-y-6 text-lg md:text-xl text-secondary-dark/80 leading-relaxed">
            <p>
              Alpha Zeta is USC’s premier co-ed business society. Since our
              founding in 1922, we’ve built a thriving community of students
              across 15+ different majors and established an extensive alumni
              network, paving the way for future leaders.
            </p>
            <p>
              At Alpha Zeta, we believe in the power of collective growth. We
              empower our brothers to excel in their careers, foster lifelong
              friendships, and advance in every aspect of their lives.
            </p>
          </div>

          {/* Stats row for credibility */}
          <div
            className={`
              mt-16 pt-12 border-t border-secondary/10
              grid grid-cols-3 gap-8
              transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] delay-200
              ${isRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
            `}
          >
            <div>
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">
                100+
              </div>
              <div className="text-sm text-secondary-dark/60 uppercase tracking-wide">
                Years of Legacy
              </div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">
                15+
              </div>
              <div className="text-sm text-secondary-dark/60 uppercase tracking-wide">
                Majors Represented
              </div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">
                500+
              </div>
              <div className="text-sm text-secondary-dark/60 uppercase tracking-wide">
                Alumni Network
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
