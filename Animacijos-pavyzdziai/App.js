import React, { useRef } from 'react';
import { View, Button, Animated, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PirmaAnimacija from './src/screens/pirmaAnimacija';
import AntraAnimacija from './src/screens/AntraAnimacija';
import TreciaAnimacija from './src/screens/TreciaAnimacija';
import SequenceAnimacija from './src/screens/SequenceAnimacija';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Pirma" component={PirmaAnimacija} />
        <Tab.Screen name="Antra" component={AntraAnimacija} />
        <Tab.Screen name="Trecia" component={TreciaAnimacija} />
        <Tab.Screen name="Sequence" component={SequenceAnimacija} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}