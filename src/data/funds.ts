import { Fund } from "@/types/portfolio"

export const funds: Fund[] = [
  {
    id: "blackbird",
    name: "Blackbird Ventures",
    logo: "/logos/blackbird-logo.png",
    description: "Blackbird Ventures is one of Australia's largest venture capital firms, focused on backing ambitious founders building technology companies that can scale globally.",
    invested: "2020",
    website: "https://blackbird.vc",
    aum: "$1B+",
    strategy: "Early-stage venture capital",
    geographicFocus: "Australia & New Zealand"
  },
  {
    id: "airtree",
    name: "AirTree Ventures",
    logo: "/logos/airtree-logo.png",
    description: "AirTree Ventures is one of Australia's largest venture capital firms, backing ambitious founders from day one through the entire journey.",
    invested: "2021",
    website: "https://airtree.vc",
    aum: "$800M+",
    strategy: "Early to growth stage venture capital",
    geographicFocus: "Australia & New Zealand"
  },
  {
    id: "squarepeg",
    name: "Square Peg Capital",
    logo: "/logos/squarepeg-logo.png",
    description: "Square Peg is a global technology investment firm focused on backing ambitious founders from seed to Series A and beyond.",
    invested: "2019",
    website: "https://squarepegcap.com",
    aum: "$1.5B+",
    strategy: "Multi-stage venture capital",
    geographicFocus: "Australia, Israel, Southeast Asia"
  },
  {
    id: "sequoia",
    name: "Sequoia Capital",
    logo: "/logos/sequoia-logo.png",
    description: "Sequoia Capital is a global venture capital firm that has backed some of the world's most innovative companies.",
    invested: "2022",
    website: "https://www.sequoiacap.com",
    aum: "$85B+",
    strategy: "Multi-stage venture capital",
    geographicFocus: "Global"
  },
  {
    id: "accel",
    name: "Accel",
    logo: "/logos/accel-logo.png",
    description: "Accel is a leading venture capital firm that has backed many of the world's most innovative companies.",
    invested: "2021",
    website: "https://www.accel.com",
    aum: "$3B+",
    strategy: "Early-stage venture capital",
    geographicFocus: "Global"
  },
  {
    id: "andreessen",
    name: "Andreessen Horowitz",
    logo: "/logos/a16z-logo.png",
    description: "Andreessen Horowitz (a16z) is a venture capital firm that backs bold entrepreneurs who move fast and think big.",
    invested: "2023",
    website: "https://a16z.com",
    aum: "$35B+",
    strategy: "Multi-stage venture capital",
    geographicFocus: "Global"
  }
]

export function getFundById(id: string): Fund | undefined {
  return funds.find(fund => fund.id === id)
} 