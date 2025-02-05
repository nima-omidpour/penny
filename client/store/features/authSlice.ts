import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  isLoggedIn: boolean;
  walletAddress: string | null;
}

const initialState: AuthState = {
  isLoggedIn: false,
  walletAddress: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (state, action: PayloadAction<{ address: string }>) => {
      state.isLoggedIn = true;
      state.walletAddress = action.payload.address;
    },
    clearAuth: (state) => {
      state.isLoggedIn = false;
      state.walletAddress = null;
    },
    initAuth: (state) => {
      const token = localStorage.getItem("token");
      const address = localStorage.getItem("walletAddress");
      if (token && address) {
        state.isLoggedIn = true;
        state.walletAddress = address;
      }
    },
  },
});

export const { setAuth, clearAuth, initAuth } = authSlice.actions;
export default authSlice.reducer;
