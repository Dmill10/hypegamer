import { BarChart, Target, Megaphone, DollarSign } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"

export default function LootNetworkPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      <Header currentPage="Loot Network" />
      <main className="flex-grow">
        <section className="bg-gradient-to-r from-green-800 to-teal-800 py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl font-bold mb-4">Loot Network</h1>
            <p className="text-xl mb-8">Conquer the ad realm and monetize your game</p>
            <Button size="lg" className="bg-white text-green-800 hover:bg-gray-200">
              Start Monetizing
            </Button>
          </div>
        </section>
        
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">Advertising Features</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-800 p-6 rounded-lg">
                <BarChart className="h-12 w-12 text-green-500 mb-4" />
                <h3 className="text-2xl font-semibold mb-4">Analytics Dashboard</h3>
                <p>Access comprehensive analytics to track ad performance and audience engagement.</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <Target className="h-12 w-12 text-green-500 mb-4" />
                <h3 className="text-2xl font-semibold mb-4">Targeted Campaigns</h3>
                <p>Create highly targeted ad campaigns based on player demographics and preferences.</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <Megaphone className="h-12 w-12 text-green-500 mb-4" />
                <h3 className="text-2xl font-semibold mb-4">Sponsored Events</h3>
                <p>Organize and promote sponsored tournaments to boost brand visibility.</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <DollarSign className="h-12 w-12 text-green-500 mb-4" />
                <h3 className="text-2xl font-semibold mb-4">Revenue Sharing</h3>
                <p>Benefit from our fair revenue sharing model for in-game advertising.</p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="bg-gray-800 py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Ready to Boost Your Game&apos;s Revenue?</h2>
            <Button size="lg" className="bg-green-600 text-white hover:bg-green-700">
              Launch Ad Campaign
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}