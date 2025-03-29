import { Highlight } from "@/components/ui/highlight"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

export default function PortfolioPage() {
  return (
    <main className="container py-24">
      <div className="max-w-6xl mx-auto">
        <div className="prose prose-lg mx-auto mb-12">
          <p>
            We partner with exceptional companies across their growth journey. Our portfolio 
            represents a focused selection of businesses with <Highlight>strong fundamentals</Highlight>, 
            <Highlight>clear competitive advantages</Highlight>, and <Highlight>ambitious visions</Highlight> for 
            the future.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="flex flex-col">
            <CardHeader>
              <div className="h-16 w-full flex items-center justify-center mb-4">
                <div className="relative h-12 w-48 bg-gray-100 rounded-lg">
                  {/* Replace with actual logo */}
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400">TechCo Logo</div>
                </div>
              </div>
              <CardTitle>TechCo</CardTitle>
              <CardDescription className="text-base mt-2">
                Enterprise software platform revolutionizing supply chain operations with 
                <Highlight>market-leading visibility solutions</Highlight> and a 
                <Highlight>90% customer retention rate</Highlight>.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="flex flex-col">
            <CardHeader>
              <div className="h-16 w-full flex items-center justify-center mb-4">
                <div className="relative h-12 w-48 bg-gray-100 rounded-lg">
                  {/* Replace with actual logo */}
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400">HealthTech Logo</div>
                </div>
              </div>
              <CardTitle>HealthTech Solutions</CardTitle>
              <CardDescription className="text-base mt-2">
                Digital health platform transforming patient care through 
                <Highlight>AI-powered diagnostics</Highlight> and partnerships with 
                <Highlight>leading healthcare providers</Highlight>.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="flex flex-col">
            <CardHeader>
              <div className="h-16 w-full flex items-center justify-center mb-4">
                <div className="relative h-12 w-48 bg-gray-100 rounded-lg">
                  {/* Replace with actual logo */}
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400">FinanceFlow Logo</div>
                </div>
              </div>
              <CardTitle>FinanceFlow</CardTitle>
              <CardDescription className="text-base mt-2">
                Next-generation financial infrastructure processing 
                <Highlight>$1B+ monthly transactions</Highlight> across emerging markets with 
                <Highlight>strong regulatory partnerships</Highlight>.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="flex flex-col">
            <CardHeader>
              <div className="h-16 w-full flex items-center justify-center mb-4">
                <div className="relative h-12 w-48 bg-gray-100 rounded-lg">
                  {/* Replace with actual logo */}
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400">DataSense Logo</div>
                </div>
              </div>
              <CardTitle>DataSense</CardTitle>
              <CardDescription className="text-base mt-2">
                Enterprise data analytics platform enabling 
                <Highlight>real-time decision making</Highlight> for Fortune 500 companies with 
                <Highlight>proprietary ML technology</Highlight>.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="flex flex-col">
            <CardHeader>
              <div className="h-16 w-full flex items-center justify-center mb-4">
                <div className="relative h-12 w-48 bg-gray-100 rounded-lg">
                  {/* Replace with actual logo */}
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400">SecureCloud Logo</div>
                </div>
              </div>
              <CardTitle>SecureCloud</CardTitle>
              <CardDescription className="text-base mt-2">
                Cloud security platform protecting 
                <Highlight>over 1000 enterprises</Highlight> with 
                <Highlight>advanced threat detection</Highlight> and automated response capabilities.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="flex flex-col">
            <CardHeader>
              <div className="h-16 w-full flex items-center justify-center mb-4">
                <div className="relative h-12 w-48 bg-gray-100 rounded-lg">
                  {/* Replace with actual logo */}
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400">GreenTech Logo</div>
                </div>
              </div>
              <CardTitle>GreenTech Solutions</CardTitle>
              <CardDescription className="text-base mt-2">
                Sustainable energy management platform reducing carbon emissions by 
                <Highlight>50%+ for industrial clients</Highlight> through 
                <Highlight>AI-optimized operations</Highlight>.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="flex flex-col">
            <CardHeader>
              <div className="h-16 w-full flex items-center justify-center mb-4">
                <div className="relative h-12 w-48 bg-gray-100 rounded-lg">
                  {/* Replace with actual logo */}
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400">EduTech Logo</div>
                </div>
              </div>
              <CardTitle>EduTech</CardTitle>
              <CardDescription className="text-base mt-2">
                Online learning platform serving 
                <Highlight>over 2M students globally</Highlight> with 
                <Highlight>personalized AI curriculum</Highlight>.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="flex flex-col">
            <CardHeader>
              <div className="h-16 w-full flex items-center justify-center mb-4">
                <div className="relative h-12 w-48 bg-gray-100 rounded-lg">
                  {/* Replace with actual logo */}
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400">LogisticsPro Logo</div>
                </div>
              </div>
              <CardTitle>LogisticsPro</CardTitle>
              <CardDescription className="text-base mt-2">
                Last-mile delivery optimization platform achieving 
                <Highlight>40% cost reduction</Highlight> through 
                <Highlight>ML-powered route planning</Highlight>.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="flex flex-col">
            <CardHeader>
              <div className="h-16 w-full flex items-center justify-center mb-4">
                <div className="relative h-12 w-48 bg-gray-100 rounded-lg">
                  {/* Replace with actual logo */}
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400">RetailAI Logo</div>
                </div>
              </div>
              <CardTitle>RetailAI</CardTitle>
              <CardDescription className="text-base mt-2">
                AI-powered inventory management platform delivering 
                <Highlight>30% waste reduction</Highlight> for 
                <Highlight>major retail chains</Highlight>.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="flex flex-col">
            <CardHeader>
              <div className="h-16 w-full flex items-center justify-center mb-4">
                <div className="relative h-12 w-48 bg-gray-100 rounded-lg">
                  {/* Replace with actual logo */}
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400">HealthConnect Logo</div>
                </div>
              </div>
              <CardTitle>HealthConnect</CardTitle>
              <CardDescription className="text-base mt-2">
                Telemedicine platform connecting 
                <Highlight>5M+ patients</Highlight> with healthcare providers through 
                <Highlight>secure virtual consultations</Highlight>.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="flex flex-col bg-gray-50 border-gray-200">
            <CardHeader>
              <div className="h-16 w-full flex items-center justify-center mb-4">
                <div className="relative h-12 w-48 bg-gray-100 rounded-lg">
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400">PaymentTech Logo</div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <CardTitle>PaymentTech</CardTitle>
                <span className="text-sm font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded">Exited 2023</span>
              </div>
              <CardDescription className="text-base mt-2">
                Payment infrastructure provider 
                <Highlight>acquired by Global Payments</Highlight> after achieving 
                <Highlight>$500M+ annual processing volume</Highlight>.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="flex flex-col bg-gray-50 border-gray-200">
            <CardHeader>
              <div className="h-16 w-full flex items-center justify-center mb-4">
                <div className="relative h-12 w-48 bg-gray-100 rounded-lg">
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400">CloudSec Logo</div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <CardTitle>CloudSec</CardTitle>
                <span className="text-sm font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded">Exited 2022</span>
              </div>
              <CardDescription className="text-base mt-2">
                Cloud security provider 
                <Highlight>acquired by Microsoft</Highlight> after protecting 
                <Highlight>2000+ enterprise customers</Highlight>.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        <div className="flex justify-center mt-12">
          <Button asChild size="lg">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </main>
  )
} 