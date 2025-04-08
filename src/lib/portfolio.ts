import { portfolioCompanies } from "@/data/portfolio-companies"
import { PortfolioCompany } from "@/types/portfolio"

export async function getPortfolioCompanies(): Promise<PortfolioCompany[]> {
  console.log('Loading portfolio companies:', portfolioCompanies)
  return portfolioCompanies
} 