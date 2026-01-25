"use client";

import Image from "next/image";
import mentorsData from "@/data/mentors.json";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const benefits = [
  {
    title: "Behaviorals",
    description:
      "Preparation for common interview questions about leadership, teamwork, and problem-solving experiences.",
  },
  {
    title: "Technicals",
    description:
      "In-depth coverage of financial modeling, valuation techniques, and accounting concepts crucial for IB roles.",
  },
  {
    title: "Interview Prep",
    description:
      "Guidance on structuring answers, mock interviews, and strategies to stand out in competitive IB recruitment.",
  },
  {
    title: "IB Overview",
    description:
      "Comprehensive introduction to investment banking, including deal types, industry trends, and day-to-day responsibilities.",
  },
  {
    title: "Recruiting",
    description:
      "Insights into networking strategies, resume optimization, and navigating the recruitment timeline for top firms.",
  },
];

const mentors = mentorsData.filter((mentor) => mentor.azgroup === "AZ13");

export default function AZ13() {
  const { ref, isRevealed } = useScrollReveal<HTMLElement>();

  return (
    <section ref={ref} className="py-24 md:py-40 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
          {/* Left Column - Benefits */}
          <div
            className={`
              space-y-8
              transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]
              ${isRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
            `}
          >
            {/* Badge and Title */}
            <div className="space-y-4">
              <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent rounded-full text-sm font-medium">
                AZ 13
              </span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-secondary-light">
                Investment Banking
              </h2>
              <p className="text-secondary-dark/70 text-lg">
                Master the skills needed to break into investment banking.
              </p>
            </div>

            {/* Benefits List */}
            <div className="space-y-5">
              {benefits.map((benefit, index) => (
                <div
                  key={benefit.title}
                  className={`
                    group flex gap-4 p-4 -mx-4 rounded-xl
                    transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]
                    hover:bg-cloud-50
                    ${isRevealed ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"}
                  `}
                  style={{
                    transitionDelay: isRevealed ? `${index * 60}ms` : "0ms",
                  }}
                >
                  <div className="shrink-0 w-10 h-10 flex items-center justify-center bg-accent/10 rounded-xl text-accent transition-all duration-300 group-hover:bg-accent group-hover:text-white">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-body text-base font-semibold text-secondary-light mb-1">
                      {benefit.title}
                    </h4>
                    <p className="text-secondary-dark/60 text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Mentors */}
          <div
            className={`
              transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] delay-200
              ${isRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
            `}
          >
            <h3 className="text-sm font-medium tracking-[0.15em] uppercase text-secondary-dark/50 mb-6">
              Your Mentors
            </h3>

            <div className="space-y-5">
              {mentors.map((mentor, index) => (
                <div
                  key={mentor.id}
                  className={`
                    group bg-white rounded-2xl p-6
                    border border-secondary/5
                    shadow-[0_2px_12px_-2px_rgba(0,0,0,0.04)]
                    transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]
                    hover:shadow-[0_12px_32px_-8px_rgba(37,99,235,0.12)]
                    hover:border-accent/20
                    hover:-translate-y-1
                  `}
                  style={{
                    transitionDelay: isRevealed ? `${300 + index * 80}ms` : "0ms",
                  }}
                >
                  <div className="flex gap-5">
                    {/* Profile Picture - Rounded Square */}
                    <div className="relative w-20 h-20 shrink-0 rounded-xl overflow-hidden">
                      <Image
                        src={mentor.picture}
                        alt={mentor.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        unoptimized
                      />
                    </div>

                    {/* Mentor Info */}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-body text-lg font-semibold text-secondary-light mb-1">
                        {mentor.name}
                      </h3>
                      <p className="text-accent text-sm font-medium mb-2">
                        Investment Banking Mentor
                      </p>
                      <p className="text-secondary-dark/60 text-sm leading-relaxed line-clamp-2">
                        {mentor.description}
                      </p>
                    </div>
                  </div>

                  {/* LinkedIn */}
                  {mentor.linkedin && (
                    <a
                      href={mentor.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-2 text-secondary-dark/50 hover:text-accent text-sm transition-colors"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                      View Profile
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
