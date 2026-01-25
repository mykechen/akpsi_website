"use client";

import Image from "next/image";
import companies from "@/data/companies.json";
import type { Company } from "@/types";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const companiesData: Company[] = companies;

export default function WhereOurMembersWork() {
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
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-secondary-light mb-4 uppercase">
            Where Our Members Work
          </h2>
          <p className="text-secondary-dark/70 text-lg max-w-xl mx-auto">
            Alpha Zeta alumni and members can be found at leading companies
            worldwide
          </p>
        </div>

        {/* Company Grid */}
        <div
          className={`
            grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6
            transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] delay-100
            ${isRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
          `}
        >
          {companiesData.slice(0, 18).map((company, index) => (
            <div
              key={company.id}
              className={`
                group aspect-[2/1] flex items-center justify-center p-4
                bg-cloud-50/50 border border-secondary/5 rounded-xl
                transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]
                hover:bg-white hover:border-accent/20
                hover:shadow-[0_8px_24px_-8px_rgba(37,99,235,0.12)]
                ${isRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
              `}
              style={{
                transitionDelay: isRevealed ? `${200 + index * 30}ms` : "0ms",
              }}
            >
              <Image
                src={company.logo}
                alt={company.name}
                width={120}
                height={48}
                className="max-w-full max-h-full object-contain filter grayscale opacity-50 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100"
                unoptimized
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
