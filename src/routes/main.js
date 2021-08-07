import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerContent from './drawerContent'
import Profile from '../screens/profile'
import Settings from '../screens/settings'
import Shop from './shopStack'
import Courses from './courseStack'
import Cart from './cartStack'
import Vendors from './vendorStack'
import Corporate from '../screens/corporate'
import { Feather as Icon, MaterialIcons } from "@expo/vector-icons";
import { palette } from '../../assets/globalStyles';

const Drawer = createDrawerNavigator();

export default function Sidebar() {
  return (
      <Drawer.Navigator 
        drawerContentOptions={{
          activeTintColor: palette.darkest,
          itemStyle: { paddingHorizontal:10, marginVertical: 5, color:"black"},
          labelStyle: {fontSize:16.5}
        }}
        drawerContent={props => <DrawerContent {...props} />} 
        initialRouteName="My Profile" 
        screenOptions={{headerShown: true}}
        //backBehavior="none"
      >
        <Drawer.Screen name="My Profile" component={Profile}
          options={{
            drawerLabel:"My Profile",
            drawerIcon: ({focused, color, size})=>(<Icon name="user" color={color} size={size}/>)}}/>
        <Drawer.Screen name="My Courses" component={Courses} 
          options={{
            drawerLabel:"My Courses",
            drawerIcon: ({focused, color, size})=>(<Icon name="folder" color={color} size={size}/>)}}/>
        <Drawer.Screen name="Browse Courses" component={Shop}
          options={{
            drawerLabel:"Browse Courses",
            drawerIcon: ({focused, color, size})=>(<Icon name="search" color={color} size={size}/>)}}/>
        <Drawer.Screen name="Training Partners" component={Vendors} 
          options={{
            drawerLabel:"Training Partners",
            drawerIcon: ({focused, color, size})=>(<MaterialIcons name="storefront" color={color} size={25}/>)}}/>
        <Drawer.Screen name="My Cart" component={Cart} 
          options={{
            drawerLabel:"My Cart",
            drawerIcon: ({focused, color, size})=>(<Icon name="shopping-bag" color={color} size={size}/>)}}/>
        <Drawer.Screen name="Settings" component={Settings} 
          options={{drawerIcon: ({focused, color, size})=>(<Icon name="settings" color={color} size={size}/>)}}/>
        <Drawer.Screen name="Corporate Services" component={Corporate} 
          options={{
            drawerLabel:"Corporate",
            drawerIcon: ({focused, color, size})=>(<Icon name="briefcase" color={color} size={size}/>)}}/>
      </Drawer.Navigator>
  );
}