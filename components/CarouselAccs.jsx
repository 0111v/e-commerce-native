import { useRouter } from 'expo-router'
import { useEffect, useState } from 'react'
import { Image, Pressable, Text, View } from 'react-native'
import Swiper from 'react-native-swiper'


export default function Carousel() {
  const [ products, setProducts] = useState([])
    const router = useRouter()
  

  useEffect(() => {
    fetch("https://e-commerce-fullstack-ujqr.onrender.com/products?gender=acc")
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [])

  if (!products.length) {
    return <Text className="text-center mt-10">No products available</Text>
  }

  return (
    <View className="h-[400px] rounded-2xl overflow-hidden mt-6">
      <Swiper
        autoplay
        loop
        autoplayTimeout={4}
        showsPagination
        dotColor="#ccc"
        activeDotColor="#000"
      >
        {products.map((item) => (
          <Pressable
            key={item._id}
            onPress={() => router.push(`/product/${item._id}`)}
            className="w-full h-full"
          >
            <Image
              source={{ uri: item.image }}
              className="w-full h-full object-cover rounded-2xl"
              resizeMode="cover"
            />
          </Pressable>
        ))}
      </Swiper>
    </View>
  )
}
