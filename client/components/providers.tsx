"use client";

import { Provider } from "react-redux";
import { store } from "@/store";
import { useEffect } from "react";
import { initAuth, checkPrivateKey } from "@/store/features/authSlice";

export function Providers({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    store.dispatch(initAuth());
    store.dispatch(checkPrivateKey());
  }, []);

  return <Provider store={store}>{children}</Provider>;
}
