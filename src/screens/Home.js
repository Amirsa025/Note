import React from 'react';
import {StyleSheet, Text, View} from "react-native";
import Header from "../component/Header/header";

const Home = () => {
    return (
        <View style={styles.container}>
            <Header/>
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
