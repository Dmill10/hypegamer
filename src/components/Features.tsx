import { Code, Gamepad, BarChart, Wallet, MonitorPlay, Puzzle } from "lucide-react"
import Link from "next/link"

export function Features() {
  const features = [
    {
      icon: Code,
      title: "Dev Arsenal",
      tagline: "Forge your gaming empire",
      description: "Equip your studio with our powerful SDK. Integrate seamlessly into our esports ecosystem.",
      link: "/dev-arsenal"
    },
    {
      icon: Gamepad,
      title: "Battle Arena",
      tagline: "Host epic tournaments",
      description: "Create, manage, and compete in thrilling tournaments and leagues.",
      link: "/battle-arena"
    },
    {
      icon: BarChart,
      title: "Loot Network",
      tagline: "Conquer the ad realm",
      description: "Connect brands with passionate gamers through sponsored tournaments and dynamic in-game ads.",
      link: "/loot-network"
    },
    {
      icon: Wallet,
      title: "Prophecy Engine",
      tagline: "Master the odds",
      description: "Access real-time odds, in-depth analytics, and secure transactions across competitive games.",
      link: "/prophecy-engine"
    },
    {
      icon: MonitorPlay,
      title: "HypeZone",
      tagline: "24/7 action-packed streams",
      description: "Experience non-stop high-octane events and critical moment highlights.",
      link: "/hype-zone"
    },
    {
      icon: Puzzle,
      title: "Mod Nexus",
      tagline: "Craft & monetize add-ons",
      description: "Build, sell, and distribute mods, add-ons, and plugins that enhance the HypeGamer ecosystem.",
      link: "/mod-nexus"
    }
  ]

  return (
    <section className="py-24 bg-black">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto mb-16 text-center">
          <h2 className="mb-4 text-4xl md:text-6xl leading-tight font-bold tracking-tighter">
            HypeGamer <span className="text-purple-500">Command Center</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Link 
              key={index} 
              href={feature.link}
              className="block p-6 bg-gray-900 rounded-lg border border-gray-800 hover:border-purple-500 transition-all duration-200"
            >
              <div className="w-12 h-12 mb-4 bg-purple-900/30 rounded-lg flex items-center justify-center">
                <feature.icon className="w-6 h-6 text-purple-500" />
              </div>
              <h3 className="text-xl font-bold text-purple-500 mb-1">{feature.title}</h3>
              <p className="text-lg font-semibold text-white mb-2">{feature.tagline}</p>
              <p className="text-gray-400">{feature.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}