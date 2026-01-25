"use client";

import { useEffect, useState } from "react";
import Button from "@/components/ui/Button";

// Application deadline: January 30, 2026 at 11:59 PM PST
const DEADLINE = new Date("2026-01-31T07:59:00Z"); // UTC equivalent

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

function CountdownTimer({ isLoaded }: { isLoaded: boolean }) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = (num: number) => num.toString().padStart(2, "0");

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
        <span className="font-display text-2xl sm:text-3xl md:text-4xl font-light text-secondary-dark/70 tracking-tight">
          {formatNumber(timeLeft.days)}
        </span>
        <span className="text-[10px] sm:text-xs text-secondary-dark/40 mt-1 tracking-wide">
          Days
        </span>
      </div>

      <span className="font-display text-2xl sm:text-3xl md:text-4xl font-light text-secondary-dark/20 -mt-4">
        :
      </span>

      {/* Hours */}
      <div className="flex flex-col items-center">
        <span className="font-display text-2xl sm:text-3xl md:text-4xl font-light text-secondary-dark/70 tracking-tight">
          {formatNumber(timeLeft.hours)}
        </span>
        <span className="text-[10px] sm:text-xs text-secondary-dark/40 mt-1 tracking-wide">
          Hours
        </span>
      </div>

      <span className="font-display text-2xl sm:text-3xl md:text-4xl font-light text-secondary-dark/20 -mt-4">
        :
      </span>

      {/* Minutes */}
      <div className="flex flex-col items-center">
        <span className="font-display text-2xl sm:text-3xl md:text-4xl font-light text-secondary-dark/70 tracking-tight">
          {formatNumber(timeLeft.minutes)}
        </span>
        <span className="text-[10px] sm:text-xs text-secondary-dark/40 mt-1 tracking-wide">
          Minutes
        </span>
      </div>

      <span className="font-display text-2xl sm:text-3xl md:text-4xl font-light text-secondary-dark/20 -mt-4">
        :
      </span>

      {/* Seconds */}
      <div className="flex flex-col items-center">
        <span className="font-display text-2xl sm:text-3xl md:text-4xl font-light text-secondary-dark/70 tracking-tight">
          {formatNumber(timeLeft.seconds)}
        </span>
        <span className="text-[10px] sm:text-xs text-secondary-dark/40 mt-1 tracking-wide">
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-cloud-100 via-cloud-50 to-white">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-32 right-1/4 w-80 h-80 bg-cloud-200/50 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Application status badge */}
        <div
          className={`
            inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-accent text-sm font-medium mb-8
            transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]
            ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
          `}
        >
          <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
          Applications Open
        </div>

        {/* Main heading */}
        <h1
          className={`
            font-display text-[2.5rem] sm:text-[3.5rem] md:text-[4.5rem] lg:text-[5.5rem]
            tracking-wide text-secondary-light leading-[1.1] mb-6
            transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] delay-100
            ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
          `}
        >
          JOIN ALPHA ZETA
        </h1>

        {/* Deadline label */}
        <p
          className={`
            text-xl md:text-2xl text-secondary-light mb-8
            transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] delay-150
            ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
          `}
        >
          Application Deadline: January 30, 2026 at 11:59 PM
        </p>

        {/* Countdown Timer */}
        <div className="mb-12">
          <CountdownTimer isLoaded={isLoaded} />
        </div>

        {/* CTA */}
        <div
          className={`
            transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] delay-300
            ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
          `}
        >
          <Button href="https://forms.google.com" variant="primary" size="lg">
            Apply Now
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className={`
          absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3
          transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] delay-500
          ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
        `}
      >
        <span className="text-xs uppercase tracking-[0.2em] text-secondary-dark/50">
          Learn more
        </span>
        <div className="w-px h-10 bg-gradient-to-b from-secondary-dark/30 to-transparent" />
      </div>
    </section>
  );
}
