"use client";

import { useState } from "react";
import events from "@/data/events.json";
import type { Event } from "@/types";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const eventsData: Event[] = events;

export default function RushTimeline() {
  const [expandedEvent, setExpandedEvent] = useState<string | null>(
    eventsData[0]?.id || null,
  );
  const { ref, isRevealed } = useScrollReveal<HTMLElement>();

  return (
    <section
      id="timeline"
      ref={ref}
      className="py-24 md:py-40 scroll-mt-20 bg-white"
    >
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div
          className={`
            text-center mb-16 md:mb-20
            transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]
            ${isRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
          `}
        >
          <span className="inline-block text-sm font-medium tracking-[0.2em] uppercase text-accent mb-4">
            Spring 2026
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-secondary-light mb-4">
            Rush Timeline
          </h2>
          <p className="text-secondary-dark/70 text-lg max-w-xl mx-auto">
            Here's what to expect during the recruitment process. Mark your
            calendars for these key dates!
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-accent/20 via-accent/10 to-transparent" />

          {/* Events */}
          <div className="space-y-6">
            {eventsData.map((event, index) => {
              const isExpanded = expandedEvent === event.id;

              return (
                <div
                  key={event.id}
                  className={`
                    relative pl-16 md:pl-20
                    transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]
                    ${isRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
                  `}
                  style={{
                    transitionDelay: isRevealed ? `${index * 100}ms` : "0ms",
                  }}
                >
                  {/* Timeline dot */}
                  <div
                    className={`
                      absolute left-4 md:left-6 top-6 w-4 h-4 rounded-full
                      border-2 transition-all duration-300
                      ${
                        isExpanded
                          ? "bg-accent border-accent scale-125"
                          : "bg-white border-accent/30 hover:border-accent"
                      }
                    `}
                  />

                  {/* Event card */}
                  <button
                    onClick={() =>
                      setExpandedEvent(isExpanded ? null : event.id)
                    }
                    className={`
                      w-full text-left p-6 rounded-2xl
                      border transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]
                      ${
                        isExpanded
                          ? "bg-white border-accent/20 shadow-[0_8px_32px_-8px_rgba(37,99,235,0.15)]"
                          : "bg-cloud-50/50 border-transparent hover:bg-white hover:border-secondary/10 hover:shadow-[0_4px_20px_-4px_rgba(0,0,0,0.06)]"
                      }
                    `}
                  >
                    {/* Date badge */}
                    <div className="flex items-center gap-3 mb-3">
                      <span
                        className={`
                          px-3 py-1 rounded-full text-xs font-medium
                          ${isExpanded ? "bg-accent text-white" : "bg-accent/10 text-accent"}
                        `}
                      >
                        {event.date.split(",")[0]}
                      </span>
                      {event.time && (
                        <span className="text-secondary-dark/50 text-sm">
                          {event.time}
                        </span>
                      )}
                    </div>

                    {/* Event name */}
                    <h3 className="font-body text-lg md:text-xl font-semibold text-secondary-light mb-2">
                      {event.name}
                    </h3>

                    {/* Location */}
                    {event.location && (
                      <div className="flex items-center gap-2 text-secondary-dark/50 text-sm mb-3">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                        {event.location}
                      </div>
                    )}

                    {/* Description - expanded */}
                    <div
                      className={`
                        overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]
                        ${isExpanded ? "max-h-40 opacity-100 mt-4 pt-4 border-t border-secondary/10" : "max-h-0 opacity-0"}
                      `}
                    >
                      <p className="text-secondary-dark/70 leading-relaxed">
                        {event.description}
                      </p>
                    </div>

                    {/* Expand indicator */}
                    <div className="flex items-center gap-2 text-accent text-sm mt-3">
                      <span>
                        {isExpanded ? "Less details" : "More details"}
                      </span>
                      <svg
                        className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
