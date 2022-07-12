import AsyncStorage from '@react-native-async-storage/async-storage';
import React , {useEffect} from 'react';
import {
    Alert,
    Button,
    Dimensions,
    KeyboardAvoidingView, Platform,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';
import {useNote} from "../context/NoteProvider"
const CreateNote = ({navigation}) => {
    const {Data ,setData} = useNote()
    const [note, setNote] = React.useState("")
    const handleInput = (enterText) => setNote(enterText)

    const SaveNote =async ()=>{
        if (note === '') {
            Alert.alert('TextInput is Empty, Please Enter Some Value To Continue...');
        }
        else {
            const item ={text:note,id:Math.floor(Math.random()*1000,)}
            const updateNote=[...Data,item]
            try {
                await AsyncStorage.setItem('note_Key', JSON.stringify(updateNote))
            } catch (e) {
                console.error(e)
            }
            setData(updateNote)
            navigation.goBack()
            setNote(" ")
        }
    }

    useEffect(() => {
        return () => {
            const getData = async () => {
                try {
                    const value = await AsyncStorage.getItem('@note_Key')
                    if(value !== null) {
                        // value previously stored
                        setData()
                    }
                } catch(err) {
                    // error reading value
                    console.log(err)
                }
            }
        };
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>New Note </Text>
                <TextInput placeholder='Title' multiline={true} required={true}
                           numberOfLines={10} style={styles.input} value={note}
                           onChangeText={handleInput}/>
            </View>
            <View>
                <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
                    <Button title='save' style={
                        styles.BtnCreateNote
                    } onPress={SaveNote}></Button>
                </KeyboardAvoidingView>
            </View>
        </View>
    );
};

export default CreateNote;
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffeab9',
        justifyContent: 'space-between',
        height: "100%",
        width: Dimensions.get("window").width
    },
    title: {
        fontSize: 20,
        fontWeight: "bold"
    },
    header: {
        padding: 10
    },
    input: {
        backgroundColor: '#faf9a2',
        marginTop: 10,
        textAlignVertical: 'top',
        paddingHorizontal: 10,
        paddingVertical: 10
    },
    BtnCreateNote: {
        marginBottom: 50,
        width: 70,
        height: 70,
    },
});
