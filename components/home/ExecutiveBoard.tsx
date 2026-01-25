"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import members from "@/data/members.json";
import type { Member } from "@/types";
import Button from "@/components/ui/Button";

// Register plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const membersData: Member[] = members;
const execMembers = membersData.filter((member) => member.isExec);

function formatPledgeClass(pledgeClass: string): string {
  const regex = /(Spring|Fall)\s+(\d{4})/;
  const match = regex.exec(pledgeClass);
  if (match) {
    const season = match[1].charAt(0);
    const year = match[2].slice(-2);
    return `${season}${year}`;
  }
  return pledgeClass;
}

// Card component with GSAP hover
function MemberCard({ member }: { member: Member }) {
  const cardRef = useRef<HTMLAnchorElement & HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseEnter = () => {
      gsap.to(card, {
        scale: 1.02,
        y: -2,
        boxShadow: "0 12px 32px -8px rgba(37, 99, 235, 0.12)",
        borderColor: "rgba(37, 99, 235, 0.2)",
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(card, {
        scale: 1,
        y: 0,
        boxShadow: "0 2px 12px -2px rgba(0, 0, 0, 0.04)",
        borderColor: "rgba(0, 0, 0, 0.1)",
        duration: 0.3,
        ease: "power2.out",
      });
    };

    card.addEventListener("mouseenter", handleMouseEnter);
    card.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      card.removeEventListener("mouseenter", handleMouseEnter);
      card.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const CardWrapper = member.linkedin ? "a" : "div";
  const cardProps = member.linkedin
    ? {
        href: member.linkedin,
        target: "_blank",
        rel: "noopener noreferrer",
      }
    : {};

  return (
    <CardWrapper
      ref={cardRef as React.RefObject<HTMLAnchorElement & HTMLDivElement>}
      {...cardProps}
      className={`
        exec-card group flex items-center gap-4 p-3
        bg-white border border-secondary/10 rounded-xl
        shadow-[0_2px_12px_-2px_rgba(0,0,0,0.04)]
        ${member.linkedin ? "cursor-pointer" : ""}
      `}
    >
      {/* Photo */}
      <div className="relative w-20 h-20 shrink-0 overflow-hidden rounded-lg">
        <Image
          src={member.photo}
          alt={member.name}
          fill
          className="object-cover"
          unoptimized
        />
      </div>

      {/* Info */}
      <div className="flex flex-col justify-center min-w-0">
        <h3 className="font-body text-lg font-semibold text-secondary-light mb-1 truncate">
          {member.name}
        </h3>
        <p className="text-secondary-dark/60 text-sm">
          {member.role}
          {member.pledgeClass && `, ${formatPledgeClass(member.pledgeClass)}`}
        </p>
      </div>
    </CardWrapper>
  );
}

export default function ExecutiveBoard() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const header = headerRef.current;
    const grid = gridRef.current;
    const cta = ctaRef.current;

    if (!section || !header || !grid || !cta) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      gsap.set([header, grid.children, cta], { opacity: 1, y: 0 });
      return;
    }

    // Set initial states
    gsap.set(header, { opacity: 0, y: 40 });
    gsap.set(grid.children, { opacity: 0, y: 30 });
    gsap.set(cta, { opacity: 0, y: 20 });

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
          duration: 0.6,
          stagger: 0.08,
          ease: "power3.out",
        },
        "-=0.4"
      )
      .to(
        cta,
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
        },
        "-=0.3"
      );

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 md:py-40 bg-gradient-to-b from-cloud-50 to-white"
    >
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div ref={headerRef} className="max-w-2xl mx-auto text-center mb-16 md:mb-20">
          <span className="inline-block text-sm font-medium tracking-[0.2em] uppercase text-accent mb-4">
            Leadership
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-secondary-light">
            EXECUTIVE BOARD
          </h2>
        </div>

        {/* 2-Column Grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {execMembers.map((member) => (
            <MemberCard key={member.id} member={member} />
          ))}
        </div>

        {/* CTA */}
        <div ref={ctaRef} className="mt-12 text-center">
          <Button href="/members" variant="outline">
            View All Members
          </Button>
        </div>
      </div>
    </section>
  );
}
