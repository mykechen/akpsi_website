"use client";

import { useEffect, useState } from "react";

export default function CareersHero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background video/image with subtle parallax effect */}
      <div className="absolute inset-0">
        {/* Video background - uncomment when video file is available */}
        {/* <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover scale-105"
        >
          <source src="/misc/careers-bg.mp4" type="video/mp4" />
        </video> */}
        {/* Fallback image */}
        <img
          src="/misc/careers-bg.jpeg"
          alt=""
          className="w-full h-full object-cover scale-105"
        />
        {/* Gradient overlay for depth and legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70" />
        {/* Blue tint overlay for brand consistency */}
        <div className="absolute inset-0 bg-accent/10 mix-blend-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Eyebrow */}
        <p
          className={`
            text-sm md:text-base font-medium tracking-[0.2em] uppercase text-white/70 mb-6
            transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]
            ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
          `}
        >
          Your Path to Excellence
        </p>

        {/* Main heading */}
        <h1
          className={`
            font-display text-[2.5rem] sm:text-[3.5rem] md:text-[4.5rem] lg:text-[5.5rem]
            tracking-wide text-white leading-[1.1] mb-8
            transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] delay-100
            ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
          `}
        >
          CAREER DEVELOPMENT
        </h1>

        {/* Career tracks */}
        {/* <div
          className={`
            flex flex-wrap justify-center gap-3 md:gap-4
            transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] delay-200
            ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
          `}
        >
          {["Investment Banking", "Consulting", "Tech & PM", "Computer Science", "Marketing"].map(
            (track, index) => (
              <span
                key={track}
                className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white text-sm font-medium"
                style={{
                  transitionDelay: `${200 + index * 50}ms`,
                }}
              >
                {track}
              </span>
            )
          )}
        </div> */}
      </div>

      {/* Scroll indicator */}
      <div
        className={`
          absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3
          transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] delay-500
          ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
        `}
      >
        <span className="text-xs uppercase tracking-[0.2em] text-white/50">
          Explore programs
        </span>
        <div className="w-px h-10 bg-gradient-to-b from-white/40 to-transparent" />
      </div>
    </section>
  );
}
