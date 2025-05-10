import { useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Pressable, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AddProductModal from '../components/AddProductModal';
import AdminProduct from '../components/AdminProduct';
import { useProductStore } from '../stores/useProductStore';

export default function Admin() {
  const router              = useRouter()
  const [showModal, setShowModal] = useState(false)

  const { products, getAllProducts } = useProductStore()

  useEffect(() => { getAllProducts() }, [])

  if (!products) {
    return (
      <View className="flex-1 justify-center items-center">
        <ActivityIndicator size="large" />
      </View>
    )
  }

  return (
    <SafeAreaView className='flex-1'>
      <View className="flex-1 bg-white">

        <View className="flex-row justify-between p-4">
          <Pressable
            onPress={() => setShowModal(true)}
            className="bg-green-600 px-4 py-2 rounded"
          >
            <Text className="text-white font-semibold">Novo produto</Text>
          </Pressable>

          <Pressable
            onPress={() => {
              router.replace('/(tabs)/account')
            }}
            className="bg-blue-600 px-4 py-2 rounded"
          >
            <Text className="text-white font-semibold">Perfil</Text>
          </Pressable>
        </View>

        {showModal && (
          <AddProductModal
            onClose={() => setShowModal(false)}
            onAdd={getAllProducts}
          />
        )}

        <FlatList
          data={products}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => (
            <AdminProduct
              product={item}
              onSuccess={getAllProducts}
            />
          )}
          numColumns={2}
          columnWrapperStyle={{ gap: 12 }}
          contentContainerStyle={{
            paddingHorizontal: 12,
            paddingBottom: 120,
            gap: 12,
          }}
        />
      </View>
    </SafeAreaView>
  )
}
