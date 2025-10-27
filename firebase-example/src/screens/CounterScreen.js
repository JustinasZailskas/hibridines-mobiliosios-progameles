import React, { useContext } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { CounterContext } from "../context/CounterContext";

export default function CounterScreen() {
  const { counter, increment, decrement } = useContext(CounterContext);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Skaitiklis</Text>
      <Text style={styles.counter}>{counter}</Text>
      <View style={styles.buttons}>
        <Button title="+" onPress={increment} />
        <Button title="-" onPress={decrement} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    marginBottom: 16,
  },
  counter: {
    fontSize: 48,
    fontWeight: "bold",
    marginVertical: 16,
  },
  buttons: {
    flexDirection: "row",
    gap: 10,
  },
});
