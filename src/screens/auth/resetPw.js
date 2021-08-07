import React from "react";
import { SafeAreaView, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Feather as Icon } from "@expo/vector-icons";
import { palette, textStyles } from '../../../assets/globalStyles';

 export default function PasswordChanged({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Icon
        name="check"
        size={80}
        color={palette.medium}
        style={{backgroundColor:palette.lightest, borderRadius:50, padding:10}}
      />
      <Text style={{...textStyles.title2, textAlign:"center", paddingVertical:30}}>
        An email has been sent with further instructions
      </Text>
      <Text style={{...textStyles.title3, textAlign:"center", paddingVertical:10, paddingHorizontal:25}}>
        Check your email to reset your password and login again.
      </Text>
      <TouchableOpacity onPress={()=> navigation.navigate("Login")} style={styles.button}>
        <Text style={{fontSize:16, fontFamily:"os-bold"}}>Back to Login</Text>
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