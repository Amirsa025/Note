import { View, Text ,StyleSheet } from "react-native";
import React, { useEffect, useCallback, useState } from "react";
import { useFocusEffect } from "@react-navigation/native";

import NoteInputModal from "../component/Modal/NoteInputModal";
import { Entypo } from "@expo/vector-icons";
import { useNote } from "../context/NoteProvider";
const EditNote = ({ route, navigation }) => {
  const id = route.params.id;
  const text = route.params.text;
  const { Data, setData } = useNote();
  const [modalVisible, setModalVisible] = React.useState(false);
  const saveEdit = (newText) => {
    const temp = [...Data];
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
