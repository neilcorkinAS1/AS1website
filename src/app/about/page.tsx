import { Highlight } from "@/components/ui/highlight"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AboutPage() {
  return (
    <main className="container py-24">
      <div className="max-w-3xl mx-auto">
        <div className="prose prose-lg mx-auto">
          <p className="text-xl">
            <span className="font-bold">AS1 Growth Partners</span> is a <Highlight>private multi-family investment office</Highlight> based in Sydney, Australia.
          </p>

          <p className="mt-6">
            We specialise in <Highlight>growth-stage technology investments</Highlight> across both private and public markets. Our capital is long-term, our structure is evergreen, and our focus is enduring value.
          </p>

          <p className="mt-6">
            We are <Highlight>more than investors — we are partners</Highlight>. Our team brings a blend of operating experience, investment insight, and a hands-on mindset to everything we do. From building and scaling businesses ourselves to backing founders with bold visions, we understand what it takes to create something meaningful — and lasting.
          </p>

          <p className="mt-6">
            Beyond investment, we also provide <Highlight>wealth management and portfolio administration services</Highlight> for our internal stakeholders, helping them steward capital across generations with purpose and discipline.
          </p>

          <div className="flex justify-center mt-12">
            <Button asChild size="lg">
              <Link href="/approach">Our Approach</Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
} 