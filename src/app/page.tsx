import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, Gamepad2, Trophy, Zap, Puzzle, Video, DollarSign } from "lucide-react"
import Link from "next/link"

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
  href: string
}

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      <Header currentPage="Home" />
      <main className="flex-grow">
        <section className="bg-gradient-to-r from-purple-800 to-blue-800 py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-6xl font-bold mb-4">Welcome to HypeGamer</h1>
            <p className="text-xl mb-8">The ultimate platform for competitive gaming and esports</p>
            <Button size="lg" className="bg-white text-purple-800 hover:bg-gray-200">
              Get Started
            </Button>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Features</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <FeatureCard
                icon={<Gamepad2 className="h-12 w-12 text-purple-500 mb-4" />}
                title="Dev Arsenal"
                description="Powerful SDK for game developers"
                href="/dev-arsenal"
              />
              <FeatureCard
                icon={<Trophy className="h-12 w-12 text-red-500 mb-4" />}
                title="Battle Arena"
                description="Host epic tournaments and leagues"
                href="/battle-arena"
              />
              <FeatureCard
                icon={<DollarSign className="h-12 w-12 text-green-500 mb-4" />}
                title="Loot Network"
                description="Monetize your game with targeted ads"
                href="/loot-network"
              />
              <FeatureCard
                icon={<Zap className="h-12 w-12 text-blue-500 mb-4" />}
                title="Prophecy Engine"
                description="Real-time odds and analytics"
                href="/prophecy-engine"
              />
              <FeatureCard
                icon={<Video className="h-12 w-12 text-yellow-500 mb-4" />}
                title="HypeZone"
                description="24/7 action-packed streams"
                href="/hype-zone"
              />
              <FeatureCard
                icon={<Puzzle className="h-12 w-12 text-pink-500 mb-4" />}
                title="Mod Nexus"
                description="Create and monetize game mods"
                href="/mod-nexus"
              />
            </div>
          </div>
        </section>

        <section className="bg-gray-800 py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Ready to Join the HypeGamer Community?</h2>
            <Button size="lg" className="bg-purple-600 text-white hover:bg-purple-700">
              Sign Up Now
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

function FeatureCard({ icon, title, description, href }: FeatureCardProps) {
  return (
    <div className="bg-gray-800 p-6 rounded-lg">
      {icon}
      <h3 className="text-2xl font-semibold mb-2">{title}</h3>
      <p className="mb-4">{description}</p>
      <Link href={href} className="text-purple-400 hover:text-purple-300 flex items-center">
        Learn more <ArrowRight className="ml-2 h-4 w-4" />
      </Link>
    </div>
  )
}