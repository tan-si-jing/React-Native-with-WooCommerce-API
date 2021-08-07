import React, {useState} from "react";
import { SafeAreaView , StyleSheet, Text, FlatList } from "react-native";
import { Searchbar } from 'react-native-paper';
import { textStyles } from "../../../assets/globalStyles";
import ProductCard from "../../components/pdtCard"

export default function Subcategory({ navigation, route }){
    const [searchQuery, setSearchQuery] = useState('');
    const onChangeSearch = query => setSearchQuery(query);
    const course = [
        {img:require("../../../assets/placeholder.png"), title:"Title", price:"$0.00", key:"1"},
        {img:require("../../../assets/placeholder.png"), title:"Title", price:"$0.00", key:"2"},
        {img:require("../../../assets/placeholder.png"), title:"Title", price:"$0.00", key:"3"},
        {img:require("../../../assets/placeholder.png"), title:"Title", price:"$0.00", key:"4"},
        {img:require("../../../assets/placeholder.png"), title:"Title", price:"$0.00", key:"5"},
    ]
    return (
        <SafeAreaView style={styles.container}>
            <Text style={{...textStyles.title2, ...styles.header}}>{route.params.subcat}</Text>
            <Searchbar
                placeholder="Search"
                onChangeText={onChangeSearch}
                value={searchQuery}
                style={styles.search}
                inputStyle={textStyles.body}
                onIconPress={()=>navigation.navigate("PdtSearch", {query:searchQuery, sort:'Relevance', filter:[]})}
                onSubmitEditing={()=>navigation.navigate("PdtSearch", {query:searchQuery, sort:'Relevance', filter:[]})}
            />
            <FlatList
                showsVerticalScrollIndicator={false}
                data={course}
                numColumns={2}
                renderItem={({ item }) => <ProductCard item={item} navigation={navigation} />} 
                style={styles.pdtList}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"white",
        flex: 1, 
        justifyContent: 'center',
        padding:10
    },
    search:{
        marginHorizontal: 15,
        alignSelf:"center",
    },
    header:{
        paddingHorizontal:20,
        paddingVertical:15
    },
    pdtList:{
        marginTop:20
    }
})
