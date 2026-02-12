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

const companiesData: Company[] = companies;

// Company logo with GSAP hover
function CompanyLogo({ company }: { company: Company }) {
  const logoRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const container = logoRef.current;
    const img = imgRef.current;
    if (!container || !img) return;

    const handleMouseEnter = () => {
      gsap.to(container, {
        backgroundColor: "rgba(255, 255, 255, 1)",
        borderColor: "rgba(37, 99, 235, 0.2)",
        boxShadow: "0 8px 24px -8px rgba(37, 99, 235, 0.12)",
        duration: 0.3,
        ease: "power2.out",
      });
      gsap.to(img, {
        filter: "grayscale(0%)",
        opacity: 1,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(container, {
        backgroundColor: "rgba(248, 250, 252, 0.5)",
        borderColor: "rgba(0, 0, 0, 0.05)",
        boxShadow: "none",
        duration: 0.3,
        ease: "power2.out",
      });
      gsap.to(img, {
        filter: "grayscale(100%)",
        opacity: 0.5,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={logoRef}
      className="company-logo group aspect-[2/1] flex items-center justify-center p-3 md:p-4 bg-cloud-50/50 border border-secondary/5 rounded-xl h-20 md:h-auto"
    >
      <Image
        ref={imgRef}
        src={company.logo}
        alt={company.name}
        width={120}
        height={48}
        className="w-full h-full max-w-full max-h-full object-contain object-center filter grayscale opacity-50"
        unoptimized
      />
    </div>
  );
}

export default function WhereOurMembersWork() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Check for mobile viewport
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Show 10 companies on mobile, 18 on desktop
  const displayedCompanies = isMobile ? companiesData.slice(0, 10) : companiesData.slice(0, 18);

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
    gsap.set(grid.children, { opacity: 0, y: 20 });

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
        duration: 0.4,
        stagger: 0.03,
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
    <section ref={sectionRef} className="py-24 md:py-40 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16 md:mb-20">
          <span className="inline-block text-sm font-medium tracking-[0.2em] uppercase text-accent mb-4">
            Our Network
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-secondary-light mb-4 uppercase">
            Where Our Members Work
          </h2>
          <p className="text-secondary-dark/70 text-lg max-w-xl mx-auto">
            Alpha Kappa Psi alumni and members can be found at leading companies
            worldwide
          </p>
        </div>

        {/* Company Grid - 2 columns on mobile, more on larger screens */}
        <div
          ref={gridRef}
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6"
        >
          {displayedCompanies.map((company) => (
            <CompanyLogo key={company.id} company={company} />
          ))}
        </div>
      </div>
    </section>
  );
}
