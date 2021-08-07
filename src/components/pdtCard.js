import React, { useState, useEffect } from 'react'
import {  StyleSheet } from 'react-native'
import { Card } from 'react-native-paper'

export default function ProductCard({ id, navigation }){
    const [product, setProduct] = useState({})
    useEffect(() => {
        wc.get(`/products/${id}`, {}).then(res => setProduct(res.data)).catch(e=>console.log(e))
      });
    return(
        <Card style={styles.card} onPress={()=>navigation.navigate("Listing", {id:id})}>
            <Card.Cover source={{uri: product.image[0].src}} style={styles.img}/>
            <Card.Title 
                title={product.name} 
                subtitle={product.price}
                titleStyle={styles.title}
                subtitleStyle={styles.subtitle}
            />
        </Card> 
    )
}

const styles = StyleSheet.create({
    card:{
        width:150, 
        margin:10,
        height:210
    },
    img:{
        height:130
    },
    title:{
        fontSize:19,
        fontFamily:"os-bold"
    },
    subtitle:{
        fontSize:15,
        fontFamily:"os-regular"
    }
})