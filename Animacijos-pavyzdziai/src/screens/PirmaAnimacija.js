import React, { useRef } from 'react';
import { View, Button, Animated, StyleSheet } from 'react-native';

export default function PirmaAnimacija() {
  // 1. Inicializuojame animated value
  const marginTop = useRef(new Animated.Value(20)).current;
  // 2. Animacijos funkcija
  const animateForward = () => {
    Animated.timing(marginTop, {
      toValue: 200,
      duration: 500,
      useNativeDriver: false, // nes keičiame layout savybę
    }).start();
  };

  return (
    <View style={styles.container}>
      {/* 3. Mygtukas animacijos paleidimui */}
      <Button title="Animate Box" onPress={animateForward} />
      {/* 4. Animated View */}
      <Animated.View style={[styles.box, { marginTop }]} />
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
    backgroundColor: 'skyblue',
    borderRadius: 8,
  },
});
