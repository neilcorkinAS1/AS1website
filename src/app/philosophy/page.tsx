import { Highlight } from "@/components/ui/highlight"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function PhilosophyPage() {
  return (
    <main className="container py-24">
      <div className="max-w-3xl mx-auto">
        <div className="prose prose-lg mx-auto">
          <p>
            Our investment philosophy is grounded in finding and supporting exceptional companies 
            across both private and public markets.
          </p>

          <h2>Private Markets: Backing Companies at the Inflection Point</h2>
          <p className="mt-6">
            In private markets, we invest with conviction at the point where companies are poised to scale. 
            These are <Highlight>moments of inflection</Highlight> — when product-market fit has been proven, 
            the team is strong, and the market opportunity is large, but the next phase of growth still needs 
            to be unlocked — for example, entering a new market.
          </p>

          <Accordion type="single" collapsible className="mt-6 w-full">
            <AccordionItem value="what-we-look-for">
              <AccordionTrigger className="text-lg font-medium">What We Look For</AccordionTrigger>
              <AccordionContent className="text-lg">
                <ul className="list-disc pl-4">
                  <li className="mt-2">A <Highlight>large and growing addressable market</Highlight>, with potential for international expansion</li>
                  <li className="mt-2"><Highlight>Clear and validated product-market fit</Highlight>, not just in metrics, but in customer retention</li>
                  <li className="mt-2"><Highlight>Exceptional founders and leadership teams</Highlight>, with the clarity and ambition to build category-defining businesses</li>
                  <li className="mt-2">A <Highlight>defensible edge</Highlight> — whether through product, distribution, data, or execution</li>
                  <li className="mt-2"><Highlight>Attractive, sustainable margins</Highlight>, with a credible path to operating leverage</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <p className="mt-6">
            We are not a venture capital firm chasing power-law returns. Every company we back matters deeply to us. 
            We take a <Highlight>high-conviction approach</Highlight>, investing in a focused set of businesses we believe 
            can create enduring value. That means fewer bets, more time, and real skin in the game.
          </p>

          <p className="mt-6">
            We're <Highlight>active partners</Highlight> — not just board members, but thought partners. Whether it's 
            shaping strategy, unlocking offshore growth, or hiring the next executive, we work side-by-side with 
            founders to help turn inflection into acceleration.
          </p>

          <h2 className="mt-12">Listed Markets: Investing in Enduring Companies</h2>
          <p className="mt-6">
            In the listed space — where businesses are typically more mature — we take a 
            disciplined, <Highlight>analytical approach, grounded in fundamentals</Highlight> but guided by long-term 
            vision. We look for enduring companies which have the potential to compound in value 
            over many years.
          </p>

          <Accordion type="single" collapsible className="mt-6 w-full">
            <AccordionItem value="enduring-businesses">
              <AccordionTrigger className="text-lg font-medium">What We Look For in Enduring Businesses</AccordionTrigger>
              <AccordionContent className="text-lg">
                <p className="mb-4">We look for businesses that possess one or more structural advantages that can be maintained over time. These may include:</p>
                <ul className="list-disc pl-4">
                  <li className="mt-2"><Highlight>Network effects</Highlight>, where the value of the product increases with adoption</li>
                  <li className="mt-2"><Highlight>Scale economies</Highlight>, where unit economics improve as the business grows</li>
                  <li className="mt-2"><Highlight>Brand loyalty and customer captivity</Highlight>, driven by trust, habit, or switching costs</li>
                  <li className="mt-2"><Highlight>Proprietary technology or intellectual property</Highlight> that's hard to replicate</li>
                  <li className="mt-2"><Highlight>Efficient scale</Highlight>, where a niche market is dominated by a few players</li>
                  <li className="mt-2"><Highlight>Process power</Highlight>, where superior operations drive sustained performance</li>
                  <li className="mt-2"><Highlight>Counter-positioning</Highlight>, where incumbents struggle to respond to a new business model</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <p className="mt-6">
            We're particularly drawn to <Highlight>founder-led or founder-inspired businesses</Highlight> with a clear 
            mission, a defensible moat, and the discipline to avoid short-term distractions. We aim 
            to identify companies where there's a disconnect between our view of intrinsic value 
            and the current market price — and we're willing to be patient while that gap closes.
          </p>

          <p className="mt-6">
            Our goal is not to trade, but to <Highlight>own great businesses</Highlight> — with care, conviction, and a 
            long-term mindset.
          </p>

          <div className="flex justify-center mt-12">
            <Button asChild size="lg">
              <Link href="/team">Our Team</Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
} 