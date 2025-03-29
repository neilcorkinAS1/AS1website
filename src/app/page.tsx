import { Button } from "@/components/ui/button"
import Link from "next/link"
import { HeroSection } from "@/components/herosection"

const approachCards = [
  {
    title: "Operational Expertise",
    description: "Hands-on support from experienced operators who have built and scaled successful companies."
  },
  {
    title: "Long-term Partnership",
    description: "We take a patient approach to building enduring businesses, not quick exits."
  },
  {
    title: "Growth Focus",
    description: "Strategic guidance and capital to accelerate growth and capture market opportunities."
  }
]

export default function Home() {
  return (
    <>
      <HeroSection />

      <section className="section section-border">
        <div className="container">
          <div className="prose">
            <h2>Our Approach</h2>
            <p>
              We combine deep operational experience with a long-term investment horizon to help companies reach their full potential.
            </p>
          </div>
          <div className="card-grid">
            {approachCards.map((card) => (
              <div key={card.title} className="card">
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
