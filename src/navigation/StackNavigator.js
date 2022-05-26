import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../screens/HomeScreen";
import QRCreationScreen from "../screens/QRCreationScreen";
import StartScreen from "../screens/StartScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import ResetPasswordScreen from "../screens/ResetPasswordScreen";

import ScannerScreen from "../screens/ScannerScreen";
import QREditScreen from "../screens/QREditScreen";
import ScannedMessagesScreen from "../screens/ScannedMessagesScreen";

const Stack = createStackNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator initialRouteName='Home'>
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
      <Stack.Screen
        name='Scanner'
        component={ScannerScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='QREdit'
        component={QREditScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='Scanned'
        component={ScannedMessagesScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default StackNavigator;
