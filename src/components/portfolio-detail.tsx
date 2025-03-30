'use client'

import { Sheet, SheetContent } from "@/components/ui/sheet"
import { PortfolioCompany } from "@/types/portfolio"
import Image from "next/image"
import Link from "next/link"

interface PortfolioDetailProps {
  company: PortfolioCompany | null
  onClose: () => void
}

export function PortfolioDetail({ company, onClose }: PortfolioDetailProps) {
  return (
    <Sheet open={!!company} onOpenChange={onClose}>
      <SheetContent>
        {company && (
          <div className="space-y-6">
            <div className="relative h-12 w-48">
              <Image
                src={company.logo}
                alt={`${company.name} logo`}
                fill
                className="object-contain"
              />
            </div>
            
            <p className="text-muted-foreground leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>

            <div className="text-sm">
              <span className="text-muted-foreground">First partnered: </span>
              {company.partnered}
            </div>

            <div className="pt-4">
              <Link 
                href="https://example.com" 
                target="_blank"
                className="text-sm text-primary hover:underline"
              >
                Visit website →
              </Link>
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  )
} 