//  Library Imports

import React, { useState } from "react";

import { StyleSheet } from "react-native";

import QRCode from "react-native-qrcode-svg";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//Component Imports
import HomeScreen from "./src/screens/HomeScreen";
import QRCreationScreen from "./src/screens/QRCreationScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  const [inputText, setInputText] = useState("");
  const [qrvalue, setQrvalue] = useState("");

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='HomeScreen'>
        <Stack.Screen
          name='Home'
          component={HomeScreen}
          options={{ headerShown: false }}
        ></Stack.Screen>
        <Stack.Screen
          name='QRCreation'
          component={QRCreationScreen}
          options={{ headerShown: false }}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
