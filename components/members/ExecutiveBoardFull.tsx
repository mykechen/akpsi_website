import Image from "next/image";
import members from "@/data/members.json";
import type { Member } from "@/types";
import SectionHeader from "@/components/ui/SectionHeader";

const membersData: Member[] = members;
const execMembers = membersData.filter((member) => member.isExec);

export default function ExecutiveBoardFull() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          title="EXECUTIVE BOARD"
          subtitle="The leadership team driving Alpha Zeta forward"
        />

        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {execMembers.map((member) => (
            <div key={member.id}>
              <div className="relative aspect-square overflow-hidden rounded-2xl bg-primary-light border border-secondary/10">
                <Image
                  src={member.photo}
                  alt={member.name}
                  fill
                  className="object-cover"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/20 to-transparent opacity-80" />

                {/* LinkedIn icon - always visible */}
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-3 right-3 w-7 h-7 flex items-center justify-center bg-secondary/10 backdrop-blur-sm rounded-full text-white hover:bg-accent transition-colors"
                    aria-label={`${member.name}'s LinkedIn`}
                  >
                    <svg
                      className="w-3.5 h-3.5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                )}

                {/* Member info */}
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <h3 className="font-display text-base font-semibold text-white">
                    {member.name}
                  </h3>
                  <p className="text-white/70 text-sm">{member.role}</p>
                </div>
              </div>
              <div className="mt-3 px-1">
                <p className="text-secondary/50 text-xs">{member.major}</p>
                <p className="text-secondary/40 text-xs">
                  {member.pledgeClass}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
