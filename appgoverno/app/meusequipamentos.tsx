import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

// Exemplo de dados de equipamentos (com 'descricao' e 'imagem')
const equipamentosData = [
  {
    id: 'eq101',
    nome: 'Laptop Dell G15',
    descricao: 'Laptop pessoal usado para trabalho',
    numeroSerie: 'EDP-12345',
    categoria: 'Eletrônicos',
    status: 'Em Segurança',
    atualizadoEm: '2023-11-15',
    imagem: 'https://via.placeholder.com/60', // URL da imagem (ou use require)
  },
  {
    id: 'eq102',
    nome: 'Iphone 12',
    descricao: 'Smartphone pessoal',
    numeroSerie: 'IPH-90122',
    categoria: 'Eletrônicos',
    status: '',
    atualizadoEm: '2023-11-12',
    imagem: 'https://via.placeholder.com/60',
  },
  {
    id: 'eq103',
    nome: 'Câmera Sony',
    descricao: 'Câmera DSLR para fotografia',
    numeroSerie: 'SNY-88120',
    categoria: 'Eletrônicos',
    status: '',
    atualizadoEm: '2023-11-08',
    imagem: 'https://via.placeholder.com/60',
  },
  {
    id: 'eq104',
    nome: 'Bicicleta Mountain Bike',
    descricao: 'Bicicleta para trilha',
    numeroSerie: 'BK-33211',
    categoria: 'Veículos',
    status: '',
    atualizadoEm: '2023-11-15',
    imagem: 'https://via.placeholder.com/60',
  },
];

export default function MeusEquipamentosScreen() {
  const [searchText, setSearchText] = useState('');
  const [filtro, setFiltro] = useState('Todos');

  // Filtra equipamentos com base na busca e filtro
  const filteredEquipamentos = equipamentosData.filter((equip) => {
    const matchText =
      equip.nome.toLowerCase().includes(searchText.toLowerCase()) ||
      equip.numeroSerie.toLowerCase().includes(searchText.toLowerCase());

    if (filtro === 'Todos') return matchText;
    if (filtro === 'Em Segurança') return matchText && equip.status === 'Em Segurança';
    return matchText;
  });

  const handleAddNovoEquip = () => {
    alert('Ir para tela de adicionar novo equipamento');
  };

  const handleEdit = (id: string) => {
    alert(`Editar equipamento com ID: ${id}`);
  };

  const handleDelete = (id: string) => {
    alert(`Excluir equipamento com ID: ${id}`);
  };

  return (
    <View style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Meus Equipamentos</Text>
      </View>

      {/* Barra de busca e filtro */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Buscar por nome ou número de série"
          value={searchText}
          onChangeText={setSearchText}
        />
        <TouchableOpacity
          style={styles.filterButton}
          onPress={() => setFiltro(filtro === 'Todos' ? 'Em Segurança' : 'Todos')}
        >
          <Text style={styles.filterButtonText}>{filtro}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.newButton} onPress={handleAddNovoEquip}>
          <Text style={styles.newButtonText}>+ Novo</Text>
        </TouchableOpacity>
      </View>

      {/* Lista de equipamentos */}
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
        {filteredEquipamentos.map((equip) => (
          <View key={equip.id} style={styles.card}>
            <View style={styles.cardHeader}>
              {/* Imagem do objeto */}
              {equip.imagem && (
                <Image source={{ uri: equip.imagem }} style={styles.cardImage} />
              )}
              <View style={styles.headerTexts}>
                <Text style={styles.cardTitle}>{equip.nome}</Text>
                {/* Exibe a descrição logo abaixo do nome */}
                <Text style={styles.cardDescription}>{equip.descricao}</Text>
              </View>
              {/* Badge de status (se existir) */}
              {equip.status ? (
                <View style={styles.statusBadge}>
                  <Text style={styles.statusBadgeText}>{equip.status}</Text>
                </View>
              ) : null}
            </View>
            <Text style={styles.cardSubtitle}>#{equip.numeroSerie}</Text>
            <Text style={styles.cardCategory}>Categoria: {equip.categoria}</Text>
            <Text style={styles.cardUpdated}>Atualizado em: {equip.atualizadoEm}</Text>

            {/* Botão de editar (acima da lixeira) */}
            <TouchableOpacity style={styles.editButton} onPress={() => handleEdit(equip.id)}>
              <MaterialIcons name="edit" size={20} color="#000" />
            </TouchableOpacity>
            {/* Ícone de lixeira para excluir */}
            <TouchableOpacity style={styles.deleteButton} onPress={() => handleDelete(equip.id)}>
              <MaterialIcons name="delete" size={20} color="#000" />
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

// Estilos atualizados com fontes menores e imagem
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  // Cabeçalho
  header: {
    backgroundColor: '#333',
    paddingVertical: 12,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
  // Barra de busca e filtro
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginTop: 10,
  },
  searchInput: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 6,
    marginRight: 8,
    fontSize: 12,
  },
  filterButton: {
    backgroundColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 6,
    marginRight: 8,
  },
  filterButtonText: {
    color: '#000',
    fontSize: 12,
  },
  newButton: {
    backgroundColor: '#6EEB83',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  newButtonText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 12,
  },
  // Lista
  scrollView: {
    marginTop: 10,
  },
  scrollContent: {
    padding: 10,
    paddingBottom: 80, // espaço para eventual bottom tab
  },
  // Cartão
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 10,
    padding: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
    position: 'relative',
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  cardImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 8,
  },
  headerTexts: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  cardDescription: {
    fontSize: 12,
    color: '#555',
    marginTop: 2,
  },
  statusBadge: {
    backgroundColor: '#28a745',
    borderRadius: 8,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  statusBadgeText: {
    color: '#fff',
    fontSize: 10,
  },
  cardSubtitle: {
    fontSize: 12,
    color: '#555',
  },
  cardCategory: {
    fontSize: 12,
    color: '#555',
    marginVertical: 2,
  },
  cardUpdated: {
    fontSize: 10,
    color: '#888',
    marginTop: 2,
  },
  // Botão de editar
  editButton: {
    position: 'absolute',
    top: 65,
    right: 12,
    padding: 4,
  },
  // Botão de excluir
  deleteButton: {
    position: 'absolute',
    top: 100,
    right: 12,
    padding: 4,
  },
});
