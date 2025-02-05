"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { LogIn } from "lucide-react";
import { ethers } from "ethers";
import { useAppDispatch } from "@/store/hooks";
import { setAuth } from "@/store/features/authSlice";

export function WalletDialog() {
  const [isConnecting, setIsConnecting] = useState(false);
  const [error, setError] = useState<string>("");
  const [open, setOpen] = useState(false);
  const dispatch = useAppDispatch();

  const connectWallet = async (
    type: "metamask" | "walletconnect" | "coinbase"
  ) => {
    try {
      setIsConnecting(true);
      setError("");

      // Check if MetaMask is installed
      if (!window.ethereum) {
        throw new Error("Please install MetaMask first");
      }

      // Request account access
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const address = await signer.getAddress();

      // Get nonce from server
      const nonceResponse = await fetch(
        "http://localhost:3001/api/auth/nonce",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ address }),
        }
      );

      const nonceData = await nonceResponse.json();
      const { nonce } = nonceData;

      // Sign the nonce
      const signature = await signer.signMessage(nonce);

      // Verify signature and get token
      const authResponse = await fetch(
        "http://localhost:3001/api/auth/verify",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ address, signature }),
        }
      );

      const { token } = await authResponse.json();

      if (!token) {
        throw new Error("No token received from server");
      }

      // Store the token
      localStorage.setItem("token", token);
      localStorage.setItem("walletAddress", address);

      // Dispatch to Redux
      dispatch(setAuth({ address }));

      // Close dialog
      setOpen(false);
    } catch (err) {
      console.error("Full error:", err);
      setError(err instanceof Error ? err.message : "Failed to connect wallet");
    } finally {
      setIsConnecting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="gap-2">
          <LogIn className="h-4 w-4" />
          <span>Connect Wallet</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-zinc-900 text-white">
        <DialogHeader>
          <DialogTitle>Connect Wallet</DialogTitle>
          <DialogDescription className="text-zinc-400">
            Choose your preferred wallet to connect to our platform.
          </DialogDescription>
        </DialogHeader>
        {error && <div className="text-red-500 text-sm mb-4">{error}</div>}
        <div className="grid gap-4 py-4">
          <Button
            variant="outline"
            className="w-full justify-start gap-2"
            onClick={() => connectWallet("metamask")}
            disabled={isConnecting}
          >
            <img src="/metamask.svg" alt="MetaMask" className="h-5 w-5" />
            {isConnecting ? "Connecting..." : "MetaMask"}
          </Button>
          <Button
            variant="outline"
            className="w-full justify-start gap-2"
            onClick={() => connectWallet("walletconnect")}
            disabled={isConnecting}
          >
            <img
              src="/walletconnect.svg"
              alt="WalletConnect"
              className="h-5 w-5"
            />
            {isConnecting ? "Connecting..." : "WalletConnect"}
          </Button>
          <Button
            variant="outline"
            className="w-full justify-start gap-2"
            onClick={() => connectWallet("coinbase")}
            disabled={isConnecting}
          >
            <img
              src="/coinbase.svg"
              alt="Coinbase Wallet"
              className="h-5 w-5"
            />
            {isConnecting ? "Connecting..." : "Coinbase Wallet"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
