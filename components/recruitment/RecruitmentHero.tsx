"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Button from "@/components/ui/Button";

// Dynamically import FaultyTerminal to reduce initial bundle size
const FaultyTerminal = dynamic(() => import("../ui/FaultyTerminal"), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 w-full h-full bg-[#0a1628]" />
  ),
});

// Application deadline: January 31, 2026 at 11:59 PM PST
const DEADLINE = new Date("2026-02-01T07:59:00Z"); // UTC equivalent of Jan 31, 2026 11:59 PM PST

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function calculateTimeLeft(): TimeLeft {
  const now = new Date();
  const difference = DEADLINE.getTime() - now.getTime();

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
}

function CountdownTimer({ isLoaded }: Readonly<{ isLoaded: boolean }>) {
  // Initialize with null to avoid hydration mismatch - time will be calculated client-side only
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  useEffect(() => {
    // Set initial time on client
    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number | undefined) =>
    num === undefined ? "--" : num.toString().padStart(2, "0");

  return (
    <div
      className={`
        flex items-center justify-center gap-2 sm:gap-4 md:gap-6
        transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] delay-200
        ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
      `}
    >
      {/* Days */}
      <div className="flex flex-col items-center">
        <span className="font-display text-2xl sm:text-3xl md:text-4xl font-light text-white tracking-tight">
          {formatNumber(timeLeft?.days)}
        </span>
        <span className="text-[10px] sm:text-xs text-white/70 mt-1 tracking-wide">
          Days
        </span>
      </div>

      <span className="font-display text-2xl sm:text-3xl md:text-4xl font-light text-white/30 -mt-4">
        :
      </span>

      {/* Hours */}
      <div className="flex flex-col items-center">
        <span className="font-display text-2xl sm:text-3xl md:text-4xl font-light text-white tracking-tight">
          {formatNumber(timeLeft?.hours)}
        </span>
        <span className="text-[10px] sm:text-xs text-white/70 mt-1 tracking-wide">
          Hours
        </span>
      </div>

      <span className="font-display text-2xl sm:text-3xl md:text-4xl font-light text-white/30 -mt-4">
        :
      </span>

      {/* Minutes */}
      <div className="flex flex-col items-center">
        <span className="font-display text-2xl sm:text-3xl md:text-4xl font-light text-white tracking-tight">
          {formatNumber(timeLeft?.minutes)}
        </span>
        <span className="text-[10px] sm:text-xs text-white/70 mt-1 tracking-wide">
          Minutes
        </span>
      </div>

      <span className="font-display text-2xl sm:text-3xl md:text-4xl font-light text-white/30 -mt-4">
        :
      </span>

      {/* Seconds */}
      <div className="flex flex-col items-center">
        <span className="font-display text-2xl sm:text-3xl md:text-4xl font-light text-white tracking-tight">
          {formatNumber(timeLeft?.seconds)}
        </span>
        <span className="text-[10px] sm:text-xs text-white/70 mt-1 tracking-wide">
          Seconds
        </span>
      </div>
    </div>
  );
}

export default function RecruitmentHero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* FaultyTerminal Background */}
      <div className="absolute inset-0 w-full h-full z-0">
        <FaultyTerminal
          scale={3}
          gridMul={[2, 1]}
          digitSize={2}
          timeScale={2}
          pause={false}
          scanlineIntensity={0.5}
          glitchAmount={1}
          flickerAmount={1}
          noiseAmp={0.8}
          chromaticAberration={0}
          dither={0}
          curvature={0.25}
          tint="#86b4fd"
          mouseReact
          mouseStrength={0.8}
          pageLoadAnimation
          brightness={0.6}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Application status badge */}
        {/* <div
          className={`
            inline-flex items-center gap-2 px-4 py-2 
            bg-white/10 backdrop-blur-md border border-white/30 rounded-full 
            text-white text-sm font-medium mb-8 shadow-lg
            transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]
            ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
          `}
        >
          <span className="w-2 h-2 bg-white rounded-full animate-pulse shadow-sm" />{" "}
          Applications Open
        </div> */}

        {/* Main heading */}
        <h1
          className={`
            font-display text-[2rem] sm:text-[2.75rem] md:text-[3.5rem] lg:text-[4.5rem]
            tracking-wide text-white leading-[1.1] mb-6 whitespace-nowrap
            transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] delay-100
            ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
          `}
        >
          JOIN ALPHA KAPPA PSI
        </h1>

        {/* Deadline label */}
        {/* <p
          className={`
            text-xl md:text-2xl text-white mb-8
            flex flex-col md:block items-center md:items-start
            transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] delay-150
            ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
          `}
        >
          <span>Application Deadline:</span>
          <span className="md:inline"> January 31, 2026 at 11:59 PM PST</span>
        </p> */}

        {/* Countdown Timer */}
        {/* <div className="mb-12">
          <CountdownTimer isLoaded={isLoaded} />
        </div> */}

        {/* CTA */}
        {/* <div
          className={`
            transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] delay-300
            ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
          `}
        >
          <Button href="https://tally.so/r/GxR5Rk" variant="primary" size="lg">
            Apply Now
          </Button>
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
        <span className="text-xs uppercase tracking-[0.2em] text-white/70">
          Learn more
        </span>
        <div className="w-px h-10 bg-linear-to-b from-white/30 to-transparent" />
      </div>
    </section>
  );
}
