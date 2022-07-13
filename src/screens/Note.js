import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {AntDesign} from '@expo/vector-icons';
import ModalNote from "../component/Modal/NoteInputModal";

const Note = ({text, deleteNote, id, navigation}) => {
    return (
        <View style={styles.itemContainer}>
            <View style={styles.NoteContainer}>
                <View>
                    <Text style={styles.text} numberOfLines={1} onPress={() => navigation.navigate("EditNote", {
                        id: id,
                        text: text
                    })}>{text}</Text>
                </View>
                <View style={styles.iconContainer}>
                    <AntDesign name="delete" size={16} color="black" onPress={()=>deleteNote(id)}
                               style={styles.width}/>
                    <AntDesign name="edit" size={16} color="black" onPress={() => navigation.navigate("EditNote", {
                        id: id,
                        text: text
                    })}/>
                </View>
            </View>


        </View>
    );
};

export default Note;
const width = Dimensions.get('window').width - 40;
const styles = StyleSheet.create({
    itemContainer: {
        backgroundColor: "#ffd95a",
        height: 100,
        width: width / 2 - 10,
        padding: 8,
        borderRadius: 10,
        marginHorizontal: 10,
        marginVertical: 10
    },
    pressItems: {
        opacity: 0.5
    },
    text: {
        color: "#2c2c2c",
        padding: 6
    },
    NoteContainer: {
        flexDirection: "column",
        alignItems: "center",

    },
    iconContainer: {
        flexDirection: "row",
        paddingVertical: 20,
        justifyContent: "space-between",
        width: 100

    },
    width: {
        width: 30
    }
})
