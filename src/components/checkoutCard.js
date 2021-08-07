import React from 'react'
import { Image, Text, TouchableOpacity, View, StyleSheet } from 'react-native'
import { palette } from '../../assets/globalStyles'

export default function CartCard({ item, navigation }){
    return(
        <View style={styles.container}>
            <View style={{flexDirection:"row"}}>
            <TouchableOpacity>
                <Image source={item.img} style={styles.img}/>
            </TouchableOpacity>
            <View style={{justifyContent:"space-around"}}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.subtitle}>{item.price}</Text>
                <Text style={{...styles.subtitle}}>x{item.qty}</Text>
            </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        marginVertical:5,
        padding:10,
        backgroundColor:"white",
        justifyContent:"space-between",
        borderRadius:5
    },
    card:{
        width:150, 
        margin:10,
        height:210
    },
    img:{
        height:100,
        width:100,
        marginRight:15,
        borderRadius:10
    },
    title:{
        fontSize:19,
        fontFamily:"os-bold",
        color:palette.darkest
    },
    subtitle:{
        fontSize:15,
        fontFamily:"os-regular"
    },
})