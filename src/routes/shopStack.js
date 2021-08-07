import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Shop from '../screens/shop/shop'
import Listing from '../screens/shop/listing'
import Subcategory from '../screens/shop/subcategory'
import PdtSearch from '../screens/shop/pdtSearch'
  
export default function ShopStack() {
  const Stack = createStackNavigator();
    return (
      <Stack.Navigator initialRouteName="Shop" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Shop" component={Shop} />
        <Stack.Screen name="Listing" component={Listing} />
        <Stack.Screen name="Subcategory" component={Subcategory}/>
        <Stack.Screen name="PdtSearch" component={PdtSearch}/>
      </Stack.Navigator>
    );
}