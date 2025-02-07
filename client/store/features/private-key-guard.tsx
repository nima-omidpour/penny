"use client";

import { useAppSelector } from "@/store/hooks";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export function PrivateKeyGuard({ children }: { children: React.ReactNode }) {
  const { isLoggedIn, hasPrivateKey } = useAppSelector((state) => state.auth);
  const router = useRouter();

  useEffect(() => {
    if (isLoggedIn && !hasPrivateKey) {
      router.push("/private-key");
    }
  }, [isLoggedIn, hasPrivateKey, router]);

  if (!isLoggedIn || !hasPrivateKey) {
    return null;
  }

  return <>{children}</>;
}
