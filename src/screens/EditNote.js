import {View, Text, StyleSheet} from "react-native";
import React, {  useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import NoteInputModal from "../component/Modal/NoteInputModal";
import { Entypo } from "@expo/vector-icons";
import { useNote } from "../context/NoteProvider";
const EditNote = ({ route, navigation }) => {
  const id = route.params.id;
  const text = route.params.text;
  const { setData } = useNote();
  const [modalVisible, setModalVisible] = React.useState(false);
  const saveEdit = async (newText) => {
      const result = await AsyncStorage.getItem('note_Key');
      let note = [];
      if (result !== null) note = JSON.parse(result);
    const temp = [...note];
    const index = temp.findIndex((data) => data.id === id);
    temp[index].text = newText;
      setData( [...temp])
      navigation.goBack();


  };

  return (
   <View>
       <View style={style.container}>
            <View>
                <Text>id: {id}</Text>
                <Text>desc: {text}</Text>
            </View>
           <View style={style.containerIcon}>
               <Entypo
                   name="edit"
                   size={14}
                   color="white"
                   onPress={() => setModalVisible(true)}
               />
           </View>
   < / View >
      <NoteInputModal
        saveEdit={saveEdit}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        text={text}
      />
    </View>
  );
};

export default EditNote;


const style = StyleSheet.create({
        container: {
            flexDirection : "row",
            paddingVertical: 20,
            paddingHorizontal : 20,
            alignItems : "center"
        },
    containerIcon :{
        marginLeft :30,
        width :30,
        height : 30,
        borderRadius : 70,
        backgroundColor : "#ffd95a",
        alignItems : "center",
        justifyContent : "center"

    }
})
