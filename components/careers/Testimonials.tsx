"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import testimonialsData from "@/data/testimonials.json";

// Register plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface Testimonial {
  id: string;
  name: string;
  photo: string;
  quote: string;
  title: string;
}

const testimonials: Testimonial[] = testimonialsData;

// Testimonial card - static, no hover effects
function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="bg-white rounded-2xl p-6 border border-secondary/5 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.06)] h-full flex flex-col min-h-[280px] md:min-h-0">
      {/* Quote icon */}
      <svg
        className="w-8 h-8 text-accent/20 mb-4 shrink-0"
        fill="currentColor"
        viewBox="0 0 32 32"
      >
        <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2V8zm12 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2V8z" />
      </svg>

      <p className="text-secondary-dark/70 text-sm leading-relaxed mb-6 flex-1 line-clamp-6 md:line-clamp-none">
        {testimonial.quote}
      </p>

      <div className="flex items-center gap-4 pt-4 border-t border-secondary/5 mt-auto shrink-0">
        <div className="relative w-12 h-12 shrink-0 rounded-full overflow-hidden bg-cloud-50">
          <Image
            src={testimonial.photo}
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
          <p className="text-accent text-xs font-medium">{testimonial.title}</p>
        </div>
      </div>
    </div>
  );
}

const VISIBLE_CARDS_DESKTOP = 3;
const VISIBLE_CARDS_MOBILE = 1;
const totalTestimonials = testimonials.length;

// Helper to get testimonial at circular index
const getTestimonial = (index: number) => {
  return testimonials[
    ((index % totalTestimonials) + totalTestimonials) % totalTestimonials
  ];
};

export default function Testimonials() {
  const [startIndex, setStartIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  // Check for mobile viewport
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const visibleCards = isMobile ? VISIBLE_CARDS_MOBILE : VISIBLE_CARDS_DESKTOP;

  // Get visible cards (shown + 1 extra for animation)
  const getVisibleCards = () => {
    const cards = [];
    for (let i = 0; i < visibleCards + 1; i++) {
      cards.push(getTestimonial(startIndex + i));
    }
    return cards;
  };

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        setIsAnimating(true);
        const track = trackRef.current;
        if (track) {
          if (isMobile) {
            // Fade transition for mobile (smoother for single cards)
            gsap.to(track, {
              opacity: 0,
              duration: 0.3,
              ease: "power2.inOut",
              onComplete: () => {
                setStartIndex((prev) => (prev + 1) % totalTestimonials);
                requestAnimationFrame(() => {
                  gsap.to(track, {
                    opacity: 1,
                    duration: 0.3,
                    ease: "power2.inOut",
                    onComplete: () => setIsAnimating(false),
                  });
                });
              },
            });
          } else {
            // Slide transition for desktop
            const trackWidth = track.offsetWidth;
            const cardWidth = trackWidth / (visibleCards + 1);

            gsap.to(track, {
              x: -cardWidth,
              duration: 0.6,
              ease: "power2.inOut",
              onComplete: () => {
                setStartIndex((prev) => (prev + 1) % totalTestimonials);
                requestAnimationFrame(() => {
                  requestAnimationFrame(() => {
                    if (track) {
                      gsap.set(track, { x: 0, clearProps: "x" });
                      setIsAnimating(false);
                    }
                  });
                });
              },
            });
          }
        }
      }
    }, 6000);
    return () => clearInterval(interval);
  }, [isAnimating, visibleCards, isMobile]);

  // Scroll reveal animation
  useEffect(() => {
    const section = sectionRef.current;
    const header = headerRef.current;
    const carousel = carouselRef.current;

    if (!section || !header || !carousel) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      gsap.set([header, carousel], { opacity: 1, y: 0 });
      return;
    }

    gsap.set(header, { opacity: 0, y: 40 });
    gsap.set(carousel, { opacity: 0, y: 30 });

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
      className="py-24 md:py-40 bg-gradient-to-b from-cloud-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16 md:mb-20">
          <span className="inline-block text-sm font-medium tracking-[0.2em] uppercase text-accent mb-4">
            Alumni Voices
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-secondary-light mb-4 uppercase">
            What Our Alumni Say
          </h2>
          <p className="text-secondary-dark/70 text-lg max-w-xl mx-auto">
            Hear from our brothers who&apos;ve leveraged AZ Groups to launch
            their careers
          </p>
        </div>

        <div ref={carouselRef} className="my-8">
          {/* Continuous sliding carousel */}
          <div className="overflow-hidden -mx-3">
            <div
              ref={trackRef}
              className="flex items-stretch"
              style={{ width: `${((visibleCards + 1) / visibleCards) * 100}%` }}
            >
              {getVisibleCards().map((testimonial, index) => (
                <div
                  key={`${startIndex}-${index}`}
                  className="shrink-0 px-3 flex"
                  style={{ width: `${100 / (visibleCards + 1)}%` }}
                >
                  <TestimonialCard testimonial={testimonial} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
