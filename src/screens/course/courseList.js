import React from "react";
import { SafeAreaView, StyleSheet, FlatList, Text } from "react-native";
import { ProgressBar, Card } from 'react-native-paper';
import { palette, textStyles } from "../../../assets/globalStyles";

export default function CourseList( {navigation} ){
    const courses = [
        {title:"Title", progress:0.7, img: require("../../../assets/placeholder.png"), key:"1"},
        {title:"Title", progress:0.3, img: require("../../../assets/placeholder.png"), key:"2"},
        {title:"Title", progress:0, img: require("../../../assets/placeholder.png"), key:"3"},
        {title:"Title", progress:0.4, img: require("../../../assets/placeholder.png"), key:"4"},
        {title:"Title", progress:0.2, img: require("../../../assets/placeholder.png"), key:"5"},
    ]
    return (
        <SafeAreaView style={styles.container}>
            <FlatList 
                data={courses}
                renderItem={({item}) => <Card style={styles.card} onPress={()=>navigation.navigate("Course")}>
                        <Card.Cover source={item.img} style={styles.img}/>
                        <Card.Title title={item.title} titleStyle={textStyles.title2} titleNumberOfLines={2}/>
                        <Card.Content>
                        <ProgressBar progress={item.progress} color={palette.medium} style={styles.progress}/>
                        <Text style={{...textStyles.body, fontSize:13}}>Progress: {item.progress*100}%</Text>
                        </Card.Content>
                    </Card> 
                }
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        margin:15
    },
    progress:{
        height:15,
        borderRadius:20
    },
    card:{
        height:295,
        margin:10
    },
    img:{
        height:185
    }
})