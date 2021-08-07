import React from 'react'
import { View, Text, StyleSheet, Dimensions, Image } from "react-native"
import { textStyles } from '../../assets/globalStyles'

export const SLIDER_WIDTH = Dimensions.get('window').width
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.8)

const CarouselCardItem = ({ item, index }) => {
  return (
    <View style={styles.container} key={index}>
      <Image
        source={item.imgUrl}
        style={styles.image}
      />
      <Text style={{...styles.header, ...textStyles.title2}}>{item.title}</Text>
      <Text style={{...textStyles.body, ...styles.body}}>{item.body}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 8,
    width: ITEM_WIDTH,
    paddingBottom: 40,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 3,
    margin:5
  },
  image: {
    width: ITEM_WIDTH,
    height: 150,
    marginTop:15
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 10
  },
  body: {
    lineHeight:20,
    paddingHorizontal: 20,
    paddingTop:10,
    height:125
  }
})

export default CarouselCardItem