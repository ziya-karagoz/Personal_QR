//  Library Imports

import React from "react";

import { NavigationContainer } from "@react-navigation/native";

//Component Imports
import StackNavigatorLogin from "./src/navigation/StackNavigatorLogin";

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigatorLogin></StackNavigatorLogin>
    </NavigationContainer>
  );
  // return <ThermalDeneme />;
}
