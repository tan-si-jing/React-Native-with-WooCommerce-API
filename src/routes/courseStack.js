import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Course from '../screens/course/course'
import CourseList from '../screens/course/courseList'
import Module from '../screens/course/module'
  
export default function CourseStack() {
  const Stack = createStackNavigator();
    return (
      <Stack.Navigator initialRouteName="CourseList" screenOptions={{headerShown: false}}>
        <Stack.Screen name="CourseList" component={CourseList} />
        <Stack.Screen name="Course" component={Course} />
        <Stack.Screen name="Module" component={Module} />
      </Stack.Navigator>
    );
}