"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Users, LayoutDashboard, FileText, Settings } from "lucide-react"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "Home", href: "/", icon: Home },
  { name: "Teams", href: "/teams", icon: Users },
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Reports", href: "/reports", icon: FileText },
  { name: "Settings", href: "/settings", icon: Settings },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="flex h-full w-56 flex-col bg-zinc-900">
      <div className="flex h-16 items-center gap-2 px-4">
        <div className="flex items-center gap-2">
          <img src={`${process.env.NEXT_PUBLIC_VERCEL_URL}/penny-logo.svg`} alt="Penny" className="h-8 w-8" />
          <span className="text-xl font-semibold text-white">penny</span>
        </div>
      </div>
      <nav className="flex-1 space-y-1 px-2 py-4">
        {navigation.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "group flex items-center rounded-md px-2 py-2 text-sm font-medium",
                isActive ? "bg-zinc-800 text-white" : "text-zinc-400 hover:bg-zinc-800 hover:text-white",
              )}
            >
              <item.icon
                className={cn(
                  "mr-3 h-5 w-5 flex-shrink-0",
                  isActive ? "text-white" : "text-zinc-400 group-hover:text-white",
                )}
              />
              {item.name}
            </Link>
          )
        })}
      </nav>
    </div>
  )
}

