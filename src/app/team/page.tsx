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
            <h3>Conrad Yiu</h3>
            <p className="text-gray-600 mt-1">Partner</p>
            <p className="mt-4">
            Conrad is an experienced business builder and investor having worked with many high growth companies over the last 25 years.
            </p>
            <p className="mt-4">
            Having spent the early part of his career with Arthur Andersen & Co, News Corp, and then running the finance function at Temple & Webster, Conrad then founded his own investment company, ArdenPoint, and co-founded Temple & Webster where he has taken the business from inception to a ~$1bn market cap company listed on the ASX, where he remains a Non-Executive Director.
            </p>
            <p className="mt-4">
            Conrad has managed over 30 investments across the technology, e-commerce and media sectors and has built an extensive network of investors and founders across the Australia and the UK.
            </p>
          </div>

          <div className="mt-12">
            <h3>Neil Corkin</h3>
            <p className="text-gray-600 mt-1">Partner, CFO</p>
            <p className="mt-4">
            Neil is a strategic CFO with 20 years of experience across commercial finance, M&A, strategy, investor relations and has held numerous Board positions during his tenure with News Corp.              
            </p>
            <p className="mt-4">
            Neil started his career with BSkyB in the UK before moving to Australia in 2007 where he worked with Conrad in the Corporate Development team at News Corp. 
            </p>
            <p className="mt-4">
            Prior to AS1 Growth Partners Neil was CFO at Fox Sports Australia for 6 years.
            </p>
          </div>

          <h2 className="mt-12">Investment Team</h2>
          
          <div className="mt-6">
            <h3>Joe Patrick</h3>
            <p className="mt-4">
            Joe is a [X] at AS1 Growth Partners. Before joining AS1, Joe founded Astral Ventures, a technology-focused corporate advisory firm providing transaction execution support on milestone transactions for technology companies and venture capital funds. Joe started his career in investment banking at J.P. Morgan, where he was involved with numerous Australian and cross-border M&A and IPO transactions. He is an inaugural Startmate Fellow and a graduate of the Australian Institute of Company Directors. Joe holds a Bachelor of Laws and Commerce from Bond University.
            </p>
            
          </div>

          <h2 className="mt-12">Finance & Legal</h2>
          
          <div className="mt-6">
            <p>
              Our external advisors:
            </p>
            <ul className="mt-4">
              <li>HLB Mann Judd (Audit)</li>
              <li>Alvarez & Marsal (Tax Advisory)</li>
              <li>King Irving (Legal - Financial Services)</li>
              <li>Addisons (Legal - Commercial)</li>
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