import React, { useState, useEffect } from "react";
import { SafeAreaView , Text, Image, StyleSheet, View, ScrollView, Modal, TouchableOpacity, Pressable} from "react-native";
import { palette, textStyles } from "../../../assets/globalStyles";
import Button from "../../components/button";
import ProductCarousel from "../../components/pdtCarousel";
import wc from '../../services/woocommerce'

export default function Listing({ navigation, route }){
    let course = []
    const [modalVisible, setModalVisible] = useState(false);
    const [product, setProduct] = useState({})
    useEffect(() => {
        wc.get(`/products/${route.params.id}`, {}).then(res => {
            setProduct(res.data);
            res.data.related_ids.map(id => course.push({id:id}))
        }).catch(e=>console.log(e))
      });
    
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
            <Image
                source={{uri:product.image[0].src}}
                style={styles.img}
            />
            <View style={styles.details}>
                <View style={styles.row}>
                    <Text style={textStyles.title2}>{product.name}</Text>
                    <Text style={{...textStyles.title3,...styles.price}}>{product.price}</Text>
                </View>
                <Text style={{...textStyles.title3, paddingVertical:5}}>Sold by: XXX</Text>
                <Text style={{...textStyles.body, ...styles.desc}}>{product.description}</Text>
                <Button text="Add to Cart" onPress={() => setModalVisible(true)} width={130}/>
                <Text style={{...textStyles.title2, marginTop:25}}>Vendor Information</Text>
                <View style={styles.vendor}>
                    <Text style={{...textStyles.body, paddingVertical:2}}>Vendor: XXX</Text>
                    <Text style={textStyles.body}>Address: XXX</Text>
                </View>
            </View>
            <Text style={{...textStyles.title2, ...styles.related}}>Related Products</Text>
            <ProductCarousel data={course} navigation={navigation}/>
            <View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <TouchableOpacity 
                    style={styles.centeredView}
                    activeOpacity={1} 
                    onPressOut={() => setModalVisible(false)}
                >
                <Pressable style={styles.modalView}>
                    <Text style={{...textStyles.title3,...styles.modalText}}>Added to Cart!</Text>
                    <View style={styles.row}>
                    <TouchableOpacity style={styles.button} onPress={() => setModalVisible(!modalVisible)}>
                        <Text style={{...textStyles.body}}>Continue Shopping</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => {setModalVisible(!modalVisible); navigation.navigate('My Cart')}}>
                        <Text style={{...textStyles.body}}>View Cart</Text>
                    </TouchableOpacity>
                    </View>
                </Pressable>
                </TouchableOpacity>
            </Modal>
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
        marginTop:15
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
    vendor:{
        paddingTop:5, 
        paddingHorizontal:2,
        borderBottomWidth:1,
        borderBottomColor:"lightgrey",
        paddingBottom:20
    },
    related:{
        marginLeft:15,
        marginVertical:15
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        },
    modalView: {
        margin: 20,
        backgroundColor: palette.lightest,
        borderRadius: 20,
        paddingHorizontal: 10,
        paddingVertical:35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
        width: 0,
        height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    modalText:{
        fontSize:18,
    },
    button:{
        marginHorizontal:15,
        marginTop:25,
        paddingHorizontal:5,
        paddingVertical:3,
        borderBottomColor:palette.light,
        borderBottomWidth:1
    }
})
