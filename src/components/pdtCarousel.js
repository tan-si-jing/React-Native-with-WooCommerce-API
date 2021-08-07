import React from 'react'
import { FlatList, StyleSheet} from 'react-native'
import PdtCard from './pdtCarouCard'

export default function ProductCarousel({data, navigation}) {
    return (
        <FlatList 
            horizontal
            showsHorizontalScrollIndicator={false}
            data={data}
            renderItem={({item}) => <PdtCard id={item.id} navigation={navigation}/>}
            style={styles.carousel}
        />
    )
}

const styles = StyleSheet.create({
    carousel:{
        marginLeft:20,
        height:225
    }
})