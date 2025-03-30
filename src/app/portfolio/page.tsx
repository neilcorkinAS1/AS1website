'use client'

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { PortfolioDetail } from "@/components/portfolio-detail"
import type { PortfolioCompany, Category } from "@/types/portfolio"
import Image from "next/image"

// Placeholder companies array - you can replace with actual data
const portfolioCompanies: PortfolioCompany[] = Array.from({ length: 12 }, (_, i) => ({
  id: `company-${i + 1}`,
  name: `Company ${i + 1}`,
  logo: "/placeholder-logo.png", // Replace with actual logo paths
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  categories: ["Consumer" as Category],
  founded: "2024",
  partnered: "2024",
  highlights: ["Test highlight"]
}))

export default function PortfolioPage() {
  const [selectedCompany, setSelectedCompany] = useState<PortfolioCompany | null>(null)

  return (
    <main className="container py-24">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {portfolioCompanies.map((company) => (
          <Card 
            key={company.id}
            className="p-8 hover:bg-muted/50 cursor-pointer transition-colors"
            onClick={() => setSelectedCompany(company)}
          >
            <div className="relative h-32 w-full">
              <Image
                src={company.logo}
                alt={`${company.name} logo`}
                fill
                className="object-contain"
              />
            </div>
          </Card>
        ))}
      </div>

      <PortfolioDetail 
        company={selectedCompany}
        onClose={() => setSelectedCompany(null)}
      />
    </main>
  )
} 