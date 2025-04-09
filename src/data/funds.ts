import { Fund } from "@/types/portfolio"

export const funds: Fund[] = [
  {
    id: "blackbird",
    name: "Blackbird Ventures",
    logo: "/logos/blackbird-logo.png",
    description: "Blackbird Ventures is one of Australia's largest venture capital firms, focused on backing ambitious founders building technology companies that can scale globally.",
    invested: "2020 and 2022",
    website: "https://blackbird.vc",
    aum: "A$7B+",
    strategy: "Early-stage venture capital",
    geographicFocus: "Australia & New Zealand"
  },
  {
    id: "antler",
    name: "Antler",
    logo: "/logos/antler-logo.png",
    description: "Antler is a global early-stage venture capital firm and start-up generator that helps founders build and invest in startups from day zero, with presence in 30 locations worldwide.",
    invested: "2020",
    website: "https://antler.co",
    aum: "$1bn+",
    strategy: "Early to growth stage venture capital",
    geographicFocus: "Global"
  },
  {
    id: "januarycapital",
    name: "January Capital",
    logo: "/logos/januarycapital-logo.png",
    description: "January Capital is a leading venture capital firm based in Singapore, backing ambitious tech founders across Asia-Pacific with a focus on software, fintech, and e-commerce. With over 60 portfolio companies, it partners early and scales with conviction.",
    invested: "2021",
    website: "https://january.capital",
    aum: "$300m+",
    strategy: "Early to growth stage venture capital",
    geographicFocus: "Southeast Asia and Australia"
  },
  {
    id: "genesiscapital",
    name: "Genesis Capital",
    logo: "/logos/genesiscapital-logo.png",
    description: "Genesis Capital targets mid-market healthcare businesses in Australia and New Zealand, typically with enterprise values between $50 million and $200 million. They focus on companies with strong growth potential and the opportunity to become leaders in their secto.",
    invested: "2021",
    website: "https://www.genesiscapital.com.au",
    aum: "A$350m+",
    strategy: "Small to lower mid-cap private equity",
    geographicFocus: "Australia and New Zealand"
  },
  {
    id: "tigerglobal",
    name: "Tiger Global",
    logo: "/logos/tigerglobal-logo.png",
    description: "Tiger Global is a U.S.-based investment firm known for its aggressive and global approach to growth investing across both public and private markets. It has backed some of the world's most successful tech companies, including Meta, Stripe, and ByteDance, focusing on internet, software, and fintech businesses.",
    invested: "2021",
    website: "https://www.tigerglobal.com",
    aum: "$50bn+",
    strategy: "All stages, private and public",
    geographicFocus: "Global"
  }
  
]

export function getFundById(id: string): Fund | undefined {
  return funds.find(fund => fund.id === id)
} 