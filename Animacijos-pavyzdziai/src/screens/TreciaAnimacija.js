import React, { useRef } from "react";
import { View, Button, Animated, StyleSheet } from "react-native";

export default function TreciaAnimacija() {
  const translateX = useRef(new Animated.Value(0)).current;

  const animate = () => {
    translateX.setValue(0); // resetinam reikšmę prieš animaciją
    
    Animated.decay(translateX, {
      velocity: 2,       // pradinio judėjimo greitis (didesnis = toliau „slys“)
      deceleration: 0.995, // trintis (0.9 = greitai sustos, 0.999 = labai lėtai)
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.container}>
      <Button title="Start Decay Animation" onPress={animate} />
      <Animated.View
        style={[
          styles.box,
          { transform: [{ translateX }] }
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: "purple",
    borderRadius: 10,
  },
});
