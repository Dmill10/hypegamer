import { Puzzle, ShoppingBag, Award, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"

export default function ModNexusPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      <Header currentPage="Mod Nexus" />
      <main className="flex-grow">
        <section className="bg-gradient-to-r from-pink-800 to-purple-800 py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl font-bold mb-4">Mod Nexus</h1>
            <p className="text-xl mb-8">Craft & monetize game-changing add-ons</p>
            <Button size="lg" className="bg-white text-pink-800 hover:bg-gray-200">
              Start Creating
            </Button>
          </div>
        </section>
        
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">Modding Features</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-800 p-6 rounded-lg">
                <Puzzle className="h-12 w-12 text-pink-500 mb-4" />
                <h3 className="text-2xl font-semibold mb-4">Mod Creation Tools</h3>
                <p>Access powerful tools and resources to create and test your mods efficiently.</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <ShoppingBag className="h-12 w-12 text-pink-500 mb-4" />
                <h3 className="text-2xl font-semibold mb-4">Marketplace</h3>
                <p>Showcase and sell your mods in our bustling marketplace, reaching a wide audience of gamers.</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <Award className="h-12 w-12 text-pink-500 mb-4" />
                <h3 className="text-2xl font-semibold mb-4">Creator Program</h3>
                <p>Join our creator program to earn rewards and gain exposure for your outstanding mods.</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <Settings className="h-12 w-12 text-pink-500 mb-4" />
                <h3 className="text-2xl font-semibold mb-4">Integration Support</h3>
                <p>Get technical support and guidelines to ensure your mods integrate seamlessly with HypeGamer.</p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="bg-gray-800 py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Ready to Revolutionize Gaming?</h2>
            <Button size="lg" className="bg-pink-600 text-white hover:bg-pink-700">
              Start Modding
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}