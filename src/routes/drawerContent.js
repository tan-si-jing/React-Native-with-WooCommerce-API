import React from 'react';
import { View, StyleSheet, Image, Text, SafeAreaView, ScrollView } from 'react-native';
import {DrawerItem, DrawerItemList} from '@react-navigation/drawer';
import { Feather as Icon } from "@expo/vector-icons";
import AuthContext from '../context/AuthContext';

export default function DrawerContent(props) {
  const { signOut } = React.useContext(AuthContext);
  return(
    <SafeAreaView style={{flex:1}}>
      <View style={styles.drawerContent}>
        <View style={styles.userInfoSection}>
          <View style={{flexDirection:'row',marginTop: 25, alignItems:"center"}}>
            <Image 
              source={require('../../assets/avatar.png')}
              style={{
                tintColor: "lightgrey",
                height: 50,
                width: 50
                }}
            />
            <Text style={styles.title}>John Doe</Text> 
          </View>
        </View>
        <ScrollView>
          <DrawerItemList {...props}/>
        </ScrollView>
      </View>
      <View style={styles.bottomDrawerSection}>
        <DrawerItem 
          icon={({size, color}) => (
            <Icon
              name="log-out" 
              color={color}
              size={size}
            />
          )}
          label="Logout"
          onPress={() => signOut() }
          labelStyle={{fontSize:16.5}}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
      paddingHorizontal: 30,
      paddingVertical:13,
      borderBottomColor: '#f4f4f4',
      borderBottomWidth: 1,
    },
    title: {
      fontSize: 16,
      marginTop: 3,
      fontWeight: 'bold',
      padding:15
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    drawerSection: {
      marginTop: 15,
      paddingHorizontal:15,
      backgroundColor:"whitesmoke"
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1,
        paddingHorizontal:15
    },
  });