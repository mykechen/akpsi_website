"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

const trackMap: { [key: string]: string } = {
  "Investment Banking": "az13",
  Consulting: "azc",
  "Product Management": "azpm",
  "Computer Science": "azcs",
  Marketing: "azmarketing",
};

export default function WhatYouGet() {
  const { ref, isRevealed } = useScrollReveal<HTMLElement>();

  const handleScrollToSection = (track: string) => {
    const sectionId = trackMap[track];
    if (sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <section
      ref={ref}
      className="py-24 md:py-40 bg-gradient-to-b from-white to-cloud-50"
    >
      <div className="max-w-4xl mx-auto px-6">
        <div
          className={`
            text-center
            transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]
            ${isRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
          `}
        >
          <span className="inline-block text-sm font-medium tracking-[0.2em] uppercase text-accent mb-4">
            Career Development
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-secondary-light mb-8 uppercase">
            What are AZ Groups?
          </h2>
          <p
            className={`
              text-lg md:text-xl text-secondary-dark/70 leading-relaxed max-w-2xl mx-auto
              transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] delay-100
              ${isRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
            `}
          >
            Every member joins one of five specialized career tracks based on
            their professional interests. Each track runs for 12 weeks per
            semester and includes weekly workshops, mock interviews, case
            practice, and 1-on-1 mentorship from members who&apos;ve secured
            roles at top firms.
          </p>
        </div>

        {/* Visual elements */}
        <div
          className={`
            mt-16 flex flex-wrap justify-center gap-4
            transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] delay-200
            ${isRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
          `}
        >
          {[
            "Investment Banking",
            "Consulting",
            "Product Management",
            "Computer Science",
            "Marketing",
          ].map((track) => (
            <button
              key={track}
              onClick={() => handleScrollToSection(track)}
              className="px-5 py-2.5 bg-white border border-secondary/10 rounded-full text-secondary-dark/70 text-sm font-medium shadow-[0_2px_8px_-2px_rgba(0,0,0,0.04)] transition-[box-shadow,border-color,color,transform] duration-200 hover:border-accent/20 hover:text-accent hover:shadow-[0_4px_16px_-4px_rgba(37,99,235,0.1)] active:scale-95 cursor-pointer"
            >
              {track}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
