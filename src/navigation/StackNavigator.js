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
import ScannerScreen from "../screens/ScannerScreen"


const Stack = createStackNavigator();

function StackNavigator() {
    return (
        <Stack.Navigator initialRouteName='Start'>
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
            name='Start'
            component={StartScreen}
            options={{ headerShown: false }}
            />
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
            name='Notification'
            component={NotificationScreen}
            options={{ headerShown: false }}
            />
            <Stack.Screen
            name='Palette'
            component={PaletteScreen}
            options={{ headerShown: false }}
            />
            <Stack.Screen
            name='Scanner'
            component={ScannerScreen}
            options={{ headerShown: false }}
        />
            <Stack.Screen name='ResetPassword' component={ResetPasswordScreen} />
    </Stack.Navigator>
);}

export default  StackNavigator;