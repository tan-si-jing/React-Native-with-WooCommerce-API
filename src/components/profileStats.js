import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { textStyles } from "../../assets/globalStyles";

export default function ProfileStats({label, num, style}){
    return (
        <View style={{...styles.container, ...style}}>
            <Text style={textStyles.title2}>{num}</Text>
            <Text style={{...textStyles.body, fontSize:14}}>{label}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        alignItems:"center",
        paddingHorizontal:7
    },
})