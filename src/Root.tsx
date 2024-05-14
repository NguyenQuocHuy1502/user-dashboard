import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './Home';
import Detail from './Detail';
import HomeTab from './HomeTab';

const Stack = createNativeStackNavigator();
const Root = () => {
  return (
    <Stack.Navigator >
      <Stack.Screen
        name= "Home"
        component= {Home}
      />
      <Stack.Screen
        name= "Detail"
        component= {Detail}
      />
      
    </Stack.Navigator>
  )
}

export default Root

const styles = StyleSheet.create({})