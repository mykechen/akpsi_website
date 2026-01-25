"use client";

import Image from "next/image";
import members from "@/data/members.json";
import type { Member } from "@/types";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const membersData: Member[] = members;
const execMembers = membersData.filter((member) => member.isExec);

// Organize by hierarchy (adjust based on your actual roles)
const president = execMembers.find((m) =>
  m.role?.toLowerCase().includes("president") && !m.role?.toLowerCase().includes("vice")
);
const vicePresidents = execMembers.filter((m) =>
  m.role?.toLowerCase().includes("vice president")
);
const directors = execMembers.filter(
  (m) =>
    !m.role?.toLowerCase().includes("president") &&
    (m.role?.toLowerCase().includes("director") ||
      m.role?.toLowerCase().includes("chair") ||
      m.role?.toLowerCase().includes("head"))
);
const otherExecs = execMembers.filter(
  (m) =>
    m !== president &&
    !vicePresidents.includes(m) &&
    !directors.includes(m)
);

function MemberCard({
  member,
  size = "default",
  delay = 0,
  isRevealed = false,
}: {
  member: Member;
  size?: "large" | "default" | "small";
  delay?: number;
  isRevealed?: boolean;
}) {
  const sizeClasses = {
    large: "w-full max-w-xs",
    default: "w-full",
    small: "w-full",
  };

  const photoSizes = {
    large: "aspect-[3/4]",
    default: "aspect-square",
    small: "aspect-square",
  };

  return (
    <div
      className={`
        group ${sizeClasses[size]}
        transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]
        ${isRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
      `}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div
        className={`
          relative ${photoSizes[size]} overflow-hidden rounded-2xl
          bg-cloud-50 border border-secondary/5
          shadow-[0_4px_20px_-4px_rgba(0,0,0,0.06)]
          transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]
          group-hover:shadow-[0_16px_40px_-8px_rgba(37,99,235,0.15)]
          group-hover:border-accent/20
        `}
      >
        <Image
          src={member.photo}
          alt={member.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          unoptimized
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        {/* LinkedIn icon */}
        {member.linkedin && (
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-accent transition-all duration-200"
            aria-label={`${member.name}'s LinkedIn`}
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>
        )}

        {/* Member info */}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3
            className={`
              font-body font-semibold text-white mb-1
              ${size === "large" ? "text-xl" : "text-base"}
            `}
          >
            {member.name}
          </h3>
          <p className="text-white/80 text-sm">{member.role}</p>
        </div>
      </div>

      {/* Additional info below card */}
      <div className="mt-3 px-1">
        <p className="text-secondary-dark/60 text-sm">{member.major}</p>
        <p className="text-secondary-dark/40 text-xs">{member.pledgeClass}</p>
      </div>
    </div>
  );
}

export default function ExecutiveBoardFull() {
  const { ref, isRevealed } = useScrollReveal<HTMLElement>();

  return (
    <section ref={ref} className="py-24 md:py-40 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div
          className={`
            text-center mb-16 md:mb-20
            transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]
            ${isRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
          `}
        >
          <span className="inline-block text-sm font-medium tracking-[0.2em] uppercase text-accent mb-4">
            Leadership
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-secondary-light mb-4">
            Executive Board
          </h2>
          <p className="text-secondary-dark/70 text-lg max-w-2xl mx-auto">
            The leadership team driving Alpha Zeta forward
          </p>
        </div>

        {/* Tiered Layout */}
        <div className="space-y-16">
          {/* President - Centered, larger */}
          {president && (
            <div className="flex justify-center">
              <MemberCard
                member={president}
                size="large"
                delay={0}
                isRevealed={isRevealed}
              />
            </div>
          )}

          {/* Vice Presidents */}
          {vicePresidents.length > 0 && (
            <div>
              <h3
                className={`
                  text-center text-sm font-medium tracking-[0.15em] uppercase text-secondary-dark/40 mb-8
                  transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] delay-100
                  ${isRevealed ? "opacity-100" : "opacity-0"}
                `}
              >
                Vice Presidents
              </h3>
              <div className="flex flex-wrap justify-center gap-6 max-w-3xl mx-auto">
                {vicePresidents.map((member, index) => (
                  <div key={member.id} className="w-full sm:w-[calc(50%-12px)] md:w-[calc(33.333%-16px)]">
                    <MemberCard
                      member={member}
                      size="default"
                      delay={150 + index * 80}
                      isRevealed={isRevealed}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Directors */}
          {directors.length > 0 && (
            <div>
              <h3
                className={`
                  text-center text-sm font-medium tracking-[0.15em] uppercase text-secondary-dark/40 mb-8
                  transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] delay-200
                  ${isRevealed ? "opacity-100" : "opacity-0"}
                `}
              >
                Directors
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                {directors.map((member, index) => (
                  <MemberCard
                    key={member.id}
                    member={member}
                    size="small"
                    delay={300 + index * 60}
                    isRevealed={isRevealed}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Other Executive Members */}
          {otherExecs.length > 0 && (
            <div>
              <h3
                className={`
                  text-center text-sm font-medium tracking-[0.15em] uppercase text-secondary-dark/40 mb-8
                  transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] delay-300
                  ${isRevealed ? "opacity-100" : "opacity-0"}
                `}
              >
                Executive Team
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
                {otherExecs.map((member, index) => (
                  <MemberCard
                    key={member.id}
                    member={member}
                    size="small"
                    delay={400 + index * 50}
                    isRevealed={isRevealed}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
