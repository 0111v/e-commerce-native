import { useState } from 'react'
import {
  Keyboard,
  Modal,
  Pressable,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native'
import { useProductStore } from '../stores/useProductStore'

export default function AddProductModal({ onClose, onAdd, visible = true }) {
  const createProduct = useProductStore((s) => s.createProduct)

  const [product, setProduct] = useState({
    title: '',
    price: '',
    image: '',
    gender: '',
  })

  const handleChange = (key, value) =>
    setProduct((prev) => ({ ...prev, [key]: value }))

  const handleSubmit = async () => {
    try {
      await createProduct({
        ...product,
        price: parseFloat(product.price),
      })
      onAdd()
      onClose()
    } catch (err) {
      console.error(err?.response?.data?.message || err.message)
    }
  }

  return (
    <Modal
      visible={visible}
      animationType="fade"
      transparent
      onRequestClose={onClose}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View className="flex-1 bg-black/60 justify-center items-center px-4">
          <View className="bg-white w-full max-w-sm rounded-lg p-6">
            <Text className="text-xl font-bold mb-4">Novo Produto</Text>

            <TextInput
              placeholder="Título"
              value={product.title}
              onChangeText={(v) => handleChange('title', v)}
              className="border px-3 py-2 mb-2 rounded"
            />
            <TextInput
              placeholder="Preço"
              value={product.price}
              onChangeText={(v) => handleChange('price', v)}
              keyboardType="numeric"
              className="border px-3 py-2 mb-2 rounded"
            />
            <TextInput
              placeholder="URL da imagem"
              value={product.image}
              onChangeText={(v) => handleChange('image', v)}
              className="border px-3 py-2 mb-2 rounded"
            />
            <TextInput
              placeholder="Gênero"
              value={product.gender}
              onChangeText={(v) => handleChange('gender', v)}
              className="border px-3 py-2 mb-4 rounded"
            />

            <View className="flex-row justify-end gap-2">
              <Pressable
                onPress={onClose}
                className="bg-gray-300 px-4 py-2 rounded"
              >
                <Text>Cancelar</Text>
              </Pressable>
              <Pressable
                onPress={handleSubmit}
                className="bg-green-600 px-4 py-2 rounded"
              >
                <Text className="text-white">Adicionar</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  )
}
