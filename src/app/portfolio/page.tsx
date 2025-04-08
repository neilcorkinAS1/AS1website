'use client'

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { PortfolioDetail } from "@/components/portfolio-detail"
import type { PortfolioCompany } from "@/types/portfolio"
import Image from "next/image"
import { portfolioCompanies } from "@/data/portfolio-companies"
import { Badge } from "@/components/ui/badge"

export default function PortfolioPage() {
  const [selectedCompany, setSelectedCompany] = useState<PortfolioCompany | null>(null)

  return (
    <main className="container py-24">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {portfolioCompanies.map((company) => (
          <Card 
            key={company.id}
            className="p-8 hover:bg-muted/50 cursor-pointer transition-colors relative"
            onClick={() => setSelectedCompany(company)}
          >
            {company.isExited && (
              <div className="absolute top-4 right-4">
                <Badge variant="secondary">Exited</Badge>
              </div>
            )}
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