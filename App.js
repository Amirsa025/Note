import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Header from "./src/component/Header/header";
import {NavigationContainer} from "@react-navigation/native";
import Home from "./src/screens/Home";
export default function App() {
    const Stack = createNativeStackNavigator();
  return (
      <NavigationContainer>
          <Stack.Navigator>
              <Stack.Screen name="Home" component={Home }  options={{
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
              }} />
          </Stack.Navigator>
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
