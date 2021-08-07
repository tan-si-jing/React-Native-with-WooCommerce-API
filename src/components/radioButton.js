import React from "react";
import { MaterialIcons as Icon } from "@expo/vector-icons";
import { Text, TouchableOpacity } from "react-native";
import { palette, textStyles } from "../../assets/globalStyles"

export default function RadioButton({ label, onChange, checked }){
  return (
    <TouchableOpacity onPress={() => onChange()} style={{flexDirection:"row", margin: 5, alignItems:"center"}}>
      <Text style={textStyles.body}>{label}</Text>
      <Icon 
        name={checked ? "radio-button-on" : "radio-button-off"} 
        color={palette.dark} 
        size={17} 
        style={{paddingHorizontal:20}}/>
    </TouchableOpacity>
  );
};
