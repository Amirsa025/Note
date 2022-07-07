import React from 'react';
import {FlatList, StyleSheet, View} from "react-native";
import Note from "../../screens/Note";
import {useNote} from "../../context/NoteProvider";

const AllNote = ({Data}) => {
    const {setData} = useNote()
    const deleteHandler =(id)=>{
        setData(currentGoal=>{
            return currentGoal.filter(item=>item.id !== id)
        })
    }
    return (
        <View style = {
            styles.container
        }>
            <FlatList
                data={Data}
                numColumns={2}
                columnWrapperStyle={{justifyContent : "space-between"}}
                renderItem={(ItemData) => {
                    ItemData.index;
                    return (
                        <Note deleteNote={deleteHandler} id={ItemData.item.id} text={ItemData.item.text} />
                    );
                }}
                style={styles.scrollView}
                keyExtractor={(item) => item.id}
            ></FlatList>
        </View>
    );
};

export default AllNote;

const styles = StyleSheet.create({
    container : {
        flexDirection : "row"
    },
})
