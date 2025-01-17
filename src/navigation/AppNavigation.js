// AppNavigation.js
import React from 'react';
import { NavigationContainer, NavigationIndependentTree } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Homescreen from '../screens/Homescreen';
import WelcomeScreen from '../screens/WelcomeScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
  return (
    <NavigationIndependentTree>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerShown: false,
          }}
          >
          <Stack.Screen name="Home" component={Homescreen} />
          <Stack.Screen name="Welcome" component={WelcomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </NavigationIndependentTree>
  );
}