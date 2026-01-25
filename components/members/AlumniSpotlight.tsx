import Image from "next/image";
import members from "@/data/members.json";
import type { Member } from "@/types";
import SectionHeader from "@/components/ui/SectionHeader";

const membersData: Member[] = members;
const alumni = membersData.filter((member) => member.isAlumni);

export default function AlumniSpotlight() {
  if (alumni.length === 0) return null;

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          title="Alumni Spotlight"
          subtitle="Brothers who continue to inspire and support our chapter"
        />

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {alumni.map((member) => (
            <div key={member.id} className="group text-center">
              <div className="relative w-32 h-32 mx-auto overflow-hidden rounded-full border-2 border-secondary/10 transition-all duration-300 group-hover:border-accent/50">
                <Image
                  src={member.photo}
                  alt={member.name}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  unoptimized
                />
              </div>
              <div className="mt-4">
                <h3 className="font-body text-lg font-semibold text-secondary-light">
                  {member.name}
                </h3>
                <p className="text-secondary/60 text-sm mt-1">{member.major}</p>
                <p className="text-accent text-sm mt-1">{member.pledgeClass}</p>
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-secondary/50 hover:text-accent text-sm mt-2 transition-colors"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                    Connect
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
