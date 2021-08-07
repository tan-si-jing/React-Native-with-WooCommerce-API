import React from "react";
import { SafeAreaView, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Feather as Icon } from "@expo/vector-icons";
import { palette, textStyles } from '../../../assets/globalStyles';

 export default function Purchase({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Icon
        name="check"
        size={80}
        color={palette.medium}
        style={{backgroundColor:palette.lightest, borderRadius:50, padding:10}}
      />
      <Text style={{...textStyles.title2, textAlign:"center", paddingVertical:30}}>
        Purchase Completed!
      </Text>
      <Text style={{...textStyles.title3, textAlign:"center", paddingVertical:10, paddingHorizontal:25}}>
        An order confirmation email has been sent. View the newly purchased courses in My Courses.
      </Text>
      <TouchableOpacity onPress={()=> {navigation.popToTop(); navigation.navigate("My Courses", {screen:"CourseList"})}} style={styles.button}>
        <Text style={{fontSize:16, fontFamily:"os-bold"}}>Go to My Courses</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding:25
  },
  button: {
    backgroundColor: palette.light,
    borderRadius: 20,
    alignItems:"center",
    padding: 15,
    marginTop: 25,
    width:"70%"
  }
});