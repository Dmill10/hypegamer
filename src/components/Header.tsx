import Link from "next/link"
import { Button } from "@/components/ui/button"

interface HeaderProps {
  currentPage: string
}

export function Header({ currentPage }: HeaderProps) {
  const navItems = [
    { name: "Dev Arsenal", href: "/dev-arsenal" },
    { name: "Battle Arena", href: "/battle-arena" },
    { name: "Loot Network", href: "/loot-network" },
    { name: "Prophecy Engine", href: "/prophecy-engine" },
    { name: "HypeZone", href: "/hype-zone" },
    { name: "Mod Nexus", href: "/mod-nexus" },
  ]

  return (
    <header className="bg-gray-900 text-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          HypeGamer
        </Link>
        <nav>
          <ul className="flex space-x-4">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={`hover:text-purple-400 ${
                    currentPage === item.name ? "text-purple-500" : ""
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <Button variant="outline" className="text-white border-white hover:bg-purple-700">
          Login
        </Button>
      </div>
    </header>
  )
}