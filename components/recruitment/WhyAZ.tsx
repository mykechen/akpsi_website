export default function WhyAZ() {
  const cards = [
    {
      id: '1',
      title: 'PROFESSIONAL DEVELOPMENT',
      description: 'Gain access to exclusive workshops, networking events, and mentorship opportunities that will accelerate your career growth and help you stand out in the competitive business world.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
    },
    {
      id: '2',
      title: 'LIFELONG BROTHERHOOD',
      description: 'Build meaningful relationships that extend far beyond your time at USC. Our tight-knit community supports you through every stage of your journey, from college to career and beyond.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      id: '3',
      title: 'EXCLUSIVE OPPORTUNITIES',
      description: 'Access to our extensive alumni network, company partnerships, and exclusive events that open doors to internships, jobs, and career opportunities you won\'t find anywhere else.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
    },
  ]

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-wide text-secondary-light mb-6">
            WHY ALPHA ZETA
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card) => (
            <div
              key={card.id}
              className="bg-white rounded-2xl p-8 text-center shadow-lg"
            >
              <div className="flex items-center justify-center mb-6 text-accent">
                {card.icon}
              </div>
              <h3 className="font-display text-xl font-bold uppercase tracking-wide text-secondary-light mb-4">
                {card.title}
              </h3>
              <p className="text-secondary/70 leading-relaxed text-sm">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
