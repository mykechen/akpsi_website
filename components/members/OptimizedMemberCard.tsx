"use client";

import { useState, useRef, useEffect } from "react";
import type { Member } from "@/types";

interface OptimizedMemberCardProps {
  member: Member;
  onClick: (member: Member) => void;
  index: number;
}

// Extract member name from photo path for optimized image lookup
function getMemberKey(photoPath: string): string {
  const filename = photoPath.split("/").pop() || "";
  return filename.replace(/\.(png|jpg|jpeg|webp)$/i, "");
}

export default function OptimizedMemberCard({
  member,
  onClick,
  index,
}: OptimizedMemberCardProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [hasError, setHasError] = useState(false);
  const cardRef = useRef<HTMLButtonElement>(null);
  const memberKey = getMemberKey(member.photo);

  // Optimized image paths
  const webpSrc = `/images/members/optimized/webp/${memberKey}.webp`;
  const jpgSrc = `/images/members/optimized/jpg/${memberKey}.jpg`;
  const blurSrc = `/images/members/optimized/blur/${memberKey}.jpg`;

  // Intersection Observer for lazy loading
  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: "100px", // Start loading 100px before visible
        threshold: 0,
      }
    );

    observer.observe(card);
    return () => observer.disconnect();
  }, []);

  const handleImageLoad = () => {
    setIsLoaded(true);
  };

  const handleImageError = () => {
    setHasError(true);
    setIsLoaded(true);
  };

  // Staggered animation delay based on index (capped at 12 for performance)
  const animationDelay = Math.min(index, 11) * 50;

  return (
    <button
      ref={cardRef}
      className="member-card group text-left cursor-pointer w-full"
      onClick={() => onClick(member)}
      aria-label={`View ${member.name}'s profile`}
      style={{
        // CSS containment for scroll performance
        contain: "layout style paint",
        // Content visibility for off-screen performance
        contentVisibility: "auto",
        containIntrinsicSize: "0 200px",
      }}
    >
      {/* Image container with fixed aspect ratio */}
      <div
        className="relative overflow-hidden rounded-xl bg-cloud-50 border border-secondary/5 shadow-[0_2px_8px_-2px_rgba(0,0,0,0.04)] transition-all duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:border-accent/20 group-hover:shadow-[0_8px_20px_-4px_rgba(37,99,235,0.12)] group-hover:scale-[1.02]"
        style={{ aspectRatio: "1 / 1" }}
      >
        {/* Blur placeholder - always rendered for layout stability */}
        <img
          src={blurSrc}
          alt=""
          aria-hidden="true"
          className={`absolute inset-0 w-full h-full object-cover scale-110 blur-sm transition-opacity duration-300 ${
            isLoaded ? "opacity-0" : "opacity-100"
          }`}
          style={{ aspectRatio: "1 / 1" }}
          width={400}
          height={400}
        />

        {/* Skeleton shimmer while loading */}
        {!isLoaded && (
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skeleton-shimmer" />
        )}

        {/* Main image with picture element for format selection */}
        {isInView && !hasError && (
          <picture>
            <source srcSet={webpSrc} type="image/webp" />
            <source srcSet={jpgSrc} type="image/jpeg" />
            <img
              src={jpgSrc}
              alt={member.name}
              width={400}
              height={400}
              loading="lazy"
              decoding="async"
              onLoad={handleImageLoad}
              onError={handleImageError}
              className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 group-hover:scale-105 ${
                isLoaded ? "opacity-100" : "opacity-0"
              }`}
              style={{
                aspectRatio: "1 / 1",
                animationDelay: `${animationDelay}ms`,
              }}
            />
          </picture>
        )}

        {/* Error fallback */}
        {hasError && (
          <div className="absolute inset-0 flex items-center justify-center bg-cloud-100">
            <span className="text-secondary-dark/40 text-xs">
              {member.name.charAt(0)}
            </span>
          </div>
        )}
      </div>

      {/* Name with fade-in animation */}
      <p
        className={`mt-2 text-secondary-dark/60 text-xs text-center truncate transition-all duration-300 group-hover:text-secondary-light ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1"
        }`}
        style={{ transitionDelay: `${animationDelay + 100}ms` }}
      >
        {member.name}
      </p>
    </button>
  );
}
