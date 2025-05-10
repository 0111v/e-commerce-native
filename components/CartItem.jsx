import { Image, Pressable, Text, View } from 'react-native'
import { useCartStore } from '../stores/useCartStore'

export default function CartItem({ item }) {
  const { increaseQty, decreaseQty, removeFromCart } = useCartStore()

  return (
    <View className="bg-white rounded-lg border border-gray-200 shadow mb-4 p-4">
      {/* image gets its own box so the rest of the row never re-flows */}
      <View className="h-60 w-full mb-4 overflow-hidden rounded bg-gray-100">
        <Image
          source={{ uri: item.image }}
          resizeMode="contain"
          style={{ width: '100%', height: '100%' }}
        />
      </View>

      {/* text & buttons */}
      <Text className="font-semibold text-lg mb-1">{item.title}</Text>
      <Text className="text-sm text-gray-600">
        Preço unitário: R$ {item.price.toFixed(2)}
      </Text>

      <View className="flex-row items-center mt-3">
        <Pressable
          onPress={() => decreaseQty(item._id)}
          disabled={item.quantity === 1}
          className="bg-gray-200 px-3 py-1 rounded disabled:opacity-50"
        >
          <Text>-</Text>
        </Pressable>

        <Text className="mx-2">{item.quantity}</Text>

        <Pressable
          onPress={() => increaseQty(item._id)}
          className="bg-gray-200 px-3 py-1 rounded"
        >
          <Text>+</Text>
        </Pressable>

        <Pressable
          onPress={() => removeFromCart(item._id)}
          className="bg-red-500 px-3 py-1 rounded ml-auto"
        >
          <Text className="text-white">Remover</Text>
        </Pressable>
      </View>
    </View>
  )
}
