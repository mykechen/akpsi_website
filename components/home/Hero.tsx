import Button from "@/components/ui/Button";
import CloudBackground from "@/components/ui/CloudBackground";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary/95 to-primary" />

      {/* Cloud animations */}
      {/* <CloudBackground /> */}

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <h1 className="font-display text-[6rem] sm:text-[7.5rem] md:text-[9rem] lg:text-[12rem] tracking-wide text-secondary-light mb-6">
          ALPHA ZETA
        </h1>
        <p className="text-2xl md:text-3xl font-semibold text-secondary/70 max-w-2xl mx-auto mb-4">
          USC's Premier Business Society
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href="/recruitment" variant="primary" size="lg">
            Apply for Spring 2026
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
