import React from 'react'

import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home'
import Recipe from '../screens/Recipe'
import Login from '../screens/Login'

const screenOptions={
  headerShown:false,
}
const Stack = createNativeStackNavigator();

export default Tabs=() =>{
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login' screenOptions={screenOptions}>
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Recipe' component={Recipe} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}