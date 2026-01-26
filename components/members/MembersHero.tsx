"use client";

import { useEffect, useState } from "react";

export default function MembersHero() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile on mount and window resize
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);

    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Video background with poster and optimized sources */}
      <video
        autoPlay
        loop
        muted
        playsInline
        poster="/misc/optimized/members-poster.jpg"
        className="absolute inset-0 w-full h-full object-cover"
      >
        {/* WebM sources first (better compression, modern browsers) */}
        <source
          src={isMobile ? "/misc/optimized/members-720p.webm" : "/misc/optimized/members-1080p.webm"}
          type="video/webm"
        />
        {/* MP4 fallback (wider compatibility) */}
        <source
          src={isMobile ? "/misc/optimized/members-720p.mp4" : "/misc/optimized/members-1080p.mp4"}
          type="video/mp4"
        />
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/80" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        {/* Eyebrow */}
        <p
          className={`
            text-sm md:text-base font-medium tracking-[0.2em] uppercase text-white/80 mb-6
            transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]
            ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
          `}
        >
          Our Community
        </p>

        {/* Main heading */}
        <h1
          className={`
            font-display text-[3rem] sm:text-[4rem] md:text-[5rem] lg:text-[6rem] xl:text-[7rem]
            tracking-wide text-white leading-[1.1] mb-6
            transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] delay-100
            ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
          `}
        >
          OUR MEMBERS
        </h1>

        {/* Supporting text */}
        <p
          className={`
            text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed
            transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] delay-200
            ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
          `}
        >
          Meet the talented individuals who make up Alpha Zeta - a diverse
          community of future leaders in business, tech, and beyond.
        </p>
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
          Meet the Chapter
        </span>
        <div className="w-px h-10 bg-gradient-to-b from-white/30 to-transparent" />
      </div>
    </section>
  );
}
