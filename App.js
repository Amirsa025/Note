import { StatusBar } from 'expo-status-bar';
import {Alert, StyleSheet, Text, View} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Header from "./src/component/Header/header";
import {NavigationContainer} from "@react-navigation/native";
import Home from "./src/screens/Home";
import CreateNote from "./src/screens/createNote";
import React from "react";
import NoteProvider from "./src/context/NoteProvider";
export default function App() {
    const Stack = createNativeStackNavigator();

  return (
      <NavigationContainer>
            <NoteProvider>
                <Stack.Navigator>
                    <Stack.Screen name="Home" options={option}>
                        {props =><Home {...props}/>}
                    </Stack.Screen>
                    <Stack.Screen name="newNote"  options={{
                        title: 'New a note',
                        headerStyle: {
                            backgroundColor: '#ffd95a',
                            textAlign : 'center'
                        },
                        headerTintColor: '#ececec',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                            width :100,
                            TextAlign: 'center'
                        },
                    }}>
                        {props => <CreateNote {...props} />}
                    </Stack.Screen>

                </Stack.Navigator>
            </NoteProvider>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
const option =    {
    title: 'Home',
    headerStyle: {
        backgroundColor: '#ffd95a',
        textAlign : 'center'
    },
    headerTintColor: '#ececec',
    headerTitleStyle: {
        fontWeight: 'bold',
        width :100,
        TextAlign: 'center'
    },
}

