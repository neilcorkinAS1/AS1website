import { TeamMemberCard } from "@/components/TeamMemberCard";

const teamMembers = [
  {
    name: "Conrad Yiu",
    title: "Partner",
    photoUrl: "/photos/Conrad.png",
    linkedinUrl: "https://www.linkedin.com/in/conradyiu/",
    bio: "Conrad is an experienced business builder and investor having worked with many high growth companies over the last 30 years. Having spent the early part of his career with Arthur Andersen & Co & News Corp, Conrad then founded his own investment company, ArdenPoint, and co-founded Temple & Webster where he has taken the business from inception to a ~$2bn ASX200 company, where he remains a Non-Executive Director and Deputy Chair. Conrad has managed over 30 investments across the technology, e-commerce and media sectors and has built an extensive network of investors and founders across Australia, the US and UK"
  },
  {
    name: "Neil Corkin",
    title: "Partner, CFO",
    photoUrl: "/photos/neil.png",
    linkedinUrl: "https://www.linkedin.com/in/neil-corkin-b0950927/",
    bio: "Neil is CFO and Partner at AS1 Growth Partners with over 25 years of experience in commercial finance, M&A, strategy, investor relations and operations. Neil started his career at BSkyB in the UK before moving to Australia in 2007 where he worked with Conrad at News Corp. Prior to AS1, Neil was CFO at Fox Sports Australia from 2013 to 2018, a pivotal time for the company, which included the development and launch of streaming services such as Kayo and the merger with Foxtel"
  },
   {
    name: "Joe Patrick",
    title: "Principal",
    photoUrl: "/photos/joe.png",
    linkedinUrl: "https://www.linkedin.com/in/joe-patrick-36223b65/",
    bio: "Joe is a Principal at AS1 Growth Partners. Before joining AS1, Joe founded Astral Ventures, a technology-focused corporate advisory firm providing transaction execution support on milestone transactions for technology companies and venture capital funds. Joe started his career in investment banking at J.P Morgan, where he was involved with numerous Australian and cross-border M&A and IPO transactions. He is an inaugural Startmate Fellow and a graduate of the Australian Institute of Company Directors. Joe holds a Bachelor of Laws and Commerce from Bond University"
  },
  {
    name: "Les Wigan",
    title: "Operating Partner",
    photoUrl: "/photos/Les.png",
    linkedinUrl: "https://www.linkedin.com/in/les-wigan-9a42655/",
    bio: "Les is a digital growth and transformation executive with 30 years' experience scaling consumer and B2B businesses. Most recently at Foxtel Group, Les held senior roles including Managing Director, COO, and Chief Product & Technology Officer, co-founding Kayo Sports, Binge, and Hubbl — services now reaching around half of Australian households each year. He was a key part of a broader turnaround that culminated in the successful sale of the business to DAZN for $3.4bn\n\nLes brings a deep understanding of customers, shaped by experience across product, technology, and commercial leadership. A qualified CPA and AICD graduate, he has worked across global markets (UK and US) and served at Board level, guiding acquisitions, joint ventures, and investment strategy. Les works closely with executives and teams to navigate key transitions, helping businesses scale with focus and create enduring value."
  }
];

const advisoryMembers = [
  {
    name: "Henry Tam",
    title: "Advisory Board",
    photoUrl: "/photos/henry.png",
    linkedinUrl: "https://www.linkedin.com/in/henry-tam-b98503190/",
    bio: "Henry is an experienced investor, businessman, and wealth manager with over 30 years of experience in investment advisory and wealth management. He has held senior roles at major financial institutions including HSBC, Merrill Lynch, and Macquarie Bank"
  }
];

export default function Team() {
  return (
    <main className="container mx-auto px-4">
      <div className="py-12">
        <h1 className="text-4xl font-bold mb-12">Meet the Team</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <TeamMemberCard
              key={member.name}
              {...member}
            />
          ))}
        </div>
      </div>

      <div className="w-full h-px bg-gray-200 my-16" />

      <div className="pb-12">
        <h2 className="text-3xl font-bold mb-12">Advisory Board</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advisoryMembers.map((member) => (
            <TeamMemberCard
              key={member.name}
              {...member}
            />
          ))}
        </div>
      </div>
    </main>
  );
} 