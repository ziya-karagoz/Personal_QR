//  Library Imports

import React, { useState } from "react";

import { StyleSheet } from "react-native";

import QRCode from "react-native-qrcode-svg";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//Component Imports
import HomeScreen from "./src/screens/HomeScreen";
import QRCreationScreen from "./src/screens/QRCreationScreen";
import StartScreen from "./src/screens/StartScreen";
import LoginScreen from "./src/screens/LoginScreen";
import RegisterScreen from "./src/screens/RegisterScreen";
import ResetPasswordScreen from "./src/screens/ResetPasswordScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // <NavigationContainer>
    //   <Stack.Navigator initialRouteName='Start'>
    //     <Stack.Screen
    //       name='Home'
    //       component={HomeScreen}
    //       options={{ headerShown: false }}
    //     ></Stack.Screen>
    //     <Stack.Screen
    //       name='QRCreation'
    //       component={QRCreationScreen}
    //       options={{ headerShown: false }}
    //     ></Stack.Screen>
    //     <Stack.Screen
    //       name='Start'
    //       component={StartScreen}
    //       options={{ headerShown: false }}
    //     />
    //     <Stack.Screen
    //       name='Login'
    //       component={LoginScreen}
    //       options={{ headerShown: false }}
    //     />
    //     <Stack.Screen
    //       name='Register'
    //       component={RegisterScreen}
    //       options={{ headerShown: false }}
    //     />
    //     <Stack.Screen name='ResetPassword' component={ResetPasswordScreen} />
    //   </Stack.Navigator>
    // </NavigationContainer>
    <QRCreationScreen></QRCreationScreen>
  );
}
