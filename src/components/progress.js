import React from 'react'
import { ProgressBar } from 'react-native-paper';
import { StyleSheet, Text, Dimensions, TouchableOpacity } from 'react-native'
import { palette, textStyles } from "../../assets/globalStyles";

export default function Progress({label, progress, navigation}){
    const {width} = Dimensions.get('window');
    return (
        <TouchableOpacity onPress={()=>navigation.navigate('My Courses', { screen: 'Course' })} style={{...styles.container, marginHorizontal:0.1*width}}>
            <Text style={{...textStyles.title2, ...styles.label }}> {label} </Text>
            <ProgressBar progress={progress} color={palette.medium} style={{...styles.progress, width:0.8*width}}/>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        borderBottomColor:"lightgrey",
        borderBottomWidth:1,
        paddingVertical:15
    },
    progress:{
        height:15,
        borderRadius:20
    },
    label:{
        fontSize:18,
        paddingBottom: 5
    }
})