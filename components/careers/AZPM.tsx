"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import mentorsData from "@/data/mentors.json";

// Register plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const benefits = [
  {
    title: "Product Management Essentials",
    description:
      "Understand core PM principles and strategies to effectively manage the lifecycle of a product from concept to launch.",
  },
  {
    title: "Market Research & User Insights",
    description:
      "Learn techniques for gathering and analyzing market data and user feedback to make informed product decisions.",
  },
  {
    title: "Product Development & Design",
    description:
      "Gain hands-on experience developing product features, creating wireframes, and designing prototypes.",
  },
  {
    title: "Roadmap & Strategy Planning",
    description:
      "Develop skills in crafting product roadmaps, setting milestones, and preparing strategic plans for market entry.",
  },
  {
    title: "Interview Preparation",
    description:
      "Prepare for PM interviews by mastering common questions, case studies, and interview techniques.",
  },
];

const mentors = mentorsData.filter((mentor) => mentor.azgroup === "AZPM");

// Mentor card with GSAP hover
function MentorCard({ mentor }: { mentor: (typeof mentors)[0] }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    const img = imgRef.current;
    if (!card || !img) return;

    const handleMouseEnter = () => {
      gsap.to(card, {
        y: -4,
        boxShadow: "0 12px 32px -8px rgba(37, 99, 235, 0.12)",
        borderColor: "rgba(37, 99, 235, 0.2)",
        duration: 0.3,
        ease: "power2.out",
      });
      gsap.to(img, {
        scale: 1.05,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(card, {
        y: 0,
        boxShadow: "0 2px 12px -2px rgba(0, 0, 0, 0.04)",
        borderColor: "rgba(0, 0, 0, 0.05)",
        duration: 0.3,
        ease: "power2.out",
      });
      gsap.to(img, {
        scale: 1,
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

  return (
    <div
      ref={cardRef}
      className="mentor-card group bg-white rounded-2xl p-6 border border-secondary/5 shadow-[0_2px_12px_-2px_rgba(0,0,0,0.04)]"
    >
      {/* Stack vertically on mobile, horizontal on desktop */}
      <div className="flex flex-col md:flex-row gap-5 md:items-stretch md:min-h-[180px]">
        {/* Profile Picture - Centered on mobile, side on desktop */}
        <div
          ref={imgRef}
          className="relative shrink-0 rounded-xl overflow-hidden border border-secondary/10 bg-cloud-50 mx-auto md:mx-0 w-32 h-32 md:w-[120px] md:h-auto md:self-stretch"
        >
          <Image
            src={mentor.picture}
            alt={mentor.name}
            fill
            className="object-cover"
            unoptimized
          />
        </div>

        {/* Mentor Info */}
        <div className="flex-1 min-w-0 text-center md:text-left">
          <h3 className="font-body text-lg font-semibold text-secondary-light mb-1">
            {mentor.name}
          </h3>
          <p className="text-accent text-sm font-medium mb-2">
            Product Management Mentor
          </p>
          <p className="text-secondary-dark/60 text-sm leading-relaxed">
            {mentor.description}
          </p>

          {/* LinkedIn */}
          {mentor.linkedin && (
            <a
              href={mentor.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-secondary-dark/50 hover:text-accent text-sm transition-colors duration-200"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
              LinkedIn
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function AZPM() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);
  const benefitsListRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const leftCol = leftColRef.current;
    const rightCol = rightColRef.current;
    const benefitsList = benefitsListRef.current;

    if (!section || !leftCol || !rightCol || !benefitsList) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      gsap.set([leftCol, rightCol, benefitsList.children], {
        opacity: 1,
        y: 0,
        x: 0,
      });
      return;
    }

    // Set initial states
    gsap.set(leftCol, { opacity: 0, y: 40 });
    gsap.set(benefitsList.children, { opacity: 0, x: -20 });
    gsap.set(rightCol, { opacity: 0, y: 40 });

    // Create timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    tl.to(leftCol, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out",
    })
      .to(
        benefitsList.children,
        {
          opacity: 1,
          x: 0,
          duration: 0.5,
          stagger: 0.06,
          ease: "power3.out",
        },
        "-=0.4",
      )
      .to(
        rightCol,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.6",
      );

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, []);

  return (
    <section id="azpm" ref={sectionRef} className="py-24 md:py-40 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
          {/* Left Column - Benefits */}
          <div ref={leftColRef} className="space-y-8">
            {/* Badge and Title */}
            <div className="space-y-4">
              <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent rounded-full text-sm font-medium">
                AZPM
              </span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-secondary-light">
                Product Management
              </h2>
              <p className="text-secondary-dark/70 text-lg">
                Learn to build products users love with our comprehensive PM
                curriculum.
              </p>
            </div>

            {/* Benefits List */}
            <div ref={benefitsListRef} className="space-y-5">
              {benefits.map((benefit) => (
                <div
                  key={benefit.title}
                  className="benefit-item group flex gap-4 p-4 -mx-4 rounded-xl hover:bg-cloud-50 transition-colors duration-200"
                >
                  <div className="shrink-0 w-10 h-10 flex items-center justify-center bg-accent/10 rounded-xl text-accent transition-colors duration-200 group-hover:bg-accent group-hover:text-white">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-body text-base font-semibold text-secondary-light mb-1">
                      {benefit.title}
                    </h4>
                    <p className="text-secondary-dark/60 text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Mentors */}
          <div ref={rightColRef}>
            <div className="space-y-5">
              {mentors.map((mentor) => (
                <MentorCard key={mentor.id} mentor={mentor} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
