"use client";

import Image from "next/image";
import members from "@/data/members.json";
import type { Member } from "@/types";
import Button from "@/components/ui/Button";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const membersData: Member[] = members;
const execMembers = membersData.filter((member) => member.isExec);

function formatPledgeClass(pledgeClass: string): string {
  const regex = /(Spring|Fall)\s+(\d{4})/;
  const match = regex.exec(pledgeClass);
  if (match) {
    const season = match[1].charAt(0);
    const year = match[2].slice(-2);
    return `${season}${year}`;
  }
  return pledgeClass;
}

export default function ExecutiveBoard() {
  const { ref, isRevealed } = useScrollReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      className="py-24 md:py-40 bg-gradient-to-b from-cloud-50 to-white"
    >
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div
          className={`
            text-center mb-12 md:mb-16
            transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]
            ${isRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
          `}
        >
          <h2 className="font-body text-xl md:text-2xl font-normal text-secondary-dark/70 tracking-wide">
            [ Executive Board ]
          </h2>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {execMembers.map((member, index) => {
            const CardWrapper = member.linkedin ? 'a' : 'div';
            const cardProps = member.linkedin
              ? {
                  href: member.linkedin,
                  target: "_blank",
                  rel: "noopener noreferrer",
                }
              : {};

            return (
              <CardWrapper
                key={member.id}
                {...cardProps}
                className={`
                  group flex items-center gap-4 p-3
                  bg-white border border-secondary/10 rounded-xl
                  shadow-[0_2px_12px_-2px_rgba(0,0,0,0.04)]
                  transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]
                  hover:shadow-[0_12px_32px_-8px_rgba(37,99,235,0.12)]
                  hover:border-accent/20 hover:scale-[1.02]
                  ${member.linkedin ? "cursor-pointer" : ""}
                  ${isRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
                `}
                style={{
                  transitionDelay: isRevealed ? `${index * 50}ms` : "0ms",
                }}
              >
                {/* Photo */}
                <div className="relative w-20 h-20 shrink-0 overflow-hidden rounded-lg">
                  <Image
                    src={member.photo}
                    alt={member.name}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>

                {/* Info */}
                <div className="flex flex-col justify-center min-w-0">
                  <h3 className="font-body text-lg font-semibold text-secondary-light mb-1 truncate">
                    {member.name}
                  </h3>
                  <p className="text-secondary-dark/60 text-sm">
                    {member.role}
                    {member.pledgeClass && `, ${formatPledgeClass(member.pledgeClass)}`}
                  </p>
                </div>
              </CardWrapper>
            );
          })}
        </div>

        {/* CTA */}
        <div
          className={`
            mt-12 text-center
            transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] delay-300
            ${isRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
          `}
        >
          <Button href="/members" variant="outline">
            View All Members
          </Button>
        </div>
      </div>
    </section>
  );
}
