import SectionHeader from "@/components/ui/SectionHeader";

export default function WhatYouGet() {
  return (
    <section className="py-16 md:py-24 bg-primary-light/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-body text-3xl md:text-4xl font-bold tracking-wide text-secondary-light mb-6">
            WHAT ARE AZ GROUPS
          </h2>
          <p className="text-lg md:text-xl text-secondary/70 leading-relaxed">
            Every member joins one of four specialized career tracks based on
            their professional interests. Each track runs for 12 weeks per
            semester and includes weekly workshops, mock interviews, case
            practice, and 1-on-1 mentorship from members who've secured roles at
            top firms.
          </p>
        </div>
      </div>
    </section>
  );
}
