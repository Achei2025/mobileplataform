import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HelpScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Tela de Ajuda e Suporte</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
  },
});

export default HelpScreen;
