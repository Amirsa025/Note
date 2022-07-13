import React from 'react';
import {Button, FlatList, StyleSheet, Text, View} from "react-native";
import Header from "../component/Header/header";
import {useNote} from "../context/NoteProvider";
import AllNote from "../component/AllNote/AllNote";
import Search from "../component/Search/Search";


const Home = ({navigation}) => {
    const {Data} = useNote();
    return (
        <View>
           <View style={styles.container}>
               <Header navigation={navigation}/>
           </View>

        <View style = {styles.containerSearch}>
            <Search/>
        </View>
            <View style={styles.listContainer}>
                <AllNote navigation={navigation} Data={Data}/>
            </View>
        </View>
    );
};

export default Home;
const styles = StyleSheet.create({
    container : {
        backgroundColor:"#ffffff",
        height:70
    },
    listContainer :{
        backgroundColor:"#ffffff",
        height : "80%",
        paddingTop : 30
    },
    containerSearch : {
        width : "80%",
        marginVertical :20,
        backgroundColor: "#ffffff",
        marginLeft :40,
        height : 50,
        flexDirection : "row",
        alignItems : "center",
        borderRadius : 30,

    }
})
