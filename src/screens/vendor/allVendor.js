import React, {useState} from "react";
import { SafeAreaView, StyleSheet, FlatList } from "react-native";
import { Searchbar, Card } from 'react-native-paper';
import { textStyles } from "../../../assets/globalStyles";

export default function VendorList( {navigation} ){
    const [searchQuery, setSearchQuery] = useState('');
    const onChangeSearch = query => setSearchQuery(query);
    const vendors = [
        {title:"Title", img: require("../../../assets/placeholder.png"), key:"1"},
        {title:"Title", img: require("../../../assets/placeholder.png"), key:"2"},
        {title:"Title", img: require("../../../assets/placeholder.png"), key:"3"},
        {title:"Title", img: require("../../../assets/placeholder.png"), key:"4"},
        {title:"Title", img: require("../../../assets/placeholder.png"), key:"5"},
    ]
    return (
        <SafeAreaView style={styles.container}>
            <Searchbar
                placeholder="Search Training Partners"
                onChangeText={onChangeSearch}
                value={searchQuery}
                style={styles.search}
                inputStyle={textStyles.body}
            />
            <FlatList 
                data={vendors}
                renderItem={({item}) => <Card style={styles.card} onPress={()=>navigation.navigate("Vendor")}>
                        <Card.Cover source={item.img} style={styles.img}/>
                        <Card.Title title={item.title} titleStyle={textStyles.title2} titleNumberOfLines={2}/>
                        <Card.Content>
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
    card:{
        height:265,
        margin:10
    },
    img:{
        height:185
    },
    search:{
        margin: 10,
        alignSelf:"center",
        backgroundColor:"whitesmoke"
    },
})