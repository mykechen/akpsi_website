"use client";

import { useEffect, useRef, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface ScrollRevealOptions {
  y?: number;
  opacity?: number;
  duration?: number;
  ease?: string;
  delay?: number;
  start?: string;
  once?: boolean;
}

// Hook for scroll-triggered reveal animations
export function useGSAPScrollReveal<T extends HTMLElement = HTMLDivElement>(
  options: ScrollRevealOptions = {}
) {
  const {
    y = 40,
    opacity = 0,
    duration = 0.8,
    ease = "power3.out",
    delay = 0,
    start = "top 85%",
    once = true,
  } = options;

  const ref = useRef<T>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      gsap.set(element, { opacity: 1, y: 0 });
      return;
    }

    // Set initial state
    gsap.set(element, { opacity, y });

    // Create scroll trigger animation
    const animation = gsap.to(element, {
      opacity: 1,
      y: 0,
      duration,
      ease,
      delay,
      scrollTrigger: {
        trigger: element,
        start,
        toggleActions: once ? "play none none none" : "play none none reverse",
      },
    });

    return () => {
      animation.scrollTrigger?.kill();
      animation.kill();
    };
  }, [y, opacity, duration, ease, delay, start, once]);

  return ref;
}

// Hook for staggered children scroll reveal
export function useGSAPStaggerReveal<T extends HTMLElement = HTMLDivElement>(
  childSelector: string,
  options: ScrollRevealOptions & { stagger?: number } = {}
) {
  const {
    y = 30,
    opacity = 0,
    duration = 0.6,
    ease = "power3.out",
    delay = 0,
    start = "top 85%",
    stagger = 0.1,
    once = true,
  } = options;

  const ref = useRef<T>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const children = container.querySelectorAll(childSelector);
    if (children.length === 0) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      gsap.set(children, { opacity: 1, y: 0 });
      return;
    }

    // Set initial state
    gsap.set(children, { opacity, y });

    // Create staggered animation
    const animation = gsap.to(children, {
      opacity: 1,
      y: 0,
      duration,
      ease,
      delay,
      stagger,
      scrollTrigger: {
        trigger: container,
        start,
        toggleActions: once ? "play none none none" : "play none none reverse",
      },
    });

    return () => {
      animation.scrollTrigger?.kill();
      animation.kill();
    };
  }, [childSelector, y, opacity, duration, ease, delay, start, stagger, once]);

  return ref;
}

// Hook for hover animations
export function useGSAPHover<T extends HTMLElement = HTMLDivElement>(
  hoverConfig: {
    scale?: number;
    y?: number;
    duration?: number;
    ease?: string;
    boxShadow?: string;
  } = {}
) {
  const {
    scale = 1.02,
    y = -2,
    duration = 0.3,
    ease = "power2.out",
    boxShadow,
  } = hoverConfig;

  const ref = useRef<T>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const hoverIn = () => {
      gsap.to(element, {
        scale,
        y,
        boxShadow: boxShadow || "0 12px 32px -8px rgba(37, 99, 235, 0.12)",
        duration,
        ease,
      });
    };

    const hoverOut = () => {
      gsap.to(element, {
        scale: 1,
        y: 0,
        boxShadow: "0 2px 12px -2px rgba(0, 0, 0, 0.04)",
        duration,
        ease,
      });
    };

    element.addEventListener("mouseenter", hoverIn);
    element.addEventListener("mouseleave", hoverOut);

    return () => {
      element.removeEventListener("mouseenter", hoverIn);
      element.removeEventListener("mouseleave", hoverOut);
    };
  }, [scale, y, duration, ease, boxShadow]);

  return ref;
}

// Combined scroll reveal + hover hook
export function useGSAPCard<T extends HTMLElement = HTMLDivElement>(
  scrollOptions: ScrollRevealOptions = {},
  hoverOptions: Parameters<typeof useGSAPHover>[0] = {}
) {
  const ref = useRef<T>(null);

  // Scroll reveal
  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const {
      y = 40,
      opacity = 0,
      duration = 0.8,
      ease = "power3.out",
      delay = 0,
      start = "top 85%",
      once = true,
    } = scrollOptions;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      gsap.set(element, { opacity: 1, y: 0 });
      return;
    }

    gsap.set(element, { opacity, y });

    const animation = gsap.to(element, {
      opacity: 1,
      y: 0,
      duration,
      ease,
      delay,
      scrollTrigger: {
        trigger: element,
        start,
        toggleActions: once ? "play none none none" : "play none none reverse",
      },
    });

    return () => {
      animation.scrollTrigger?.kill();
      animation.kill();
    };
  }, [scrollOptions]);

  // Hover effect
  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const {
      scale = 1.02,
      y = -2,
      duration = 0.3,
      ease = "power2.out",
      boxShadow,
    } = hoverOptions;

    const hoverIn = () => {
      gsap.to(element, {
        scale,
        y,
        boxShadow: boxShadow || "0 12px 32px -8px rgba(37, 99, 235, 0.12)",
        duration,
        ease,
      });
    };

    const hoverOut = () => {
      gsap.to(element, {
        scale: 1,
        y: 0,
        boxShadow: "0 2px 12px -2px rgba(0, 0, 0, 0.04)",
        duration,
        ease,
      });
    };

    element.addEventListener("mouseenter", hoverIn);
    element.addEventListener("mouseleave", hoverOut);

    return () => {
      element.removeEventListener("mouseenter", hoverIn);
      element.removeEventListener("mouseleave", hoverOut);
    };
  }, [hoverOptions]);

  return ref;
}

// Utility function for one-off animations
export function animateElement(
  element: HTMLElement | null,
  config: gsap.TweenVars
) {
  if (!element) return;
  return gsap.to(element, config);
}

// Fade in animation utility
export function fadeIn(
  element: HTMLElement | null,
  options: { duration?: number; delay?: number; y?: number } = {}
) {
  if (!element) return;
  const { duration = 0.6, delay = 0, y = 20 } = options;

  gsap.fromTo(
    element,
    { opacity: 0, y },
    { opacity: 1, y: 0, duration, delay, ease: "power3.out" }
  );
}

// Fade out animation utility
export function fadeOut(
  element: HTMLElement | null,
  options: { duration?: number; delay?: number; y?: number } = {}
) {
  if (!element) return;
  const { duration = 0.4, delay = 0, y = 20 } = options;

  gsap.to(element, {
    opacity: 0,
    y,
    duration,
    delay,
    ease: "power2.in",
  });
}
