"use client";

import Image from "next/image";
import companies from "@/data/companies.json";
import type { Company } from "@/types";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const companyData: Company[] = companies;

export default function CompanyCarousel() {
  const { ref, isRevealed } = useScrollReveal<HTMLElement>();

  return (
    <section ref={ref} className="py-24 md:py-40 bg-white">
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
            Our Network
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-secondary-light uppercase">
            Where We Are Now
          </h2>
        </div>

        {/* Logo Grid - Adaptive Flexbox */}
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-10 md:gap-x-16 md:gap-y-12">
          {companyData.map((company, index) => (
            <div
              key={company.id}
              className={`
                group flex items-center justify-center w-28 md:w-32 lg:w-36
                transition-[opacity,transform] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
                ${isRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
              `}
              style={{
                transitionDelay: isRevealed ? `${150 + index * 40}ms` : "0ms",
              }}
            >
              <Image
                src={company.logo}
                alt={company.name}
                width={144}
                height={56}
                className="
                  h-10 md:h-12 lg:h-14 w-full object-contain
                  filter grayscale opacity-50
                  transition-[filter,opacity,transform] duration-300 ease-out
                  group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105
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
