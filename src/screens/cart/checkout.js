import React, { useState } from "react";
import { SafeAreaView , Text, StyleSheet, FlatList, TextInput, View, KeyboardAvoidingView, Alert} from "react-native";
import { palette, textStyles } from "../../../assets/globalStyles";
import CheckoutCard from "../../components/checkoutCard"
import Button from '../../components/button'
import Input from '../../components/input'
import { Checkbox } from 'react-native-paper'

export default function Checkout({ navigation }){
    const [checked, setChecked] = useState(false);
    const cart = [
        {img:require("../../../assets/placeholder.png"), title:"Title", price:"$0.00", qty:3, key:"1"},
        {img:require("../../../assets/placeholder.png"), title:"Title", price:"$0.00", qty:2, key:"2"},
        {img:require("../../../assets/placeholder.png"), title:"Title", price:"$0.00", qty:1, key:"3"},
        {img:require("../../../assets/placeholder.png"), title:"Title", price:"$0.00", qty:2, key:"4"},
        {img:require("../../../assets/placeholder.png"), title:"Title", price:"$0.00", qty:3, key:"5"},
    ]
    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={cart}
                renderItem={({ item }) => <CheckoutCard item={item} navigation={navigation} />} 
                style={styles.cartList}
                removeClippedSubviews={false}
                ListHeaderComponent={<Text style={{...textStyles.title2, marginBottom:10}}>Products</Text>}
                ListFooterComponent={
                    <View>
                    <View style={styles.total}>
                        <Text style={{...textStyles.body, color:palette.darkest, fontSize:16}}>Subtotal: $0.00</Text>
                        <Text style={{...textStyles.body, fontSize:14}}>Coupon code: XXX</Text>
                        <Text style={{...textStyles.body, fontSize:14}}>Discount: - $0.00</Text>
                        <Text style={{...textStyles.title3, fontSize:19}}>Total: $0.00</Text>
                    </View>
                    <View style={styles.details}>                        
                        <Text style={{...textStyles.title2, marginBottom:10}}>Billing Details</Text>
                        <View style={{flexDirection:"row", justifyContent:"space-between"}}>
                        <Input text="First name:" style={{marginVertical:5, width:"60%"}} autoCompleteType="name"/>
                        <Input text="Last name:" style={{marginVertical:5, width:"35%"}}/>
                        </View>
                        <Input text="Company name: (optional)" style={{marginVertical:5}}/>
                        <Input text="Country / Region:" style={{marginVertical:5}}/>
                        <Input text="Street Address:" style={{marginTop:5}} autoCompleteType="street-address"/>
                        <TextInput 
                            style={{...textStyles.body, ...styles.input, textAlignVertical:"center", marginBottom:5}} 
                            placeholder="Apartment, suite, unit etc. (optional)"
                        />
                        <Input text="Town / City: (optional)" style={{marginVertical:5}}/>
                        <Input text="Postal Code / ZIP:" style={{marginVertical:5}} autoCompleteType="postal-code"/>
                        <Input text="Phone:" style={{marginVertical:5}} autoCompleteType="tel"/>
                        <Input text="Email:" style={{marginVertical:5}} autoCompleteType="email" keyboardType="email-address"/>
                        <Text style={{...textStyles.body, ...styles.label}}>Additional Information:</Text>
                        <TextInput
                            style={{...textStyles.body, ...styles.input}}
                            underlineColorAndroid="transparent"
                            multiline
                            numberOfLines={8}
                            placeholder="Other notes"
                        />
                    </View>
                    <View style={styles.payment}>
                        <Text style={{...textStyles.title2, marginBottom:10}}>Payment Details</Text>
                        <Input text="Card number:" autoCompleteType="cc-number" keyboardType="numeric"/>
                        <View style={{flexDirection:"row", justifyContent:"space-between"}}>
                        <Input text="Expiry Date:" style={{width:"60%"}} placeholder="MM / YY" autoCompleteType="cc-exp"/>
                        <Input text="CVC:" style={{width:"35%"}} autoCompleteType="cc-csc" keyboardType="numeric" secureTextEntry={true}/>
                        </View>
                        <View style={{marginTop:15}}>
                        <Text style={{...textStyles.body, lineHeight:21}}>Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our privacy policy.</Text>
                        <View style={{flexDirection:"row", marginTop:10}}>
                        <Checkbox
                            status={checked ? 'checked' : 'unchecked'}
                            onPress={() => setChecked(!checked) }
                            color={palette.medium}
                        />
                        <Text style={{...textStyles.title3, width:"90%", paddingVertical:5, paddingHorizontal:2}}>I have read and agree to the website terms and conditions</Text>
                        </View>
                        </View>
                    </View>
                    <Button text="Place order" width={130} 
                        onPress={() => {checked ? navigation.navigate("Purchase") 
                            : Alert.alert('Please agree to the terms and conditions before proceeding.')}}/>
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
        textAlignVertical:"top",
        flexDirection: "row",
        alignItems:"center",
        borderRadius: 10,
        borderWidth:StyleSheet.hairlineWidth,
        paddingHorizontal:10,
        paddingVertical: 5,
        marginVertical: 4,
        flex:1,
        color:palette.dark
    },
    total:{
        alignItems:"flex-end",
        paddingBottom:20,
        borderBottomColor:"lightgrey",
        borderBottomWidth:1,
        marginTop:15
    },
    label:{
      marginTop:10, 
      marginBottom:2, 
      fontSize:14, 
      lineHeight:16
    },
    details:{
        marginTop: 20,
        borderBottomWidth:1,
        borderBottomColor:"lightgrey",
        paddingBottom:20
    },
    payment:{
        marginTop:20
    }
})