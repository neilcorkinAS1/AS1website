import { SectionContainer } from "@/components/ui/section-container"
import { Button } from "@/components/ui/button"
import Link from "next/link"

// Replace with actual insights
const insights = [
  {
    title: "The Future of Growth-Stage Tech Investments",
    excerpt: "Our perspective on the evolving landscape of technology investments and what it means for founders.",
    date: "March 2024",
    slug: "future-of-growth-stage-tech"
  },
  {
    title: "Building Sustainable Growth in Tech Companies",
    excerpt: "Key lessons from our portfolio companies on achieving sustainable growth while maintaining profitability.",
    date: "February 2024",
    slug: "sustainable-growth-tech"
  },
  {
    title: "The Partnership-First Approach to Investing",
    excerpt: "Why we believe in taking an active role in supporting our portfolio companies beyond just capital.",
    date: "January 2024",
    slug: "partnership-first-approach"
  }
]

export function InsightsSection() {
  return (
    <SectionContainer id="insights" className="bg-background">
      <div className="space-y-16">
        <div className="flex justify-between items-end">
          <div className="max-w-3xl">
            <h2 className="font-tiempos text-4xl text-[#1C506F] mb-6">Latest Insights</h2>
            <p className="font-inter text-lg text-[#4B5563]">
              Our thoughts on technology, investing, and building enduring companies.
            </p>
          </div>
          <Button
            asChild
            variant="secondary"
            className="text-[#20A194] hover:text-[#20A194]/90 font-inter"
          >
            <Link href="/insights">View All →</Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {insights.map((insight) => (
            <Link 
              key={insight.slug}
              href={`/insights/${insight.slug}`}
              className="group space-y-4"
            >
              <div className="space-y-2">
                <p className="font-inter text-sm text-[#4B5563]">{insight.date}</p>
                <h3 className="font-inter text-xl font-semibold text-[#1C506F] group-hover:text-[#20A194] transition-colors">
                  {insight.title}
                </h3>
              </div>
              <p className="font-inter text-[#4B5563]">
                {insight.excerpt}
              </p>
              <p className="font-inter text-[#20A194] group-hover:underline">
                Read More →
              </p>
            </Link>
          ))}
        </div>
      </div>
    </SectionContainer>
  )
} 