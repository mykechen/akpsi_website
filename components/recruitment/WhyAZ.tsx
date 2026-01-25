"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

const cards = [
  {
    id: "1",
    title: "Professional Development",
    description:
      "Gain access to exclusive workshops, networking events, and mentorship opportunities that will accelerate your career growth.",
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
        />
      </svg>
    ),
  },
  {
    id: "2",
    title: "Lifelong Brotherhood",
    description:
      "Build meaningful relationships that extend far beyond USC. Our tight-knit community supports you from college to career and beyond.",
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
  },
  {
    id: "3",
    title: "Exclusive Opportunities",
    description:
      "Access our extensive alumni network, company partnerships, and exclusive events that open doors to internships and jobs.",
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
  },
];

export default function WhyAZ() {
  const { ref, isRevealed } = useScrollReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      className="py-24 md:py-40 bg-gradient-to-b from-white to-cloud-50"
    >
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div
          className={`
            text-center mb-12 md:mb-16
            transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]
            ${isRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
          `}
        >
          <span className="inline-block text-sm font-medium tracking-[0.2em] uppercase text-accent mb-4">
            Why Join Us
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-secondary-light mb-4 uppercase">
            Why Alpha Zeta
          </h2>
          <p className="text-secondary-dark/70 text-lg max-w-2xl mx-auto">
            Discover what makes our community unique and how we can help you
            achieve your goals.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <div
              key={card.id}
              className="group relative bg-white rounded-2xl p-8 border border-secondary/10 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.06)] text-center hover:shadow-[0_20px_50px_-12px_rgba(37,99,235,0.15)] hover:border-accent/20 hover:-translate-y-2"
              style={{
                opacity: isRevealed ? 1 : 0,
                transform: isRevealed ? "translateY(0)" : "translateY(2rem)",
                transition: isRevealed 
                  ? `opacity 0.7s cubic-bezier(0.16,1,0.3,1) ${index * 100}ms, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${index * 100}ms, box-shadow 0.2s ease-out 0s, border-color 0.2s ease-out 0s`
                  : "opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transition = "box-shadow 0.2s ease-out, border-color 0.2s ease-out, transform 0.2s ease-out";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transition = `opacity 0.7s cubic-bezier(0.16,1,0.3,1) ${index * 100}ms, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${index * 100}ms, box-shadow 0.2s ease-out, border-color 0.2s ease-out`;
              }}
            >
              {/* Icon */}
              <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-2xl bg-accent/10 text-accent mb-6 transition-[background-color,color,transform] duration-200 group-hover:bg-accent group-hover:text-white group-hover:scale-110">
                {card.icon}
              </div>

              {/* Title */}
              <h3 className="font-body text-xl font-semibold text-secondary-light mb-3">
                {card.title}
              </h3>

              {/* Description */}
              <p className="text-secondary-dark/60 text-sm leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
