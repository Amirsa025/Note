import React from 'react';
import {Button, StyleSheet, Text, View} from "react-native";
import Header from "../component/Header/header";

const Home = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Header navigation={navigation}/>
        </View>
    );
};

export default Home;
const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor:"#fadc95",
        height : "100%",
    }
})
