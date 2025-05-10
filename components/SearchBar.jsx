import { useRouter } from 'expo-router'
import { Search } from 'lucide-react-native'
import { Pressable, TextInput, View } from 'react-native'
import { useSearchStore } from '../stores/useSearchStore'

export default function SearchBar() {
  const { search, setSearch } = useSearchStore()
  const router = useRouter()

  const handleSearch = () => {
    if (search.trim()) {
      router.push('/news')
    }
  }

  return (
      <View className="flex-row items-center gap-2 px-4 py-2">
      <TextInput
        placeholder="Buscar produto"
        value={search}
        onChangeText={setSearch}
        onSubmitEditing={handleSearch}
        returnKeyType="search"
        className="flex-1 px-4 py-2 border border-gray-300 rounded-md text-base bg-white"
      />
      <Pressable onPress={handleSearch}>
        <Search size={24} color="gray" />
      </Pressable>
    </View>
  )
}
