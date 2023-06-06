import TelaLogin from '../pages/TelaLogin';
import TelaRegistre from '../pages/TelaRegistre';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TelaPrincipal from '../pages/TelaPrincipal';
import TelaRecuperar from '../pages/TelaRecuperar';
import TelaBemVindo from '../pages/TelaBemVindo';
import TelaConfirmSms from '../pages/TelaConfirmSms';

const Stack = createNativeStackNavigator();
export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name="Home" component={TelaBemVindo} options={{ headerShown: false }} />
      <Stack.Screen name="Login" component={TelaLogin} options={{ headerShown: false }} />
      <Stack.Screen name="TelaPrincipal" component={TelaPrincipal}options={{ headerShown: false }} />
      <Stack.Screen name="Registre" component={TelaRegistre} options={{ headerShown: false }} />
      <Stack.Screen name="Recuperar" component={TelaRecuperar} options={{ headerShown: false }} />
      <Stack.Screen name="Confirma" component={TelaConfirmSms} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}