import { SectionContainer } from "@/components/ui/section-container"
import { User } from "lucide-react"

const team = [
  {
    name: "Conrad You",
    role: "Partner"
  },
  {
    name: "Neil Corkin",
    role: "Partner"
  },
  {
    name: "Joe Patrick",
    role: "Partner"
  }
]

export function TeamSection() {
  return (
    <SectionContainer id="team" className="bg-background">
      <div className="space-y-16">
        <div className="max-w-3xl">
          <h2 className="font-tiempos text-4xl text-[#1C506F] mb-6">Our Team</h2>
          <p className="font-inter text-lg text-[#4B5563]">
            Experienced investors and operators partnering with exceptional founders.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {team.map((member) => (
            <div key={member.name} className="space-y-4">
              <div className="aspect-square flex items-center justify-center rounded-lg bg-[#1C506F]/5">
                <User size={64} className="text-[#1C506F]/30" />
              </div>
              <div>
                <h3 className="font-inter text-xl font-semibold text-[#1C506F]">
                  {member.name}
                </h3>
                <p className="font-inter text-[#4B5563]">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionContainer>
  )
} 