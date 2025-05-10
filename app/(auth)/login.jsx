import { useRouter } from 'expo-router'
import { useState } from 'react'
import { Pressable, ScrollView, Text, TextInput, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useUserStore } from '../../stores/useUserStore'

export default function Login() {
  const router  = useRouter()
  const { login } = useUserStore()

  const [email,    setEmail]    = useState('')
  const [password, setPassword] = useState('')

  const handle = async () => {
    try {
      await login(email, password)
      router.replace('/(tabs)/account')  
    } catch (err) {
      alert('Falha no login - verifique seus dados')
    }
  }

  const handleCancel = async () => {
    router.replace('/(tabs)/')     
  }

  return (
    <SafeAreaView className='flex-1'>
      <ScrollView className='flex-1'>
        <View className="flex-1 justify-center px-6">
          <Text className="text-2xl font-bold mb-6 text-center">Login</Text>

          <TextInput
            placeholder="E-mail"
            value={email}
            onChangeText={setEmail}
            className="border px-4 py-3 mb-4 rounded"
            autoCapitalize="none"
          />

          <TextInput
            placeholder="Senha"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            className="border px-4 py-3 mb-6 rounded"
          />

          <Pressable onPress={handle} className="bg-black py-5 rounded">
            <Text className="text-white text-center font-semibold">Entrar</Text>
          </Pressable>

          <Pressable onPress={handleCancel} className="bg-gray-500 py-3 rounded mt-3">
            <Text className="text-white text-center font-semibold">Voltar</Text>
          </Pressable>

          <Pressable onPress={() => router.push('/register')}>
          <Text className="text-blue-500 underline text-l text-center mt-5 ">← Criar uma conta</Text>
        </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
