"use client";

import { Button } from "@/components/ui/button";
import { LogIn, LogOut } from "lucide-react";
import { useAppSelector } from "@/store/hooks";
import { useAppDispatch } from "@/store/hooks";
import { clearAuth, setPrivateKey } from "@/store/features/authSlice";
import { WalletDialog } from "./wallet-dialog";
import { useRouter } from "next/navigation";

export function WalletButton() {
  const { isLoggedIn, walletAddress } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleSignOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("walletAddress");
    localStorage.removeItem("encryptedPrivateKey");
    dispatch(clearAuth());
    router.push("/");
  };

  if (isLoggedIn && walletAddress) {
    return (
      <div className="flex items-center gap-2">
        <span className="text-sm text-zinc-400">
          {walletAddress.slice(0, 6)}...{walletAddress.slice(-4)}
        </span>
        <Button variant="outline" className="gap-2" onClick={handleSignOut}>
          <LogOut className="h-4 w-4" />
          <span>Sign out</span>
        </Button>
      </div>
    );
  }

  return <WalletDialog />;
}
