/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import styles from './app.style.js';

import Home from './components/HomeScreen';
import AvailablePlayers from './components/AvailablePlayersScreen';
import SelectedPlayers from './components/SelectedPlayersScreen';
import SelectionReport from './components/SelectionReport';

const Stack = createStackNavigator();
function NavStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#621FF7',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen name="Home" component={Home} options={{title: 'Budget'}} />
      <Stack.Screen
        name="AvailablePlayers"
        component={AvailablePlayers}
        options={{title: 'Available Players'}}
      />
      <Stack.Screen
        name="SelectedPlayers"
        component={SelectedPlayers}
        options={{title: 'Selected Players'}}
      />
      <Stack.Screen
        name="SelectionReport"
        component={SelectionReport}
        options={{title: 'Selection Report'}}
      />
    </Stack.Navigator>
  );
}

const App: () => React$Node = () => {
  return (
    <>
      <SafeAreaView style={{flex: 1}}>
        <NavigationContainer>
          <NavStack />
        </NavigationContainer>
      </SafeAreaView>
    </>
  );
};

export default App;
