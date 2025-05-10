// stores/useSearchStore.js
import AsyncStorage from '@react-native-async-storage/async-storage'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useSearchStore = create(
  persist(
    (set) => ({
      search: '',
      setSearch: (value) => set({ search: value }),
    }),
    {
      name: 'search-storage',

      /* AsyncStorage adapter – stringify on write */
      storage: {
        getItem: (k) => AsyncStorage.getItem(k),
        setItem: (k, v) => AsyncStorage.setItem(k, JSON.stringify(v)),
        removeItem: (k) => AsyncStorage.removeItem(k),
      },
    }
  )
)
