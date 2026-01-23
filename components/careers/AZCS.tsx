import Image from "next/image";
import mentorsData from "@/data/mentors.json";

const benefits = [
  {
    title: "Fundamentals of Coding",
    description:
      "Master the foundational concepts of computer science, including algorithms, data structures, and problem-solving techniques.",
  },
  {
    title: "Leetcode and Interview Prep",
    description:
      "Prepare for coding interviews with hands-on practice on Leetcode, focusing on algorithmic challenges, coding problems, and whiteboard exercises.",
  },
  {
    title: "Recruiting",
    description:
      "Get detailed insights into recruiting strategies, building a strong resume, networking, and landing top technical roles in the tech industry.",
  },
  {
    title: "Practical Research in ML",
    description:
      "Engage in comprehensive machine learning research and complete a paper by the end of the semester to enhance your resume and technical portfolio.",
  },
  {
    title: "Building Your Own Project",
    description:
      "Gain practical experience by working on your own projects, a crucial step for success in the tech industry.",
  },
];

const mentors = mentorsData.filter((mentor) => mentor.azgroup === "AZCS");

export default function AZCS() {
  return (
    <section className="py-16 md:py-24 bg-primary-light/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - What You Get */}
          <div className="space-y-8">
            {/* Badge and Title */}
            <div className="space-y-4">
              <span className="inline-block px-4 py-1.5 bg-accent/20 text-accent rounded-full text-sm font-medium">
                AZ CS
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-secondary-light">
                Computer Science
              </h2>
            </div>

            {/* Benefits List */}
            <div className="space-y-6">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="flex gap-4">
                  <div className="shrink-0 w-8 h-8 flex items-center justify-center bg-accent/10 rounded-lg text-accent">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-display text-lg font-semibold text-secondary-light mb-1">
                      {benefit.title}
                    </h4>
                    <p className="text-secondary/60">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - People Teaching It */}
          <div className="space-y-6">
            {mentors.map((mentor) => (
              <div
                key={mentor.id}
                className="bg-white rounded-xl p-6 shadow-sm border border-secondary/10"
              >
                <div className="flex gap-4">
                  {/* Profile Picture */}
                  <div className="relative w-20 h-20 shrink-0 rounded-full overflow-hidden">
                    <Image
                      src={mentor.picture}
                      alt={mentor.name}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  </div>

                  {/* Mentor Info */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display text-lg font-semibold text-secondary-light mb-1">
                      {mentor.name}
                    </h3>
                    <p className="text-secondary/60 text-sm mb-3">
                      Computer Science Mentor, Alpha Zeta
                    </p>
                    <p className="text-secondary/70 text-sm leading-relaxed mb-3">
                      {mentor.description}
                    </p>
                    {mentor.linkedin && (
                      <a
                        href={mentor.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-accent hover:text-accent/80 text-sm transition-colors"
                      >
                        <svg
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                        LinkedIn
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
