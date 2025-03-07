import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import { useRouter } from 'expo-router'; // 1) Importe o useRouter

export default function BoScreen() {
  const router = useRouter(); // 2) useRouter para navegar

  // Função para navegar até Meus B.O.s
  const handleGoToMeusBos = () => {
    router.push('/meusbos'); // 3) Ajuste o nome da rota conforme seu arquivo/rota
  };

  return (
    <ScrollView style={styles.container}>
      {/* Cabeçalho ou título da tela */}
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Acompanhar B.O.</Text>
      </View>

      {/* Cartão com dados principais do B.O. */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>BO-N-01</Text>
        <Text style={styles.cardSubtitle}>Tipo: Furto</Text>
        <Text style={styles.cardDate}>Data: 2023-11-15</Text>
        <Text style={styles.cardDescription}>
          Furto de laptop em via pública
        </Text>
        <Text style={styles.cardAgent}>
          Agente Responsável: Agente Silva
        </Text>

        {/* Exemplo de imagem (pode ser o local do furto, foto do objeto, etc.) */}
        <View style={styles.imagePlaceholderContainer}>
          <Image
            style={styles.imagePlaceholder}
            source={{ uri: 'https://via.placeholder.com/300x200?text=Imagem+do+Local' }}
          />
          <Text style={styles.imageLabel}>Imagem do local (exemplo)</Text>
        </View>
      </View>

      {/* Cartão para Status do B.O. */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Status do B.O.</Text>

        <View style={styles.statusContainer}>
          <View style={styles.statusItem}>
            <View style={[styles.statusIndicator, { backgroundColor: '#00C851' }]} />
            <Text style={styles.statusText}>Registrado</Text>
          </View>

          <View style={styles.statusItem}>
            <View style={[styles.statusIndicator, { backgroundColor: '#FFC107' }]} />
            <Text style={styles.statusText}>Em Análise</Text>
          </View>

          <View style={styles.statusItem}>
            <View style={[styles.statusIndicator, { backgroundColor: '#AA66CC' }]} />
            <Text style={styles.statusText}>Em Investigação</Text>
          </View>

          <View style={styles.statusItem}>
            <View style={[styles.statusIndicator, { backgroundColor: '#2E2E2E' }]} />
            <Text style={styles.statusText}>Concluído</Text>
          </View>
        </View>
      </View>

      {/* Cartão para Chat com o Agente */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Chat com o Agente</Text>
        
        <View style={styles.chatBubbleContainer}>
          {/* Mensagem do agente */}
          <View style={[styles.chatBubble, styles.agentBubble]}>
            <Text style={styles.chatBubbleText}>
              Olá, sou o Agente Silva. Estamos investigando seu caso.
            </Text>
            <Text style={styles.chatTime}>2023-11-16 10:00</Text>
          </View>

          {/* Mensagem do usuário (cidadão) */}
          <View style={[styles.chatBubble, styles.userBubble]}>
            <Text style={styles.chatBubbleText}>
              Obrigado. Há alguma novidade sobre meu laptop?
            </Text>
            <Text style={styles.chatTime}>2023-11-16 10:05</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.sendButton}>
          <Text style={styles.sendButtonText}>Entrar no chat</Text>
        </TouchableOpacity>
      </View>

      {/* Botão para ir aos Meus B.O.s */}
      <TouchableOpacity 
        style={styles.meusBosButton}
        onPress={handleGoToMeusBos}
      >
        <Text style={styles.meusBosButtonText}>Ver Meus B.O.s</Text>
      </TouchableOpacity>

      {/* Espaço para rodapé, caso queira */}
      <View style={{ height: 40 }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F6FA',
  },
  headerContainer: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#DDD',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  /* Cartões genéricos */
  card: {
    backgroundColor: '#FFFFFF',
    margin: 12,
    padding: 16,
    borderRadius: 8,
    // Sombras para iOS e Android
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardSubtitle: {
    fontSize: 16,
    marginTop: 2,
    color: '#333',
  },
  cardDate: {
    fontSize: 14,
    color: '#777',
    marginTop: 4,
  },
  cardDescription: {
    fontSize: 15,
    color: '#555',
    marginTop: 6,
    marginBottom: 6,
  },
  cardAgent: {
    fontSize: 14,
    color: '#555',
    marginBottom: 10,
  },

  /* Seções dentro do card */
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  /* Placeholder de imagem (pode substituir pela sua própria imagem) */
  imagePlaceholderContainer: {
    alignItems: 'center',
    marginTop: 10,
  },
  imagePlaceholder: {
    width: 300,
    height: 200,
    borderRadius: 8,
    resizeMode: 'cover',
  },
  imageLabel: {
    marginTop: 4,
    fontSize: 12,
    color: '#888',
  },

  /* Status do B.O. */
  statusContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
  },
  statusItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 16,
    marginBottom: 8,
  },
  statusIndicator: {
    width: 14,
    height: 14,
    borderRadius: 7,
    marginRight: 6,
  },
  statusText: {
    fontSize: 14,
    color: '#333',
  },

  /* Chat */
  chatBubbleContainer: {
    marginVertical: 10,
  },
  chatBubble: {
    padding: 10,
    borderRadius: 8,
    marginVertical: 4,
    maxWidth: '80%',
  },
  agentBubble: {
    backgroundColor: '#E0E0E0',
    alignSelf: 'flex-start',
  },
  userBubble: {
    backgroundColor: '#C2EDCE',
    alignSelf: 'flex-end',
  },
  chatBubbleText: {
    fontSize: 14,
    color: '#000',
  },
  chatTime: {
    fontSize: 10,
    color: '#666',
    marginTop: 4,
    textAlign: 'right',
  },
  sendButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    borderRadius: 6,
    alignItems: 'center',
    marginTop: 10,
  },
  sendButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },

  /* Botão para ir aos Meus B.O.s */
  meusBosButton: {
    backgroundColor: '#6EEB83',
    marginHorizontal: 12,
    marginTop: 10,
    borderRadius: 6,
    alignItems: 'center',
    paddingVertical: 12,
  },
  meusBosButtonText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
