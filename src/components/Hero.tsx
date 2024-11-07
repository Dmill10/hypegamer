import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-32">
      <div className="container mx-auto px-4 text-center">
        <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
          Level Up Your Gaming Experience with <span className="text-purple-500">HypeGamer</span>
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-xl text-gray-300">
          Unleash the power of our comprehensive gaming platform. From development to tournaments, streaming to betting, HypeGamer has everything you need to dominate the gaming world.
        </p>
        <Button size="lg" className="bg-purple-600 text-white hover:bg-purple-700">
          Join the Revolution
        </Button>
      </div>
      <div className="absolute inset-0 -z-10 opacity-30">
        <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <radialGradient id="heroglow" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
              <stop offset="0%" stopColor="rgba(147, 51, 234, 0.3)" />
              <stop offset="100%" stopColor="rgba(0, 0, 0, 0)" />
            </radialGradient>
          </defs>
          <rect x="0" y="0" width="100" height="100" fill="url(#heroglow)" />
        </svg>
      </div>
    </section>
  )
}