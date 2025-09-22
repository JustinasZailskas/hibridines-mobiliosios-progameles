import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function AlignItemsExample() {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>alignItems pavyzdžiai</Text>
      <Row label="flex-start"  align="flex-start" />
      <Row label="flex-end"    align="flex-end" />
      <Row label="center"      align="center" />
      <Row label="stretch"     align="stretch" stretch />
      <Row label="baseline"    align="baseline" baseline />
    </View>
  );
}
// Komponentas eilutei su skirtingu alignItems
function Row({ label, align, stretch, baseline }) {
  return (
    <View style={[styles.row, { alignItems: align }]}>
      <Text style={styles.label}>{label}</Text>
      <View style={[styles.box, { backgroundColor: 'tomato' }]}>
        <Text style={styles.text}>A</Text>
      </View>
      <View style={[styles.box, { backgroundColor: 'skyblue', height: stretch ? undefined : 40 }]}>
        <Text style={[styles.text, baseline && { fontSize: 24 }]}>B</Text>
      </View>
      <View style={[styles.box, { backgroundColor: 'limegreen', height: stretch ? undefined : 60 }]}>
        <Text style={styles.text}>C</Text>
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
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
    backgroundColor: '#ddd',
    height: 100,
  },
  label: {
    width: 90,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontWeight: 'bold',
  },
  box: {
    width: 50,
    backgroundColor: 'tomato',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontWeight: '600',
  },
});
