import React,{useState} from "react";
import { SafeAreaView , Text, Image, StyleSheet, View, ScrollView, TextInput } from "react-native";
import { Searchbar } from 'react-native-paper';
import { palette, textStyles, theme } from "../../../assets/globalStyles";
import Button from "../../components/button";
import ProductCarousel from "../../components/pdtCarousel";
import Input from '../../components/input'

export default function Vendor( {navigation} ){
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
            <ScrollView>
            <Text style={{...textStyles.title2, paddingHorizontal:7, paddingBottom:15}}>Title</Text>
            <Image
                source={require("../../../assets/placeholder.png")}
                style={styles.img}
            />
            <View style={styles.details}>
                <Text style={{...textStyles.body, ...styles.desc}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id placerat mi. Mauris vitae risus ut justo fringilla vulputate. Nulla semper iaculis odio, venenatis tempus elit mollis cursus. Maecenas ut eros malesuada, feugiat massa id, cursus sapien. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec accumsan vel massa quis viverra. Nullam faucibus augue ornare nisi ultricies, et tincidunt orci dictum. Proin dignissim risus ac leo fringilla pellentesque. </Text>
            </View>
            <Text style={{...textStyles.title2, ...styles.pdts}}>Products</Text>
            <Searchbar
                placeholder="Search"
                onChangeText={onChangeSearch}
                value={searchQuery}
                style={styles.search}
                inputStyle={textStyles.body}
            />
            <ProductCarousel data={course} navigation={navigation}/>
            <View style={{...styles.details, borderTopColor:"lightgrey", borderTopWidth:1}}>
                <Text style={{...textStyles.title2, marginTop:15}}>Store details:</Text>
                <View style={styles.vendor}>
                    <Text style={{...textStyles.body, paddingVertical:2}}>Product Votes: 0</Text>
                    <Text style={textStyles.body}>Total Submitted: 0</Text>
                    <Text style={{...textStyles.body, paddingVertical:2}}>Contacts:</Text>
                </View>
            </View>
            <View style={{...styles.details, borderTopColor:"lightgrey", borderTopWidth:1}}>
                <Text style={{...textStyles.title2, marginTop:15}}>Contact Vendor</Text>
                <View style={styles.vendor}>
                <Input text={"Name:"} />
                <Input text={"Email:"} />
                <Text style={{...textStyles.body, ...styles.label}}>Message:</Text>
                <View style={styles.inputArea}>
                <TextInput
                    style={{...textStyles.body,...styles.input}}
                    underlineColorAndroid="transparent"
                    multiline
                    numberOfLines={8}
                />
                </View>
                <Button text="Send Message" onPress={() => console.log("Send Message")}/>
                </View>
            </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1, 
        margin:15,
        marginVertical:25
    },
    img:{
        height:225,
        width:"95%",
        alignSelf:"center"
    },
    details:{
        padding:10,
        marginTop:7
    },
    row:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"
    },
    price:{
        fontSize:18,
        color:palette.dark
    },
    desc:{
        lineHeight:22,
        color:palette.dark,
        marginTop:10
    },
    search:{
        marginHorizontal: 20,
        marginBottom:20,
        alignSelf:"center",
        backgroundColor:"whitesmoke", 
    },
    vendor:{
        paddingTop:5, 
        paddingHorizontal:2,
        paddingBottom:10
    },
    pdts:{
        marginLeft:15,
        marginVertical:15
    },
    inputArea: {
        borderRadius: 10,
        borderWidth:StyleSheet.hairlineWidth,
        paddingHorizontal:10,
        paddingVertical: 2,
        marginVertical: 4,
    },
    input:{
        flex:1,
        textAlignVertical:"top",
        paddingVertical:8
    },
    label: {
        marginTop:10, 
        marginBottom:2, 
        fontSize:14, 
        lineHeight:16
    }
})
