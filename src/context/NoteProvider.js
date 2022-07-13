import React, { createContext, useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContext } from '@react-navigation/native';

const noteContext = createContext();

const NoteProvider = ({children}) =>{
    const [Data, setData] = React.useState([])

    const findNotes = async () => {
        const result = await AsyncStorage.getItem('notes');
        if (result !== null) setData(JSON.parse(result));
    };
    useEffect(async () => {
     await   findNotes();
    }, []);

    return(
        <noteContext.Provider value={{Data , setData ,findNotes}}>
            {children}
        </noteContext.Provider>
    )
}


export const useNote = ()=> useContext(noteContext);

export default NoteProvider;
