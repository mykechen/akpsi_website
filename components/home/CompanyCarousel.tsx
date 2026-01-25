"use client";

import Image from "next/image";
import companies from "@/data/companies.json";
import type { Company } from "@/types";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const companyData: Company[] = companies;

export default function CompanyCarousel() {
  const { ref, isRevealed } = useScrollReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      className="py-24 md:py-40 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div
          className={`
            text-center mb-16 md:mb-20
            transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]
            ${isRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
          `}
        >
          <span className="inline-block text-sm font-medium tracking-[0.2em] uppercase text-accent mb-4">
            Our Alumni Work At
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-secondary-light">
            Where we are now
          </h2>
        </div>

        {/* Logo Grid - Adaptive Flexbox */}
        <div
          className={`
            flex flex-wrap justify-center items-center gap-x-12 gap-y-10 md:gap-x-16 md:gap-y-12
            transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] delay-100
            ${isRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
          `}
        >
          {companyData.map((company, index) => (
            <div
              key={company.id}
              className="group flex items-center justify-center"
              style={{
                transitionDelay: isRevealed ? `${index * 50}ms` : "0ms",
              }}
            >
              <Image
                src={company.logo}
                alt={company.name}
                width={140}
                height={56}
                className="
                  h-8 md:h-10 w-auto object-contain
                  filter grayscale opacity-50
                  transition-all duration-200 ease-[cubic-bezier(0.16,1,0.3,1)]
                  group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110
                "
                unoptimized
              />
            </div>
          ))}
        </div>

        {/* "And more" text */}
        <p
          className={`
            text-center text-secondary-dark/50 text-sm mt-12
            transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] delay-300
            ${isRevealed ? "opacity-100" : "opacity-0"}
          `}
        >
          And 100+ more companies across finance, tech, and consulting
        </p>
      </div>
    </section>
  );
}
