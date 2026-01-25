"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

const cards = [
  {
    id: "1",
    title: "5 Career Tracks",
    icon: (
      <svg
        className="w-8 h-8"
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
    content:
      "Specialized programs in Investment Banking, Consulting, Tech & PM, Computer Science, and Marketing to accelerate your career.",
  },
  {
    id: "2",
    title: "Lifelong Community",
    icon: (
      <svg
        className="w-8 h-8"
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
    content:
      "Join a network of 500+ alumni at top firms. Build genuine friendships that extend far beyond your time at USC.",
  },
  {
    id: "3",
    title: "Small Cohorts",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>
    ),
    content:
      "Intimate class sizes ensure personalized mentorship, deeper connections, and more meaningful professional development.",
  },
];

export default function WhatYouWillGet() {
  const { ref, isRevealed } = useScrollReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      className="py-24 md:py-40 bg-gradient-to-b from-white to-cloud-50"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div
          className={`
            max-w-2xl mx-auto text-center mb-16 md:mb-20
            transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]
            ${isRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
          `}
        >
          <span className="inline-block text-sm font-medium tracking-[0.2em] uppercase text-accent mb-4">
            What You'll Gain
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-secondary-light">
            Built for your success
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((card, index) => (
            <div
              key={card.id}
              className={`
                group relative bg-white rounded-3xl p-8 lg:p-10
                border border-secondary/5
                shadow-[0_4px_24px_-4px_rgba(0,0,0,0.06)]
                transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]
                hover:shadow-[0_20px_50px_-12px_rgba(37,99,235,0.15)]
                hover:border-accent/20
                hover:-translate-y-2
                ${isRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
              `}
              style={{
                transitionDelay: isRevealed ? `${index * 100}ms` : "0ms",
              }}
            >
              {/* Icon container */}
              <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-accent/10 text-accent mb-6 transition-all duration-300 group-hover:bg-accent group-hover:text-white group-hover:scale-110">
                {card.icon}
              </div>

              {/* Title */}
              <h3 className="font-body text-xl font-semibold text-secondary-light mb-4">
                {card.title}
              </h3>

              {/* Content */}
              <p className="text-secondary-dark/70 leading-relaxed">
                {card.content}
              </p>

              {/* Subtle corner accent on hover */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-accent/5 to-transparent rounded-tr-3xl rounded-bl-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
