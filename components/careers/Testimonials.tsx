"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const testimonials = [
  {
    id: "1",
    name: "John Smith",
    picture: "/images/placeholder.jpg",
    company: "Goldman Sachs",
    track: "AZ13",
    review:
      "AZ13 gave me the technical foundation and network I needed to land my dream IB role. The mock interviews were invaluable.",
  },
  {
    id: "2",
    name: "Sarah Johnson",
    picture: "/images/placeholder.jpg",
    company: "McKinsey & Company",
    track: "AZ Consulting",
    review:
      "The consulting track pushed me to think critically and structure my approach. I felt fully prepared walking into my case interviews.",
  },
  {
    id: "3",
    name: "Michael Chen",
    picture: "/images/placeholder.jpg",
    company: "Google",
    track: "AZCS",
    review:
      "AZCS helped me go from struggling with Leetcode to confidently solving problems in interviews. The mentorship was top-notch.",
  },
  {
    id: "4",
    name: "Emily Davis",
    picture: "/images/placeholder.jpg",
    company: "Meta",
    track: "AZPM",
    review:
      "The PM track taught me how to think about products holistically. The mock PM interviews and case studies were incredibly helpful.",
  },
  {
    id: "5",
    name: "David Kim",
    picture: "/images/placeholder.jpg",
    company: "Nike",
    track: "AZ Marketing",
    review:
      "AZ Marketing gave me real portfolio pieces and the creative confidence to pursue brand strategy at a top company.",
  },
  {
    id: "6",
    name: "Jessica Lee",
    picture: "/images/placeholder.jpg",
    company: "JP Morgan",
    track: "AZ13",
    review:
      "The alumni network alone is worth it. I got connected with brothers at every bank on the street who helped me through recruiting.",
  },
];

// Testimonial card with GSAP hover
function TestimonialCard({ testimonial }: { testimonial: (typeof testimonials)[0] }) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseEnter = () => {
      gsap.to(card, {
        y: -4,
        boxShadow: "0 12px 32px -8px rgba(37, 99, 235, 0.12)",
        borderColor: "rgba(37, 99, 235, 0.2)",
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(card, {
        y: 0,
        boxShadow: "0 4px 20px -4px rgba(0, 0, 0, 0.06)",
        borderColor: "rgba(0, 0, 0, 0.05)",
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
      className="testimonial-card group bg-white rounded-2xl p-6 border border-secondary/5 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.06)]"
    >
      {/* Quote icon */}
      <svg
        className="w-8 h-8 text-accent/20 mb-4"
        fill="currentColor"
        viewBox="0 0 32 32"
      >
        <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2V8zm12 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2V8z" />
      </svg>

      <p className="text-secondary-dark/70 text-sm leading-relaxed mb-6">
        {testimonial.review}
      </p>

      <div className="flex items-center gap-4 pt-4 border-t border-secondary/5">
        <div className="relative w-12 h-12 shrink-0 rounded-full overflow-hidden bg-cloud-50">
          <Image
            src={testimonial.picture}
            alt={testimonial.name}
            fill
            className="object-cover"
            unoptimized
          />
        </div>
        <div>
          <h3 className="font-body text-sm font-semibold text-secondary-light">
            {testimonial.name}
          </h3>
          <p className="text-accent text-xs font-medium">
            {testimonial.company}
          </p>
          <p className="text-secondary-dark/50 text-xs">{testimonial.track}</p>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  const totalSlides = testimonials.length;

  const nextSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
    setTimeout(() => setIsTransitioning(false), 500);
  }, [isTransitioning, totalSlides]);

  const prevSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
    setTimeout(() => setIsTransitioning(false), 500);
  }, [isTransitioning, totalSlides]);

  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  useEffect(() => {
    const section = sectionRef.current;
    const header = headerRef.current;
    const carousel = carouselRef.current;

    if (!section || !header || !carousel) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      gsap.set([header, carousel], { opacity: 1, y: 0 });
      return;
    }

    // Set initial states
    gsap.set(header, { opacity: 0, y: 40 });
    gsap.set(carousel, { opacity: 0, y: 30 });

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
      carousel,
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power3.out",
      },
      "-=0.4"
    );

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, []);

  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      visible.push(testimonials[(currentIndex + i) % totalSlides]);
    }
    return visible;
  };

  return (
    <section
      ref={sectionRef}
      className="py-24 md:py-40 bg-gradient-to-b from-cloud-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16 md:mb-20">
          <span className="inline-block text-sm font-medium tracking-[0.2em] uppercase text-accent mb-4">
            Success Stories
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-secondary-light mb-4 uppercase">
            What Our Members Say
          </h2>
          <p className="text-secondary-dark/70 text-lg max-w-xl mx-auto">
            Hear from brothers who&apos;ve leveraged AZ Groups to launch their
            careers
          </p>
        </div>

        <div ref={carouselRef} className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-4 z-10 w-10 h-10 flex items-center justify-center bg-white border border-secondary/10 rounded-full text-secondary-dark/60 shadow-[0_2px_8px_-2px_rgba(0,0,0,0.08)] hover:text-accent hover:border-accent/30 hover:shadow-[0_4px_12px_-2px_rgba(37,99,235,0.15)] transition-all duration-200"
            aria-label="Previous testimonial"
          >
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
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-4 z-10 w-10 h-10 flex items-center justify-center bg-white border border-secondary/10 rounded-full text-secondary-dark/60 shadow-[0_2px_8px_-2px_rgba(0,0,0,0.08)] hover:text-accent hover:border-accent/30 hover:shadow-[0_4px_12px_-2px_rgba(37,99,235,0.15)] transition-all duration-200"
            aria-label="Next testimonial"
          >
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
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 md:px-8">
            {getVisibleTestimonials().map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-10">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (!isTransitioning) {
                    setIsTransitioning(true);
                    setCurrentIndex(index);
                    setTimeout(() => setIsTransitioning(false), 500);
                  }
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-accent w-8"
                    : "bg-secondary/20 w-2 hover:bg-secondary/40"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
