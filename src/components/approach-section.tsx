import { SectionContainer } from "./section-container"

const approaches = [
  {
    title: "Long-term Partnerships",
    description: "Hands-on, long-term partnerships with founders and teams, providing support across strategy, international expansion, IPO readiness, and hiring."
  },
  {
    title: "Flexible Timeline",
    description: "Evergreen structure with no forced timelines, allowing us to focus on sustainable growth and long-term value creation."
  },
  {
    title: "Private Markets",
    description: "We invest early at inflection points, backing exceptional founders with clarity and grit, focusing on deep customer knowledge and product-market fit."
  },
  {
    title: "Listed Markets",
    description: "Analytical, fundamentals-driven, long-term view focusing on enduring, compounding companies. We prefer founder-led, mission-driven businesses."
  }
]

export function ApproachSection() {
  return (
    <SectionContainer id="approach" className="bg-white">
      <div className="space-y-16">
        <div className="max-w-3xl">
          <h2 className="font-tiempos text-4xl text-[#1C506F] mb-6">Our Approach</h2>
          <p className="font-inter text-lg text-[#4B5563]">
            We take an active, partnership-first approach to growth-stage technology investments 
            in both private & public markets.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {approaches.map((approach) => (
            <div key={approach.title} className="space-y-4">
              <h3 className="font-inter text-xl font-semibold text-[#1C506F]">
                {approach.title}
              </h3>
              <p className="font-inter text-[#4B5563]">
                {approach.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </SectionContainer>
  )
} 