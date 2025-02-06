"use client";

import { Provider } from "react-redux";
import { store } from "@/store";
import { useEffect } from "react";
import { initAuth } from "@/store/features/authSlice";

export function Providers({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    store.dispatch(initAuth());
  }, []);

  return <Provider store={store}>{children}</Provider>;
}
