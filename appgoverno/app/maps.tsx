import React, { useState } from 'react';
import { View, Text, Modal, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { Feather } from '@expo/vector-icons'; // Importando Feather para os ícones
import { useRouter } from 'expo-router'; // Importando useRouter para navegação

// Definindo o tipo para o marcador
interface Ocorrencia {
  id: number;
  latitude: number;
  longitude: number;
  detalhes: {
    tipo: string;
    data: string;
    status: string;
    descricao: string;
    equipamento: {
      tipo: string;
      imagem: string;
    };
    denuncias: string[];
  };
}

const MapaOcorrencias = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedMarker, setSelectedMarker] = useState<Ocorrencia | null>(null);
  const [markers, setMarkers] = useState<Ocorrencia[]>([]);
  const [activeTab, setActiveTab] = useState<'detalhes' | 'equipamento' | 'denuncias'>('detalhes'); // Estado para controlar a aba ativa
  const router = useRouter(); // Usando useRouter para navegação

  const handleMapPress = (e: any) => {
    const newMarker: Ocorrencia = {
      id: markers.length + 1,
      latitude: e.nativeEvent.coordinate.latitude,
      longitude: e.nativeEvent.coordinate.longitude,
      detalhes: {
        tipo: 'Perda',
        data: '2023-11-18',
        status: 'Fechado',
        descricao: 'Perda de documentos no parque',
        equipamento: { tipo: 'Celular', imagem: 'https://via.placeholder.com/100' },
        denuncias: ['Denúncia anônima 1', 'Denúncia anônima 2'],
      }
    };
    setMarkers([...markers, newMarker]);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
    setSelectedMarker(null);
  };

  const mapStyle = [
    {
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#212121"
        }
      ]
    },
    {
      "elementType": "labels.icon",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#757575"
        }
      ]
    },
    {
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#212121"
        }
      ]
    },
    {
      "featureType": "administrative.locality",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#9e9e9e"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#9e9e9e"
        }
      ]
    },
    // Adicione mais estilos conforme necessário
  ];

  const DetalhesOcorrencia = ({ ocorrencia, onClose }: { ocorrencia: Ocorrencia, onClose: () => void }) => (
    <Modal visible={true} transparent animationType="slide">
      <View style={styles.modalOverlay}>
        {/* Botão de Fechar fora do container do conteúdo */}
        <TouchableOpacity onPress={onClose} style={styles.closeButton}>
          <Feather name="x" size={24} color="white" />
        </TouchableOpacity>

        <View style={styles.modalContainer}>
          {/* Abas */}
          <View style={styles.tabContainer}>
            <TouchableOpacity
              style={[styles.tabButton, activeTab === 'detalhes' && styles.activeTab]}
              onPress={() => setActiveTab('detalhes')}
            >
              <Text style={styles.tabText}>Detalhes</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.tabButton, activeTab === 'equipamento' && styles.activeTab]}
              onPress={() => setActiveTab('equipamento')}
            >
              <Text style={styles.tabText}>Equipamento</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.tabButton, activeTab === 'denuncias' && styles.activeTab]}
              onPress={() => setActiveTab('denuncias')}
            >
              <Text style={styles.tabText}>Denúncias</Text>
            </TouchableOpacity>
          </View>

          {/* Conteúdo das Abas */}
          <ScrollView contentContainerStyle={styles.modalContent}>
            {activeTab === 'detalhes' && (
              <View style={styles.tabContent}>
                <Text style={styles.sectionTitle}>Informações Gerais</Text>
                <View style={styles.infoBox}>
                  <Text style={styles.infoLabel}>Tipo:</Text>
                  <Text>{ocorrencia.detalhes.tipo}</Text>
                </View>
                <View style={styles.infoBox}>
                  <Text style={styles.infoLabel}>Data:</Text>
                  <Text>{ocorrencia.detalhes.data}</Text>
                </View>
                <View style={styles.infoBox}>
                  <Text style={styles.infoLabel}>Status:</Text>
                  <Text>{ocorrencia.detalhes.status}</Text>
                </View>
                <View style={styles.infoBox}>
                  <Text style={styles.infoLabel}>Descrição:</Text>
                  <Text>{ocorrencia.detalhes.descricao}</Text>
                </View>
              </View>
            )}

            {activeTab === 'equipamento' && (
              <View style={styles.tabContent}>
                {ocorrencia.detalhes.equipamento ? (
                  <>
                    <Image source={{ uri: ocorrencia.detalhes.equipamento.imagem }} style={styles.equipmentImage} />
                    <Text>{ocorrencia.detalhes.equipamento.tipo}</Text>
                  </>
                ) : (
                  <Text>Nenhum equipamento registrado para esta ocorrência.</Text>
                )}
              </View>
            )}

            {activeTab === 'denuncias' && (
              <View style={styles.tabContent}>
                {ocorrencia.detalhes.denuncias.length > 0 ? (
                  ocorrencia.detalhes.denuncias.map((denuncia, index) => (
                    <Text key={index} style={styles.denunciaText}>{denuncia}</Text>
                  ))
                ) : (
                  <Text>Nenhuma denúncia anônima registrada para esta ocorrência.</Text>
                )}
              </View>
            )}
          </ScrollView>

          {/* Botões de Ação */}
          <TouchableOpacity onPress={() => alert('Caso assumido!')} style={styles.button}>
            <Text style={styles.buttonText}>Assumir Caso</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => alert('Informação adicionada!')} style={styles.button}>
            <Text style={styles.buttonText}>Adicionar Informação</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );

  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: -23.55052,
          longitude: -46.633308,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        customMapStyle={mapStyle}
        onPress={handleMapPress}
      >
        {markers.map(marker => (
          <Marker
            key={marker.id}
            coordinate={{ latitude: marker.latitude, longitude: marker.longitude }}
            onPress={() => { setSelectedMarker(marker); setModalVisible(true); }}
          >
            {/* Usando ícone padrão ou um ícone personalizado com tamanho ajustado */}
            <Image
              source={require('./png/marcador.png')} // Atualizando o caminho da imagem
              style={{ width: 30, height: 30 }} // Ajustando o tamanho do ícone
            />
          </Marker>
        ))}
      </MapView>

      {selectedMarker && modalVisible && (
        <DetalhesOcorrencia ocorrencia={selectedMarker} onClose={handleCloseModal} />
      )}

      {/* Barra de Navegação */}
      <View style={styles.bottomNavigation}>
        {[
          { icon: "home", path: "/home" },
          { icon: "package", path: "/meusbos" },
          { icon: "user", path: "/user" },
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
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    maxHeight: '80%',
    marginTop: 40, // Adicionando margem para o botão de fechar
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    padding: 15, // Aumentando o padding para aumentar a área de clique
    backgroundColor: 'black',
    borderRadius: 20,
    zIndex: 1, // Garantindo que o botão fique acima do conteúdo
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  tabButton: {
    padding: 10,
    borderRadius: 5,
  },
  activeTab: {
    backgroundColor: '#4CAF50', // Verde
  },
  tabText: {
    color: '#000',
  },
  modalContent: {
    flexGrow: 1,
  },
  tabContent: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#4CAF50', // Verde
  },
  infoBox: {
    backgroundColor: '#F0F0F0', // Fundo cinza claro
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  infoLabel: {
    fontWeight: 'bold',
    color: '#333',
  },
  equipmentImage: {
    width: 100,
    height: 100,
    marginBottom: 10,
    borderRadius: 5,
  },
  denunciaText: {
    marginBottom: 5,
    color: '#555',
  },
  button: {
    backgroundColor: '#4CAF50', // Verde
    padding: 15,
    borderRadius: 5,
    marginTop: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default MapaOcorrencias;