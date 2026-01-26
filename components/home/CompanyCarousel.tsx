"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import companies from "@/data/companies.json";
import type { Company } from "@/types";

// Register plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const companyData: Company[] = companies;

// Company logo with GSAP hover
function CompanyLogo({ company }: { company: Company }) {
  const logoRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  return (
    <div
      ref={logoRef}
      className="company-logo group flex items-center justify-center w-28 md:w-32 lg:w-36"
    >
      <Image
        ref={imgRef}
        src={company.logo}
        alt={company.name}
        width={144}
        height={56}
        className="h-10 md:h-12 lg:h-14 w-auto object-contain"
        unoptimized
      />
    </div>
  );
}

export default function CompanyCarousel() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLParagraphElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Check for mobile viewport
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Get companies to display (10 on mobile, all on desktop)
  const displayedCompanies = isMobile ? companyData.slice(0, 10) : companyData;

  useEffect(() => {
    const section = sectionRef.current;
    const header = headerRef.current;
    const grid = gridRef.current;
    const footer = footerRef.current;

    if (!section || !header || !grid || !footer) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      gsap.set([header, grid.children, footer], { opacity: 1, y: 0 });
      return;
    }

    // Set initial states
    gsap.set(header, { opacity: 0, y: 40 });
    gsap.set(grid.children, { opacity: 0, y: 30 });
    gsap.set(footer, { opacity: 0 });

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
        grid.children,
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.04,
          ease: "power3.out",
        },
        "-=0.4",
      )
      .to(
        footer,
        {
          opacity: 1,
          duration: 0.6,
          ease: "power3.out",
        },
        "-=0.2",
      );

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, []);

  return (
    <section
      id="company-carousel"
      ref={sectionRef}
      className="py-24 md:py-40 bg-transparent"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16 md:mb-20">
          <span className="inline-block text-sm font-medium tracking-[0.2em] uppercase text-accent mb-4">
            Our Network
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-secondary-light uppercase">
            Where We Are Now
          </h2>
        </div>

        {/* Logo Grid - Adaptive Flexbox */}
        <div
          ref={gridRef}
          className="flex flex-wrap justify-center items-center gap-x-12 gap-y-10 md:gap-x-16 md:gap-y-12"
        >
          {displayedCompanies.map((company) => (
            <CompanyLogo key={company.id} company={company} />
          ))}
        </div>

        {/* "And more" text */}
        <p
          ref={footerRef}
          className="text-center text-secondary-dark/50 text-sm mt-12"
        >
          And 100+ more companies across diverse industries
        </p>
      </div>
    </section>
  );
}
