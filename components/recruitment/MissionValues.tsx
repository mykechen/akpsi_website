"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import values from "@/data/values.json";
import type { Value } from "@/types";

// Register plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const valuesData = values as Value[];

const iconMap: { [key: string]: React.ReactNode } = {
  users: (
    <svg
      className="w-6 h-6"
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
  shield: (
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
      />
    </svg>
  ),
  star: (
    <svg
      className="w-6 h-6"
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
  handshake: (
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11"
      />
    </svg>
  ),
  heart: (
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
      />
    </svg>
  ),
};

// Value card with glassmorphism design
function ValueCard({ value }: { value: Value }) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseEnter = () => {
      gsap.to(card, {
        y: -8,
        scale: 1.03,
        duration: 0.4,
        ease: "power3.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(card, {
        y: 0,
        scale: 1,
        duration: 0.4,
        ease: "power3.out",
      });
    };

    card.addEventListener("mouseenter", handleMouseEnter);
    card.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      card.removeEventListener("mouseenter", handleMouseEnter);
      card.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className="value-card group text-center p-6 rounded-2xl overflow-hidden relative"
      style={{
        background: "linear-gradient(145deg, rgba(255,255,255,0.92) 0%, rgba(248,250,252,0.85) 100%)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        boxShadow: "0 6px 24px -4px rgba(37, 99, 235, 0.08), 0 2px 6px -2px rgba(0, 0, 0, 0.02), inset 0 1px 0 rgba(255,255,255,0.9)",
      }}
    >
      {/* Gradient border */}
      <div
        className="absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-500 opacity-50 group-hover:opacity-100"
        style={{
          padding: "1px",
          background: "linear-gradient(135deg, rgba(37, 99, 235, 0.2) 0%, rgba(255,255,255,0.4) 50%, rgba(37, 99, 235, 0.15) 100%)",
          WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          maskComposite: "exclude",
        }}
      />

      {/* Noise texture */}
      <div
        className="absolute inset-0 rounded-2xl pointer-events-none opacity-[0.015] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Glow effect on hover */}
      <div
        className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: "radial-gradient(ellipse at 50% 0%, rgba(37, 99, 235, 0.1) 0%, transparent 60%)",
        }}
      />

      {/* Icon with glass effect */}
      <div
        className="relative w-14 h-14 mx-auto mb-5 flex items-center justify-center rounded-xl text-accent transition-all duration-500 group-hover:text-white group-hover:scale-110 group-hover:-rotate-3"
        style={{
          background: "linear-gradient(135deg, rgba(37, 99, 235, 0.12) 0%, rgba(37, 99, 235, 0.06) 100%)",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
          border: "1px solid rgba(37, 99, 235, 0.15)",
          boxShadow: "0 4px 12px -2px rgba(37, 99, 235, 0.08)",
        }}
      >
        <div
          className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500"
          style={{
            background: "linear-gradient(135deg, #2563eb 0%, #3b82f6 100%)",
            boxShadow: "0 8px 20px -4px rgba(37, 99, 235, 0.45)",
          }}
        />
        <span className="relative z-10">{iconMap[value.icon] || iconMap.star}</span>
      </div>

      {/* Value Title */}
      <h3 className="relative z-10 font-body text-base font-semibold text-secondary-light mb-3">
        {value.title}
      </h3>

      {/* Description */}
      <p className="relative z-10 text-secondary-dark/60 text-sm leading-relaxed">
        {value.description}
      </p>

      {/* Accent light beam */}
      <div
        className="absolute -top-16 -right-16 w-32 h-32 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-3xl pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(37, 99, 235, 0.12) 0%, transparent 70%)",
        }}
      />
    </div>
  );
}

export default function MissionValues() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const header = headerRef.current;
    const grid = gridRef.current;

    if (!section || !header || !grid) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      gsap.set([header, grid.children], { opacity: 1, y: 0 });
      return;
    }

    // Set initial states
    gsap.set(header, { opacity: 0, y: 40 });
    gsap.set(grid.children, { opacity: 0, y: 30 });

    // Create timeline
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
    }).to(
      grid.children,
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.08,
        ease: "power3.out",
      },
      "-=0.4"
    );

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-24 md:py-40 bg-cloud-50/50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div ref={headerRef} className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <span className="inline-block text-sm font-medium tracking-[0.2em] uppercase text-accent mb-4">
            Our Foundation
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-secondary-light mb-6 uppercase">
            What We Stand For
          </h2>
          <p className="text-secondary-dark/70 text-lg leading-relaxed">
            Alpha Kappa Psi is dedicated to fostering professional growth,
            leadership, and community among its members.
          </p>
        </div>

        {/* Values Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6"
        >
          {valuesData.map((value) => (
            <ValueCard key={value.id} value={value} />
          ))}
        </div>
      </div>
    </section>
  );
}
