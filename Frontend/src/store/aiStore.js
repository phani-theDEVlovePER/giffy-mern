import { create } from "zustand"
import axios from "axios"

const API_URL = import.meta.env.MODE === "development" ? "http://localhost:5000/api" : "/api"
axios.defaults.withCredentials = true

export const useAiStore = create((set) => ({
    data: null,
    isLoading: false,
    error: null,

    heart: async (PROMPT) => {
        set({ isLoading: true, error: null })
        try {
            const response = await axios.post(`${API_URL}/heart`, { PROMPT })
            set({ data: response.data, isLoading: false })
        } catch (error) {
            set({ error: error.response.data.message || "Error Fetching Prompt", isLoading: false })
            throw error
        }
    }
}))