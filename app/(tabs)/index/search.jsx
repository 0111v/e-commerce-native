import { useEffect } from 'react'
import { FlatList, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import ProductCard from '../../../components/ProductCard'
import SearchBar from '../../../components/SearchBar'
import { useProductStore } from '../../../stores/useProductStore'
import { useSearchStore } from '../../../stores/useSearchStore'


export default function SearchPage() {
  const { products } = useProductStore()
  const { search, getAllProducts } = useSearchStore()

  useEffect(() => {
    const fetchProducts = async () => {
      await getAllProducts()
    }
    fetchProducts()
  }, [])


  return (
    <SafeAreaView className='flex-1' edges={['right', 'top', 'left']}>
      <SearchBar />
      <View className="flex-1 bg-white px-4">
      {/* <Text className="text-3xl font-bold text-center mb-4">Coleção Masculina</Text> */}

      <FlatList
        data={products.filter((product) => product.title.toLowerCase().includes(search.toLowerCase()))}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => <ProductCard product={item} />}
        contentContainerStyle={{ gap: 16, paddingBottom: 24 }}
      />
    </View>
    </SafeAreaView>
  )
}
