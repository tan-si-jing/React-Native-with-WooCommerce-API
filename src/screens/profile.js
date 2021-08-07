import React, { useState } from "react";
import { SafeAreaView , Text, Image, StyleSheet, View, ScrollView, Dimensions } from "react-native";
import { palette, textStyles } from "../../assets/globalStyles";
import ProgressBar from '../components/progress'
import {Searchbar} from 'react-native-paper'
import Stats from '../components/profileStats'


export default function Profile({ navigation }){
    const {width} = Dimensions.get('window');
    const [searchQuery, setSearchQuery] = useState('');
    const onChangeSearch = query => setSearchQuery(query);
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView style={{marginBottom:20}}>
            <View style={{alignItems:"center", backgroundColor:palette.light, padding:25}}>
                <Image 
                    source={require('../../assets/avatar.png')}
                    style={styles.image}
                />
                <Text style={{...textStyles.title2, color:palette.darkest}}>Jane Doe</Text>
            </View>
            <View style={styles.details}>
                <Stats label={"Courses"} num={5} 
                    style={{borderRightColor:"lightgrey",borderRightWidth:0.5}}
                />
                <Stats label={"Completed"} num={0}
                    style={{borderLeftColor:"lightgrey", borderLeftWidth:0.5,
                        borderRightColor:"lightgrey",borderRightWidth:0.5}}
                />
                <Stats label={"Certificates"} num={0}
                    style={{borderLeftColor:"lightgrey", borderLeftWidth:0.5,
                        borderRightColor:"lightgrey",borderRightWidth:0.5}}
                />
                <Stats label={"Points"} num={0} 
                    style={{borderLeftColor:"lightgrey", borderLeftWidth:0.5}}
                />
            </View>
            <Text style={{...textStyles.title2,...styles.header, marginHorizontal:0.1*width}}>My Courses</Text>
            <Searchbar
                placeholder="Search"
                onChangeText={onChangeSearch}
                value={searchQuery}
                style={styles.search}
                inputStyle={textStyles.body}
            />
            <ProgressBar label="Title" progress={0.7} navigation={navigation}/>
            <ProgressBar label="Title" progress={0.3} navigation={navigation}/>
            <ProgressBar label="Title" progress={0} navigation={navigation}/>
            <ProgressBar label="Title" progress={0.4} navigation={navigation}/>
            <ProgressBar label="Title" progress={0.2} navigation={navigation}/>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    image:{
        tintColor: "white",
        height: 100,
        width: 100,
        margin:10,
    },
    details:{
        justifyContent:"center",
        paddingVertical:35,
        flexDirection:"row",
    },
    header: {
        paddingBottom:5, 
        color:palette.dark
    },
    search:{
        width:"80%",
        alignSelf:"center", 
        backgroundColor:"whitesmoke", 
        marginVertical:10
    }
})