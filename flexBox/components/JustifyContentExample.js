import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function JustifyContentExample() {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>justifyContent pavyzdžiai</Text>

      <Row label="flex-start"     justify="flex-start" />
      <Row label="flex-end"       justify="flex-end" />
      <Row label="center"         justify="center" />
      <Row label="space-between"  justify="space-between" />
      <Row label="space-around"   justify="space-around" />
      <Row label="space-evenly"   justify="space-evenly" />
    </View>
  );
}
// Eilutė su trijų dėžių pavyzdžiu
function Row({ label, justify }) {
  return (
    <View style={styles.rowContainer}>
      <Text style={styles.label}>{label}</Text>
      <View style={[styles.row, { justifyContent: justify }]}>
        <View style={[styles.box, { backgroundColor: 'tomato' }]} />
        <View style={[styles.box, { backgroundColor: 'skyblue' }]} />
        <View style={[styles.box, { backgroundColor: 'limegreen' }]} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 10,
  },
  rowContainer: {
    marginBottom: 20,
  },
  label: {
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 4,
  },
  row: {
    flexDirection: 'row',      // pagrindinė ašis – horizontali
    backgroundColor: '#ddd',
    height: 80,
    alignItems: 'center',      // kad dėžutės būtų vertikaliai centre
    marginHorizontal: 10,
    paddingHorizontal: 10,
  },
  box: {
    width: 40,
    height: 40,
  },
});
