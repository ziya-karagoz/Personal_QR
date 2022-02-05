import React from "react";
import {
  ImageBackground,
  StyleSheet,
  KeyboardAvoidingView,
} from "react-native";
import allStyles from "./Styles.js";

export default function Background({ children }) {
  const styles = allStyles

  return (
    <ImageBackground
      source={require("../../Assets/Images/background_dot.png")}
      resizeMode='repeat'
      style={styles.background}
    >
      <KeyboardAvoidingView style={styles.backgroundContainer} behavior='padding'>
        {children}
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}
