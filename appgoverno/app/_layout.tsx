import { Tabs, usePathname } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';

export default function TabLayout() {
  const pathname = usePathname(); // Obtém a rota atual

  // Define se a Tab Bar deve ser exibida
  const shouldShowTabBar = pathname.includes('/meusbos') || pathname.includes('/registrarbo') || pathname.includes('/meusequipamentos') || pathname.includes('/HomeScreen');

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#007AFF',
        tabBarInactiveTintColor: '#888',
        tabBarStyle: shouldShowTabBar
          ? {
              backgroundColor: '#fff',
              height: 60,
              borderTopLeftRadius: 15,
              borderTopRightRadius: 15,
              borderTopWidth: 0,
              shadowColor: '#000',
              shadowOpacity: 0.1,
              shadowRadius: 10,
              elevation: 10,
            }
          : { display: 'none' }, // Esconde a tab bar em outras telas
      }}
    >
      <Tabs.Screen
        name="registrarbo_navebar"
        options={{
          tabBarLabel: 'Registrar BO',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="post-add" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="meusbos_navebar"
        options={{
          tabBarLabel: 'Meus B.O.s',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="assignment" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="meusequipamentos"
        options={{
          tabBarLabel: 'Equipamentos',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="assignment" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="HomeScreen"
        options={{
          tabBarLabel: 'HomeScreen',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="assignment" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
