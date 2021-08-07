import React from 'react';
import { Keyboard, Pressable, StyleSheet, Text, TouchableOpacity, View, SafeAreaView, Alert } from 'react-native';
import { Formik } from 'formik';
import * as Yup from "yup";
import TextInput from '../../components/auth/textInput'
import { textStyles } from '../../../assets/globalStyles'
import { get, post } from '../../services/woocommerce'

const SignupSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  password: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  cfmpassword: Yup.string()
  .equals([Yup.ref("password")], "Passwords don't match")
  .required("Required"),
});

export default function Signup({ navigation }) {
  return (
    <SafeAreaView style={{flex:1}}>
    <Pressable onPress={() => Keyboard.dismiss()} style={styles.container}>
      <Text style={{...textStyles.title2, textAlign: "center", paddingVertical:25}}>
        Create a new account below
      </Text>
      <Formik
        validationSchema={SignupSchema}
        initialValues={{ email: "", username:"", password: "", cfmpassword: "" }}
        onSubmit={(values, actions) => {
          get('/customers', {email: values.email})
          .then(res => {
            if (res.data != []) {
              Alert.alert("Error!", "This email has already been registered.", [
                { text:"OK", onPress:() => {
                  actions.resetForm();
                }}
              ])
            } else {
              post('/customers', {email: values.email, username: values.username, password:values.password})
              .then(resp => {
                if (resp.data.id) {
                  Alert.alert("Account created!", "Log in to your new account", [
                    { text:"Log in", onPress:() => {
                      actions.resetForm();
                      navigation.navigate("Login")
                    }}
                  ])
                } else {
                  Alert.alert("Error!", resp.data.message, [
                    { text:"OK", onPress:() => {
                      actions.resetForm();
                    }}
                  ])
                }
              })
              .catch(err => {
                console.log(err);
              })
            }
          })
          .catch(err => {
            console.log(err);
          })
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, errors, touched, values}) => (
          <View>
            <TextInput
              onChangeText={handleChange('username')}
              onBlur={handleBlur('username')}
              value={values.username}
              icon="user"
              placeholder="Enter username"
              error={errors.username}
              touched={touched.username}
              autoCapitalize="none"
              returnKeyType="next"
              returnKeyLabel="next"
            />
            <TextInput
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              icon="envelope"
              placeholder="Enter email"
              error={errors.email}
              touched={touched.email}
              autoCapitalize="none"
              autoCompleteType="email"
              returnKeyType="next"
              returnKeyLabel="next"
            />
            <TextInput
              icon="lock"
              placeholder="Enter password"
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              value={values.password}
              error={errors.password}
              touched={touched.password}
              autoCompleteType="password"
              autoCapitalize="none"
              returnKeyType="next"
              returnKeyLabel="next"
              secureTextEntry
            />
            <TextInput
              icon="lock"
              placeholder="Confirm password"
              onChangeText={handleChange("cfmpassword")}
              onBlur={handleBlur("cfmpassword")}
              value={values.cfmpassword}
              error={errors.cfmpassword}
              touched={touched.cfmpassword}
              autoCompleteType="password"
              autoCapitalize="none"
              returnKeyType="go"
              returnKeyLabel="go"
              onSubmitEditing={() => handleSubmit()}
              secureTextEntry
            />
            <TouchableOpacity onPress={handleSubmit} style={styles.button}>
              <Text style={{fontSize:16, fontFamily:"os-bold"}}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
      <View style={{flexDirection:"row", marginTop:50}}>
        <Text>
          Already have an account?
        </Text>
        <TouchableOpacity style={{marginHorizontal:5}} onPress={() => navigation.navigate("Login")}>
          <Text style={{color:"darkred", textDecorationLine:"underline"}}>Log in here!</Text>
        </TouchableOpacity>
      </View>
    </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fae1dd',
    alignItems: 'center',
    justifyContent: 'center',
    padding:25
  },
  button: {
    backgroundColor: "ivory",
    borderRadius: 20,
    alignItems:"center",
    padding: 15,
    marginTop: 25
  }
});