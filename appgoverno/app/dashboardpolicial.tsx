import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Feather } from '@expo/vector-icons'; // Importando Feather para os ícones
import { useRouter } from 'expo-router'; // Importando useRouter para navegação

const DashboardPolicial = () => {
  const router = useRouter();

  return (
    <View style={styles.fullContainer}>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Cabeçalho */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Dashboard Policial</Text>
          <Text style={styles.welcomeText}>Bem-vindo, Investigador</Text>
          <Text style={styles.userInfo}>Inv. João Silva</Text>
          <Text style={styles.userInfo}>Departamento de Investigações</Text>
        </View>

        {/* Resumo de Casos */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Total de Casos</Text>
          <Text style={styles.cardValue}>150</Text>

          <View style={styles.statsRow}>
            <View style={styles.statBox}>
              <Text style={styles.statLabel}>Novos Casos</Text>
              <Text style={styles.statValue}>23</Text>
            </View>
          </View>
        </View>

        {/* Casos em Andamento */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Em Andamento</Text>
          <Text style={styles.cardValue}>89</Text>

          <View style={styles.statsRow}>
            <View style={styles.statBox}>
              <Text style={styles.statLabel}>Concluídos</Text>
              <Text style={styles.statValue}>38</Text>
            </View>
          </View>
        </View>

        {/* Ações Rápidas */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Ações Rápidas</Text>
          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.actionButtonText}>Novo Caso</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.actionButtonText}>Gráficos</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Barra de Navegação */}
      <View style={styles.bottomNavigation}>
        {[
          { icon: "home", path: "/home" },
          { icon: "package", path: "/meusbos" },
          { icon: "user", path: "/user" },
          { icon: "map", path: "/maps" },
          { icon: "settings", path: "/config" }
        ].map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.navButton}
            onPress={() => router.push(item.path)} // Usando router.push para navegação
          >
            <Feather name={item.icon} size={24} color="#000" /> {/* Ícones pretos */}
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  fullContainer: {
    flex: 1,
    backgroundColor: '#F5F6FA', // Fundo mais suave
  },
  container: {
    padding: 20,
    paddingBottom: 80, // Espaço para a navbar
  },
  header: {
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  welcomeText: {
    fontSize: 16,
    color: '#555',
    marginTop: 5,
  },
  userInfo: {
    fontSize: 14,
    color: '#777',
  },
  card: {
    backgroundColor: '#FFF',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#4CAF50', // Verde
  },
  cardValue: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statBox: {
    flex: 1,
    alignItems: 'center',
  },
  statLabel: {
    fontSize: 14,
    color: '#555',
  },
  statValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  actionButton: {
    backgroundColor: '#4CAF50', // Verde
    padding: 15,
    borderRadius: 5,
    marginTop: 10,
    alignItems: 'center',
  },
  actionButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  bottomNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#FFF', // Fundo branco
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#CCC',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  navButton: {
    alignItems: 'center',
  },
});

export default DashboardPolicial;