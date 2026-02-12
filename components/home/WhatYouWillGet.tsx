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
    title: "5+ Career Tracks",
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
      "Specialized programs in Investment Banking, Consulting, Product Management, Computer Science, Marketing and more to accelerate your career.",
  },
  {
    id: "2",
    title: "Lasting Brotherhood",
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
      "Join a network of 500+ alumni at top firms. Build genuine friendships that extend far beyond your time at USC. From your time in Alpha Kappa Psi to your future career, we're here for you.",
  },
  {
    id: "3",
    title: "Close Cohorts",
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
      "Intimate class sizes ensure personalized mentorship, deeper connections, and more meaningful professional development. You'll be part of a small group of brothers who are there for you every step of the way.",
  },
];

// Card component with glassmorphism design
function Card({ card, index }: { card: (typeof cards)[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = cardRef.current;
    if (!element) return;

    const handleMouseEnter = () => {
      gsap.to(element, {
        y: -10,
        scale: 1.02,
        duration: 0.4,
        ease: "power3.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(element, {
        y: 0,
        scale: 1,
        duration: 0.4,
        ease: "power3.out",
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
      className="card-item group relative rounded-2xl p-8 lg:p-10 overflow-hidden"
      style={{
        background: "linear-gradient(145deg, rgba(255,255,255,0.9) 0%, rgba(248,250,252,0.8) 100%)",
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
        boxShadow: "0 8px 32px -4px rgba(37, 99, 235, 0.1), 0 2px 8px -2px rgba(0, 0, 0, 0.03), inset 0 1px 0 rgba(255,255,255,0.8)",
      }}
    >
      {/* Gradient border */}
      <div
        className="absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-500 opacity-60 group-hover:opacity-100"
        style={{
          padding: "1px",
          background: "linear-gradient(135deg, rgba(37, 99, 235, 0.25) 0%, rgba(255,255,255,0.5) 50%, rgba(37, 99, 235, 0.2) 100%)",
          WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          maskComposite: "exclude",
        }}
      />

      {/* Noise texture overlay */}
      <div
        className="absolute inset-0 rounded-2xl pointer-events-none opacity-[0.02] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Glow effect on hover */}
      <div
        className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: "radial-gradient(ellipse at 50% 0%, rgba(37, 99, 235, 0.08) 0%, transparent 60%)",
        }}
      />

      {/* Icon container with glass effect */}
      <div
        className="relative w-14 h-14 flex items-center justify-center rounded-xl mb-6 text-accent transition-all duration-500 group-hover:text-white group-hover:scale-110 group-hover:-rotate-3"
        style={{
          background: "linear-gradient(135deg, rgba(37, 99, 235, 0.12) 0%, rgba(37, 99, 235, 0.06) 100%)",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
          border: "1px solid rgba(37, 99, 235, 0.15)",
          boxShadow: "0 4px 12px -2px rgba(37, 99, 235, 0.1)",
        }}
      >
        <div
          className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500"
          style={{
            background: "linear-gradient(135deg, #2563eb 0%, #3b82f6 100%)",
            boxShadow: "0 8px 24px -4px rgba(37, 99, 235, 0.5)",
          }}
        />
        <span className="relative z-10">{card.icon}</span>
      </div>

      {/* Title */}
      <h3 className="relative z-10 font-body text-xl font-semibold text-secondary-light mb-4">
        {card.title}
      </h3>

      {/* Content */}
      <p className="relative z-10 text-secondary-dark/70 leading-relaxed">{card.content}</p>

      {/* Accent light beam on hover */}
      <div
        className="absolute -top-20 -right-20 w-40 h-40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-3xl pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(37, 99, 235, 0.15) 0%, transparent 70%)",
        }}
      />
    </div>
  );
}

export default function WhatYouWillGet() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const header = headerRef.current;
    const grid = gridRef.current;

    if (!section || !header || !grid) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
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
      "-=0.4",
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
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div
          ref={headerRef}
          className="max-w-2xl mx-auto text-center mb-16 md:mb-20"
        >
          <span className="inline-block text-sm font-medium tracking-[0.2em] uppercase text-accent mb-4">
            What You'll Gain
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-secondary-light uppercase">
            Built for your success
          </h2>
        </div>

        {/* Cards Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {cards.map((card, index) => (
            <Card key={card.id} card={card} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
