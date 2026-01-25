import Button from "@/components/ui/Button";

export default function RecruitmentHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent-dark/20 via-primary to-primary" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-accent text-sm font-medium mb-6">
          <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
          Applications Open
        </div>

        <h1 className="font-display text-[3rem] sm:text-[3.5rem] md:text-[4rem] lg:text-[5rem] xl:text-[6rem] tracking-wide text-secondary-light whitespace-nowrap">
          JOIN ALPHA ZETA
        </h1>

        <p className="text-2xl md:text-3xl font-semibold text-secondary/70 max-w-2xl mx-auto mb-4">
          Spring 2026
        </p>

        <p className="text-lg text-secondary/50 mb-10">
          Application Deadline: January 14, 2026 at 11:59 PM
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href="https://forms.google.com" variant="primary" size="lg">
            Apply Now
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-secondary/40">
        <span className="text-sm uppercase tracking-widest">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-secondary/40 to-transparent" />
      </div>
    </section>
  );
}
