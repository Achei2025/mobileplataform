// import { Tabs, usePathname } from 'expo-router';
// import { MaterialIcons } from '@expo/vector-icons';

// export default function TabLayout() {
//   const pathname = usePathname(); // Obtém a rota atual

//   // Define se a Tab Bar deve ser exibida
//   const shouldShowTabBar = pathname.includes('/meusbos') || pathname.includes('/registrarbo') || pathname.includes('/meusequipamentos') || pathname.includes('/HomeScreen') || 
//   pathname.includes('/explore') || pathname.includes('/criarbo') || pathname.includes('/cadastroequipamento') || pathname.includes('/casos');

//   return (
//     <Tabs
//       screenOptions={{
//         headerShown: false,
//         tabBarActiveTintColor: '#fff',  // Cor do ícone ativo
//         tabBarInactiveTintColor: '#888',  // Cor do ícone inativo
//         tabBarStyle: shouldShowTabBar
//           ? {
//               backgroundColor: '#28a745',  // Cor verde para a barra de navegação
//               height: 70,
//               borderTopLeftRadius: 25,  // Curvando as bordas
//               borderTopRightRadius: 25,
//               borderTopWidth: 0,
//               shadowColor: '#000',
//               shadowOpacity: 0.1,
//               shadowRadius: 10,
//               elevation: 10,
//               position: 'absolute',
//               bottom: 0,
//               left: 0,
//               right: 0,
//             }
//           : { display: 'none' }, // Esconde a tab bar em outras telas
//       }}
//     >
//       {/* Aba de Registrar B.O. */}
//       <Tabs.Screen
//         name="registrarbo_navebar"
//         options={{
//           tabBarLabel: 'Registrar B.O.',
//           tabBarIcon: ({ color, size }) => (
//             <MaterialIcons name="post-add" size={size} color={color} />
//           ),
//         }}
//       />
      
//       {/* Aba Meus B.O.s (Com Destaque) */}
//       <Tabs.Screen
//         name="meusbos_navebar"
//         options={{
//           tabBarLabel: 'Meus B.O.s',
//           tabBarIcon: ({ color, size }) => (
//             <MaterialIcons name="assignment" size={size} color={color} />
//           ),
//         }}
//       />
      
//       {/* Aba de Equipamentos */}
//       <Tabs.Screen
//         name="meusequipamentos"
//         options={{
//           tabBarLabel: 'Equipamentos',
//           tabBarIcon: ({ color, size }) => (
//             <MaterialIcons name="laptop" size={size} color={color} />
//           ),
//         }}
//       />

//       {/* Aba de Informações */}
//       <Tabs.Screen
//         name="informacoes"
//         options={{
//           tabBarLabel: 'Informações',
//           tabBarIcon: ({ color, size }) => (
//             <MaterialIcons name="badge" size={size} color={color} />
//           ),
//         }}
//       />
      
//       {/* Aba de Mapa GPS */}
//       <Tabs.Screen
//         name="mapa"
//         options={{
//           tabBarLabel: 'Mapa',
//           tabBarIcon: ({ color, size }) => (
//             <MaterialIcons name="place" size={size} color={color} />
//           ),
//         }}
//       />
      
//       {/* Aba de Configurações */}
//       <Tabs.Screen
//         name="configuracoes"
//         options={{
//           tabBarLabel: 'Configurações',
//           tabBarIcon: ({ color, size }) => (
//             <MaterialIcons name="settings" size={size} color={color} />
//           ),
//         }}
//       />
//     </Tabs>
//   );
// }
