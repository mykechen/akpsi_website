"use client";

import { useState } from "react";
import Image from "next/image";
import members from "@/data/members.json";
import type { Member } from "@/types";
import SectionHeader from "@/components/ui/SectionHeader";
import MemberModal from "./MemberModal";

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

  return (
    <>
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
                <SectionHeader title={pledgeClass} />
                <div className="mt-12 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
                  {membersInClass.map((member) => (
                    <button
                      key={member.id}
                      className="text-left cursor-pointer w-full"
                      onClick={() => handleMemberClick(member)}
                      aria-label={`View ${member.name}'s profile`}
                    >
                      <div className="relative aspect-square overflow-hidden rounded-xl bg-primary-light border border-secondary/10 transition-all duration-300 hover:border-accent/30">
                        <Image
                          src={member.photo}
                          alt={member.name}
                          fill
                          className="object-cover"
                          unoptimized
                        />
                      </div>
                      <p className="mt-2 text-secondary/70 text-xs text-center truncate">
                        {member.name}
                      </p>
                    </button>
                  ))}
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
