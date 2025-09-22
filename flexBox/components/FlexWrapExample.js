import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function FlexWrapExample() {
  return (
    <View style={styles.container}>
      <Text style={styles.box}>Box 1</Text>
      <Text style={styles.box}>Box 2</Text>
      <Text style={styles.box}>Box 3</Text>
      <Text style={styles.box}>Box 4</Text>
      <Text style={styles.box}>Box 5</Text>
      <Text style={styles.box}>Box 6</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row', // Vaikai išdėstomi horizontaliai
    flexWrap: 'wrap',     // Leidžia persikelti į kitą eilutę, jei vietos nepakanka, pabandyti no-wrap arba užkomentuoti šią eilutę
    justifyContent: 'center', // Centruoja vaikus horizontaliai
    alignItems: 'center',     // Centruoja vaikus vertikaliai eilutėje
    backgroundColor: '#f0f0f0',
    padding: 10,
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: '#4caf50',
    color: 'white',
    textAlign: 'center',
    lineHeight: 100,
    margin: 5,
    borderRadius: 8,
  },
});
