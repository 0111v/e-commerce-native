import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'


axios.defaults.baseURL = 'https://e-commerce-fullstack-ujqr.onrender.com'
axios.defaults.withCredentials = true   

export const useUserStore = create(
  persist(
    (set) => ({
      user: null,

      login: async (email, password) => {
        const res = await axios.post('/auth/login', { email, password })
        set({ user: res.data.user })
      },

      register: async (username, email, password) => {
        const res = await axios.post('/auth/register', {
          username,
          email,
          password,
        })
        set({ user: res.data.user })
      },

      getProfile: async () => {
        const res = await axios.get('/auth/profile')
        set({ user: res.data.user })
      },

      logout: async () => {
        await axios.post('/auth/logout')
        set({ user: null })
      },

      refreshToken: async () => {
        await axios.post('/auth/refresh')
      },
    }),
    {
      name: 'user-storage',

      
      storage: {
        getItem: (key) => AsyncStorage.getItem(key),
        setItem: (key, value) =>
          AsyncStorage.setItem(key, JSON.stringify(value)),
        removeItem: (key) => AsyncStorage.removeItem(key),
      },

      
      partialize: (state) => ({ user: state.user }),
    }
  )
)


axios.interceptors.response.use(
  (res) => res,
  async (err) => {
    const original = err.config
    if (err.response?.status === 401 && !original._retry) {
      original._retry = true
      try {
        await axios.post('/auth/refresh')       
        return axios(original)                  
      } catch {
        useUserStore.getState().logout()        
      }
    }
    return Promise.reject(err)
  }
)
