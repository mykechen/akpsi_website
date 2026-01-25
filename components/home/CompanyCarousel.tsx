import Image from "next/image";
import companies from "@/data/companies.json";
import type { Company } from "@/types";

const companyData: Company[] = companies;

export default function CompanyCarousel() {
  return (
    <section className="py-16 md:py-24 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 mb-8">
        <h2 className="text-center font-body text-3xl md:text-4xl font-bold tracking-wide text-secondary-light mb-6">
          WHERE WE ARE NOW
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {companyData.map((company) => (
            <div
              key={company.id}
              className="flex items-center justify-center h-20"
            >
              <Image
                src={company.logo}
                alt={company.name}
                width={120}
                height={40}
                className="h-10 w-auto object-contain object-center"
                unoptimized
              />
            </div>
          ))}
        </div>
        <p className="text-center text-secondary/50 text-sm mt-8">
          And more...
        </p>
      </div>
    </section>
  );
}
