import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AllVendor from '../screens/vendor/allVendor'
import Vendor from '../screens/vendor/vendor'
  
export default function VendorStack() {
  const Stack = createStackNavigator();
    return (
      <Stack.Navigator initialRouteName="AllVendor" screenOptions={{headerShown: false}}>
        <Stack.Screen name="AllVendor" component={AllVendor} />
        <Stack.Screen name="Vendor" component={Vendor} />
      </Stack.Navigator>
    );
}