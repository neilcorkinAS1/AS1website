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

export interface Fund {
  id: string
  name: string
  logo: string
  description: string
  founded?: string
  invested: string
  website?: string
  aum?: string
  strategy?: string
  geographicFocus?: string
} 