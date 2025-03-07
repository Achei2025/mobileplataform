import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tela Inicial</Text>

      {/* Link para a tela de Login */}
      <Link href="/login" style={styles.loginLink}>
        Ir para Login
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EFEFEF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  loginLink: {
    fontSize: 18,
    color: '#007BFF',
    textDecorationLine: 'underline',
  },
});
