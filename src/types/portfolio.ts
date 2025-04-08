export type Category = 'Consumer' | 'Edtech' | 'Enterprise'

export interface PortfolioCompany {
  id: string
  name: string
  logo: string
  description: string
  founded: string
  partnered: string
  website?: string
  isExited?: boolean
  exitDetails?: string
} 