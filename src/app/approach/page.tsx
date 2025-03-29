import { Highlight } from "@/components/ui/highlight"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ApproachPage() {
  return (
    <main className="container py-24">
      <div className="max-w-3xl mx-auto">
        <div className="prose prose-lg mx-auto">
          <p className="lead">
            We are <Highlight>high conviction investors and business builders</Highlight> at heart, and prefer to work alongside 
            founders and companies with an active partnership & mentoring approach.
          </p>
          
          <p className="mt-6">
            We're happy to <Highlight>roll-up our sleeves</Highlight> and share our experience and insights across strategy & growth 
            initiatives, corporate development (IPO, M&A, capital-raising), Board & Management recruitment and 
            investor relations.
          </p>

          <p className="mt-6">
            Our <Highlight>growth mindset</Highlight> comes from hard-won lessons and experiences from taking companies from 
            concept to IPO (and beyond) and our senior executive experience across media, e-commerce and 
            software companies.
          </p>

          <p className="mt-6">
            We bring a <Highlight>deep and extensive network</Highlight> of co-founders, executives, advisers and like-minded 
            co-investors.
          </p>

          <p className="mt-6">
            Our <Highlight>capital base is evergreen</Highlight> so there are no fixed time horizons. We know it takes time 
            to build a world class company.
          </p>

          <div className="flex justify-center mt-12">
            <Button asChild size="lg">
              <Link href="/philosophy">Our Philosophy</Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
} 