import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useRouter } from 'expo-router'; // Usando o useRouter para navegação

const Navbar = () => {
  const router = useRouter();

  return (
    <View style={styles.bottomNavigation}>
      {[{ icon: "home", path: "/home" },
        { icon: "package", path: "/meusbos" },
        { icon: "user", path: "/user" },
        { icon: "map", path: "/map" },
        { icon: "settings", path: "/settings" }]
        .map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.navButton}
            onPress={() => router.push(item.path)} // Navegação entre telas
          >
            <Feather name={item.icon} size={24} color="#000" />
          </TouchableOpacity>
        ))}
    </View>
  );
};

const styles = StyleSheet.create({
  bottomNavigation: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#B2FF9E",
    padding: 15,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
  navButton: {
    alignItems: "center",
  },
});

export default Navbar;
