"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;
    const stats = statsRef.current;

    if (!section || !content || !stats) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      gsap.set([content, stats], { opacity: 1, y: 0 });
      return;
    }

    // Set initial states
    gsap.set(content, { opacity: 0, y: 40 });
    gsap.set(stats, { opacity: 0, y: 30 });

    // Create timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    tl.to(content, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out",
    }).to(
      stats,
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: "power3.out",
      },
      "-=0.4",
    );

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-24 md:py-40 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div ref={contentRef} className="text-center">
          {/* Eyebrow */}
          <span className="inline-block text-sm font-medium tracking-[0.2em] uppercase text-accent mb-6">
            Who We Are
          </span>

          {/* Main statement */}
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-secondary-light leading-tight mb-8 uppercase">
            USC's premier business society
          </h2>

          {/* Supporting paragraphs with proper spacing */}
          <div className="space-y-6 text-lg md:text-xl text-secondary-dark/80 leading-relaxed">
            <p>
              Alpha Zeta is USC's premier co-ed business society. Since our
              founding in 1922, we've built a thriving community of students
              across 15+ different majors and established an extensive alumni
              network, paving the way for future leaders.
            </p>
            <p>
              At Alpha Zeta, we believe in the power of collective growth. We
              empower our brothers to excel in their careers, foster lifelong
              friendships, and advance in every aspect of their lives.
            </p>
          </div>
        </div>

        {/* Stats row for credibility */}
        <div
          ref={statsRef}
          className="mt-16 pt-12 border-t border-secondary/10 grid grid-cols-3 gap-8"
        >
          <div>
            <div className="text-3xl md:text-4xl font-bold text-accent mb-2">
              100+
            </div>
            <div className="text-sm text-secondary-dark/60 uppercase tracking-wide">
              Years of Legacy
            </div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-accent mb-2">
              15+
            </div>
            <div className="text-sm text-secondary-dark/60 uppercase tracking-wide">
              Majors Represented
            </div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-accent mb-2">
              500+
            </div>
            <div className="text-sm text-secondary-dark/60 uppercase tracking-wide">
              Alumni Network
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
