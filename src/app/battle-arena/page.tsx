import { Trophy, Users, Calendar, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"

export default function BattleArenaPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      <Header currentPage="Battle Arena" />
      <main className="flex-grow">
        <section className="bg-gradient-to-r from-red-800 to-orange-800 py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl font-bold mb-4">Battle Arena</h1>
            <p className="text-xl mb-8">Host epic tournaments and leagues</p>
            <Button size="lg" className="bg-white text-red-800 hover:bg-gray-200">
              Create Tournament
            </Button>
          </div>
        </section>
        
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">Tournament Features</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-800 p-6 rounded-lg">
                <Trophy className="h-12 w-12 text-red-500 mb-4" />
                <h3 className="text-2xl font-semibold mb-4">Tournament Creation</h3>
                <p>Easily set up and customize tournaments with our intuitive tournament creation tools.</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <Users className="h-12 w-12 text-red-500 mb-4" />
                <h3 className="text-2xl font-semibold mb-4">Player Management</h3>
                <p>Efficiently manage participants, teams, and brackets with our comprehensive system.</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <Calendar className="h-12 w-12 text-red-500 mb-4" />
                <h3 className="text-2xl font-semibold mb-4">League Scheduling</h3>
                <p>Organize long-term leagues with automated scheduling and standings tracking.</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <Zap className="h-12 w-12 text-red-500 mb-4" />
                <h3 className="text-2xl font-semibold mb-4">Real-time Updates</h3>
                <p>Keep players and spectators engaged with live scores, stats, and match results.</p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="bg-gray-800 py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Ready to Host Your Tournament?</h2>
            <Button size="lg" className="bg-red-600 text-white hover:bg-red-700">
              Get Started Now
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}