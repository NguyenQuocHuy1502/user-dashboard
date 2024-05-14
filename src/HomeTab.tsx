import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react'
import Home from './Home';
import Detail from './Detail';

const HomeTab = () => {
const Tab = createBottomTabNavigator();
  return (
    
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Settings" component={Detail} />
      </Tab.Navigator>
    
  )
}

export default HomeTab

const styles = StyleSheet.create({})