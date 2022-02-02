//  Library Imports

import React, { useState, Component } from "react";

import { StyleSheet } from "react-native";

import QRCode from "react-native-qrcode-svg";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//Component Imports
import NotificationsDeneme from "./src/playground/NotificationsDeneme";
import NavBar from "./src/components/molecules/NavBar";
import StackNavigatorLogin from "./src/navigation/StackNavigatorLogin";

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigatorLogin></StackNavigatorLogin>
    </NavigationContainer>
  );
  // return <NotificationsDeneme />;
}
