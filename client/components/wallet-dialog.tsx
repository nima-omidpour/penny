"use client"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { LogIn } from "lucide-react"

export function WalletDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="gap-2">
          <LogIn className="h-4 w-4" />
          <span>login</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-zinc-900 text-white">
        <DialogHeader>
          <DialogTitle>Connect Wallet</DialogTitle>
          <DialogDescription className="text-zinc-400">
            Choose your preferred wallet to connect to our platform.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <Button variant="outline" className="w-full justify-start gap-2">
            <img src="/metamask.svg" alt="MetaMask" className="h-5 w-5" />
            MetaMask
          </Button>
          <Button variant="outline" className="w-full justify-start gap-2">
            <img src="/walletconnect.svg" alt="WalletConnect" className="h-5 w-5" />
            WalletConnect
          </Button>
          <Button variant="outline" className="w-full justify-start gap-2">
            <img src="/coinbase.svg" alt="Coinbase Wallet" className="h-5 w-5" />
            Coinbase Wallet
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

