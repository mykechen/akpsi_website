import Button from '@/components/ui/Button'

export default function RecruitmentHero() {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center pt-20">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent-dark/20 via-primary to-primary" />

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center py-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-accent text-sm font-medium mb-6">
          <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
          Applications Open
        </div>

        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-wide text-secondary-light mb-6">
          Spring 2026 Rush
        </h1>

        <p className="text-xl text-secondary/70 max-w-2xl mx-auto mb-4">
          Join one of USC&apos;s most distinguished professional business fraternities
        </p>

        <p className="text-secondary/50 mb-10">
          Application Deadline: January 14, 2026 at 11:59 PM
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            href="https://forms.google.com"
            variant="primary"
            size="lg"
          >
            Apply Now
          </Button>
          <Button href="#timeline" variant="outline" size="lg">
            View Rush Events
          </Button>
        </div>
      </div>
    </section>
  )
}
