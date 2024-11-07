import { MonitorPlay, Zap, Star, Video } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"

export default function HypeZonePage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      <Header currentPage="HypeZone" />
      <main className="flex-grow">
        <section className="bg-gradient-to-r from-yellow-600 to-red-600 py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl font-bold mb-4">HypeZone</h1>
            <p className="text-xl mb-8">Experience 24/7 action-packed streams</p>
            <Button size="lg" className="bg-white text-yellow-600 hover:bg-gray-200">
              Start Watching
            </Button>
          </div>
        </section>
        
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">Streaming Features</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-800 p-6 rounded-lg">
                <MonitorPlay className="h-12 w-12 text-yellow-500 mb-4" />
                <h3 className="text-2xl font-semibold mb-4">Live Streams</h3>
                <p>Watch round-the-clock live streams featuring the most exciting esports matches and events.</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <Zap className="h-12 w-12 text-yellow-500 mb-4" />
                <h3 className="text-2xl font-semibold mb-4">Instant Highlights</h3>
                <p>Never miss a crucial moment with our AI-powered instant highlight generation system.</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <Star className="h-12 w-12 text-yellow-500 mb-4" />
                <h3 className="text-2xl font-semibold mb-4">Featured Content</h3>
                <p>Enjoy curated content showcasing the best plays, strategies, and esports personalities.</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <Video className="h-12 w-12 text-yellow-500 mb-4" />
                <h3 className="text-2xl font-semibold mb-4">Multi-stream Viewing</h3>
                <p>Customize your viewing experience with our multi-stream layout options.</p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="bg-gray-800 py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Ready for Non-Stop Action?</h2>
            <Button size="lg" className="bg-yellow-600 text-white hover:bg-yellow-700">
              Enter HypeZone
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}