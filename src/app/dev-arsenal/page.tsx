import { Code, Boxes, Workflow, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"

export default function DevArsenalPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      <Header currentPage="Dev Arsenal" />
      <main className="flex-grow">
        <section className="bg-gradient-to-r from-purple-800 to-blue-800 py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl font-bold mb-4">Dev Arsenal</h1>
            <p className="text-xl mb-8">Forge your gaming empire with our powerful SDK</p>
            <Button size="lg" className="bg-white text-purple-800 hover:bg-gray-200">
              Get Started
            </Button>
          </div>
        </section>
        
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">Equip Your Studio</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-800 p-6 rounded-lg">
                <Code className="h-12 w-12 text-purple-500 mb-4" />
                <h3 className="text-2xl font-semibold mb-4">Powerful SDK</h3>
                <p>Access our comprehensive toolkit designed specifically for game developers to integrate HypeGamer features.</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <Boxes className="h-12 w-12 text-purple-500 mb-4" />
                <h3 className="text-2xl font-semibold mb-4">Modular Integration</h3>
                <p>Choose which features to implement with our flexible, modular architecture.</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <Workflow className="h-12 w-12 text-purple-500 mb-4" />
                <h3 className="text-2xl font-semibold mb-4">Automated Workflows</h3>
                <p>Streamline your development process with our automated testing and deployment tools.</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg">
                <Shield className="h-12 w-12 text-purple-500 mb-4" />
                <h3 className="text-2xl font-semibold mb-4">Secure Infrastructure</h3>
                <p>Build on our enterprise-grade infrastructure with built-in security and scalability.</p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="bg-gray-800 py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Ready to Supercharge Your Game?</h2>
            <Button size="lg" className="bg-purple-600 text-white hover:bg-purple-700">
              Access Dev Portal
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}