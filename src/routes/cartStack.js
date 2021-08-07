import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Cart from '../screens/cart/cart'
import Checkout from '../screens/cart/checkout'
import Purchase from '../screens/cart/purchase'
  
export default function CartStack() {
  const Stack = createStackNavigator();
    return (
      <Stack.Navigator initialRouteName="Cart" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Cart" component={Cart} />
        <Stack.Screen name="Checkout" component={Checkout} />
        <Stack.Screen name="Purchase" component={Purchase} />
      </Stack.Navigator>
    );
}