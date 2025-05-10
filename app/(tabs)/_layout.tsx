import { Tabs } from 'expo-router'
import { Home, User } from 'lucide-react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import CartTabIcon from '../../components/cartIcon'
import "../../global.css"


export default function TabsLayout() {
  const insets = useSafeAreaInsets()

  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: 'white',
          borderTopColor: '#ccc',
          height: 60 + insets.bottom, // add safe area at the bottom ✅
          paddingBottom: insets.bottom, // push icons up
          paddingTop: 8,
        },
        tabBarActiveTintColor: 'black',
        tabBarLabelStyle: {
          fontSize: 12,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Início',
          headerShown: false,
          tabBarIcon: ({ color, size }) => <Home color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          title: 'Carrinho',
          tabBarIcon: ({ color, size }) => <CartTabIcon color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          title: 'Conta',
          tabBarIcon: ({ color, size }) => <User color={color} size={size} />,
        }}
      />
    </Tabs>
  )
}


// import { Stack } from "expo-router";
// import { Tabs } from 'expo-router'
// import { Home, ShoppingCart, User } from 'lucide-react-native'
// import "../../global.css"

// export default function Layout() {
//   return (
//     <Tabs
//       screenOptions={{
//         tabBarActiveTintColor: 'black',
//         tabBarStyle: {
//           backgroundColor: 'white',
//           borderTopColor: '#ccc',
//           height: 60,
//         },
//         tabBarLabelStyle: {
//           fontSize: 12,
//         },
//       }}
//     >
//       <Tabs.Screen
//         name="index"
//         options={{
//           title: 'Início',
//           headerShown: false,
//           tabBarIcon: ({ color, size }) => <Home size={size} color={color} />,
//         }}
//       />
//       <Tabs.Screen
//         name="cart"
//         options={{
//           title: 'Carrinho',
//           tabBarIcon: ({ color, size }) => <ShoppingCart size={size} color={color} />,
//         }}
//       />
//       <Tabs.Screen
//         name="account"
//         options={{
//           title: 'Conta',
//           tabBarIcon: ({ color, size }) => <User size={size} color={color} />,
//         }}
//       />
//     </Tabs>
//   )
// }
