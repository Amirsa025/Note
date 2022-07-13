import React, {useEffect} from 'react';
import {FlatList, StyleSheet, View} from "react-native";
import Note from "../../screens/Note";
import {useNote} from "../../context/NoteProvider";
import AsyncStorage from '@react-native-async-storage/async-storage';

const AllNote = ({Data, navigation}) => {
    const {setData} = useNote()
    const deleteHandler = async (id) => {
        const result = await AsyncStorage.getItem('note_Key')
        let note = []
        if (result !== null) note = JSON.parse(result)

        const filteredNote= note.filter((item)=>{
            return item.id!==id
        })
        console.log(filteredNote)
        await AsyncStorage.setItem('note_Key',JSON.stringify(filteredNote))
        setData(filteredNote)
    }

    async function getData() {
        let result = await AsyncStorage.getItem('note_Key');
        let note = []
        if (result !== null) note = JSON.parse(result);
        setData(note)
    }

    useEffect(() => {

        getData().then()
    }, [])


    const renderItem = (ItemData) => {
        ItemData.index;
        return (
            <Note navigation={navigation} deleteNote={deleteHandler} id={ItemData.item.id} text={ItemData.item.text}/>
        );
    }
    return (
        <View style={
            styles.container
        }>
            <FlatList
                data={Data}
                numColumns={2}
                columnWrapperStyle={{justifyContent: "space-between"}}
                renderItem={renderItem}
                style={styles.scrollView}
                keyExtractor={(item) => item.id}
            ></FlatList>
        </View>
    );
};

export default AllNote;

const styles = StyleSheet.create({
    container: {
        flexDirection: "row"
    },
})
