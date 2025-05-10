import { useRouter } from 'expo-router'
import { Pressable, Text, View } from 'react-native'
import { useUserStore } from '../../stores/useUserStore'

export default function Account() {
  const { user, logout } = useUserStore()
  const router = useRouter()

  const handleLogout = () => {
    logout()
    router.push('/')
  }

  const handleLogin = () => {
    router.push('/login')
  }

  const handleAdmin = () => {
    router.push('/admin')
  }

  return (
    <View className="flex-1 justify-center items-center px-6 bg-white">
      <Text className="text-2xl font-bold mb-6">Minha Conta</Text>

      {user ? (
        <>
          {user?.role === 'admin' && 
            <Pressable
              onPress={handleAdmin}
              className="bg-blue-600 px-10 py-4 rounded mb-5"
            >
              <Text className="text-white font-semibold">Admin Page</Text>
            </Pressable>
          }
          <Pressable
            onPress={handleLogout}
            className="bg-red-600 px-8 py-3 rounded"
          >
            <Text className="text-white font-semibold">Sair</Text>
          </Pressable>
        </>
      ) : (
        <>
          <Text className="text-gray-500 mb-4">Você não está logado.</Text>
          <Pressable
            onPress={handleLogin}
            className="bg-blue-600 px-6 py-2 rounded"
          >
            <Text className="text-white font-semibold">Entrar</Text>
          </Pressable>
        </>
      )}
    </View>
  )
}
