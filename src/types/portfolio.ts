export type Category = 'Consumer' | 'Edtech' | 'Enterprise'

export interface PortfolioCompany {
  id: string
  name: string
  logo: string
  description: string
  categories: Category[]
  founded: string
  partnered: string
  website?: string
  highlights: string[]
  isExited?: boolean
  exitDetails?: string
} 