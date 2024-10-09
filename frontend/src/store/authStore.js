import { create } from "zustand";
import axios from "axios";

const API_URL = "http://localhost:3000";
export const useAuthStore = create((set) => ({
  user: null,
  isAutenticated: false,
  error: null,
  isLoading: false,
  isCheckingAuth: true,

  signUp: async (name, email, password) => {
    set({ isLoading: true, error: null });
    try {
      console.log({ name, email, password }); // Log the payload
      const response = await axios.post(`${API_URL}/api/auth/signup`, { email, password, name });

      set({ user: response.data.user, isAutenticated: true, isLoading: false });
    } catch (error) {
      set({ error: error.response.data.message || "Error signing up", isLoading: false });
      throw error;
    }
  },
}));
