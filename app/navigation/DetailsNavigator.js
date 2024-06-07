import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import DetailsScreen from '../screens/Details/DetailsScreen';
import AgeScreen from '../screens/Details/AgeScreen';
import GenderScreen from '../screens/Details/GenderScreen';
import HeightWeightScreen from '../screens/Details/HeightWeightScreen';
import ActivityLevelScreen from '../screens/Details/ActivityLevelScreen';
import RegisterScreen from '../screens/auth/RegisterScreen';
import HomeScreen from '../screens/HomeScreen/HomeScreen';


const DetailsStack = createStackNavigator();
export default function DetailsNavigator() {
  return (
    <DetailsStack.Navigator screenOptions={{headerShown: false}}>
        <DetailsStack.Screen name='Details' component={DetailsScreen} />
        <DetailsStack.Screen name="Gender" component={GenderScreen} />
        <DetailsStack.Screen name='Register' component={RegisterScreen}/>
        <DetailsStack.Screen name="Age" component={AgeScreen} />
        <DetailsStack.Screen name="HeightWeight" component={HeightWeightScreen} />
        <DetailsStack.Screen name="Activity" component={ActivityLevelScreen} />
        <DetailsStack.Screen name="HomeScreen" component={HomeScreen} />
    </DetailsStack.Navigator>
  )
}