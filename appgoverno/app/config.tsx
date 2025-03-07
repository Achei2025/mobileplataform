import React from "react";
import { View, Text, Switch, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useRouter } from 'expo-router'; // Importando o useRouter para importar as telas

const ConfigScreen = () => {
  const [notificacoesApp, setNotificacoesApp] = React.useState(false);
  const [notificacoesEmail, setNotificacoesEmail] = React.useState(false);
  const router = useRouter(); // Inicializando o router

  return (
    <View style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Configurações</Text>
      </View>

      {/* Caixa de Notificações */}
      <View style={styles.box}>
        <Text style={styles.boxTitle}>Notificações</Text>
        <View style={styles.switchContainer}>
          <Text>Notificações do aplicativo</Text>
          <Switch value={notificacoesApp} onValueChange={setNotificacoesApp} />
        </View>
        <View style={styles.switchContainer}>
          <Text>Notificações no e-mail</Text>
          <Switch value={notificacoesEmail} onValueChange={setNotificacoesEmail} />
        </View>
      </View>

      {/* Opções de Configuração */}
      <ScrollView style={styles.optionsContainer}>
        {[{ icon: "user", text: "Editar Perfil", path: "/EditProfileScreen" },
          { icon: "lock", text: "Alterar Senha", path: "/alterar-senha" },
          { icon: "help-circle", text: "Ajuda e Suporte", path: "/ajuda-suporte" }]
          .map((item, index) => (
            <TouchableOpacity 
              key={index} 
              style={styles.option}
              onPress={() => router.push(item.path)} // Usando router.push para navegação
            >
              <Feather name={item.icon} size={20} color="#000" style={styles.icon} />
              <Text style={styles.optionText}>{item.text}</Text>
            </TouchableOpacity>
          ))}
      </ScrollView>

      {/* Botão de Sair */}
      <TouchableOpacity style={styles.logoutButton} onPress={() => alert("Saindo...")}>
        <Text style={styles.logoutButtonText}>Sair</Text>
      </TouchableOpacity>

      {/* Barra de Navegação */}
      <View style={styles.bottomNavigation}>
        {[{ icon: "home", path: "/casos" },
          { icon: "package", path: "/meusbos" },
          { icon: "user", path: "/estatisticas" },
          { icon: "map", path: "/maps" },
          { icon: "settings", path: "/settings" }]
          .map((item, index) => (
            <TouchableOpacity 
              key={index} 
              style={styles.navButton} 
              onPress={() => router.push(item.path)} // Usando router.push para navegação
            >
              <Feather name={item.icon} size={24} color="#000" />
            </TouchableOpacity>
          ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E5E5E5",
    justifyContent: "flex-start",
    paddingBottom: 60,
  },
  header: {
    backgroundColor: "#B2FF9E",
    padding: 15,
    alignItems: "center",
    marginBottom: 10,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
  },
  box: {
    backgroundColor: "#fff",
    marginHorizontal: 10,
    padding: 15,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
    marginBottom: 20,
  },
  boxTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
    alignSelf: "flex-start",
  },
  switchContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginBottom: 10,
  },
  optionsContainer: {
    marginBottom: 10,
  },
  option: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 15,
    marginBottom: 10,
    marginHorizontal: 20,
    borderRadius: 5,
    justifyContent: "center",
    width: "90%", // Reduzido para mais centralizado
    borderWidth: 1, // Borda branca
    borderColor: "#fff", // Cor da borda branca
    shadowColor: "#000", // Sombra
    shadowOpacity: 0.1, // Opacidade da sombra
    shadowRadius: 5, // Raio da sombra
    elevation: 3, // Sombra para Android
  },
  icon: {
    marginRight: 10,
  },
  optionText: {
    fontSize: 16,
  },
  logoutButton: {
    backgroundColor: "#FF3B30",
    padding: 15,
    marginHorizontal: 10,
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 20,
  },
  logoutButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
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

export default ConfigScreen;
