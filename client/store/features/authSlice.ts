import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  isLoggedIn: boolean;
  walletAddress: string | null;
  hasPrivateKey: boolean;
}

const initialState: AuthState = {
  isLoggedIn: false,
  walletAddress: null,
  hasPrivateKey: false,
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
    setPrivateKey: (state) => {
      state.hasPrivateKey = true;
    },
    checkPrivateKey: (state) => {
      state.hasPrivateKey = !!localStorage.getItem("encryptedPrivateKey");
    },
  },
});

export const { setAuth, clearAuth, initAuth, setPrivateKey, checkPrivateKey } =
  authSlice.actions;
export default authSlice.reducer;
