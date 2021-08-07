import React from "react";
import { SafeAreaView , Text, View, ScrollView, Image, StyleSheet } from "react-native";
import { List, ProgressBar } from 'react-native-paper';
import { textStyles, palette } from '../../../assets/globalStyles'

export default function Course({ navigation }){
    const navigate = () => navigation.navigate("Module")

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
            <Image
                source={require("../../../assets/placeholder.png")}
                style={styles.img}
            />
            <View style={styles.details}>
            <Text style={textStyles.title2}>Title</Text>
            <ProgressBar progress={0.7} color={palette.medium} style={styles.progress}/>
            <Text style={{...textStyles.body, ...styles.desc}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae aliquam metus. Aliquam eleifend, urna id volutpat gravida, nibh dolor mollis diam, nec ultrices libero ligula vel ex. Maecenas vitae laoreet nisi. Suspendisse commodo auctor enim, sit amet congue quam ullamcorper vitae. Maecenas pharetra lacus vel placerat mattis. Suspendisse sed erat urna. Suspendisse non lobortis mi, eget sodales augue. Nulla risus leo, varius luctus laoreet at, dignissim vitae neque. Curabitur viverra nunc non neque ultrices, a tincidunt urna vehicula. Vivamus nibh magna, suscipit sed mattis vel, dapibus at mauris. Proin cursus, dolor a accumsan egestas, ex risus vulputate est, vel facilisis ex nibh at orci. Ut eget cursus nisi. Nunc placerat rutrum sem, vitae suscipit leo. Curabitur mi arcu, dignissim in elit mollis, tincidunt semper diam. Mauris pulvinar dui sed justo accumsan tincidunt.
            </Text>
            <Text style={{...textStyles.title2, marginTop:20}}>Course Content</Text>
            <List.Section style={{backgroundColor:"white", fontFamily:"os-regular", paddingHorizontal:10, borderRadius:10, marginTop:20}}>
            <List.Accordion
                title="Item"
                left={() => <List.Icon color={palette.medium} icon="circle" />}
                style={styles.group}
                titleStyle={{fontFamily:"os-regular"}}>
                <View>
                <List.Item 
                    title="Item" 
                    left={() => <List.Icon color={palette.medium} icon="circle" />} onPress={navigate}
                    style={styles.group}/>
                <List.Item title="Item" left={() => <List.Icon color="lightgrey" icon="circle"/>} style={styles.group} onPress={navigate}/>
                </View>
            </List.Accordion>
            <List.Accordion
                title="Item"
                left={() => <List.Icon color="lightgrey" icon="circle" />}
                style={styles.group}
                titleStyle={{fontFamily:"os-regular"}}>
                <View>
                <List.Item title="Item" left={() => <List.Icon color="lightgrey" icon="circle"/>} style={styles.group} onPress={navigate}/>
                <List.Item title="Item" left={() => <List.Icon color="lightgrey" icon="circle"/>} style={styles.group} onPress={navigate}/>
                </View>
            </List.Accordion>
            <List.Accordion
                title="Item"
                left={() => <List.Icon color="lightgrey" icon="circle" />}
                style={styles.group}
                titleStyle={{fontFamily:"os-regular"}}>
                <View>
                <List.Item title="Item" left={() => <List.Icon color="lightgrey" icon="circle"/>} style={styles.group} onPress={navigate}/>
                </View>
            </List.Accordion>
            <List.Item 
                title="Item" 
                left={() => <List.Icon color="lightgrey" icon="circle" />}
                style={styles.group}
                titleStyle={{fontFamily:"os-regular"}}
                onPress={navigate}
            />
            </List.Section>
            </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1, 
        margin:15,
        marginVertical:25,
    },
    img:{
        height:225,
        width:"95%",
        alignSelf:"center"
    },
    desc:{
        lineHeight:22,
        color:palette.dark,
        marginTop:10
    },
    details:{
        padding:10,
        marginTop:15
    },
    progress:{
        height:15,
        borderRadius:20,
        marginVertical: 10
    },
    group:{
        backgroundColor:"white", 
        borderColor:"lightgrey", 
        borderBottomWidth:1,
    }
})