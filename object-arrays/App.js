import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';
import FlatListComponent from './components/FlatListComponent';
import { SafeAreaView } from 'react-native-safe-area-context';
import SectionListComponent from './components/SectionListComponent';

export default function App() {
  return (
    // <ScrollView style={styles.container}>
    //   <Text style={styles.item}>Pirmas elementas</Text>
    //   <Text style={styles.item}>Antras elementas</Text>
    //   <Text style={styles.item}>Trečias elementas</Text>
    //   <Text style={styles.item}>Ketvirtas elementas</Text>
    //   <Text style={styles.item}>Penktas elementas</Text>
    //   <Text style={styles.item}>Šeštas elementas</Text>
    // </ScrollView>
    <SafeAreaView>
      {/* <FlatListComponent /> */}
      <SectionListComponent />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    padding: 10,
    backgroundColor: '#f0f0f0'
  },
  item: {
    fontSize: 20,
    marginVertical: 20,
    textAlign: 'center',
    backgroundColor: '#ddd',
    padding: 10,
    borderRadius: 8
  }
});


