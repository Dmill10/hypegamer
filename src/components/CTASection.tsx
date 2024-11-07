import { Button } from "@/components/ui/button"

export function CTA() {
  return (
    <section className="bg-purple-900 py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="mb-6 text-3xl font-bold md:text-4xl">Ready to Experience Real-Time Gaming?</h2>
        <p className="mx-auto mb-8 max-w-2xl text-xl text-purple-200">
          Join HypeGamer today and immerse yourself in a world where every action happens in real-time.
        </p>
        <Button size="lg" variant="secondary" className="bg-white text-purple-900 hover:bg-purple-100">
          Get Started Now
        </Button>
      </div>
    </section>
  )
}