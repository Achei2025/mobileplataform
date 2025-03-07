import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  StyleSheet, 
  Image 
} from 'react-native';
import { useRouter } from 'expo-router';

export default function LoginScreen() {
  const router = useRouter();

  const [role, setRole] = useState<'Cidadão' | 'Policial'>('Policial');

  const handleLogin = () => {
    router.push('/registrarbo'); // Alteração feita aqui para ir para a tela '/registrarbo'
  };

  return (
    <View style={styles.container}>

      {/* LOGO */}
      <Image 
        source={{ uri: 'https://via.placeholder.com/100x100?text=Logo' }} 
        style={styles.logo}
      />

      {/* Botões de Segmento: Cidadão / Policial */}
      <View style={styles.segmentContainer}>
        <TouchableOpacity 
          style={[styles.segmentButton, role === 'Cidadão' && styles.segmentButtonActive]}
          onPress={() => setRole('Cidadão')}
        >
          <Text style={[styles.segmentText, role === 'Cidadão' && styles.segmentTextActive]}>
            Cidadão
          </Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.segmentButton, role === 'Policial' && styles.segmentButtonActive]}
          onPress={() => setRole('Policial')}
        >
          <Text style={[styles.segmentText, role === 'Policial' && styles.segmentTextActive]}>
            Policial
          </Text>
        </TouchableOpacity>
      </View>

      {/* Título dinâmico */}
      <Text style={styles.title}>Login - {role}</Text>

      {/* Inputs de Matrícula e Senha */}
      <View style={styles.inputContainer}>
        <TextInput 
          placeholder="Matrícula"
          style={styles.input}
        />
        <TextInput 
          placeholder="Senha"
          secureTextEntry
          style={styles.input}
        />
      </View>

      {/* Esqueceu a senha */}
      <TouchableOpacity onPress={() => alert('Recuperar senha')}>
        <Text style={styles.forgotText}>Esqueceu a senha?</Text>
      </TouchableOpacity>

      {/* Botão Entrar */}
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Entrar</Text>
      </TouchableOpacity>

      {/* Cadastro */}
      <View style={styles.signupContainer}>
        <Text>Não tem conta? </Text>
        <TouchableOpacity onPress={() => alert('Ir para Cadastro')}>
          <Text style={styles.signupText}>Cadastre-se</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: 24,
    paddingTop: 60,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
    resizeMode: 'contain'
  },
  segmentContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  segmentButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    backgroundColor: '#E0E0E0',
    marginHorizontal: 5
  },
  segmentButtonActive: {
    backgroundColor: '#007AFF',
  },
  segmentText: {
    color: '#000',
    fontWeight: '500',
  },
  segmentTextActive: {
    color: '#FFF',
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
    fontWeight: 'bold'
  },
  inputContainer: {
    width: '100%',
    marginTop: 10,
  },
  input: {
    backgroundColor: '#F0F0F0',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 10,
  },
  forgotText: {
    color: '#007AFF',
    marginTop: 5,
    marginBottom: 20,
  },
  loginButton: {
    backgroundColor: '#6EEB83',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center'
  },
  loginButtonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold'
  },
  signupContainer: {
    flexDirection: 'row',
    marginTop: 20
  },
  signupText: {
    color: '#007AFF',
    textDecorationLine: 'underline'
  }
});
