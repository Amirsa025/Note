import React from 'react';
import {Button, FlatList, StyleSheet, Text, View} from "react-native";
import Header from "../component/Header/header";
import {useNote} from "../context/NoteProvider";
import AllNote from "../component/AllNote/AllNote";


const Home = ({navigation}) => {
    const {Data ,setData} = useNote();
    return (
        <View style={styles.container}>
            <Header navigation={navigation}/>
        <AllNote Data={Data}/>
        </View>
    );
};

export default Home;
const styles = StyleSheet.create({
    container : {
        backgroundColor:"#f6f1e0",
        height : "100%",
    }
})
