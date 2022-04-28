import React from "react";
import { createStackNavigator } from "@react-navigation/stack";


import StartScreen from "../screens/StartScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import ResetPasswordScreen from "../screens/ResetPasswordScreen";
import StackNavigator from "./StackNavigator";


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
            component={StackNavigator}
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