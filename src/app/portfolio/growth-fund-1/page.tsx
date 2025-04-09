import { PortfolioGrid } from "@/components/portfolio-grid"
import { getPortfolioCompanies } from "@/lib/portfolio"

export default async function GrowthFund1Page() {
  try {
    const companies = await getPortfolioCompanies()
    console.log('Companies loaded in page:', companies)
    
    if (!companies || companies.length === 0) {
      console.error('No companies data loaded')
      return (
        <main className="container py-24">
          <p>Error loading portfolio data</p>
        </main>
      )
    }
    
    return (
      <main className="container py-24">
        <PortfolioGrid companies={companies} />
      </main>
    )
  } catch (error) {
    console.error('Error loading portfolio:', error)
    return (
      <main className="container py-24">
        <p>Error loading portfolio data</p>
      </main>
    )
  }
} 