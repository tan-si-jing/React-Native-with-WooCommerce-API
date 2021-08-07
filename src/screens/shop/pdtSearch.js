import React, {useState} from "react";
import { SafeAreaView , StyleSheet, Text, FlatList, TouchableOpacity, View, Modal, ScrollView } from "react-native";
import { Searchbar, Divider, Checkbox, Chip } from 'react-native-paper';
import { palette, textStyles } from "../../../assets/globalStyles";
import ProductCard from "../../components/pdtCard";
import { Feather as Icon } from "@expo/vector-icons";
import RadioButton from '../../components/radioButton'
import wc from '../../services/woocommerce'

export default function PdtSearch({ navigation, route }){
    const [searchQuery, setSearchQuery] = useState(route.params.query);
    //const onChangeSearch = query => setSearchQuery(query);
    const [modalVisible, setModalVisible] = useState(false);
    const [sortBy, setSortBy] = useState(route.params.sort)
    const [filter, setFilter] = useState(route.params.filter)
    var course = []
    wc.get('/products', {search:searchQuery}).then(
        res => {
            res.data.map(item => {
                let obj = {}
                obj['img'] = {uri: item.image[0].src}
                obj['key'] = item.id
                obj['price'] = item.price
                obj['title'] = item.name
                course.push(obj)
            })
        }
    ).catch(e=>console.log(e))
    const targetGrp = [
        {name:'Entry-level', key:'6'},
        {name:'Managerial', key:'7'},
        {name:'Professionals', key:'8'},
        {name:'Tertiary students', key:'9'}
    ]
    const [selectT, setSelectT] = useState([]) 
    const industries = [
        {name:'Academic', key:'10'},
        {name:'Business', key:'11'},
        {name:'Cleaning', key:'12'},
        {name:'Environmental', key:'13'}
    ]
    const [selectI, setSelectI] = useState([]) 
    const subcategories = [
        {name:'Workplace Safety & Health', key:'14'},
        {name:'Project Management', key:'15'},
        {name:'Retail Services', key:'16'},
        {name:'Professional Development', key:'17'},
        {name:'Events Management', key:'18'},
        {name:'Banking & Finance', key:'19'}
    ]
    const [selectS, setSelectS] = useState([]) 

    return (
        <SafeAreaView style={styles.container}>
            <Text style={{...textStyles.title2, ...styles.header}}>Search results:</Text>
            <View style={styles.row}>
            <Searchbar
                placeholder={searchQuery}
                //onChangeText={onChangeSearch}
                value={searchQuery}
                style={styles.search}
                inputStyle={textStyles.body}
                onIconPress={()=>navigation.setParams({query:searchQuery})}
                onSubmitEditing={()=>navigation.setParams({query:searchQuery})}
            />
            <TouchableOpacity onPress={() => setModalVisible(true)}>
                <Icon 
                    name="sliders"
                    color={palette.dark} 
                    size={30} 
                    style={{padding:5}}
                />
            </TouchableOpacity>
            </View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modal}>
                <ScrollView style={styles.modalView}>
                <View style={{flexDirection:"row", justifyContent:"space-between", paddingTop:5, alignItems:"flex-start"}}>
                <Text style={{...textStyles.title2, ...styles.title}}>Sort</Text>
                <TouchableOpacity onPress={() => setModalVisible(false)}>
                    <Icon 
                        name="x"
                        color={palette.dark} 
                        size={25} 
                        style={{alignSelf:"flex-end", paddingTop:5}}
                    />
                </TouchableOpacity>
                </View>
                <RadioButton
                    label="Sort by relevance"
                    checked={sortBy === 'Relevance'}
                    onChange={() => setSortBy('Relevance')}
                />
                <RadioButton
                    label="Sort by popularity"
                    checked={sortBy === 'Popularity'}
                    onChange={() => setSortBy('Popularity')}
                />
                <RadioButton
                    label="Sort by average ratings"
                    checked={sortBy === 'Average Ratings'}
                    onChange={() => setSortBy('Average Ratings')}
                />
                <RadioButton
                    label="Sort by latest"
                    checked={sortBy === 'Latest'}
                    onChange={() => setSortBy('Latest')}
                />
                <RadioButton
                    label="Price: Low to High"
                    checked={sortBy === 'Price - Low to High'}
                    onChange={() => setSortBy('Price - Low to High')}
                />
                <RadioButton
                    label="Price: High to Low"
                    checked={sortBy === 'Price - High to Low'}
                    onChange={() => setSortBy('Price - High to Low')}
                />
                <Divider style={{marginVertical:10}}/>
                <Text style={{...textStyles.title2, ...styles.title}}>Filters</Text>
                <Text style={{...textStyles.title3, fontSize:17, padding:5}}>Target Group</Text>
                <View style={{marginBottom:10}}>
                {targetGrp.map(item => <Checkbox.Item 
                        label={item.name} 
                        onPress={() => {
                            let list = [...selectT]
                            let index = list.indexOf(item.name)
                            if ( index === -1) {
                                list.push(item.name)
                                setSelectT(list)
                            } else {
                                list.splice(index, 1)
                                setSelectT(list) 
                            }}} 
                        status={selectT.indexOf(item.name) === -1 ? 'unchecked' : 'checked'}
                        color={palette.medium}
                        style={{height:32}}
                        labelStyle={textStyles.body}
                        key={item.key}
                    />)}
                </View>
                <Text style={{...textStyles.title3, fontSize:17, padding:5}}>Industries</Text>
                <View style={{marginBottom:10}}>
                {industries.map(item => <Checkbox.Item 
                        label={item.name} 
                        onPress={() => {
                            let list = [...selectI]
                            let index = list.indexOf(item.name)
                            if ( index === -1) {
                                list.push(item.name)
                                setSelectI(list)
                            } else {
                                list.splice(index, 1)
                                setSelectI(list) 
                            }}} 
                        status={selectI.indexOf(item.name) === -1 ? 'unchecked' : 'checked'}
                        color={palette.medium}
                        style={{height:32}}
                        labelStyle={textStyles.body}
                        key={item.key}
                    />)}
                </View>
                <Text style={{...textStyles.title3, fontSize:17, padding:5}}>Subcategory</Text>
                <View style={{marginBottom:10}}>
                {subcategories.map(item => <Checkbox.Item 
                        label={item.name} 
                        onPress={() => {
                            let list = [...selectS]
                            let index = list.indexOf(item.name)
                            if ( index === -1) {
                                list.push(item.name)
                                setSelectS(list)
                            } else {
                                list.splice(index, 1)
                                setSelectS(list) 
                            }}} 
                        status={selectS.indexOf(item.name) === -1 ? 'unchecked' : 'checked'}
                        color={palette.medium}
                        style={{height:32}}
                        labelStyle={textStyles.body}
                        key={item.key}
                    />)}
                </View>
                <TouchableOpacity style={styles.button} onPress={() => {
                    setModalVisible(false); 
                    setFilter([...selectT, ...selectI, ...selectS]);
                    navigation.setParams({sort: sortBy, filter:filter});
                }}>
                    <Text style={{...textStyles.body, color: palette.darkest, fontSize:14}}>Apply filters</Text>
                </TouchableOpacity>
                </ScrollView>
                </View>
            </Modal>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={course}
                numColumns={2}
                renderItem={({ item }) => <ProductCard item={item} navigation={navigation} />} 
                style={styles.pdtList}
                ListHeaderComponent={
                    <ScrollView 
                        horizontal 
                        style={{flexDirection:"row", marginHorizontal:5, marginVertical:5}}
                        showsHorizontalScrollIndicator={false}
                    >
                    <Chip style={styles.chip}>Sort by: {sortBy}</Chip>
                    {filter.map(item => <Chip key={item.key} style={styles.chip}>{item}</Chip>)}
                    </ScrollView>
                }
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"white",
        flex: 1, 
        justifyContent: 'center',
        padding:10
    },
    search:{
        width:"80%"
    },
    header:{
        paddingHorizontal:20,
        paddingVertical:15
    },
    pdtList:{
        marginTop:20
    },
    row:{
        flexDirection:"row",
        justifyContent:"space-around",
        alignItems:"center",
        paddingHorizontal:10
    },
    modal:{
        marginHorizontal:20,
        height: '60%', 
        marginTop: '50%'
    },
    modalView: {
        backgroundColor: "white",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        paddingVertical:10,
        paddingHorizontal:15,
        borderRadius:20,
    },
    title:{
        padding:5, 
        textDecorationLine:"underline"
    },
    button:{
        borderRadius:20,
        backgroundColor: palette.light,
        paddingHorizontal:15,
        paddingVertical:9,
        alignItems:"center",
        marginTop:10,
        marginBottom:30,
        width:"90%",
        alignSelf:"center"
    },
    chip:{
        marginHorizontal:2
    }
})
