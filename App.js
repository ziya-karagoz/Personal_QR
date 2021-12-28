//  Library Imports

import React, { useState, Component } from "react";

import { StyleSheet } from "react-native";

import QRCode from "react-native-qrcode-svg";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { store } from "./src/store/store";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//Component Imports

import NavBar from "./src/components/molecules/NavBar";

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <NavBar></NavBar>
      </Provider>
    </NavigationContainer>
  );
}
