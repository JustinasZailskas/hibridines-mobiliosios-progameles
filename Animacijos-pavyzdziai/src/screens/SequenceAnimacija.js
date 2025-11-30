import React, { useRef } from "react";
import { View, Button, Animated, StyleSheet } from "react-native";

export default function SequenceAnimation() {
  const translateY = useRef(new Animated.Value(0)).current;
  const opacity = useRef(new Animated.Value(1)).current;

  const animate = () => {
    Animated.sequence([
      Animated.timing(translateY, {
        toValue: 250,
        duration: 600,
        useNativeDriver: true,
      }),
      Animated.timing(translateY, {
        toValue: 100,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(opacity, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start(() => {
      // Reset animacijai pakartoti
      translateY.setValue(0);
      opacity.setValue(1);
    });
  };

  return (
    <View style={styles.container}>
      <Button title="Start Sequence" onPress={animate} />

      <Animated.View
        style={[
          styles.box,
          {
            transform: [{ translateY }],
            opacity,
          },
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
    backgroundColor: "dodgerblue",
    borderRadius: 12,
  },
});
