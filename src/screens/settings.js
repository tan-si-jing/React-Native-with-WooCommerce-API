import React from "react";
import { SafeAreaView , Text, StyleSheet, View, ScrollView, Pressable, Alert, Keyboard } from "react-native";
import Input from '../components/input'
import Button from '../components/button'
import { textStyles } from "../../assets/globalStyles"
import { Formik } from 'formik';
import * as Yup from "yup";
import wc from '../services/woocommerce'
import AsyncStorage from "@react-native-async-storage/async-storage";

const AccountSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email"),
    fname: Yup.string().max(50, "Too Long!"),
    lname: Yup.string().max(50, "Too Long!"),
  });

const PasswordSchema = Yup.object().shape({
    currpassword: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!"),
    password: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!"),
    cfmpassword: Yup.string()
      .equals([Yup.ref("password")], "Passwords don't match")
      .required("Required")
  });

export default function Settings(){
    return (
        <SafeAreaView style={styles.container}>
            <View style={{margin:10}}>
            <ScrollView>
            <Pressable onPress={() => Keyboard.dismiss()}>
            <Formik
                validationSchema={AccountSchema}
                initialValues={{ email: "", fname: "", lname: "" }}
                onSubmit={async (values,actions) => {
                    let update = {}
                    if (values.email!="") {
                        update = {...update, email:values.email}
                    }
                    if (values.fname!="") {
                        update = {...update, first_name:values.fname}
                    }
                    if (values.lname!="") {
                        update = {...update, last_name:values.lname}
                    }
                    if (update != {}) {
                        let id;
                        try {
                            id = await AsyncStorage.getItem('userID')
                        } catch (e) { console.log(e) }
                        await wc.put(`/customers/${id}`, update)
                        .then((res) => {
                            Alert.alert("Account Updated!")})
                        .catch(e => console.log(e))
                    }
                    actions.resetForm();
                }}
            >
                {({ handleChange, handleBlur, handleSubmit, errors, touched, values }) => (
                <View style={styles.section}>
                <Text style={{...textStyles.title1, paddingBottom:10}}>Account</Text>
                <Input text={"Username:"}  editable={false}/>
                <Input text={"First Name:"} style={{marginHorizontal:4}} autoCompleteType="name"/>
                <Input text={"Last Name:"} style={{marginHorizontal:4}}/>
                <Input text={"Email:"} style={{marginHorizontal:4}} autoCompleteType="email" keyboardType="email-address"/>
                <Button text={"Update Account"} onPress={handleSubmit} style={{marginHorizontal:4}}/>
                </View>
                )}
            </Formik>
            <Formik
                validationSchema={PasswordSchema}
                initialValues={{ currpassword: "", password: "", cfmpassword: "" }}
                onSubmit={async (values,actions) => {
                    try {
                        let store = await AsyncStorage.multiGet(['password', 'userID'])
                        if (values.currpassword == store[0][1]) {
                            if (values.password == values.cfmpassword) {
                                wc.put(`/customers/${store[1][1]}`,{password:values.password})
                                .then(res => Alert.alert("Password successfully updated!"))
                            }
                        } else {
                            Alert.alert('Password is incorrect.', 'Please check your credentials and try again.')
                        }
                    } catch(e) { console.log(e) }
                    actions.resetForm();
                }}
            >
                {({ handleChange, handleBlur, handleSubmit, errors, touched, values }) => (
                <View style={styles.section}>
                <Text style={{...textStyles.title1, paddingVertical:10}}>Change Password</Text>
                <Input text={"Current Password"} style={{marginHorizontal:4}} secureTextEntry={true}/>
                <Input text={"New Password:"} style={{marginHorizontal:4}} secureTextEntry={true}/>
                <Input text={"Confirm Password:"} style={{marginHorizontal:4}} secureTextEntry={true}/>
                <Button text={"Update Password"} onPress={handleSubmit} style={{marginHorizontal:4}}/>
                </View>
                )}
            </Formik>
            <Formik
                initialValues={{ password: "",}}
                onSubmit={async (values,actions) => {
                    try {
                        let store = await AsyncStorage.multiGet(['password', 'userID'])
                        if (values.password == store[0][1]) {
                            wc.del(`/customers/${store[1][1]}`, {force:true}).then(
                                res => Alert.alert("Account deleted!"))
                            .catch(e => console.log(e))
                        } else {
                            Alert.alert('Password is incorrect.', 'Please check your credentials and try again.')
                        }
                    } catch(e) { console.log(e) }
                    actions.resetForm();
                }}
            >
                {({ handleChange, handleBlur, handleSubmit, errors, touched, values }) => (
                <View style={styles.section}>
                <Text style={{...textStyles.title1, paddingVertical:10}}>Delete Account</Text>
                <Input 
                    text={"This will erase all your account data from the site. Enter password to delete this account:"}
                    style={{marginHorizontal:4}}
                />
                <Button text={"Delete Account"} onPress={handleSubmit}/>
                </View>
                )}
            </Formik>
            </Pressable>
            </ScrollView>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal:15,
        backgroundColor: "white"
    },
    section: {
        paddingBottom: 20,
        borderBottomWidth:1,
        borderBottomColor:"lightgrey",
        marginTop:20
    }
})