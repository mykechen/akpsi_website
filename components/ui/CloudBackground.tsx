"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Create multiple instances alternating between cloud1.png and cloud2.png
const baseCloudImages = ["/misc/cloud1.png", "/misc/cloud2.png"];
const cloudImages = Array(15)
  .fill(null)
  .map((_, index) => baseCloudImages[index % baseCloudImages.length]);

export default function CloudBackground() {
  const imageDivsRef = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationsRef = useRef<any[]>([]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    // Wait for images to load before animating
    const imageElements = imageDivsRef.current.filter(Boolean);
    const images = imageElements.flatMap((el) => {
      const img = el?.querySelector("img");
      return img ? [img] : [];
    });

    let loadedCount = 0;
    const totalImages = images.length;

    const animateCloud = (el: HTMLDivElement, windowWidth: number, windowHeight: number) => {
      const img = el.querySelector("img");
      if (!img) return;

      // Get the actual rendered width and height
      const width = img.offsetWidth || img.naturalWidth || 800;
      const height = img.offsetHeight || img.naturalHeight || 600;
      const y = gsap.utils.random(-height * 0.5, windowHeight - height * 0.5);
      const delay = gsap.utils.random(0, 3);
      const duration = gsap.utils.random(15, 25);

      // Set initial position and make visible
      gsap.set(el, {
        opacity: 1,
        y,
        x: windowWidth, // Start from right edge
      });

      // Animate cloud from right to left
      const animation = gsap.to(el, {
        x: -width - 200, // Fully off screen to the left
        duration,
        delay,
        ease: "none",
        onComplete: () => {
          // Once cloud is fully off screen, reset and animate again
          // Only reset if element still exists and is in the DOM
          if (el && el.parentNode) {
            animateCloud(el, windowWidth, windowHeight);
          }
        },
      });

      // Store animation for cleanup
      animationsRef.current.push(animation);
    };

    const startAnimations = () => {
      imageDivsRef.current.forEach((el) => {
        if (!el) return;
        animateCloud(el, windowWidth, windowHeight);
      });
    };

    if (totalImages === 0) {
      // If no images found, start anyway (fallback)
      startAnimations();
      return;
    }

    images.forEach((img) => {
      if (img.complete) {
        loadedCount++;
        if (loadedCount === totalImages) {
          // Small delay to ensure dimensions are calculated
          setTimeout(startAnimations, 100);
        }
      } else {
        img.addEventListener("load", () => {
          loadedCount++;
          if (loadedCount === totalImages) {
            setTimeout(startAnimations, 100);
          }
        });
      }
    });

    // Set up scroll-based opacity for "Where We Are Now" section
    const setupScrollTrigger = () => {
      const companySection = document.getElementById("company-carousel");

      if (companySection && containerRef.current) {
        ScrollTrigger.create({
          trigger: companySection,
          start: "top center",
          end: "bottom center",
          onEnter: () => {
            gsap.to(containerRef.current, {
              opacity: 0.05,
              duration: 1,
              ease: "power2.inOut",
            });
          },
          onLeave: () => {
            gsap.to(containerRef.current, {
              opacity: 1,
              duration: 1,
              ease: "power2.inOut",
            });
          },
          onEnterBack: () => {
            gsap.to(containerRef.current, {
              opacity: 0.05,
              duration: 1,
              ease: "power2.inOut",
            });
          },
          onLeaveBack: () => {
            gsap.to(containerRef.current, {
              opacity: 1,
              duration: 1,
              ease: "power2.inOut",
            });
          },
        });
      }
    };

    // Wait for DOM to be ready, then set up ScrollTrigger
    const timer = setTimeout(() => {
      setupScrollTrigger();
    }, 500);

    // Also try on next frame
    requestAnimationFrame(() => {
      setupScrollTrigger();
    });

    return () => {
      clearTimeout(timer);
      // Kill all cloud animations
      animationsRef.current.forEach((anim) => anim.kill());
      animationsRef.current = [];
      // Kill ScrollTrigger
      ScrollTrigger.getAll().forEach((trigger) => {
        const triggerElement = trigger.trigger;
        if (triggerElement?.id === "company-carousel") {
          trigger.kill();
        }
      });
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 w-screen h-screen overflow-hidden pointer-events-none"
      style={{ zIndex: -1, opacity: 1 }}
    >
      <div
        className="absolute inset-0 w-full h-full overflow-hidden"
        style={{ zIndex: -1 }}
      >
        <div
          className="absolute inset-0 w-full h-full overflow-hidden"
          style={{ zIndex: -1 }}
        >
          {cloudImages.map((src, index) => (
            <div
              key={index}
              ref={(el) => {
                imageDivsRef.current[index] = el;
              }}
              className="absolute top-0 left-0 opacity-0"
              style={{ zIndex: -1 }}
            >
              <Image
                src={src}
                alt={`Cloud ${index + 1}`}
                width={800}
                height={600}
                className="block w-auto h-auto"
                unoptimized
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
