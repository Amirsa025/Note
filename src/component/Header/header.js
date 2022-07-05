import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { Entypo } from '@expo/vector-icons';

const Header = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={()=>navigation.push("newNote")}>
                    <Entypo name="new-message" size={20} color="#2e2e2e" />
                </TouchableOpacity>
                <Text style={styles.headerText}> Note</Text>
            </View>
        </View>
    );
};

export default Header;
const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor:"#f8f8de",
        height : "100%",
    },
    header : {
        paddingVertical:15,
        marginHorizontal : 15,
        flexDirection : "row",
        justifyContent:"space-between",
        alignItems : "center"
    },
    headerText : {
        fontSize :25,
        fontWeight:"bold",
        color:"#2e2e2e"
    }
})
