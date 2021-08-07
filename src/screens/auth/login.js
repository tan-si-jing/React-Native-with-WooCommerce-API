import React, { useRef, useContext } from 'react';
import { Keyboard, Pressable, StyleSheet, Text, TouchableOpacity, View, ActivityIndicator } from 'react-native';
import { Formik } from 'formik';
import * as Yup from "yup";
import TextInput from '../../components/auth/textInput';
import {textStyles} from '../../../assets/globalStyles';
import AuthContext from '../../context/AuthContext'

const LoginSchema = Yup.object().shape({
  password: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
});

export default function Login({ navigation }) {

  const ref_pw = useRef();

  const { signIn } = useContext(AuthContext);

  return (
    <Pressable onPress={() => Keyboard.dismiss()} style={styles.container}>
      <Text style={{...textStyles.title2, textAlign:"center", marginVertical:25}}>
        Login to your account
      </Text>
      <Formik
        validationSchema={LoginSchema}
        initialValues={{ email: "", password: ""}}
        onSubmit={(values, actions) => {
          signIn(values);
          actions.resetForm();
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, errors, touched, values }) => (
          <View>
            <TextInput
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              icon="envelope"
              placeholder="Email"
              error={errors.email}
              touched={touched.email}
              autoCapitalize="none"
              autoCompleteType="email"
              returnKeyType="next"
              returnKeyLabel="next"
              onSubmitEditing={() => ref_pw.current.focus()}
            />
            <TextInput
              icon="lock"
              placeholder="Password"
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              value={values.password}
              error={errors.password}
              touched={touched.password}
              ref={ref_pw}
              autoCompleteType="password"
              autoCapitalize="none"
              returnKeyType="go"
              returnKeyLabel="go"
              onSubmitEditing={() => handleSubmit()}
              secureTextEntry
            />
            <TouchableOpacity style={{alignSelf:"flex-end", paddingHorizontal:5}} onPress={()=> navigation.navigate("ForgotPassword")}>
              <Text style={{...textStyles.body, fontSize:14, color:"saddlebrown", textDecorationLine:"underline" }}>
                Forgot password?
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleSubmit} style={styles.button}>
              <Text style={{fontSize:16, fontFamily:"os-bold"}}>Log In</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffe7d6',
    alignItems: 'center',
    justifyContent: 'center',
    padding:25,
  },
  button: {
    backgroundColor: "ivory",
    borderRadius: 20,
    alignItems:"center",
    padding: 15,
    marginTop: 25
  }
});