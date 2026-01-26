"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const trackMap: { [key: string]: string } = {
  "Investment Banking": "az13",
  Consulting: "azc",
  "Product Management": "azpm",
  "Computer Science": "azcs",
  Marketing: "azmarketing",
};

export default function WhatYouGet() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const header = headerRef.current;
    const description = descriptionRef.current;
    const buttons = buttonsRef.current;

    if (!section || !header || !description || !buttons) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      gsap.set([header, description, buttons], { opacity: 1, y: 0 });
      return;
    }

    // Set initial states
    gsap.set(header, { opacity: 0, y: 40 });
    gsap.set(description, { opacity: 0, y: 20 });
    gsap.set(buttons, { opacity: 0, y: 20 });

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
    })
      .to(
        description,
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
        },
        "-=0.4",
      )
      .to(
        buttons,
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
        },
        "-=0.3",
      );

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, []);

  const handleScrollToSection = (track: string) => {
    const sectionId = trackMap[track];
    if (sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        const navbarHeight = 80; // h-20 = 5rem
        const buffer = 32; // visual buffer below navbar
        const skipPadding = 120; // skip most of the section's top padding

        const elementTop = element.getBoundingClientRect().top + window.scrollY;

        window.scrollTo({
          top: elementTop - navbarHeight - buffer + skipPadding,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <section
      id="what-are-az-groups"
      ref={sectionRef}
      className="py-24 md:py-40 bg-gradient-to-b from-white to-cloud-50 scroll-mt-20"
    >
      <div className="max-w-4xl mx-auto px-6">
        <div ref={headerRef} className="text-center">
          <span className="inline-block text-sm font-medium tracking-[0.2em] uppercase text-accent mb-4">
            Career Development
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-secondary-light mb-8 uppercase">
            What are AZ Groups?
          </h2>
        </div>

        <p
          ref={descriptionRef}
          className="text-lg md:text-xl text-secondary-dark/70 leading-relaxed max-w-2xl mx-auto text-center"
        >
          Every member joins one of the specialized career tracks based on their
          professional interests. Each track runs for 10 weeks per semester and
          includes weekly workshops, mock interviews, case practice, and 1-on-1
          mentorship from members who&apos;ve secured roles at top firms.
        </p>

        {/* Visual elements */}
        <div
          ref={buttonsRef}
          className="mt-16 flex flex-wrap justify-center gap-4"
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
