"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "@/components/ui/use-toast";

export default function PrivateKeyPage() {
  const router = useRouter();
  const [privateKey, setPrivateKey] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!privateKey.startsWith("0x") || privateKey.length !== 66) {
      toast({
        title: "Invalid Private Key",
        description: "Please enter a valid private key starting with 0x",
        variant: "destructive",
      });
      return;
    }

    // Store the private key securely
    localStorage.setItem("encryptedPrivateKey", privateKey);
    router.push("/");
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-full max-w-md p-6 bg-zinc-900/50 border border-zinc-800 rounded-lg">
        <h1 className="text-2xl font-bold mb-4">Enter Your Private Key</h1>
        <p className="text-sm text-zinc-400 mb-6">
          Your private key is encrypted and stored locally to enable AI access
          to your wallet.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="password"
            value={privateKey}
            onChange={(e) => setPrivateKey(e.target.value)}
            className="w-full p-2 bg-zinc-800 border border-zinc-700 rounded"
            placeholder="0x..."
            required
          />
          <Button type="submit" className="w-full">
            Continue
          </Button>
        </form>
      </div>
    </div>
  );
}
