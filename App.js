import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer} from'@react-navigation/native';
import { createStackNavigator} from'@react-navigation/stack';
import Calculator from './Calculator';
import HistoryPage from './HistoryPage';
import ShoppingList from './Harjoitusteht/ShoppingList';
import Map from './Harjoitusteht/Map';
import FireBaseTest from './Harjoitusteht/FireBaseTest';
import ContactsInfo from './Harjoitusteht/ContactsInfo';
import TextToSpeech from './Harjoitusteht/TextToSpeech';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='calc' component={Calculator} />
        <Stack.Screen name='hist' component={HistoryPage} />
        <Stack.Screen name='shoplist' component={ShoppingList} />
        <Stack.Screen name='map' component={Map} />
        <Stack.Screen name='firebase' component={FireBaseTest} />
        <Stack.Screen name='contacts' component={ContactsInfo} />
        <Stack.Screen name='speech' component={TextToSpeech} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
