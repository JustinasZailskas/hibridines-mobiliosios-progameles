import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import AlignItemsExample from './components/AlignItemsExample';
import JustifyContentExample from './components/JustifyContentExample';

export default function App() {
  return (
    <ScrollView>
      {/* <AlignItemsExample /> */}
      <JustifyContentExample />
    </ScrollView>
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
