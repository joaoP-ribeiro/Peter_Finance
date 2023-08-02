import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from "./src/pages/Home/index"


const Stack = createStackNavigator()

export default function App() {
  return (
    <Home/>
    
  );
}
