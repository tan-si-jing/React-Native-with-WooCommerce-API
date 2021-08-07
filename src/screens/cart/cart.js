import React, { useState } from "react";
import { SafeAreaView , Text, StyleSheet, FlatList, TextInput, TouchableOpacity, View, KeyboardAvoidingView } from "react-native";
import { palette, textStyles } from "../../../assets/globalStyles";
import CartCard from "../../components/cartCard"
import Button from '../../components/button'

export default function Cart({ navigation }){
    const cart = [
        {img:require("../../../assets/placeholder.png"), title:"Title", price:"$0.00", key:"1"},
        {img:require("../../../assets/placeholder.png"), title:"Title", price:"$0.00", key:"2"},
        {img:require("../../../assets/placeholder.png"), title:"Title", price:"$0.00", key:"3"},
        {img:require("../../../assets/placeholder.png"), title:"Title", price:"$0.00", key:"4"},
        {img:require("../../../assets/placeholder.png"), title:"Title", price:"$0.00", key:"5"},
    ]
    const [coupon, setCoupon] = useState("")
    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={cart}
                renderItem={({ item }) => <CartCard item={item} navigation={navigation} />} 
                style={styles.cartList}
                removeClippedSubviews={false}
                ListHeaderComponent={<Text style={{...textStyles.title2, marginBottom:10}}>Products</Text>}
                ListFooterComponent={
                    <View>
                    <View style={styles.coupon}>
                        <TextInput
                            placeholder="Coupon code"
                            style={{...styles.input, ...textStyles.body}}
                            onChangeText={text => setCoupon(text)}
                            value={coupon}
                        />
                        <TouchableOpacity style={styles.couponButton}>
                            <Text style={{...textStyles.body,color:palette.dark}}>Apply</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.total}>
                        <Text style={{...textStyles.body, color:palette.darkest, fontSize:16}}>Subtotal: $0.00</Text>
                        <Text style={{...textStyles.body, fontSize:14}}>Discount: - $0.00</Text>
                        <Text style={{...textStyles.title3, fontSize:19}}>Total: $0.00</Text>
                    </View>
                    <Button text="Proceed to Checkout" onPress={()=>navigation.navigate("Checkout")}/>
                    </View>
                }
            />
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:20
    },
    cartList:{
        marginBottom:10
    },
    input:{
        borderColor:palette.dark,
        borderWidth:1,
        borderRadius:20,
        paddingVertical:3,
        paddingHorizontal:15,
        width:"50%"
    },
    coupon:{
        flexDirection:"row",
        alignItems:"center",
        marginVertical:10
    },
    couponButton:{
        paddingHorizontal:15,
        marginHorizontal:5,
        borderRadius:15,
        backgroundColor:palette.light,
        paddingVertical:3,
    },
    total:{
        alignItems:"flex-end"
    }
})