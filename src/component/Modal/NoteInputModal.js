import React, { useState, useEffect } from "react";
import {
  Alert,
  Pressable,
  Button,
  View,
  Modal,
  StyleSheet,
  TextInput,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
const ModalNote = ({ modalVisible, setModalVisible, text, saveEdit  ,isEdit }) => {
  const [desc, setDesc] = React.useState("");

  useEffect(() => {
    {!isEdit?  setDesc(text) :null}
  }, [isEdit]);


  const handleSaveEdit = () => {
    setModalVisible(!modalVisible);
    saveEdit(desc);
  };

  const HandleChangeText = (text, valueFor) => {
    if (valueFor === "desc") setDesc(text);
  };
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Pressable onPress={() => setModalVisible(!modalVisible)}>
              {/*close icon*/}
              <AntDesign name="close" size={16} color="black" />
            </Pressable>

            <View style={styles.ContetModalContainer}>
              <TextInput
               value={desc}
               multiline
               placeholder='Note'
                onChangeText={(EnterText) =>
                  HandleChangeText(EnterText, "desc")
                }
              />
              <Button
                title={"Save Edit"}
                onPress={(text) => handleSaveEdit(text)}
              />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ModalNote;

const styles = StyleSheet.create({
  centeredView: {
    justifyContent: "center",
    marginTop: 250,
    width: "100%",
  },
  modalView: {
    margin: 10,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },

  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  ContetModalContainer: {
    paddingTop: 10,
  },
});
