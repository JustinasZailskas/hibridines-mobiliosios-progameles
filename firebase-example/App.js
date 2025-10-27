import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text } from 'react-native';

// Auth screens
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';

// App screens
import HomeScreen from './src/screens/HomeScreen';
import PlayersScreen from './src/screens/PlayersScreen';
import PostsScreen from './src/screens/PostsScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#007AFF',
        tabBarInactiveTintColor: 'gray',
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '500',
        },
      }}
    >
      <Tab.Screen 
        name="Home" 
        component={HomeScreen}
        options={{ 
          title: 'Pradžia',
          tabBarLabel: 'Pradžia',
          tabBarIcon: ({ focused }) => (
            <Text style={{ color: focused ? '#007AFF' : 'gray' }}>🏠</Text>
          )
        }}
      />
      <Tab.Screen 
        name="Players" 
        component={PlayersScreen}
        options={{ 
          title: 'Žaidėjai',
          tabBarLabel: 'Žaidėjai',
          tabBarIcon: ({ focused }) => (
            <Text style={{ color: focused ? '#007AFF' : 'gray' }}>👥</Text>
          )
        }}
      />
      <Tab.Screen 
        name="Posts" 
        component={PostsScreen}
        options={{ 
          title: 'Įrašai',
          tabBarLabel: 'Įrašai',
          tabBarIcon: ({ focused }) => (
            <Text style={{ color: focused ? '#007AFF' : 'gray' }}>📝</Text>
          )
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen 
          name="MainApp" 
          component={TabNavigator}
          options={{
            headerShown: false,
            gestureEnabled: false
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}