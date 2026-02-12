"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import faq from "@/data/faq.json";
import type { FAQ as FAQType } from "@/types";

// Register plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const faqData: FAQType[] = faq;

// Individual FAQ Item with GSAP animation
function FAQItem({
  item,
  isOpen,
  onToggle,
}: {
  item: FAQType;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const contentRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const content = contentRef.current;
    const inner = innerRef.current;
    if (!content || !inner) return;

    if (isOpen) {
      // Animate open
      gsap.set(content, { height: "auto" });
      const height = content.offsetHeight;
      gsap.fromTo(
        content,
        { height: 0, opacity: 0 },
        { height, opacity: 1, duration: 0.4, ease: "power2.out" }
      );
    } else {
      // Animate close
      gsap.to(content, {
        height: 0,
        opacity: 0,
        duration: 0.3,
        ease: "power2.inOut",
      });
    }
  }, [isOpen]);

  return (
    <div
      className={`
        faq-item bg-cloud-50/50 border border-secondary/5 rounded-2xl overflow-hidden
        transition-[background-color,box-shadow,border-color] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]
        hover:border-secondary/10
        ${isOpen ? "bg-white shadow-[0_4px_20px_-4px_rgba(0,0,0,0.06)] border-accent/20" : ""}
      `}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-5 md:p-6 text-left"
        aria-expanded={isOpen}
      >
        <span className="font-body text-base md:text-lg font-medium text-secondary-light pr-4">
          {item.question}
        </span>
        <span
          className={`
            flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full
            border transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]
            ${
              isOpen
                ? "rotate-45 bg-accent border-accent text-white"
                : "border-secondary/20 text-secondary-dark/50 hover:border-accent/30 hover:text-accent"
            }
          `}
        >
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
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
        </span>
      </button>

      <div ref={contentRef} className="overflow-hidden" style={{ height: 0 }}>
        <div ref={innerRef} className="px-5 md:px-6 pb-5 md:pb-6 text-secondary-dark/70 leading-relaxed">
          {item.answer}
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  const toggleFAQ = useCallback((id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    const header = headerRef.current;
    const list = listRef.current;

    if (!section || !header || !list) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      gsap.set([header, list.children], { opacity: 1, y: 0 });
      return;
    }

    // Set initial states
    gsap.set(header, { opacity: 0, y: 40 });
    gsap.set(list.children, { opacity: 0, y: 20 });

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
      list.children,
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.05,
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
      <div className="max-w-3xl mx-auto px-6">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-12 md:mb-16">
          <span className="inline-block text-sm font-medium tracking-[0.2em] uppercase text-accent mb-4">
            Got Questions?
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-secondary-light mb-4 uppercase">
            Frequently Asked Questions
          </h2>
          <p className="text-secondary-dark/70 text-lg">
            Everything you need to know about joining Alpha Kappa Psi
          </p>
        </div>

        <div ref={listRef} className="space-y-3">
          {faqData.map((item) => (
            <FAQItem
              key={item.id}
              item={item}
              isOpen={openId === item.id}
              onToggle={() => toggleFAQ(item.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
