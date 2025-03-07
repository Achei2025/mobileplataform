import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { Picker } from '@react-native-picker/picker';
import { useRouter } from 'expo-router';
import { Feather } from '@expo/vector-icons'; // Importando Feather para os ícones

const CadastrarBO = () => {
  const [tipo, setTipo] = useState('Furto');
  const [data, setData] = useState('');
  const [hora, setHora] = useState('');
  const [local, setLocal] = useState('');
  const [descricao, setDescricao] = useState('');
  const [equipamento, setEquipamento] = useState('');
  const [testemunha, setTestemunha] = useState('não');
  const [infoTestemunha, setInfoTestemunha] = useState('');

  const router = useRouter();

  const handleRegistrarBO = () => {
    router.push('/meusbos');
  };

  return (
    <View style={styles.fullContainer}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Registrar B.O.</Text>
        <View style={styles.card}>
          <Text style={styles.label}>Criar Novo B.O.</Text>

          <Text style={styles.subLabel}>Tipo de Ocorrência</Text>
          <Picker
            selectedValue={tipo}
            onValueChange={(itemValue) => setTipo(itemValue)}
            style={styles.picker}
          >
            <Picker.Item label="Furto" value="Furto" />
            <Picker.Item label="Roubo" value="Roubo" />
            <Picker.Item label="Outro" value="Outro" />
          </Picker>

          <Text style={styles.subLabel}>Data da Ocorrência</Text>
          <TextInput
            style={styles.input}
            placeholder="dd/mm/aaaa"
            value={data}
            onChangeText={setData}
          />

          <Text style={styles.subLabel}>Hora da Ocorrência</Text>
          <TextInput
            style={styles.input}
            placeholder="--:--"
            value={hora}
            onChangeText={setHora}
          />

          <Text style={styles.subLabel}>Local da Ocorrência</Text>
          <TextInput
            style={styles.input}
            placeholder="Endereço ou ponto de referência"
            value={local}
            onChangeText={setLocal}
          />

          <Text style={styles.subLabel}>Descrição da Ocorrência</Text>
          <TextInput
            style={[styles.input, styles.textArea]}
            placeholder="Descreva detalhadamente o que aconteceu"
            multiline
            value={descricao}
            onChangeText={setDescricao}
          />

          <Text style={styles.subLabel}>Equipamento Envolvido</Text>
          <TextInput
            style={styles.input}
            placeholder="Equipamento envolvido"
            value={equipamento}
            onChangeText={setEquipamento}
          />

          <Text style={styles.subLabel}>Há Testemunhas?</Text>
          <View style={styles.radioContainer}>
            <RadioButton.Group onValueChange={(value) => setTestemunha(value)} value={testemunha}>
              <View style={styles.radioItem}>
                <RadioButton value="sim" />
                <Text>Sim</Text>
              </View>
              <View style={styles.radioItem}>
                <RadioButton value="não" />
                <Text>Não</Text>
              </View>
            </RadioButton.Group>
          </View>

          {testemunha === 'sim' && (
            <>
              <Text style={styles.subLabel}>Informações das Testemunhas</Text>
              <TextInput
                style={[styles.input, styles.textArea]}
                placeholder="Nome e contato das testemunhas"
                multiline
                value={infoTestemunha}
                onChangeText={setInfoTestemunha}
              />
            </>
          )}

          <TouchableOpacity style={styles.button} onPress={handleRegistrarBO}>
            <Text style={styles.buttonText}>Registrar B.O.</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

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
  fullContainer: {
    flex: 1,
    backgroundColor: '#F8F8F8', // Fundo da tela
  },
  container: {
    padding: 20,
    paddingBottom: 80, // Adicionando espaço para a navbar
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#000',
  },
  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#000', // Texto preto
  },
  subLabel: {
    fontSize: 14,
    marginTop: 10,
    color: '#000', // Texto preto
  },
  input: {
    borderWidth: 1,
    borderColor: '#CCC',
    borderRadius: 5,
    padding: 10,
    backgroundColor: '#FFF',
    marginTop: 5,
    color: '#000', // Texto preto
  },
  textArea: {
    height: 80,
  },
  picker: {
    backgroundColor: '#FFF',
    marginVertical: 5,
  },
  radioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  radioItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  button: {
    backgroundColor: '#000', // Botão preto
    padding: 15,
    borderRadius: 5,
    marginTop: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF', // Texto branco
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

export default CadastrarBO;