import React from "react";
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router"; // Importando useRouter para navegação

const casos = [
  {
    id: "C001",
    nome: "Caso C001",
    tipo: "Furto",
    data: "2023-11-20",
    local: "Avenida Paulista, 1000",
    descricao: "Furto de celular",
    status: "Novo",
  },
  // Adicione mais casos aqui conforme necessário
];

const CasosScreen = () => {
  const router = useRouter(); // Usando useRouter para navegação

  return (
    <View style={styles.fullContainer}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Casos Atribuídos</Text>
      </View>

      {/* Área de busca e filtros */}
      <View style={styles.searchArea}>
        <TextInput 
          style={styles.searchInput} 
          placeholder="Buscar casos" 
          placeholderTextColor="#888" // Cor do placeholder
        />
        <View style={styles.filterContainer}>
          <TouchableOpacity style={styles.filterButton}>
            <Text style={styles.filterButtonText}>Todos os tipos ⌄</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterButton}>
            <Text style={styles.filterButtonText}>Todos os Status ⌄</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Lista de Casos */}
      <FlatList
        data={casos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.casoCard}>
            <Text style={styles.casoTitle}>{item.nome}</Text>
            <Text style={styles.casoInfo}>{item.tipo} - {item.data}</Text>
            <Text style={styles.casoInfo}>Local: {item.local}</Text>
            <Text style={styles.casoDescricao}>{item.descricao}</Text>
            <TouchableOpacity style={styles.detailsButton}>
              <Ionicons name="document-text-outline" size={16} color="#4CAF50" />
              <Text style={styles.detailsButtonText}> Ver detalhes</Text>
            </TouchableOpacity>
          </View>
        )}
        contentContainerStyle={styles.flatListContent} // Adicionando padding para a navbar
      />

      {/* Barra de Navegação */}
      <View style={styles.bottomNavigation}>
        {[
          { icon: "home", path: "/home" },
          { icon: "person", path: "/user" },
          { icon: "map", path: "/map" },
          { icon: "settings", path: "/settings" }
        ].map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.navButton}
            onPress={() => router.push(item.path)} // Usando router.push para navegação
          >
            <Ionicons name={item.icon} size={24} color="#4CAF50" /> {/* Ícones verdes */}
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  fullContainer: {
    flex: 1,
    backgroundColor: "#F5F6FA", // Fundo mais suave
  },
  header: {
    backgroundColor: "#4CAF50", // Verde
    padding: 20,
    alignItems: "center",
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFF", // Texto branco
  },
  searchArea: {
    padding: 15,
    backgroundColor: "#FFF", // Fundo branco
    borderBottomWidth: 1,
    borderBottomColor: "#EEE",
  },
  searchInput: {
    backgroundColor: "#F5F5F5", // Fundo cinza claro
    padding: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#DDD",
    marginBottom: 10,
    color: "#000", // Texto preto
  },
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  filterButton: {
    flex: 1,
    padding: 10,
    backgroundColor: "#E0E0E0", // Cinza claro
    borderRadius: 8,
    alignItems: "center",
    marginHorizontal: 5,
  },
  filterButtonText: {
    color: "#333", // Texto escuro
  },
  casoCard: {
    backgroundColor: "#FFF", // Fundo branco
    padding: 15,
    margin: 10,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  casoTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333", // Texto escuro
  },
  casoInfo: {
    fontSize: 14,
    color: "#555", // Texto cinza
    marginTop: 5,
  },
  casoDescricao: {
    fontSize: 14,
    color: "#777", // Texto cinza mais claro
    marginTop: 5,
  },
  detailsButton: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    backgroundColor: "#E8F5E9", // Verde claro
    padding: 10,
    borderRadius: 8,
  },
  detailsButtonText: {
    color: "#4CAF50", // Verde
    marginLeft: 5,
  },
  flatListContent: {
    paddingBottom: 80, // Espaço para a navbar
  },
  bottomNavigation: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#FFF", // Fundo branco
    paddingVertical: 15,
    borderTopWidth: 1,
    borderTopColor: "#EEE",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
  navButton: {
    alignItems: "center",
  },
});

export default CasosScreen;