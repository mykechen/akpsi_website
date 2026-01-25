"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import events from "@/data/events.json";
import type { Event } from "@/types";

// Register plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const eventsData: Event[] = events;

// Individual event card with scroll detection
function TimelineEvent({
  event,
  index,
  isExpanded,
  onInView,
  isFirst,
}: {
  event: Event;
  index: number;
  isExpanded: boolean;
  onInView: () => void;
  isFirst: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Create scroll trigger for detecting when event is in view
    const trigger = ScrollTrigger.create({
      trigger: element,
      // First event gets a larger detection zone since it can't reach center
      start: isFirst ? "top 60%" : "top 50%",
      end: isFirst ? "bottom 20%" : "bottom 50%",
      onEnter: () => {
        onInView();
      },
      onEnterBack: () => {
        onInView();
      },
    });

    return () => {
      trigger.kill();
    };
  }, [onInView, isFirst]);

  // Scroll reveal animation
  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      gsap.set(element, { opacity: 1, y: 0 });
      return;
    }

    gsap.set(element, { opacity: 0, y: 40 });

    const animation = gsap.to(element, {
      opacity: 1,
      y: 0,
      duration: 0.7,
      delay: index * 0.1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: element,
        start: "top 85%",
        toggleActions: "play none none none",
      },
    });

    return () => {
      animation.scrollTrigger?.kill();
      animation.kill();
    };
  }, [index]);

  return (
    <div ref={ref} className="relative pl-16 md:pl-20">
      {/* Timeline dot */}
      <div
        className={`
          absolute left-4 md:left-6 top-6 w-4 h-4 rounded-full
          border-2 transition-all duration-300
          ${
            isExpanded
              ? "bg-accent border-accent scale-125"
              : "bg-white border-accent/30"
          }
        `}
      />

      {/* Event card */}
      <div
        className={`
          w-full text-left p-6 md:p-8 rounded-2xl min-h-[180px]
          border transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]
          ${
            isExpanded
              ? "bg-white border-accent/20 shadow-[0_8px_32px_-8px_rgba(37,99,235,0.15)]"
              : "bg-cloud-50/50 border-transparent"
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
            <span className="text-secondary-dark/50 text-sm">{event.time}</span>
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
      </div>
    </div>
  );
}

export default function RushTimeline() {
  const [expandedEvent, setExpandedEvent] = useState<string | null>(
    eventsData[0]?.id || null
  );
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const header = headerRef.current;

    if (!section || !header) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      gsap.set(header, { opacity: 1, y: 0 });
      return;
    }

    gsap.set(header, { opacity: 0, y: 40 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    tl.to(header, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out",
    });

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, []);

  // Memoized callback for event in-view
  const handleEventInView = useCallback((eventId: string) => {
    setExpandedEvent(eventId);
  }, []);

  return (
    <section
      id="timeline"
      ref={sectionRef}
      className="py-24 md:py-40 scroll-mt-24 bg-white"
    >
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16 md:mb-20">
          <span className="inline-block text-sm font-medium tracking-[0.2em] uppercase text-accent mb-4">
            Spring 2026
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-secondary-light mb-4 uppercase">
            Rush Timeline
          </h2>
          <p className="text-secondary-dark/70 text-lg max-w-xl mx-auto">
            Here&apos;s what to expect during the recruitment process. Mark your
            calendars for these key dates!
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-accent/20 via-accent/10 to-transparent" />

          {/* Events */}
          <div className="space-y-16 md:space-y-24">
            {eventsData.map((event, index) => (
              <TimelineEvent
                key={event.id}
                event={event}
                index={index}
                isExpanded={expandedEvent === event.id}
                onInView={() => handleEventInView(event.id)}
                isFirst={index === 0}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
