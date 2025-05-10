import AsyncStorage from '@react-native-async-storage/async-storage'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useCartStore = create(
  persist(
    (set) => ({
      cart: [],

      addToCart: (product) => {
        set((state) => {
          const existingItem = state.cart.find((item) => item._id === product._id)
      
          if (existingItem) {
            const updatedCart = state.cart.map((item) =>
              item._id === product._id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            )      
            return { cart: updatedCart }
          } else {
            const newCart = [...state.cart, { ...product, quantity: 1 }]      
            return { cart: newCart }
          }
        })
      },

      removeFromCart: (id) => {
        set((state) => ({
          cart: state.cart.filter((item) => item._id !== id),
        }))
      },

      increaseQty: (id) => {
        set((state) => ({
          cart: state.cart.map((item) =>
            item._id === id ? { ...item, quantity: item.quantity + 1 } : item
          ),
        }))
      },

      decreaseQty: (id) => {
        set((state) => ({
          cart: state.cart.map((item) =>
            item._id === id && item.quantity > 1
              ? { ...item, quantity: item.quantity - 1 }
              : item
          ),
        }))
      },

      clearCart: () => {
        set({ cart: [] })
      },
    }),
    {
      name: 'cart-storage',
      storage: {
        getItem: async (key) => {
          const value = await AsyncStorage.getItem(key)
          return value !== null ? value : null
        },
        setItem: async (key, value) => {
          await AsyncStorage.setItem(key, JSON.stringify(value)) // ✅ stringified!
        },
        removeItem: async (key) => {
          await AsyncStorage.removeItem(key)
        },
      },
    }
  )
)
