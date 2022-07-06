import React from 'react';
import {FlatList, StyleSheet, View} from "react-native";
import Note from "../../screens/Note";

const AllNote = ({Data}) => {
    return (
        <View>
            <FlatList
                data={Data}

                renderItem={(ItemData) => {
                    ItemData.index;
                    return (
                        <Note id={ItemData.item.id} text={ItemData.item.text} />
                    );
                }}
                style={styles.scrollView}
                keyExtractor={(item) => item.id}
            ></FlatList>
        </View>
    );
};

export default AllNote;

const styles = StyleSheet.create({
    container : {
        backgroundColor:"#f6f1e0",
        height : "100%",
    }
})