"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

const requirements = [
  {
    id: "1",
    title: "Freshman–Junior",
    subtitle: "Standing",
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
          d="M12 14l9-5-9-5-9 5 9 5z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
        />
      </svg>
    ),
  },
  {
    id: "2",
    title: "3.0+ GPA",
    subtitle: "Minimum",
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
    id: "3",
    title: "All Majors",
    subtitle: "Welcome",
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
          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
        />
      </svg>
    ),
  },
];

export default function Eligibility() {
  const { ref, isRevealed } = useScrollReveal<HTMLElement>();

  return (
    <section ref={ref} className="py-24 md:py-40 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div
          className={`
            text-center mb-12 md:mb-16
            transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]
            ${isRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
          `}
        >
          <span className="inline-block text-sm font-medium tracking-[0.2em] uppercase text-accent mb-4">
            Requirements
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-secondary-light">
            Who Can Apply
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {requirements.map((req, index) => (
            <div
              key={req.id}
              className={`
                group relative bg-white rounded-2xl p-8
                border border-secondary/10
                shadow-[0_4px_24px_-4px_rgba(0,0,0,0.06)]
                transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]
                hover:shadow-[0_20px_50px_-12px_rgba(37,99,235,0.15)]
                hover:border-accent/20
                hover:-translate-y-2
                text-center
                ${isRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
              `}
              style={{
                transitionDelay: isRevealed ? `${index * 100}ms` : "0ms",
              }}
            >
              {/* Icon */}
              <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-2xl bg-accent/10 text-accent mb-6 transition-all duration-300 group-hover:bg-accent group-hover:text-white group-hover:scale-110">
                {req.icon}
              </div>

              {/* Title */}
              <h3 className="font-body text-xl font-semibold text-secondary-light mb-1">
                {req.title}
              </h3>

              {/* Subtitle */}
              <p className="text-secondary-dark/60 text-sm">
                {req.subtitle}
              </p>
            </div>
          ))}
        </div>

        {/* Note */}
        <p
          className={`
            text-center text-secondary-dark/50 text-sm mt-10
            transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] delay-300
            ${isRevealed ? "opacity-100" : "opacity-0"}
          `}
        >
          No prior business experience required — we welcome students from all backgrounds.
        </p>
      </div>
    </section>
  );
}
