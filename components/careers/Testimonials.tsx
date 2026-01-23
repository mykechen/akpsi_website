"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const testimonials = [
  {
    id: "1",
    name: "John Smith",
    picture: "/images/placeholder.jpg",
    company: "Goldman Sachs",
    review:
      "AZ13 gave me the technical foundation and network I needed to land my dream IB role. The mock interviews were invaluable.",
  },
  {
    id: "2",
    name: "Sarah Johnson",
    picture: "/images/placeholder.jpg",
    company: "McKinsey & Company",
    review:
      "The consulting track pushed me to think critically and structure my approach. I felt fully prepared walking into my case interviews.",
  },
  {
    id: "3",
    name: "Michael Chen",
    picture: "/images/placeholder.jpg",
    company: "Google",
    review:
      "AZCS helped me go from struggling with Leetcode to confidently solving problems in interviews. The mentorship was top-notch.",
  },
  {
    id: "4",
    name: "Emily Davis",
    picture: "/images/placeholder.jpg",
    company: "Meta",
    review:
      "The PM track taught me how to think about products holistically. The mock PM interviews and case studies were incredibly helpful.",
  },
  {
    id: "5",
    name: "David Kim",
    picture: "/images/placeholder.jpg",
    company: "Nike",
    review:
      "AZ Marketing gave me real portfolio pieces and the creative confidence to pursue brand strategy at a top company.",
  },
  {
    id: "6",
    name: "Jessica Lee",
    picture: "/images/placeholder.jpg",
    company: "JP Morgan",
    review:
      "The alumni network alone is worth it. I got connected with brothers at every bank on the street who helped me through recruiting.",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

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
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      visible.push(testimonials[(currentIndex + i) % totalSlides]);
    }
    return visible;
  };

  return (
    <section className="py-16 md:py-24 bg-primary-light/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-wide text-secondary-light mb-4">
            WHAT OUR MEMBERS SAY
          </h2>
          <p className="text-lg text-secondary/60 max-w-2xl mx-auto">
            Hear from brothers who&apos;ve leveraged AZ Groups to launch their
            careers
          </p>
        </div>

        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 flex items-center justify-center bg-primary-light border border-white/10 rounded-full text-secondary/60 hover:text-accent hover:border-accent/30 transition-all"
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
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 flex items-center justify-center bg-primary-light border border-white/10 rounded-full text-secondary/60 hover:text-accent hover:border-accent/30 transition-all"
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-8">
            {getVisibleTestimonials().map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-primary-light border border-white/10 rounded-2xl p-6 transition-all duration-500 hover:border-accent/30"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative w-14 h-14 shrink-0 rounded-full overflow-hidden bg-accent/10">
                    <Image
                      src={testimonial.picture}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  </div>
                  <div>
                    <h3 className="font-display text-base font-semibold text-secondary-light">
                      {testimonial.name}
                    </h3>
                    <p className="text-accent text-sm">{testimonial.company}</p>
                  </div>
                </div>
                <p className="text-secondary/60 text-sm leading-relaxed">
                  &ldquo;{testimonial.review}&rdquo;
                </p>
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
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
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-accent w-6"
                    : "bg-secondary/30 hover:bg-secondary/50"
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
