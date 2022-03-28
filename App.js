//  Library Imports

import React, { useState, Component } from "react";

import { StyleSheet } from "react-native";

import QRCode from "react-native-qrcode-svg";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import registerNNPushToken from "native-notify";

//Component Imports
import StackNavigatorLogin from "./src/navigation/StackNavigatorLogin";
import ThermalDeneme from "./src/playground/ThermalDeneme";
import NotificationsDeneme from "./src/playground/NotificationsDeneme";

export default function App() {
  registerNNPushToken(2374, "a2GpbyQUY6ZIixvld1muE8");
  return (
    <NavigationContainer>
      <StackNavigatorLogin></StackNavigatorLogin>
    </NavigationContainer>
  );
  // return <NotificationsDeneme />;
}
