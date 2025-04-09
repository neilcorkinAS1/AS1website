'use client'

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { FundDetail } from "@/components/fund-detail"
import type { Fund } from "@/types/portfolio"
import Image from "next/image"

interface FundsGridProps {
  funds: Fund[]
}

export function FundsGrid({ funds }: FundsGridProps) {
  const [selectedFund, setSelectedFund] = useState<Fund | null>(null)

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {funds.map((fund) => (
          <Card 
            key={fund.id}
            className="p-8 hover:bg-muted/50 cursor-pointer transition-colors relative"
            onClick={() => setSelectedFund(fund)}
          >
            <div className="relative h-32 w-full">
              <Image
                src={fund.logo}
                alt={`${fund.name} logo`}
                fill
                className="object-contain"
                priority
              />
            </div>
          </Card>
        ))}
      </div>

      <FundDetail 
        fund={selectedFund}
        onClose={() => setSelectedFund(null)}
      />
    </>
  )
} 