import React from 'react'
import { FlatList, StyleSheet} from 'react-native'
import { Card } from 'react-native-paper';
import { rainbow } from '../../assets/globalStyles';

export default function CardCarousel({data, navigation}) {
    return (
        <FlatList 
            horizontal
            showsHorizontalScrollIndicator={false}
            data={data}
            renderItem={({item}) => <Card 
                style={styles.card} elevation={5}
                onPress={()=>navigation.navigate("Subcategory", {subcat:item.title})}>
                    <Card.Title style={{backgroundColor:rainbow[item.key%10], marginBottom:10}} title={item.title} titleStyle={styles.title} titleNumberOfLines={2}/>
                    <Card.Cover source={item.img} style={styles.img} resizeMode="contain"/>
                </Card> 
            }
            style={styles.carousel}
        />
    )
}

const styles = StyleSheet.create({
    card:{
        width:275, 
        marginRight:20,
        height:210,
        borderWidth:1,
        borderColor:"lightgrey",
    },
    img:{
        height:150,
        backgroundColor:"white"
    },
    carousel:{
        marginLeft:20,
        height:215,
        marginBottom:15
    },
    title:{
        fontSize:18,
        fontFamily:"os-bold",
        textAlignVertical:"center"
    },
})