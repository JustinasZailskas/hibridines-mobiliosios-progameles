import React from 'react';
import { View, Text, VirtualizedList, StyleSheet } from 'react-native';
import drivers from '../data/drivers.json';

const fullTimeDrivers = drivers.full_time_drivers

const getItem = (data, index) => data[index];
const getItemCount = data => data.length;

const VirtualizedListComponent = () => {
  return (
    <View style={styles.container}>
      <VirtualizedList
        data={fullTimeDrivers}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.info}>Country: {item.country}</Text>
            <Text style={styles.info}>Car: {item.car}</Text>
          </View>
        )}
        keyExtractor={(_, index) => index.toString()}
        getItem={getItem}
        getItemCount={getItemCount}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
  },
  item: {
    backgroundColor: '#ffe4c4',
    padding: 16,
    marginVertical: 6,
    marginHorizontal: 16,
    borderRadius: 8,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  info: {
    fontSize: 16,
  },
});

export default VirtualizedListComponent;