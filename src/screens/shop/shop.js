import React, {useState, useEffect} from "react";
import { SafeAreaView , StyleSheet, Text, ScrollView } from "react-native";
import { Searchbar } from 'react-native-paper';
import { textStyles } from "../../../assets/globalStyles";
import ProductCarousel from "../../components/pdtCarousel";
import CardCarousel from "../../components/cardCarousel";
import wc from '../../services'

export default function Shop({ navigation }){
    const [course, setCourse] = useState([])
    useEffect(() => {
        wc.get('/products', {orderby:'popularity',per_page:5}).then(({ data }) => {
            let idList = []
            data.map(pdt => idList.push({id:pdt.id}))
            setCourse(idList);
        });
      }, []);
    const [searchQuery, setSearchQuery] = useState('');
    const onChangeSearch = query => setSearchQuery(query);
    const categories = [
        {img:require("../../../assets/safety.jpg"), title:"Workplace Safety & Health", key:"1"},
        {img:require("../../../assets/proj.jpg"), title:"Project Management", key:"2"},
        {img:require("../../../assets/logs.jpg"), title:"Logistics", key:"3"},
        {img:require("../../../assets/retail.jpg"), title:"Retail Services", key:"4"},
        {img:require("../../../assets/profdev.jpg"), title:"Professional Development", key:"5"},
        {img:require("../../../assets/event.jpg"), title:"Events Management", key:"6"},
        {img:require("../../../assets/finance.jpg"), title:"Banking & Finance", key:"7"},
    ]
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
            <Searchbar
                placeholder="Search Courses"
                onChangeText={onChangeSearch}
                value={searchQuery}
                style={styles.search}
                inputStyle={textStyles.body}
                onIconPress={()=>navigation.navigate("PdtSearch", {query:searchQuery, sort:'Relevance', filter:[]})}
                onSubmitEditing={()=>navigation.navigate("PdtSearch", {query:searchQuery, sort:'Relevance', filter:[]})}
            />
            <Text style={{...textStyles.title2, ...styles.header}}>Subcategories</Text>
            <CardCarousel data={categories} navigation={navigation}/>
            <Text style={{...textStyles.title2, ...styles.header}}>Top Courses</Text>
            <ProductCarousel data={course} navigation={navigation}/>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"white",
        flex: 1, 
        justifyContent: 'center',
        paddingVertical:15
    },
    search:{
        margin: 20,
        alignSelf:"center",
    },
    header:{
        paddingHorizontal:20,
        paddingVertical:15
    }
})