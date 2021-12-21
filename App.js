//  Library Imports

import React, { useState, Component } from "react";

import { StyleSheet } from "react-native";

import QRCode from "react-native-qrcode-svg";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//Component Imports

import NavBar from "./src/components/molecules/NavBar";

export default function App() {
  return (
    <NavigationContainer>
      <NavBar></NavBar>
    </NavigationContainer>
  );
}
