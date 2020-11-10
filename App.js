import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import Homescreen from './src/Navigation/Home'

export default function App() {
  return (

    <NavigationContainer>
      <Homescreen />
    </NavigationContainer>

  );
}

