import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { palette, textStyles, theme } from "../../assets/globalStyles"


export default function NTextInput({ text, placeholder, keyboardType, style, ...props }){
  return (
    <View style={style}>
        <Text style={{...textStyles.body, ...styles.label}}>{text}</Text>
        <View style={styles.inputArea}>
          <TextInput
                style={{...textStyles.body,...styles.input}}
                underlineColorAndroid="transparent"
                placeholderTextColor={theme.colors["text"]}
                placeholder={placeholder}
                keyboardType={keyboardType}
                {...props}
          />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputArea: {
    flexDirection: "row",
    alignItems:"center",
    borderRadius: 10,
    borderWidth:StyleSheet.hairlineWidth,
    paddingHorizontal:10,
    paddingVertical: 2,
    marginVertical: 4
  },
  label: {
    marginTop:10, 
    marginBottom:2, 
    fontSize:14, 
    lineHeight:16
  },
  input:{
    flex:1,
    paddingVertical:2,
    color:palette.dark
  },
})
