"use client"

import { WalletDialog } from "@/components/wallet-dialog"

export function Header() {
  return (
    <header className="border-b border-zinc-800 bg-zinc-900/50 backdrop-blur-xl">
      <div className="flex h-16 items-center justify-end px-4">
        <WalletDialog />
      </div>
    </header>
  )
}

