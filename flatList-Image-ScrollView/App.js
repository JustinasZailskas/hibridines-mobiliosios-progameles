import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={[styles.container, { marginLeft: 40 }]}>
      <Text style={[styles.message, styles.warning]}>Some Text</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#f0f0f0',
  },
  message: {
    fontSize: 18,
    color: '#333',
  },
  warning: {
    color: 'red',
    fontWeight: 'bold',
  },
});
