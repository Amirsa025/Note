import React from 'react';
import {Dimensions, Pressable, StyleSheet, Text, View} from 'react-native';
const Note = ({text,deleteNote ,id}) => {
    return (
        <View style={styles.itemContainer}>
            <Pressable android_ripple={{color: '#ddd'}} style={({item})=>item && styles.pressItems} onPress={deleteNote.bind(this,id)}>
                <View>
                    <Text style={styles.text}>{text}</Text>
                </View>
            </Pressable>
        </View>
    );
};

export default Note;
const width = Dimensions.get('window').width - 40;
const styles = StyleSheet.create({
    itemContainer: {
        backgroundColor: "#ffd95a",
        height: 50,
        width: width / 2 - 10,
        padding: 8,
        borderRadius: 10,
        marginHorizontal :10,
        marginVertical : 10
    },
    pressItems : {
        opacity :0.5
    },
    text: {
        color: "#2c2c2c",
        padding: 6
    }
})
