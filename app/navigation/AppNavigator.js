import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen';

const AppStack = createStackNavigator();
export default function AppNavigator() {
  return (
    <AppStack.Navigator screenOptions={{headerShown:false}} >
      <AppStack.Screen name="HomeScreen" component={HomeScreen} />
      <AppStack.Screen name="Profile" component={ProfileScreen} />
    </AppStack.Navigator>
  )
}