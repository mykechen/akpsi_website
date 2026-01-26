"use client";

import { useState } from "react";
import members from "@/data/members.json";
import type { Member } from "@/types";
import SectionHeader from "@/components/ui/SectionHeader";
import MemberModal from "./MemberModal";
import OptimizedMemberCard from "./OptimizedMemberCard";

const membersData: Member[] = members;
const activeMembers = membersData.filter((member) => !member.isAlumni);

// Function to sort pledge classes (Fall 2022, Spring 2023, Fall 2023, Spring 2024, etc.)
// Spring comes after Fall of the previous year chronologically
function sortPledgeClasses(classes: string[]): string[] {
  return classes.sort((a, b) => {
    const parsePledgeClass = (pc: string) => {
      const regex = /(Fall|Spring)\s+(\d{4})/;
      const match = regex.exec(pc);
      if (!match) return { sortValue: 0 };
      const season = match[1];
      const year = Number.parseInt(match[2], 10);
      // Convert to sortable value:
      // Fall 2022 = 2022 * 2 = 4044
      // Spring 2023 = 2023 * 2 - 1 = 4045 (comes after Fall 2022)
      // Fall 2023 = 2023 * 2 = 4046 (comes after Spring 2023)
      // Spring 2024 = 2024 * 2 - 1 = 4047 (comes after Fall 2023)
      const sortValue = season === "Fall" ? year * 2 : year * 2 - 1;
      return { sortValue };
    };

    const aParsed = parsePledgeClass(a);
    const bParsed = parsePledgeClass(b);

    return aParsed.sortValue - bParsed.sortValue;
  });
}

// Group members by pledge class
const membersByPledgeClass = activeMembers.reduce(
  (acc, member) => {
    if (!member.pledgeClass) return acc;
    if (!acc[member.pledgeClass]) {
      acc[member.pledgeClass] = [];
    }
    acc[member.pledgeClass].push(member);
    return acc;
  },
  {} as Record<string, Member[]>,
);

// Get sorted pledge classes
const sortedPledgeClasses = sortPledgeClasses(
  Object.keys(membersByPledgeClass),
);

export default function ActiveMembers() {
  const [selectedMember, setSelectedMember] = useState<Member | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleMemberClick = (member: Member) => {
    setSelectedMember(member);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedMember(null);
  };

  // Track global index for staggered animations
  let globalIndex = 0;

  return (
    <>
      {/* Skeleton shimmer animation styles */}
      <style jsx global>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .skeleton-shimmer {
          animation: shimmer 1.5s infinite;
        }
        /* GPU acceleration for member cards */
        .member-card {
          will-change: transform;
          transform: translateZ(0);
        }
      `}</style>

      <section className="py-16 md:py-24 bg-primary-light/30">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            title="ACTIVE MEMBERS"
            subtitle="The brothers who embody our values every day"
          />

          {/* Sections by Pledge Class */}
          {sortedPledgeClasses.map((pledgeClass) => {
            const membersInClass = membersByPledgeClass[pledgeClass];
            return (
              <div key={pledgeClass} className="mt-16">
                <h3 className="text-xl md:text-2xl font-bold text-secondary-light mb-6 uppercase">
                  {pledgeClass}
                </h3>
                <div
                  className="mt-6 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4"
                  style={{
                    // CSS containment for the grid container
                    contain: "layout style",
                  }}
                >
                  {membersInClass.map((member) => {
                    const currentIndex = globalIndex++;
                    return (
                      <OptimizedMemberCard
                        key={member.id}
                        member={member}
                        onClick={handleMemberClick}
                        index={currentIndex}
                      />
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <MemberModal
        member={selectedMember}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
}
