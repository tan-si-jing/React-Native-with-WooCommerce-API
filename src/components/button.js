import React from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { palette, textStyles } from "../../assets/globalStyles"

export default function Button({text, onPress, width}) {
    return(
        <View style={{alignItems:"flex-end"}}>
        <TouchableOpacity style={{...styles.button, width:width}} onPress={() => onPress()}>
            <Text style={{...textStyles.body, color: palette.darkest, fontSize:14}}>{text}</Text>
        </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    button:{
        borderRadius:20,
        backgroundColor: palette.light,
        paddingHorizontal:15,
        paddingVertical:9,
        alignItems:"center",
        marginTop:20
    },
})