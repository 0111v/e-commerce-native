import { useRouter } from 'expo-router'
import { useState } from 'react'
import { Alert, Pressable, ScrollView, Text, TextInput, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useUserStore } from '../../stores/useUserStore'

export default function Register() {
  const router = useRouter()
  const { register } = useUserStore()

  const [ username, setUsername ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')

  const handleRegister = async () => {
    if (!username || !email || !password) {
      Alert.alert('Preencha todos os campos')
      return
    }

    try {
      await register(username, email, password)
      router.replace('/(tabs)/account')
    } catch (err) {
      Alert.alert('Erro ao criar conta', err?.response?.data?.message || '')
    }
  }

  return (
    <SafeAreaView className='flex-1'>
      <ScrollView className='flex-1'>
        <View className="flex-1 justify-center px-6">
          <Text className="text-2xl font-bold mb-6 text-center">Criar conta</Text>

          <TextInput
            placeholder="Usuário"
            value={username}
            onChangeText={setUsername}
            autoCapitalize="none"
            className="border px-4 py-2 mb-4 rounded"
          />

          <TextInput
            placeholder="E-mail"
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            keyboardType="email-address"
            className="border px-4 py-2 mb-4 rounded"
          />

          <TextInput
            placeholder="Senha"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            className="border px-4 py-2 mb-6 rounded"
          />

          <Pressable
            onPress={handleRegister}
            className="bg-black py-3 rounded"
          >
            <Text className="text-white text-center font-semibold">
              Criar conta
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
