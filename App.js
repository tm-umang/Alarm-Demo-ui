import { SafeAreaView, Text } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import tabNavigation from './src/navigation/tabNavigation';


const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="tab" component={tabNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
