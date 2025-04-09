import { FundsGrid } from "@/components/funds-grid"
import { funds } from "@/data/funds"

export default function FundOfFundsPage() {
  return (
    <main className="container py-24">
      <FundsGrid funds={funds} />
    </main>
  )
} 