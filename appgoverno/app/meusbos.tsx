import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import { useRouter } from 'expo-router';

// Interface para o objeto de B.O.
interface BoItem {
  id: string;
  tipo: string;
  data: string;
  descricao: string;
  status: string;
}

// Exemplo de dados de B.O. (poderia vir de API ou AsyncStorage)
const bosData: BoItem[] = [
  {
    id: 'BO-2023-001',
    tipo: 'Furto',
    data: '2023-11-15',
    descricao: 'Furto de laptop em via pública',
    status: 'Em Investigação'
  },
  {
    id: 'BO-2023-002',
    tipo: 'Perda',
    data: '2023-11-20',
    descricao: 'Perda de documentos no parque',
    status: 'Registrado'
  },
];

export default function MeusBos() {
  const router = useRouter();

  // Quando clicar em "+ Criar Novo B.O."
  const handleCreateNewBo = () => {
    router.push('/registrarbo'); 
  };

  // Tipando boId como string
  const handleAcompanharBo = (boId: string) => {
    // Ajuste a rota e parâmetros conforme sua navegação.
    router.push({
        pathname: '/acompanhamentobo', // com barra inicial
        params: { id: boId },
      });
  };

  return (
    <View style={styles.container}>
      {/* Barra superior */}
      <View style={styles.header}>
        <TouchableOpacity onPress={handleCreateNewBo} style={styles.headerButton}>
          <Text style={styles.headerButtonText}>+ Criar Novo B.O</Text>
        </TouchableOpacity>
      </View>

      {/* Conteúdo (lista de B.Os) */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>Meus B.O.s</Text>

        {bosData.map((bo) => (
          <View key={bo.id} style={styles.boCard}>
            <View style={styles.boInfo}>
              <Text style={styles.boTitle}>B.O. {bo.id}</Text>
              <Text style={styles.boSubtitle}>
                {bo.tipo} • {bo.data}
              </Text>
              <Text style={styles.boDescription}>
                {bo.descricao}
              </Text>
            </View>

            {/* Linha inferior com status e botão de acompanhar */}
            <View style={styles.boFooter}>
              {/* Badge de status */}
              <View style={styles.statusContainer}>
                <Text style={[styles.statusBadge, getStatusStyle(bo.status)]}>
                  {bo.status}
                </Text>
              </View>

              {/* Botão de acompanhar */}
              <TouchableOpacity
                style={styles.acompanharButton}
                onPress={() => handleAcompanharBo(bo.id)}
              >
                <Text style={styles.acompanharButtonText}>Acompanhar B.O.</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

// Retorna estilos diferentes de acordo com o status.
function getStatusStyle(status: string) {
  switch (status) {
    case 'Em Investigação':
      return { backgroundColor: '#BB86FC' };
    case 'Registrado':
      return { backgroundColor: '#6EEB83' };
    default:
      return { backgroundColor: '#E0E0E0' };
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    backgroundColor: '#6EEB83',
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerButton: {
    padding: 8,
  },
  headerButtonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
  scrollContainer: {
    padding: 16,
  },
  title: {
    fontSize: 20,
    marginBottom: 12,
    fontWeight: 'bold',
  },
  boCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  boInfo: {
    marginBottom: 8,
  },
  boTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  boSubtitle: {
    fontSize: 14,
    color: '#555',
    marginVertical: 2,
  },
  boDescription: {
    fontSize: 14,
    color: '#333',
  },
  boFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  statusContainer: {
    flexDirection: 'row',
  },
  statusBadge: {
    color: '#FFF',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    fontSize: 12,
    overflow: 'hidden',
  },
  acompanharButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#007AFF',
    borderRadius: 8,
    paddingVertical: 6,
    paddingHorizontal: 10,
  },
  acompanharButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 14,
  },
});
