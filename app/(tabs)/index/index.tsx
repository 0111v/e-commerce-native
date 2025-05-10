import { Link } from 'expo-router'
import { BadgeCheck, ShieldCheck, Truck } from 'lucide-react-native'
import { Image, Pressable, ScrollView, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Carousel from '../../../components/Carousel'
import CarouselAccs from '../../../components/CarouselAccs'
import SearchBar from '../../../components/SearchBar'

export default function Home() {
  return (
    <SafeAreaView className='flex-1' edges={['right', 'top', 'left']}>
          <SearchBar />

            <ScrollView>
        
        <View>
          {/* Hero Banners */}
          <View className="flex">
            <View className="relative">
              <Image
                source={{
                  uri: 'https://images.unsplash.com/photo-1564485377539-4af72d1f6a2f?q=80&w=1974&auto=format&fit=crop',
                }}
                className="w-full h-[600px] object-cover "
                resizeMode="cover"
              />
              <View className="absolute inset-0 justify-center items-center mt-48">
                <Link href="/womans" asChild>
                  <Text className="text-gray-200 underline text-4xl font-bold text-center">
                    Coleção{"\n"}Feminina
                  </Text>
                </Link>
              </View>
            </View>

            <View className="relative w-full">
              <Image
                source={{
                  uri: 'https://images.unsplash.com/photo-1642886513133-cdbee2639272?q=80&w=1964&auto=format&fit=crop',
                }}
                className="w-full h-[600px] object-cover "
                resizeMode="cover"
              />
              <View className="absolute inset-0 justify-center items-center mt-48">
                <Link href="/mens" asChild>
                  <Text className="text-gray-200 underline text-4xl font-bold text-center">
                    Coleção{"\n"}Masculina
                  </Text>
                </Link>
              </View>
            </View>
          </View>

          {/* Lançamentos */}
          <Text className="text-center mt-16 text-gray-800 text-4xl font-bold">Lançamentos</Text>
          <Carousel />
          <View className="items-center mb-16">
            <Link href="/news" asChild>
              <Pressable className="px-8 py-3 bg-black rounded-lg mt-5">
                <Text className="text-white text-center">Ver todos</Text>
              </Pressable>
            </Link>
          </View>

          {/* Acessórios */}
          <Text className="text-center mt-8 text-gray-800 text-4xl font-bold">Acessórios</Text>
          <CarouselAccs />
          <View className="items-center mb-16">
            <Link href="/accs" asChild>
              <Pressable className="px-8 py-3 bg-black rounded-lg mt-5">
                <Text className="text-white text-center">Ver todos</Text>
              </Pressable>
            </Link>
          </View>

          {/* Features */}
          <View className="py-10 mt-8 px-6">
            <View className="flex flex-col gap-6 text-center">

              <View className="bg-white rounded-2xl p-6 items-center shadow">
                <Truck size={48} color="gray" />
                <Text className="text-lg font-semibold mt-2 mb-1">Entrega Rápida</Text>
                <Text className="text-gray-600 text-center">
                  Receba seus produtos com agilidade e segurança.
                </Text>
              </View>

              <View className="bg-white rounded-2xl p-6 items-center shadow">
                <ShieldCheck size={48} color="gray" />
                <Text className="text-lg font-semibold mt-2 mb-1">Site Seguro</Text>
                <Text className="text-gray-600 text-center">
                  Ambiente protegido para uma compra tranquila.
                </Text>
              </View>

              <View className="bg-white rounded-2xl p-6 items-center shadow">
                <BadgeCheck size={48} color="gray" />
                <Text className="text-lg font-semibold mt-2 mb-1">Qualidade Garantida</Text>
                <Text className="text-gray-600 text-center">
                  Peças selecionadas com excelência e sofisticação.
                </Text>
              </View>

            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
