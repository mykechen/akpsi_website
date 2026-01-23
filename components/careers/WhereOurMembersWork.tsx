import Image from "next/image";
import companies from "@/data/companies.json";
import type { Company } from "@/types";
import SectionHeader from "@/components/ui/SectionHeader";

const companiesData: Company[] = companies;

export default function WhereOurMembersWork() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          title="Where Our Members Work"
          subtitle="Alpha Zeta alumni and members can be found at leading companies worldwide"
        />

        <div className="mt-16 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {companiesData.slice(0, 18).map((company) => (
            <div
              key={company.id}
              className="aspect-[2/1] flex items-center justify-center p-4 bg-primary-light border border-white/10 rounded-xl opacity-60 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-300"
            >
              <Image
                src={company.logo}
                alt={company.name}
                width={120}
                height={48}
                className="max-w-full max-h-full object-contain"
                unoptimized
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
