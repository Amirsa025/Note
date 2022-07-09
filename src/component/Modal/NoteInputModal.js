import React, {useState} from 'react';
import {Alert, Pressable, Text, View ,Modal,StyleSheet} from "react-native";
import { AntDesign } from '@expo/vector-icons';
const ModalNote = ({modalVisible,setModalVisible}) => {
    const [title, setTitle] = useState('');
    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Pressable
                            onPress={() => setModalVisible(!modalVisible)}
                        >
                            <AntDesign name="close" size={16} color="black" />
                        </Pressable>

                        <View style={styles.ContetModalContainer}>
                            <Text>A</Text>
                        </View>
                    </View>
                    <View>

                    </View>
                </View>
            </Modal>
        </View>
    );
};

export default ModalNote;

const styles = StyleSheet.create({
    centeredView: {
        justifyContent : "center",
        marginTop : 250,
        width : "100%",
    },
    modalView: {
        margin: 10,
        backgroundColor: "white",
        borderRadius: 10,
        padding:15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },

    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    },
    ContetModalContainer : {
        paddingTop:10
    }
})
