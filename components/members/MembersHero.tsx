export default function MembersHero() {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent-dark/10 via-primary to-primary" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-wide text-secondary-light mb-6">
          MEET OUR MEMBERS
        </h1>
        <p className="text-xl text-secondary/60 max-w-2xl mx-auto">
          Meet the talented individuals who make up the Alpha Zeta family
        </p>
      </div>
    </section>
  )
}
