import React, { useRef } from 'react';
import { View, Button, Animated, StyleSheet } from 'react-native';

export default function AntraAnimacija() {
  const translateY = useRef(new Animated.Value(0)).current;

  const animate = () => {
    Animated.spring(translateY, {
      toValue: 250, // kiek nukris
      friction: 4,  // "šokinėjimo" greitis (mažiau = daugiau bounce)
      tension: 80,  // animacijos "įtempimas" (didesnė = greitesnė)
      useNativeDriver: true,
    }).start();
  };
  const reset = () => {
    Animated.spring(translateY, {
      toValue: 0,
      friction: 4,
      tension: 80,
      useNativeDriver: true,
    }).start();
  }

  return (
    <View style={styles.container}>
      <Button title="Spring Animate!" onPress={animate} />
      <Button title="Reset" onPress={reset} />

      <Animated.View
        style={[
          styles.box,
          { transform: [{ translateY }] },
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'tomato',
    borderRadius: 10,
  },
});
