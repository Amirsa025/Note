import React from 'react';
import {
    Alert,
    StyleSheet,
    Text,
    TextInput,
    View
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNote} from "../../context/NoteProvider";
import keyboard from "react-native-web/dist/exports/Keyboard";

const Search = () => {
    const [searchNote, SetSearchNote] = React.useState('')
    const {setData} = useNote()
    const handleSearchQuery = async (SearchNote) => {
        SetSearchNote(SearchNote)
        const result = await AsyncStorage.getItem('note_Key')
        let note = []
        if (result !== null) note = JSON.parse(result)

        const filterNote = note.filter((item)=>{
            if(searchNote===""){
                return item
            }
            if(item.text.toLowerCase().includes(searchNote.toLowerCase())){
                    return  item
            }
        })
        setData([...filterNote])
    }
    const handleClear = async() => {
        SetSearchNote('')
        const result = await AsyncStorage.getItem('note_Key');
        if (result !== null) setData(JSON.parse(result));
    }
    return (
        <View style={
            styles.container
        }>
            <TextInput autoCapitalize="none"
                       onClear={handleClear}
                       autoCorrect={false}
                       clearButtonMode="always" defaultValue={searchNote} placeholder='SearchNote...'
                       style={styles.input} onChangeText={handleSearchQuery}/>

        </View>
    );
};

export default Search;

const styles = StyleSheet.create({
    container: {
        width: "80%",
    },

    input: {
        marginLeft: 20,
        height: 50,
        flexDirection: "row",
        alignItems: "center",
        outline: 0,
        paddingLeft: 5
    }
})
