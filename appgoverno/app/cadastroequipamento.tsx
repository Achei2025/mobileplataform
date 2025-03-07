import React, { useState } from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity, Text, Image } from 'react-native';
import { Button, RadioButton } from 'react-native-paper';
import * as ImagePicker from 'expo-image-picker'; 

const CadastroEquipamentoScreen = () => {
  const [nome, setNome] = useState('');
  const [numeroSerie, setNumeroSerie] = useState('');
  const [categoria, setCategoria] = useState('');
  const [descricao, setDescricao] = useState('');
  const [dataCompra, setDataCompra] = useState('');
  const [valorEstimado, setValorEstimado] = useState('');
  const [statusSeguranca, setStatusSeguranca] = useState('em_seguranca');
  const [imagem, setImagem] = useState(null);

  const selecionarImagem = async () => {
    const resultado = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!resultado.canceled) {
      setImagem(resultado.assets[0].uri);
    }
  };

  const cadastrarEquipamento = () => {
    alert('Equipamento cadastrado com sucesso!');
  };

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Nome do Equipamento" value={nome} onChangeText={setNome} />
      <TextInput style={styles.input} placeholder="Número de Série" value={numeroSerie} onChangeText={setNumeroSerie} />
      <TextInput style={styles.input} placeholder="Categoria" value={categoria} onChangeText={setCategoria} />
      <TextInput style={styles.input} placeholder="Descrição" value={descricao} onChangeText={setDescricao} multiline />
      <TextInput style={styles.input} placeholder="Data de Compra" value={dataCompra} onChangeText={setDataCompra} />
      <TextInput style={styles.input} placeholder="Valor Estimado (R$)" keyboardType="numeric" value={valorEstimado} onChangeText={setValorEstimado} />

      {/* Botão para Upload de Imagem */}
      <TouchableOpacity style={styles.uploadButton} onPress={selecionarImagem}>
        <Text style={styles.uploadButtonText}>Fazer upload de imagem</Text>
      </TouchableOpacity>
      {imagem && <Image source={{ uri: imagem }} style={styles.previewImage} />}

      {/* Status de Segurança */}
      <Text style={styles.label}>Status de Segurança</Text>
      <RadioButton.Group onValueChange={setStatusSeguranca} value={statusSeguranca}>
        <View style={styles.radioOption}>
          <RadioButton value="em_seguranca" />
          <Text>Em segurança</Text>
        </View>
        <View style={styles.radioOption}>
          <RadioButton value="recuperado" />
          <Text>Recuperado</Text>
        </View>
        <View style={styles.radioOption}>
          <RadioButton value="perdido" />
          <Text>Perdido</Text>
        </View>
      </RadioButton.Group>

      {/* Botão de Cadastro */}
      <Button mode="contained" onPress={cadastrarEquipamento} style={styles.button}>
        Cadastrar Equipamento
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f4f4f4',
  },
  input: {
    height: 50,
    backgroundColor: '#fff',
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  uploadButton: {
    backgroundColor: '#ddd',
    padding: 10,
    alignItems: 'center',
    borderRadius: 8,
    marginBottom: 10,
  },
  uploadButtonText: {
    color: '#333',
    fontWeight: 'bold',
  },
  previewImage: {
    width: '100%',
    height: 150,
    marginBottom: 10,
    borderRadius: 8,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  radioOption: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  button: {
    marginTop: 20,
    backgroundColor: '#000',
  },
});

export default CadastroEquipamentoScreen;
