'use client'

import { Sheet, SheetContent, SheetTitle } from "@/components/ui/sheet"
import { PortfolioCompany } from "@/types/portfolio"
import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"

interface PortfolioDetailProps {
  company: PortfolioCompany | null
  onClose: () => void
}

export function PortfolioDetail({ company, onClose }: PortfolioDetailProps) {
  return (
    <Sheet open={!!company} onOpenChange={onClose}>
      <SheetContent className="sm:max-w-xl">
        {company && (
          <div className="space-y-8">
            <SheetTitle className="sr-only">
              {company.name} Details
            </SheetTitle>
            
            <div className="relative w-full h-[100px] sm:h-[150px]">
              <Image
                src={company.logo}
                alt={`${company.name} logo`}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 400px"
                priority
              />
            </div>
            
            {company.isExited && (
              <div className="flex items-center gap-2">
                <Badge variant="secondary">Exited</Badge>
                {company.exitDetails && (
                  <span className="text-sm text-muted-foreground">{company.exitDetails}</span>
                )}
              </div>
            )}

            <p className="text-muted-foreground leading-relaxed">
              {company.description}
            </p>

            <div className="space-y-2">
              <div className="text-sm">
                <span className="text-muted-foreground">Founded: </span>
                {company.founded}
              </div>
              
              <div className="text-sm">
                <span className="text-muted-foreground">First partnered: </span>
                {company.partnered}
              </div>
            </div>

            <div className="pt-4">
              {company.website && (
                <Link 
                  href={company.website}
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