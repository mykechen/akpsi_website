export default function MembersHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent-dark/10 via-primary to-primary" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <h1 className="font-display text-[5rem] sm:text-[6rem] md:text-[7rem] lg:text-[8rem] xl:text-[9rem] tracking-wide text-secondary-light mb-6 whitespace-nowrap">
          MEMBERS
        </h1>
        <p className="text-2xl md:text-3xl font-semibold text-secondary/60 max-w-2xl mx-auto">
          Meet the talented individuals who make up Alpha Zeta
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-secondary/40">
        <span className="text-sm uppercase tracking-widest">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-secondary/40 to-transparent" />
      </div>
    </section>
  );
}
