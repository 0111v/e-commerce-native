import { useEffect } from 'react'
import { FlatList, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import ProductCard from '../../../components/ProductCard'
import SearchBar from '../../../components/SearchBar'
import { useProductStore } from '../../../stores/useProductStore'


export default function MensPage() {
  const { products, getProductsByQuery } = useProductStore()

  useEffect(() => {
    const fetchProducts = async () => {
      await getProductsByQuery('gender=acc')
    }
    fetchProducts()
  }, [])

  return (
    <SafeAreaView className='flex-1' edges={['right', 'top', 'left']}>
      <SearchBar />
      <View className="flex-1 bg-white px-4">
      {/* <Text className="text-3xl font-bold text-center mb-4">Coleção Masculina</Text> */}

      <FlatList
        data={products}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => <ProductCard product={item} />}
        contentContainerStyle={{ gap: 16, paddingBottom: 24 }}
      />
    </View>
    </SafeAreaView>
  )
}
