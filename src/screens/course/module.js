import React, { useState } from "react";
import { SafeAreaView , Text, Modal, View, Image, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { List, ProgressBar } from 'react-native-paper';
import { textStyles, palette } from '../../../assets/globalStyles'
import { Feather as Icon } from "@expo/vector-icons";
import { usePreventScreenCapture } from 'expo-screen-capture';

export default function Module({ navigation }){
    const [modalVisible, setModalVisible] = useState(false);
    usePreventScreenCapture();
    return (
        <SafeAreaView style={styles.container}>
            <View style={{paddingHorizontal:10}}>
                <TouchableOpacity onPress={() => setModalVisible(true)} style={{flexDirection:"row", alignItems:"center"}}>
                    <Icon
                        name="fast-forward"
                        size={20}
                        color="steelblue"
                        style={{paddingHorizontal:5}}
                    />
                    <Text style={{...textStyles.body, color:"steelblue"}}>Jump to...</Text>
                </TouchableOpacity>
                <ProgressBar progress={0.7} color={palette.medium} style={styles.progress}/>
                </View>
            <Image
                source={require("../../../assets/placeholder.png")}
                style={styles.img}
            />
            <View style={{flexDirection:"row", justifyContent:"space-between", paddingHorizontal:10}}>
                <TouchableOpacity>
                    <Text style={{...textStyles.body, color:"steelblue"}}>Previous</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={{...textStyles.body, color:"steelblue"}}>Next</Text>
                </TouchableOpacity>
            </View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <TouchableOpacity 
                    activeOpacity={1} 
                    onPressOut={() => setModalVisible(false)}
                    style={{flex:1}}
                >
                <View style={styles.modal}>
                <View style={styles.modalView}>
                <ScrollView>
                <List.Section style={{backgroundColor:"white", fontFamily:"os-regular"}}>
                <List.Accordion
                    title="Item"
                    left={() => <List.Icon color={palette.medium} icon="circle" />}
                    style={styles.group}
                    titleStyle={{fontFamily:"os-regular"}}>
                    <View>
                    <List.Item 
                        title="Item" 
                        left={() => <List.Icon color={palette.medium} icon="circle" />} 
                        onPress={() => setModalVisible(!modalVisible)}
                        style={styles.group}
                    />
                    <List.Item title="Item" left={() => <List.Icon color="lightgrey" icon="circle"/>} onPress={() => setModalVisible(!modalVisible)} style={styles.group}/>
                    </View>
                </List.Accordion>
                <List.Accordion
                    title="Item"
                    left={() => <List.Icon color="lightgrey" icon="circle" />}
                    style={styles.group}
                    titleStyle={{fontFamily:"os-regular"}}>
                    <View>
                    <List.Item title="Item" left={() => <List.Icon color="lightgrey" icon="circle"/>} style={styles.group} onPress={() => setModalVisible(!modalVisible)}/>
                    <List.Item title="Item" left={() => <List.Icon color="lightgrey" icon="circle"/>} style={styles.group} onPress={() => setModalVisible(!modalVisible)}/>
                    </View>
                </List.Accordion>
                <List.Accordion
                    title="Item"
                    left={() => <List.Icon color="lightgrey" icon="circle" />}
                    style={styles.group}
                    titleStyle={{fontFamily:"os-regular"}}>
                    <View>
                    <List.Item title="Item" left={() => <List.Icon color="lightgrey" icon="circle"/>} style={styles.group} onPress={() => setModalVisible(!modalVisible)}/>
                    </View>
                </List.Accordion>
                <List.Item 
                    title="Item" 
                    left={() => <List.Icon color="lightgrey" icon="circle" />}
                    style={styles.group}
                    titleStyle={{fontFamily:"os-regular"}}
                    onPress={() => setModalVisible(!modalVisible)}
                />
                </List.Section>
                </ScrollView>
                </View>
                </View>
                </TouchableOpacity>
            </Modal>
            
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin:15,
        marginVertical:25,
    },
    modal:{
        marginHorizontal:15,
        height: '40%', 
        marginTop: 'auto'
    },
    modalView: {
        backgroundColor: "white",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        padding:5,
        paddingHorizontal:15,
        borderTopStartRadius:20,
        borderTopEndRadius:20
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
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
    },
    img:{
        height:225,
        width:"95%",
        alignSelf:"center",
        marginVertical:15
    },
});
