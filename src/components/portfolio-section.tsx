import { SectionContainer } from "./section-container"

// Replace with actual portfolio companies
const portfolioCompanies = [
  {
    name: "Company 1",
    description: "Growth-stage technology company in fintech"
  },
  {
    name: "Company 2",
    description: "SaaS platform for enterprise solutions"
  },
  {
    name: "Company 3",
    description: "AI-powered analytics platform"
  }
]

export function PortfolioSection() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="space-y-16">
          <div className="prose">
            <h1>Portfolio</h1>
            <p className="text-lg text-neutral-600">
              We partner with exceptional founders building category-defining companies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {portfolioCompanies.map((company) => (
              <div 
                key={company.name} 
                className="group p-6 rounded-lg border border-border hover:border-primary transition-colors"
              >
                <div className="h-12 w-full mb-6 bg-neutral-100 rounded flex items-center justify-center">
                  <span className="text-sm text-neutral-400">Logo</span>
                </div>
                <h3 className="mb-2">
                  {company.name}
                </h3>
                <p className="text-neutral-600">
                  {company.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 