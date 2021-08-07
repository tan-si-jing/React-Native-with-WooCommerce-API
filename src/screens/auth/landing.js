import React from 'react';
import { StyleSheet, Text, TouchableOpacity, SafeAreaView, Image } from 'react-native';
import { textStyles} from '../../../assets/globalStyles';

export default function Landing({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={{...textStyles.title1, textAlign: "center", paddingTop:20}}>
                Welcome to KQwest!
            </Text>
            <Image source={require('../../../assets/welcome.jpg')} resizeMode="contain" style={{height:"50%", marginHorizontal:"auto", marginVertical:10}}/>
            <TouchableOpacity onPress={() => navigation.navigate("Login")} style={styles.priButton}>
              <Text style={textStyles.title3}>Have an account? Log in</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{marginTop:10, paddingVertical:5}}>
                <Text style={styles.skip}>
                    Continue without an account
                </Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding:25
    },
    priButton: {
        backgroundColor:"#fed4ae",
        borderRadius: 20,
        alignItems:"center",
        width:"85%",
        padding:15,
        marginTop: 15
    },
    secButton: {
        backgroundColor:"#f8edeb",
        borderRadius: 20,
        alignItems:"center",
        width:"85%",
        padding:15,
        marginTop: 15
    },
    skip:{
        color:"grey",
        fontFamily:'os-regular', 
        textDecorationLine:"underline",
        fontSize:15
    }
  });