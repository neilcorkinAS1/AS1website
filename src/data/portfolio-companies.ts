import { PortfolioCompany } from "@/types/portfolio"

export const portfolioCompanies: PortfolioCompany[] = [
  {
    id: "hometime",
    name: "Hometime",
    logo: "/logos/hometime-logo.png",
    description: "Hometime is a leading Australian prop-tech company solving short-term rental (STR) management at scale. Their management platform pairs the industrys top hosting partners with world class technology to deliver an ultra-local and highly personalised five-star experience to both our homeowners and guests.",
    founded: "2016",
    partnered: "2019",
    website: "https://www.hometime.io"
  },

  {
    id: "fluentcommerce",
    name: "Fluent Commerce",
    logo: "/logos/fluentcommerce-logo.png",
    description: "Fluent Commerce operates a scalable cloud platform that removes the boundaries between the online and in-store experience of shopping. The distributed order management platform integrates with existing e-commerce technology to enable click and collect, ship from store, omnichannel returns, fulfillment management as well as other advanced offerings.",
    founded: "2013",
    partnered: "2019",
    website: "https://www.fluentcommerce.com"
  },

  {
    id: "access4",
    name: "Access4",
    logo: "/logos/access4-logo.png",
    description: "Access4 is a leader in cloud communications enablement. Through its proprietary platform, SASBOSS, Access4 empowers managed service providers to deliver intelligent unified communications services to its customers whilst streamlining their operations through automation.",
    founded: "2016",
    partnered: "2019",
    website: "https://www.access4.com"
  },

  {
    id: "fiscalnote",
    name: "FiscalNote",
    logo: "/logos/fiscalnote-logo.png",
    description: "FiscalNote (NYSE: NOTE) is an AI-Enhanced, SaaS-Based, Proprietary Information Services Business. It provides policy and regulatory intelligence to enable actionable outcomes for customers globally",
    founded: "2013",
    partnered: "2020",
    website: "https://www.fiscalnote.com"
  },

  {
    id: "integralacquisitioncorp",
    name: "Integral Acquisition Corp",
    logo: "/logos/integral-logo.png",
    description: "Integral Acquisition Corporation 1 is a Nasdaq-listed Special Purpose Acquisition Company (“SPAC”). Its goal is to complete a business combination with a high-growth company that solves global problems and has favourable prospects of generating strong returns for our shareholders.",
    founded: "2021",
    partnered: "2021",
    website: "https://www.integralacquisitioncorp.com"
  },

  {
    id: "petcircle",
    name: "Pet Circle",
    logo: "/logos/petcircle-logo.png",
    description: "Pet Circle is Australia's largest online pet retailer accounting for around 60% of the total online pet market in Australia.",
    founded: "2011",
    partnered: "2022",
    website: "https://www.petcircle.com.au"
  },

  {
    id: "themartec",
    name: "The Martec",
    logo: "/logos/themartec-logo.png",
    description: "The Martec is a AI-driven SaaS platform tailored for HR teams, enhancing their capabilities to attract, hire, and retain top talent.",
    founded: "2023",
    partnered: "2023",
    website: "https://www.themartec.com"
  },

  {
    id: "edstart",
    name: "Edstart",
    logo: "/logos/edstart-logo.png",
    description: "Edstart is a leading education payment company that provides comprehensive fee management services to schools, parents and students.",
    founded: "2016",
    partnered: "2023",
    website: "https://www.edstart.com.au"
  },

  {
    id: "activepipe",
    name: "ActivePipe",
    logo: "/logos/activepipe-logo.png",
    description: "ActivePipe is an email marketing and lead generation platform designed specifically for the real estate and mortgage broking industry, helping agents automate tailored email communications to nurture leads and build relationships.",
    founded: "2014",
    partnered: "2019",
    website: "https://www.activepipe.com",
    isExited: true,
    exitDetails: "Acquired by Moxiworks in 2022"
},

{
    id: "payapps",
    name: "Payapps",
    logo: "/logos/payapps-logo.png",
    description: "Payapps is cloud-based construction software that allows quick and easy approval of progress claims for subcontractors. Developed specifically for the construction industry, it allows collaboration on a single platform, eliminating the need for spreadsheet reconciliations, email trails and phone calls. It operates primarily in the US, UK and Australia.",
    founded: "2014",
    partnered: "2019",
    website: "https://www.payapps.com",
    isExited: true,
    exitDetails: "Acquired by Autodesk in 2024"
},

{
    id: "hivery",
    name: "Hivery",
    logo: "/logos/hivery-logo.png",
    description: "HIVERY is a pioneer of next-generation hyper-local retail assortment strategy simulation & optimization analytics. Its primary goal is to assist both retailers and CPG brands adopt a dynamic category and assortment planning approach. By doing so, it enables them to better respond to shopper trends and insights more quickly.",
    founded: "2014",
    partnered: "2018",
    website: "https://www.hivery.com",
    isExited: true,
    exitDetails: "Acquired by Vision Group in 2024"
},

  ]

/* Template for adding new companies - just copy and paste this block:
{
  id: "company-name",
  name: "Company Name",
  logo: "/logos/company-name.png",
  description: "2-3 sentences about the company and your partnership.",
  founded: "YYYY",
  partnered: "YYYY",
  website: "https://company-website.com"
}
*/

// Helper function to get company by ID
export function getCompanyById(id: string): PortfolioCompany | undefined {
  return portfolioCompanies.find(company => company.id === id)
} 