// components/CartTabIcon.tsx
import { ShoppingCart } from 'lucide-react-native'
import { Text, View } from 'react-native'
import { useCartStore } from '../stores/useCartStore'

export default function CartTabIcon({ color, size }) {
  // live quantity (re-renders automatically when cart changes)
  const count = useCartStore(
    (s) => s.cart.reduce((sum, p) => sum + p.quantity, 0)
  )

  return (
    <View>
      <ShoppingCart color={color} size={size} />

      {count > 0 && (
        <View
          style={{
            position: 'absolute',
            right: -6,
            top: -3,
            backgroundColor: 'red',
            borderRadius: 8,
            paddingHorizontal: 4,
            minWidth: 16,
            height: 16,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text style={{ color: 'white', fontSize: 10, fontWeight: '600' }}>
            {count}
          </Text>
        </View>
      )}
    </View>
  )
}
