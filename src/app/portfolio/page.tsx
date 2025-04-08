import { portfolioCompanies } from "@/data/portfolio-companies"
import { PortfolioGrid } from "@/components/portfolio-grid"

export default function PortfolioPage() {
  return (
    <main className="container py-24">
      <PortfolioGrid companies={portfolioCompanies} />
    </main>
  )
} 