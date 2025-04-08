import { PortfolioGrid } from "@/components/portfolio-grid"
import { getPortfolioCompanies } from "@/lib/portfolio"

export default async function PortfolioPage() {
  const companies = await getPortfolioCompanies()
  
  return (
    <main className="container py-24">
      <PortfolioGrid companies={companies} />
    </main>
  )
} 