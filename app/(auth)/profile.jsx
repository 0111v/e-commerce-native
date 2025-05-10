import { useRouter } from 'expo-router'
import { Pressable, Text, View } from 'react-native'
import { useUserStore } from '../../stores/useUserStore'

export default function Profile() {
  const { user, logout } = useUserStore()
  const router = useRouter()

  return (
    <View className="flex-1 justify-center items-center px-6">
      <Text className="text-xl font-bold mb-4">Olá, {user?.username}</Text>

      <Pressable
        onPress={async () => { await logout(); router.replace('/'); }}
        className="bg-red-600 px-6 py-2 rounded"
      >
        <Text className="text-white">Sair</Text>
      </Pressable>
    </View>
  )
}
