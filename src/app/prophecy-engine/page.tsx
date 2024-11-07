import { Wallet, TrendingUp, Lock, BarChart2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"

export default function ProphecyEnginePage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      <Header currentPage="Prophecy Engine" />
      <main className="flex-grow">
        <section className="bg-gradient-to-r from-blue-800 to-indigo-800 py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl font-bold mb-4">Prophecy Engine</h1>
            <p className="text-xl mb-8">Master the odds in competitive gaming</p>
            <Button size="lg" className="bg-white text-blue-800 hover:bg-gray-200">
              Explore Predictions
            </Button>
          </div>
        </section>
        
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">Prediction Features</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-800 p-6 rounded-lg">
                <TrendingUp className="h-12 w-12 text-blue-500 mb-4" />
                <h3 className="text-2xl font-semibold mb-4">Real-time Odds</h3>
                <p>Stay ahead with our advanced algorithms providing up-to-the-second odds for all major esports events.</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <BarChart2 className="h-12 w-12 text-blue-500 mb-4" />
                <h3 className="text-2xl font-semibold mb-4">In-depth Analytics</h3>
                <p>Gain valuable insights with our comprehensive analytics tools covering player and team performance.</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <Lock className="h-12 w-12 text-blue-500 mb-4" />
                <h3 className="text-2xl font-semibold mb-4">Secure Transactions</h3>
                <p>Enjoy peace of mind with our state-of-the-art security measures for all financial transactions.</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <Wallet className="h-12 w-12 text-blue-500 mb-4" />
                <h3 className="text-2xl font-semibold mb-4">Multiple Payment Options</h3>
                <p>Choose from a variety of payment methods for seamless deposits and withdrawals.</p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="bg-gray-800 py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Ready to Predict Like a Pro?</h2>
            <Button size="lg" className="bg-blue-600 text-white hover:bg-blue-700">
              Access Prophecy Engine
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}