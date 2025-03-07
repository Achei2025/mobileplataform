import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Feather } from '@expo/vector-icons'; // Importando Feather para os ícones
import { useRouter } from 'expo-router'; // Importando useRouter para navegação

const EstatisticasScreen = () => {
  const router = useRouter();

  return (
    <View style={styles.fullContainer}>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Cabeçalho */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Estatísticas</Text>
        </View>

        {/* Gráfico de Ocorrências por Tipo */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Ocorrências por Tipo</Text>
          <Text style={styles.cardSubtitle}>Distribuição mensal de ocorrências</Text>

          {/* Gráfico Fictício */}
          <View style={styles.chartPlaceholder}>
            <Text style={styles.chartText}>Gráfico de Ocorrências por Tipo</Text>
          </View>

          {/* Legenda Fictícia */}
          <View style={styles.legend}>
            <View style={styles.legendItem}>
              <View style={[styles.legendColor, { backgroundColor: '#FF6384' }]} />
              <Text style={styles.legendText}>Furtos</Text>
            </View>
            <View style={styles.legendItem}>
              <View style={[styles.legendColor, { backgroundColor: '#36A2EB' }]} />
              <Text style={styles.legendText}>Roubos</Text>
            </View>
            <View style={styles.legendItem}>
              <View style={[styles.legendColor, { backgroundColor: '#FFCE56' }]} />
              <Text style={styles.legendText}>Outros</Text>
            </View>
          </View>
        </View>

        {/* Gráfico de Casos Resolvidos */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Casos Resolvidos</Text>
          <Text style={styles.cardSubtitle}>Comparação entre casos resolvidos e total de casos</Text>

          {/* Gráfico Fictício */}
          <View style={styles.chartPlaceholder}>
            <Text style={styles.chartText}>Gráfico de Casos Resolvidos</Text>
          </View>
        </View>

        {/* Filtros */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Filtros</Text>
          <Text style={styles.cardSubtitle}>Selecione o período para visualizar as estatísticas</Text>

          {/* Filtro de Período */}
          <TouchableOpacity style={styles.filterButton}>
            <Text style={styles.filterButtonText}>Selecione o período</Text>
          </TouchableOpacity>

          {/* Filtro de Zona */}
          <TouchableOpacity style={styles.filterButton}>
            <Text style={styles.filterButtonText}>Selecione a zona</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Barra de Navegação */}
      <View style={styles.bottomNavigation}>
        {[
          { icon: "home", path: "/dashboardpolicial" },
          { icon: "package", path: "/meusbos" },
          { icon: "user", path: "/estatisticas" },
          { icon: "map", path: "/map" },
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
  cardSubtitle: {
    fontSize: 14,
    color: '#555',
    marginBottom: 10,
  },
  chartPlaceholder: {
    height: 200,
    backgroundColor: '#E0E0E0',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 10,
  },
  chartText: {
    fontSize: 16,
    color: '#555',
  },
  legend: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  legendColor: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: 5,
  },
  legendText: {
    fontSize: 14,
    color: '#555',
  },
  filterButton: {
    backgroundColor: '#4CAF50', // Verde
    padding: 15,
    borderRadius: 5,
    marginTop: 10,
    alignItems: 'center',
  },
  filterButtonText: {
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

export default EstatisticasScreen;