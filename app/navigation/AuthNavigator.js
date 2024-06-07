import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import LoginScreen from "../screens/auth/LoginScreen"
import RegisterScreen from "../screens/auth/RegisterScreen"
import WelcomeScreen from '../screens/WelcomeScreen/WelcomeScreen';
import DetailsScreen from '../screens/Details/DetailsScreen';
const AuthStack = createStackNavigator();
export default function AuthNavigator() {
  return (
    <AuthStack.Navigator screenOptions={{headerShown:false}}>
      <AuthStack.Screen name='Welcome' component={WelcomeScreen} />
      <AuthStack.Screen name='Login' component={LoginScreen} />
      <AuthStack.Screen name='Register' component={RegisterScreen} />
      <AuthStack.Screen name='Details' component={DetailsScreen} />
    </AuthStack.Navigator>
  )
}