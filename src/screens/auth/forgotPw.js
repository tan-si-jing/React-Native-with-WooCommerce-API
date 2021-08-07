import React from "react";
import { Linking, Text, TouchableOpacity, StyleSheet, SafeAreaView } from "react-native";
import {textStyles,palette} from '../../../assets/globalStyles';

export default function ForgotPassword({ navigation }) {
  return (
    <SafeAreaView style={{flex:1}}>
      <Text style={{...textStyles.title1, textAlign:"center", paddingVertical:10}}>
        Forgot password?
      </Text>
      <Text style={{...textStyles.title3, textAlign:"center", paddingVertical:20}}>
        Reset your password at our website below.
      </Text>
      <TouchableOpacity 
        onPress={() => Linking.openURL("https://www.kqwest.com/forget-password/")} 
        style={styles.button}
      >
        <Text style={{fontSize:16, fontFamily:"os-bold"}}>Reset password</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{marginVertical:50}} onPress={() => navigation.navigate('Login')}>
          <Text>Back to Login</Text>
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
    marginTop: 25
  }
});