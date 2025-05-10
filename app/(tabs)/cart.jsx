import { useRouter } from 'expo-router'
import { FlatList, Pressable, Text, View } from 'react-native'
import CartItem from '../../components/CartItem'
import { useCartStore } from '../../stores/useCartStore'
import { useUserStore } from '../../stores/useUserStore'

export default function Cart() {
  const { cart } = useCartStore()
  const { token, isLoggedIn } = useUserStore()
  const router = useRouter()

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0)

  const handleCheckout = () => {
    // if (!isLoggedIn) {
    //   router.push({ pathname: '/login', params: { from: '/checkout' } })
    // } else {
    //   router.push('/checkout')
    // }   
    router.push('/checkout')

  }

  if (cart.length === 0) {
    return (
      <View className="flex-1 justify-center items-center px-4">
        <Text className="text-gray-500">Nenhum item no carrinho ainda.</Text>
      </View>
    )
  }

  return (
    <View className="flex-1 bg-white px-4 pt-6">
      <Text className="text-2xl font-bold mb-4">Seu carrinho:</Text>

      <FlatList
        data={cart}
        extraData={cart}                         // <— forces a diff check on every change
        keyExtractor={(item) => `${item._id}`}   // make sure every key is unique
        renderItem={({ item }) => <CartItem item={item} />}
        contentContainerStyle={{ paddingBottom: 100 }}
        removeClippedSubviews={false}            // avoid RN clipping rows with images
      />

      <View className="mt-4 border-t border-gray-300 pt-4 items-end">
        <Text className="text-xl font-semibold mb-2">Total R$ {total.toFixed(2)}</Text>
        <Pressable
          onPress={handleCheckout}
          className="bg-blue-600 py-2 px-4 rounded"
        >
          <Text className="text-white font-semibold">Finalizar a compra</Text>
        </Pressable>
      </View>
    </View>
  )
}
