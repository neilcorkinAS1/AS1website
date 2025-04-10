import { TeamMemberCard } from "@/components/TeamMemberCard";

const teamMembers = [
  {
    name: "Conrad Yiu",
    title: "Partner",
    photoUrl: "/photos/Conrad.png",
    linkedinUrl: "https://www.linkedin.com/in/conradyiu/",
    bio: "Conrad is an experienced business builder and investor having worked with many high growth companies over the last 25 years. Having spent the early part of his career with Arthur Andersen & Co, News Corp, and then running the finance function at Temple & Webster, Conrad then founded his own investment company, ArdenPoint, and co-founded Temple & Webster where he has taken the business from inception to a ~$1bn market cap company listed on the ASX, where he remains a Non-Executive Director. Conrad has managed over 30 investments across the technology, e-commerce and media sectors and has built an extensive network of investors and founders across the Australia and the UK."
  },
  {
    name: "Neil Corkin",
    title: "Partner, CFO",
    photoUrl: "/photos/neil.png",
    linkedinUrl: "https://www.linkedin.com/in/neil-corkin-b0950927/",
    bio: "Neil is a strategic CFO with 20 years of experience across commercial finance, M&A, strategy and operations. Prior to AS1, Neil was CFO at Airtasker (ASX:ART) where he led the company's successful IPO and subsequent capital raises. Before Airtasker, Neil was CFO at Temple & Webster (ASX:TPW) where he helped scale the business from early stage through to IPO. Neil started his career at KPMG Corporate Finance where he worked on numerous M&A and capital market transactions across Australia and the UK."
  },
  {
    name: "Joe Patrick",
    title: "Principal",
    photoUrl: "/photos/joe.png",
    linkedinUrl: "https://www.linkedin.com/in/joe-patrick-36223b65/",
    bio: "Joe is a Partner at AS1 Growth Partners. Before joining AS1, Joe founded Astral Ventures, a technology-focused corporate advisory firm providing transaction execution support on milestone transactions for technology companies and venture capital funds. Joe started his career in investment banking at J.P. Morgan, where he was involved with numerous Australian and cross-border M&A and IPO transactions. He is an inaugural Startmate Fellow and a graduate of the Australian Institute of Company Directors. Joe holds a Bachelor of Laws and Commerce from Bond University."
  }
];

const advisoryMembers = [
  {
    name: "Henry Tam",
    title: "Advisory Board",
    photoUrl: "/photos/henry.png",
    linkedinUrl: "https://www.linkedin.com/in/henry-tam-b98503190/",
    bio: "Henry is an experienced investor, businessman, and wealth manager with over 30 years of experience in investment advisory and wealth management. He has held senior roles at major financial institutions including HSBC, Merrill Lynch, and Macquarie Bank."
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