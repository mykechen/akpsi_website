export default function CareersHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <img
        src="/misc/careers-bg.jpeg"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark overlay for text legibility */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <h1 className="font-display text-[3.5rem] sm:text-[4rem] md:text-[5rem] lg:text-[6rem] xl:text-[7rem] tracking-wide text-white mb-6 whitespace-nowrap">
          CAREER DEVELOPMENT
        </h1>
        <p className="text-2xl md:text-3xl font-semibold text-white/70 max-w-2xl mx-auto">
          Investment Banking • Consulting • Tech & PM • Marketing
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40">
        <span className="text-sm uppercase tracking-widest">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent" />
      </div>
    </section>
  );
}
