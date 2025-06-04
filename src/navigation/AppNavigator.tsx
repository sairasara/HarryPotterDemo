import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HouseScreen from '../screens/HouseScreen';
import CharacterScreen from '../screens/CharacterScreen';
import CharacterDetailScreen from '../screens/CharacterDetailScreen';
import { RootStackParamList } from '../types/types';

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Houses" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Houses" component={HouseScreen} options={{ title: 'Hogwarts Houses' }} />
      <Stack.Screen name="Characters" component={CharacterScreen} options={{ title: 'Characters' }} />
      <Stack.Screen name="CharacterDetails" component={CharacterDetailScreen} options={{title: 'Details'}} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
