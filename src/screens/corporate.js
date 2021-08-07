import React, {useState, useRef} from "react";
import { SafeAreaView , ScrollView, Text, View, StyleSheet, TouchableOpacity } from "react-native";
import Carousel, { Pagination } from 'react-native-snap-carousel'
import CarouselCardItem, { SLIDER_WIDTH, ITEM_WIDTH } from '../components/bigCarousel'
import { palette, textStyles } from "../../assets/globalStyles";

export default function Corporate(){
    const isCarousel = useRef(null)
    const data = [
        {
          title: "Immersive mobile learning",
          body: "Learn valuable skills on-the-go with mobile micro-learning courses",
          imgUrl: require("../../assets/k1.png")
        },
        {
          title: "Well thought-out digital pedagogy",
          body: "Meaningful cognitive learning that can improve the quality of teaching and the way students learn, helping them gain a better grasp of knowledge taught",
          imgUrl: require("../../assets/k2.png")
        },
        {
          title: "Recognised certification",
          body: "Courses and qualifications from trusted training partners to meet your learning needs",
          imgUrl: require("../../assets/k3.png")
        },
        {
          title:"Relevant to industrial needs",
          body:"Practical skills and knowledge that are required in today's job market",
          imgUrl: require("../../assets/k4.png")
        }
      ]
      const [index, setIndex] = useState(0)
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
            <Text style={{...textStyles.title3, ...styles.top}}>
                The KQwest for knowledge never really ends; transcending time and space constraints to teach and learn anytime, anywhere.
            </Text>
            <Carousel
                ref={isCarousel}
                data={data}
                renderItem={CarouselCardItem}
                sliderWidth={SLIDER_WIDTH}
                itemWidth={ITEM_WIDTH}
                useScrollView={true}
                onSnapToItem={(index) => setIndex(index)}
            />
            <Pagination
                dotsLength={data.length}
                activeDotIndex={index}
                carouselRef={isCarousel}
                dotStyle={{
                    width: 10,
                    height: 10,
                    borderRadius: 5,
                    marginHorizontal: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.92)'
                }}
                inactiveDotOpacity={0.4}
                inactiveDotScale={0.6}
            />
            <View style={styles.details}>
            <Text style={{...textStyles.title2, color:palette.dark, paddingVertical:13}}>Why KQWest?</Text>
            <View>
                <Text style={{...textStyles.title3, ...styles.header}}>Global Market Reach</Text>
                <Text style={{...textStyles.body, ...styles.body, ...styles.borderBottom}}>Grow your brand presence within the global community</Text>
            </View>
            <View>
                <Text style={{...textStyles.title3, ...styles.header}}>Cross Border Teaching</Text>
                <Text style={{...textStyles.body, ...styles.body, ...styles.borderBottom}}>Knowledge knows no boundaries; deliver quality cross-border education that reaches an international audience</Text>
            </View>
            <View>
                <Text style={{...textStyles.title3, ...styles.header}}>Enhanced Learning Journey</Text>
                <Text style={{...textStyles.body, ...styles.body}}>Revolutionise the way we acquire knowledge through immersive technologies, bringing learning to the next level</Text>
            </View>
            </View>
            <View style={{padding:20, marginBottom:10}}>
                <Text style={{...textStyles.title2, paddingBottom:10}}>Get onboard!</Text>
                <Text style={{...textStyles.title3, color:palette.dark, fontSize:18}}>Embark on your KQwest for knowledge with us</Text>
                <View style={{alignItems:"flex-end"}}>
                <TouchableOpacity style={{...styles.button}} onPress={()=>console.log("Corporate")}>
                    <Text style={{...textStyles.body, color: palette.darkest}}>Connect with us</Text>
                </TouchableOpacity>
                </View>
            </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"white",
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center'
    },
    top:{
        backgroundColor:"#dae8f0",
        color:palette.darkest,
        paddingHorizontal:20,
        paddingVertical: 20,
        borderRadius:20,
        margin:20,
        fontSize:18
    },
    details:{
        paddingHorizontal:25,
        paddingVertical:20,
        backgroundColor:"#dae8f0"
    },
    header:{
        fontSize:18,
        color:palette.darkest,
        paddingTop:17
    },
    body:{
        lineHeight:22,
        color:palette.dark,
        paddingTop:8,
        paddingBottom:20
    },
    borderBottom:{
        borderBottomColor: "grey",
        borderBottomWidth:1
    },
    button:{
        borderRadius:20,
        backgroundColor: "#dae8f0",
        paddingHorizontal:15,
        paddingVertical:9,
        alignItems:"center",
        marginTop:20
    }
})