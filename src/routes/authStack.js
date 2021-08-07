import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Landing from '../screens/auth/landing'
import Login from '../screens/auth/login'
import Signup from '../screens/auth/signup'
import Forgot from "../screens/auth/forgotPw"
import Reset from "../screens/auth/resetPw"
import Main from './main'
  
export default function AuthStack() {
  const Stack = createStackNavigator();
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Landing" screenOptions={{headerShown: false}}>
          <Stack.Screen name="Landing" component={Landing} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="ForgotPassword" component={Forgot} />
          <Stack.Screen name="ResetPassword" component={Reset} />
          <Stack.Screen name="Main" component={Main} />
        </Stack.Navigator>
      </NavigationContainer>
    );
}