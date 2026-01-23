import Image from "next/image";
import members from "@/data/members.json";
import type { Member } from "@/types";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";

const membersData: Member[] = members;
const execMembers = membersData.filter((member) => member.isExec);

// Helper function to format pledge class (e.g., "Spring 2024" -> "S24", "Fall 2024" -> "F24")
function formatPledgeClass(pledgeClass: string): string {
  const regex = /(Spring|Fall)\s+(\d{4})/;
  const match = regex.exec(pledgeClass);
  if (match) {
    const season = match[1].charAt(0); // S or F
    const year = match[2].slice(-2); // Last 2 digits
    return `${season}${year}`;
  }
  return pledgeClass;
}

export default function ExecutiveBoard() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          title="Executive Board"
          subtitle="Meet the leaders driving Alpha Zeta forward"
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          {execMembers.map((member) => (
            <div
              key={member.id}
              className="flex gap-4 p-4 bg-primary-light rounded-xl border border-white/10 hover:border-accent/30 transition-all duration-300"
            >
              {/* Photo on the left */}
              <div className="relative w-24 h-24 shrink-0 overflow-hidden rounded-lg">
                <Image
                  src={member.photo}
                  alt={member.name}
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>

              {/* Text content on the right */}
              <div className="flex flex-col justify-center flex-1">
                <h3 className="font-display text-xl font-bold text-secondary-light mb-1">
                  {member.name}
                </h3>
                <p className="text-secondary/70 text-sm">
                  {member.role}
                  {member.pledgeClass &&
                    `, ${formatPledgeClass(member.pledgeClass)}`}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button href="/members" variant="outline">
            View All Members
          </Button>
        </div>
      </div>
    </section>
  );
}
