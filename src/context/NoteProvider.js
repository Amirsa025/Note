import React, { createContext, useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';


const noteContext = createContext();

const NoteProvider = ({children}) =>{
    const [Data, setData] = React.useState([])
    const findNotes = async () => {
        const result = await AsyncStorage.getItem('notes');
        if (result !== null) setData(JSON.parse(result));
    };

    useEffect(() => {
        findNotes()
    }, []);



    return(
        <noteContext.Provider value={{Data , setData,findNotes}}>
            {children}
        </noteContext.Provider>
    )
}


export const useNote = ()=> useContext(noteContext);

export default NoteProvider;
