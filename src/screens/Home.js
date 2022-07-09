import React from 'react';
import {Button, FlatList, StyleSheet, Text, View} from "react-native";
import Header from "../component/Header/header";
import {useNote} from "../context/NoteProvider";
import AllNote from "../component/AllNote/AllNote";


const Home = ({navigation}) => {
    const {Data} = useNote();
    return (
        <View>
           <View style={styles.container}>
               <Header navigation={navigation}/>
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
        backgroundColor:"#f6f1e0",
        height:70
    },
    listContainer :{
        backgroundColor:"#f8f8e5",
        height : "80%",
        paddingTop : 30
    }
})
