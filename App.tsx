import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from './src/dashboard/home';
import { screens } from './src/navigator/constants';

const Stack = createStackNavigator();

export const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={screens.homeStack} component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}