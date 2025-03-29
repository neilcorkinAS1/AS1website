import { Highlight } from "@/components/ui/highlight"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function TeamPage() {
  return (
    <main className="container py-24">
      <div className="max-w-3xl mx-auto">
        <div className="prose prose-lg mx-auto">
          <p>
            Our team combines deep investment experience with operational expertise. 
            We bring together professionals with backgrounds in <Highlight>private equity</Highlight>, 
            <Highlight>public markets</Highlight>, and <Highlight>company building</Highlight>.
          </p>

          <h2 className="mt-12">Leadership</h2>
          
          <div className="mt-6">
            <h3>John Smith</h3>
            <p className="text-gray-600 mt-1">Founder & Managing Partner</p>
            <p className="mt-4">
              Previously led growth investments at [Prior Firm]. Two decades of experience 
              backing and scaling technology companies across multiple market cycles. Board 
              member at [Company A], [Company B], and [Company C].
            </p>
          </div>

          <div className="mt-12">
            <h3>Jane Doe</h3>
            <p className="text-gray-600 mt-1">Partner, Listed Markets</p>
            <p className="mt-4">
              15+ years of public markets experience. Previously portfolio manager at 
              [Investment Firm]. Deep expertise in software and marketplace businesses. 
              Regular speaker at industry conferences on long-term investing.
            </p>
          </div>

          <h2 className="mt-12">Investment Team</h2>
          
          <div className="mt-6">
            <h3>Investment Professionals</h3>
            <p className="mt-4">
              Our investment team brings together diverse perspectives and complementary skill sets:
            </p>
            <ul className="mt-4">
              <li>Private markets professionals with operating and investing experience</li>
              <li>Public markets analysts with deep sector expertise</li>
              <li>Technology specialists focused on product and engineering</li>
              <li>Operations experts supporting portfolio companies</li>
            </ul>
          </div>

          <h2 className="mt-12">Operations & Support</h2>
          
          <div className="mt-6">
            <p>
              Our operations team provides comprehensive support across:
            </p>
            <ul className="mt-4">
              <li>Finance and Fund Administration</li>
              <li>Legal and Compliance</li>
              <li>Investor Relations</li>
              <li>Portfolio Support</li>
            </ul>
          </div>

          <div className="flex justify-center mt-12">
            <Button asChild size="lg">
              <Link href="/portfolio">Our Portfolio</Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
} 