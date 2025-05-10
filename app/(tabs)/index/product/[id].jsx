import { useLocalSearchParams, useRouter } from 'expo-router'
import { useEffect, useState } from 'react'
import { ActivityIndicator, Image, Pressable, ScrollView, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useCartStore } from '../../../../stores/useCartStore'
import { useProductStore } from '../../../../stores/useProductStore'

export default function ProductDetails() {
  const { id } = useLocalSearchParams()
  const router = useRouter()
  const { getProductById } = useProductStore()
  const { addToCart } = useCartStore()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProduct = async () => {
      const data = await getProductById(id)
      setProduct(data)
      setLoading(false)
    }

    fetchProduct()
  }, [id])

  if (loading) {
    return <ActivityIndicator className="mt-20" />
  }

  if (!product) {
    return (
      <View className="flex-1 justify-center items-center">
        <Text>Produto não encontrado.</Text>
      </View>
    )
  }

  return (
    <SafeAreaView className='flex-1'>
          <ScrollView className="flex-1 px-4 pt-6">
      <Image
        source={{ uri: product.image }}
        className="w-full h-[400px] rounded-xl mb-4"
        resizeMode="contain"
      />

      <View className="items-center">
        <Text className="text-2xl font-bold mb-2">{product.title}</Text>
        <Text className="text-xl text-green-600 font-semibold mb-4">R$ {product.price.toFixed(2)}</Text>
        <Text className="text-gray-700 mb-6 text-center">{product.description}</Text>

        <Pressable
          onPress={() => addToCart(product)}
          className="bg-black py-2 px-8 rounded mb-4"
        >
          <Text className="text-white font-semibold">Adicionar ao Carrinho</Text>
        </Pressable>

        <Pressable onPress={() => router.push('/')}>
          <Text className="text-blue-500 underline text-sm">← Voltar para os produtos</Text>
        </Pressable>
      </View>
    </ScrollView>
    </SafeAreaView>
  )
}
