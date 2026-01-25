export default function Eligibility() {
  const cards = [
    {
      id: "1",
      text: "FRESHMAN-JUNIOR STANDING",
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M12 14l9-5-9-5-9 5 9 5z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M12 14v9m-6.824-2.998l6.824 2.998 6.824-2.998M12 14l-6.824-2.998M12 14l6.824-2.998"
          />
        </svg>
      ),
    },
    {
      id: "2",
      text: "3.0 GPA+",
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <circle cx="12" cy="12" r="10" strokeWidth={1.5} />
          <circle cx="12" cy="12" r="6" strokeWidth={1.5} />
          <circle cx="12" cy="12" r="2" strokeWidth={1.5} />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M12 2v4M12 18v4M2 12h4M18 12h4"
          />
        </svg>
      ),
    },
    {
      id: "3",
      text: "All Majors Welcome",
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="font-body text-3xl md:text-4xl font-bold tracking-wide text-secondary-light mb-6">
            ELIGIBILITY REQUIREMENTS
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card) => (
            <div
              key={card.id}
              className="bg-gray-100 rounded-xl p-8 text-center flex flex-col items-center justify-center"
            >
              <div className="flex items-center justify-center mb-6 text-white">
                {card.icon}
              </div>
              <h3 className="font-body text-base font-bold uppercase tracking-wide text-secondary-light">
                {card.text}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
