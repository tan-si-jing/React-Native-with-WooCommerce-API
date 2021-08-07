import React from 'react'
import { Image, Text, TouchableOpacity, View, StyleSheet } from 'react-native'
import {Feather as Icon} from '@expo/vector-icons'
import { palette } from '../../assets/globalStyles'

export default function CartCard({ item, navigation }){
    return(
        <View style={styles.container}>
            <View style={{flexDirection:"row"}}>
            <TouchableOpacity onPress={()=>navigation.navigate('Browse Courses', {screen:'Listing'})}>
                <Image source={item.img} style={styles.img}/>
            </TouchableOpacity>
            <View style={{marginTop:5}}>
                <TouchableOpacity onPress={()=>navigation.navigate('Browse Courses', {screen:'Listing'})}>
                    <Text style={styles.title}>{item.title}</Text>
                </TouchableOpacity>
                <Text style={styles.subtitle}>{item.price}</Text>
            </View>
            </View>
            <TouchableOpacity style={styles.icon}>
                <Icon
                    name="trash-2"
                    size={25}
                    color={palette.dark}
                />
            </TouchableOpacity>
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
    icon:{
        marginHorizontal:10,
        alignSelf:"center"
    },
    title:{
        fontSize:19,
        fontFamily:"os-bold",
        color:palette.darkest
    },
    subtitle:{
        fontSize:16,
        fontFamily:"os-regular"
    },
})