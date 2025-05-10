import { useRouter } from 'expo-router'
import { Alert, FlatList, Pressable, ScrollView, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useCartStore } from '../stores/useCartStore'

export default function Checkout() {
  const router = useRouter()
  const { cart, clearCart } = useCartStore()

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0)

  const handlePlaceOrder = () => {
    Alert.alert(
      'Pedido realizado! 🎉',
      'Este é um projeto fictício para fins de estudo; nenhum pedido real foi feito.',
      [{ text: 'OK', onPress: () => router.replace('/') }]
    )
    clearCart()
  }

  const handleCancel = () => {
    router.replace('/')
  }

  /* ---------- empty cart ---------- */
  if (cart.length === 0) {
    return (
      <View className="flex-1 justify-center items-center px-6">
        <Text className="text-gray-600 mb-4 text-center">
          Seu carrinho está vazio.
        </Text>
        <Pressable
          onPress={() => router.push('/')}
          className="bg-blue-600 px-6 py-2 rounded"
        >
          <Text className="text-white font-semibold">Voltar para a loja</Text>
        </Pressable>
      </View>
    )
  }

  /* ---------- checkout view ---------- */
  return (
        <SafeAreaView className='flex-1' edges={['right', 'top', 'left']}>
          <ScrollView className="flex-1 bg-white px-4 pt-6">
            <Text className="text-2xl font-bold text-center mb-6">
              Resumo do Pedido
            </Text>

            <FlatList
              data={cart}
              keyExtractor={(item) => item._id}
              renderItem={({ item }) => (
                <View className="bg-white p-4 rounded-lg shadow mb-4 flex-row justify-between items-center">
                  <View>
                    <Text className="font-semibold">{item.title}</Text>
                    <Text className="text-sm text-gray-600">{item.quantity}x</Text>
                  </View>
                  <Text className="font-medium">
                    R$ {(item.price * item.quantity).toFixed(2)}
                  </Text>
                </View>
              )}
              scrollEnabled={false}
            />

            <View className="items-end mt-4 mb-10">
              <Text className="text-xl font-semibold">
                Total: R$ {total.toFixed(2)}
              </Text>
            </View>

            <Pressable
              onPress={handlePlaceOrder}
              className="bg-green-600 px-6 py-3 rounded items-center mb-5"
            >
              <Text className="text-white font-semibold text-lg">
                Finalizar Pedido
              </Text>
            </Pressable>

            <Pressable
              onPress={handleCancel}
              className="bg-red-600 px-6 py-3 rounded items-center mb-10"
            >
              <Text className="text-white font-semibold text-lg">
                Cancelar
              </Text>
            </Pressable>
          </ScrollView>
        </SafeAreaView>

  )
}
