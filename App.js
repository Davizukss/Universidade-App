import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AppNavigator from './src/Routes/AppNavigator';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={"#5B2311"} barStyle={"light-content"} />
      <AppNavigator/>
    </NavigationContainer>
  )
}
