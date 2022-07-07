import React from 'react';
import {Dimensions, Pressable, StyleSheet, Text, View, Alert} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import ModalNote from "../component/Modal/Modal";

const Note = ({text,deleteNote ,id}) => {
    const [modalVisible, setModalVisible] = React.useState(false);
    return (
        <View style={styles.itemContainer}>
                <View style={styles.NoteContainer}>
                    <Text style={styles.text}>{text}</Text>
                    <View style = {styles.iconContainer}>
                        <AntDesign name="delete" size={16} color="black" onPress={deleteNote.bind(this,id)} style = {styles.width} />
                        <AntDesign name="edit" size={16} color="black"  onPress={() => setModalVisible(!modalVisible)}  />
                    </View>
                </View>

                <ModalNote setModalVisible={setModalVisible} modalVisible={modalVisible}  />
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
    },
    NoteContainer : {
       flexDirection  : "row",
        alignItems : "center",
        justifyContent : "space-between"
    },
    iconContainer : {
        flexDirection : "row",
    },
    width :{
        width :30
    },

})
