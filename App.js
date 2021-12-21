//  Library Imports

import React, { useState, Component } from "react";

import { StyleSheet } from "react-native";

import QRCode from "react-native-qrcode-svg";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//Component Imports
import StackNavigator from "./src/navigation/StackNavigator";
import NavBar from "./src/components/molecules/NavBar";
import { createDrawerNavigator } from '@react-navigation/drawer';



export default function App() {
  return (
    <NavigationContainer>
      <NavBar></NavBar>
    </NavigationContainer>
    );
}
