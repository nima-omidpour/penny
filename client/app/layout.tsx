import { Inter } from "next/font/google"
import { Sidebar } from "@/components/sidebar"
import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/header"
import type React from "react" // Added import for React

import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Penny - Smart Financial Management",
  description: "The smartest way to manage your finances",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <ThemeProvider>
          <div className="flex h-screen">
            <Sidebar />
            <div className="flex flex-1 flex-col">
              <Header />
              <main className="flex-1 overflow-auto">{children}</main>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

