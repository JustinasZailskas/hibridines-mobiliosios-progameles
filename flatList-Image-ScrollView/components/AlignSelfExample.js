import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.box}>Box 1 (default)</Text>
      <Text style={styles.box}>Box 2 (default)</Text>
      <Text style={[styles.box, styles.alignSelfExample]}>
        Box 3 (alignSelf: flex-end)
      </Text>
      <Text style={styles.box}>Box 4 (default)</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center', // Vertikalus centras
    alignItems: 'center',     // Horizontalus centras (default visiems vaikams)
    backgroundColor: '#f0f0f0',
  },
  box: {
    width: 150,
    height: 50,
    backgroundColor: '#4caf50',
    color: 'white',
    textAlign: 'center',
    lineHeight: 50,
    marginVertical: 5,
  },
  alignSelfExample: {
    alignSelf: 'flex-end', // Šis elementas pasislenka į dešinę
    backgroundColor: '#ff5722',
  },
});
