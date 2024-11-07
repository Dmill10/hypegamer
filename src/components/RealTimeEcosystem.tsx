import { Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function RealTimeEcosystem() {
  return (
    <section id="real-time" className="bg-gray-800 py-20">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 items-center md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold mb-4">Real-Time Ecosystem with <span className="text-purple-500">HypeGamer</span></h2>
            <p className="text-xl text-gray-300 mb-6">
              Experience the power of instant interactions across our entire platform. HypeGamer&apos;s real-time ecosystem ensures seamless, lightning-fast experiences for all users.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Zap className="h-6 w-6 text-purple-500 mr-2 mt-1" />
                <span>Instant updates for live tournaments and matches</span>
              </li>
              <li className="flex items-start">
                <Zap className="h-6 w-6 text-purple-500 mr-2 mt-1" />
                <span>Real-time data streaming for developers and analytics</span>
              </li>
              <li className="flex items-start">
                <Zap className="h-6 w-6 text-purple-500 mr-2 mt-1" />
                <span>Live interaction between streamers and viewers</span>
              </li>
              <li className="flex items-start">
                <Zap className="h-6 w-6 text-purple-500 mr-2 mt-1" />
                <span>Immediate payouts and transactions for all users</span>
              </li>
            </ul>
            <Button className="mt-8 bg-purple-600 text-white hover:bg-purple-700">Explore Real-Time Features</Button>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg transform rotate-3"></div>
            <Image 
              src="/placeholder.svg?height=400&width=600" 
              alt="Real-time ecosystem visualization" 
              className="relative z-10 rounded-lg shadow-xl"
              width={600}
              height={400}
            />
          </div>
        </div>
      </div>
    </section>
  )
}