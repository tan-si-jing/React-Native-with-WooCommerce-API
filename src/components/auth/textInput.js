import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { SimpleLineIcons, Ionicons } from "@expo/vector-icons";
import { textStyles, theme } from "../../../assets/globalStyles"


const NTextInput =   React.forwardRef(({ icon, touched, error, ...props }, ref) => {
    const SIZE = theme.borderRadii.m * 2.5;
    const validationColor = error ? "danger" : "primary";
  return (
    <View style={{...styles.container, backgroundColor:"#fff"}}>
      <Text style={{...textStyles.body, paddingHorizontal:10}}>
        <SimpleLineIcons name={icon} size={20} />
      </Text>
      <TextInput
            style={{flex:1}}
            underlineColorAndroid="transparent"
            placeholderTextColor={theme.colors["text"]}
            ref={ref}
            {...props}
      />
      
      {touched && (
        <View style={{marginHorizontal:6, flexDirection:"row", alignItems:"center"}}>
          <Ionicons
            name={!error ? "checkmark-circle-outline" : "close-circle-outline"}
            size={SIZE}
            color={theme.colors[validationColor]}
          /> 
          <Text style={{...textStyles.body, color:theme.colors[validationColor]}}>{error}</Text>
        </View>
      )}
    </View>
  );
})

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 48,
    alignItems:"center",
    padding:2,
    margin: 6,
    width: "90%",
    borderRadius:10
  }
})

export default NTextInput;
