import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../screens/HomeScreen";
import QRCreationScreen from "../screens/QRCreationScreen";
import StartScreen from "../screens/StartScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import ResetPasswordScreen from "../screens/ResetPasswordScreen";
import NotificationScreen from "../screens/NotificationScreen";
import PaletteScreen from "../screens/PaletteScreen";
import ScannerScreen from "../screens/ScannerScreen";
import QREditScreen from "../screens/QREditScreen"
import StackNavigator from "./StackNavigator";
import NavBar from "../components/molecules/NavBar";


const Stack = createStackNavigator();

function StackNavigatorLogin() {
    return (
        <Stack.Navigator initialRouteName='Start'>
            <Stack.Screen
            name='Start'
            component={StartScreen}
            options={{ headerShown: false }}
            />
            <Stack.Screen
            name='Home'
            component={NavBar}
            options={{ headerShown: false }}
            ></Stack.Screen>
            <Stack.Screen
            name='Login'
            component={LoginScreen}
            options={{ headerShown: false }}
            />
            <Stack.Screen
            name='Register'
            component={RegisterScreen}
            options={{ headerShown: false }}
            />
            <Stack.Screen 
            name='ResetPassword' 
            component={ResetPasswordScreen}
            options={{ headerShown: false }} 
            />
    </Stack.Navigator>
);}

export default  StackNavigatorLogin;