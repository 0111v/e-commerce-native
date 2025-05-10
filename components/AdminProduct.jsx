import { useState } from 'react'
import { Image, Pressable, Text, TextInput, View } from 'react-native'
import { useProductStore } from '../stores/useProductStore'

export default function AdminProduct({ product, onSuccess }) {
  const { updateProduct, deleteProduct } = useProductStore()

  const [isEditing, setIsEditing]   = useState(false)
  const [edited, setEdited] = useState({
    title:  product.title,
    price:  String(product.price),
    image:  product.image,
    gender: product.gender,
  })

  const handleChange = (key, value) =>
    setEdited((prev) => ({ ...prev, [key]: value }))

  const handleSave = async () => {
    await updateProduct(product._id, {
      ...edited,
      price: parseFloat(edited.price),
    })
    onSuccess()
    setIsEditing(false)
  }

  const handleDelete = async () => {
    await deleteProduct(product._id)
    onSuccess()
  }

  return (
    <View className="flex-1 bg-white border rounded-lg shadow p-4 mb-4">

      {/* edit mode */}
      {isEditing ? (
        <>
          <TextInput
            placeholder="Título"
            value={edited.title}
            onChangeText={(v) => handleChange('title', v)}
            className="border px-2 py-1 mb-2 rounded"
          />
          <TextInput
            placeholder="Preço"
            value={edited.price}
            keyboardType="numeric"
            onChangeText={(v) => handleChange('price', v)}
            className="border px-2 py-1 mb-2 rounded"
          />
          <TextInput
            placeholder="URL da imagem"
            value={edited.image}
            onChangeText={(v) => handleChange('image', v)}
            className="border px-2 py-1 mb-2 rounded"
          />
          <TextInput
            placeholder="Gênero"
            value={edited.gender}
            onChangeText={(v) => handleChange('gender', v)}
            className="border px-2 py-1 mb-4 rounded"
          />

          <View className="flex-row gap-2">
            <Pressable
              onPress={handleSave}
              className="bg-blue-600 flex-1 py-2 rounded items-center"
            >
              <Text className="text-white">Salvar</Text>
            </Pressable>
            <Pressable
              onPress={() => setIsEditing(false)}
              className="bg-gray-400 flex-1 py-2 rounded items-center"
            >
              <Text className="text-white">Cancelar</Text>
            </Pressable>
          </View>
        </>
      ) : (
        /* view mode */
        <>
          <Image
            source={{ uri: product.image }}
            resizeMode="contain"
            className="w-full h-44 mb-4 rounded"
          />
          <Text className="text-lg font-semibold mb-1">{product.title}</Text>
          <Text className="text-gray-700 mb-4">R$ {product.price}</Text>

          <View className="flex-row gap-2 mt-auto">
            <Pressable
              onPress={() => setIsEditing(true)}
              className="bg-blue-600 flex-1 py-2 rounded items-center"
            >
              <Text className="text-white">Editar</Text>
            </Pressable>
            <Pressable
              onPress={handleDelete}
              className="bg-red-600 flex-1 py-2 rounded items-center"
            >
              <Text className="text-white">Excluir</Text>
            </Pressable>
          </View>
        </>
      )}
    </View>
  )
}
