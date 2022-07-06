import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
const Note = ({text}) => {
    return (
        <View style={styles.goalItem}>
            <Pressable android_ripple={{color: '#ddd'}}
                       style={({item})=>item && styles.pressItems}
            >
                <View>
                    <Text style={styles.text}>{text}</Text>
                </View>
            </Pressable>
        </View>
    );
};

export default Note;

const styles = StyleSheet.create({
    goalItem: {
        paddingHorizontal:10,
        backgroundColor: "#ffd95a",
        borderRadius: 5,
        marginBottom: 10,
        height: 30,
    },
    pressItems : {
        opacity :0.5
    },
    text: {
        color: "#2c2c2c",
        padding: 6
    }
})
