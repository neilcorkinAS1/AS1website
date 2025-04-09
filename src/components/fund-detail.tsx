'use client'

import { Sheet, SheetContent, SheetTitle } from "@/components/ui/sheet"
import type { Fund } from "@/types/portfolio"
import Image from "next/image"
import Link from "next/link"

interface FundDetailProps {
  fund: Fund | null
  onClose: () => void
}

export function FundDetail({ fund, onClose }: FundDetailProps) {
  return (
    <Sheet open={!!fund} onOpenChange={onClose}>
      <SheetContent className="sm:max-w-xl">
        {fund && (
          <div className="space-y-8">
            <SheetTitle className="sr-only">
              {fund.name} Details
            </SheetTitle>
            
            <div className="relative w-full h-[100px] sm:h-[150px]">
              <Image
                src={fund.logo}
                alt={`${fund.name} logo`}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 400px"
                priority
              />
            </div>

            <p className="text-muted-foreground leading-relaxed">
              {fund.description}
            </p>

            <div className="space-y-2">
              <div className="text-sm">
                <span className="text-muted-foreground">Invested: </span>
                {fund.invested}
              </div>
              
              {fund.aum && (
                <div className="text-sm">
                  <span className="text-muted-foreground">AUM: </span>
                  {fund.aum}
                </div>
              )}
              
              {fund.strategy && (
                <div className="text-sm">
                  <span className="text-muted-foreground">Strategy: </span>
                  {fund.strategy}
                </div>
              )}
              
              {fund.geographicFocus && (
                <div className="text-sm">
                  <span className="text-muted-foreground">Geographic Focus: </span>
                  {fund.geographicFocus}
                </div>
              )}
            </div>

            <div className="pt-4">
              {fund.website && (
                <Link 
                  href={fund.website}
                  target="_blank"
                  className="text-sm text-primary hover:underline"
                >
                  Visit website →
                </Link>
              )}
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  )
} 