import { create } from "zustand";
import axios from "axios";

const API_URL = "http://localhost:5000";
export const useAuthStore = create((set) => ({
  user: null,
  isAutenticated: false,
  error: null,
  isLoading: false,
  isCheckingAuth: true,

  signup: async (email, password, name) => {
    set({ isLoading: true, error: null });
    try {
      const { data } = await axios.post(`${API_URL}/auth/signup`, { email, password, name });
      set({ user: data.user, isAutenticated: true, isLoading: false });
    } catch (error) {
      set({ error: error.response.data.message || "error signing up", isLoading: false });
      throw error;
    }
  },
}));
