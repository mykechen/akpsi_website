"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

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

// Card component with GSAP hover
function WhyCard({ card }: { card: (typeof cards)[0] }) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = cardRef.current;
    if (!element) return;

    const handleMouseEnter = () => {
      gsap.to(element, {
        y: -8,
        boxShadow: "0 20px 50px -12px rgba(37, 99, 235, 0.15)",
        borderColor: "rgba(37, 99, 235, 0.2)",
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(element, {
        y: 0,
        boxShadow: "0 4px 24px -4px rgba(0, 0, 0, 0.06)",
        borderColor: "rgba(0, 0, 0, 0.1)",
        duration: 0.3,
        ease: "power2.out",
      });
    };

    element.addEventListener("mouseenter", handleMouseEnter);
    element.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      element.removeEventListener("mouseenter", handleMouseEnter);
      element.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className="why-card group relative bg-white rounded-2xl p-8 border border-secondary/10 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.06)] text-center"
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
  );
}

export default function WhyAZ() {
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
        duration: 0.6,
        stagger: 0.1,
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
    <section
      ref={sectionRef}
      className="py-24 md:py-40 bg-gradient-to-b from-white to-cloud-50"
    >
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-12 md:mb-16">
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
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card) => (
            <WhyCard key={card.id} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
}
