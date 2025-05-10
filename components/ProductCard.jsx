import { Link } from 'expo-router'
import { Image, Pressable, Text, View } from 'react-native'
import { useCartStore } from '../stores/useCartStore'

export default function ProductCard({ product }) {
  const { addToCart } = useCartStore()

  return (
    <View className="bg-white rounded-lg shadow-md overflow-hidden">
      <Link href={`/product/${product._id}`} asChild>
        <Pressable className="items-center justify-center">
          <Image
            source={{ uri: product.image }}
            className="w-full h-[400px] object-cover"
            resizeMode="cover"
          />
        </Pressable>
      </Link>

      <View className="px-4 py-2 flex flex-col">
        <Text className="text-lg font-medium text-gray-800 mb-1">
          {product.title.length > 40 ? product.title.slice(0, 40) + '...' : product.title}
        </Text>

        <Text className="text-md font-semibold text-green-600 mb-2">
          R$ {product.price.toFixed(2)}
        </Text>

        <Pressable
          className="mt-2 bg-black py-2 px-4 rounded"
          onPress={() => addToCart(product)}
        >
          <Text className="text-white text-center font-semibold">Adicionar ao carrinho</Text>
        </Pressable>
      </View>
    </View>
  )
}
