import React from "react";
import { StyleSheet } from "react-native";
import { Button as PaperButton } from "react-native-paper";
import allStyles from "./Styles";

const styles = allStyles

export default function Button({ mode, ...props }) {
  return (
    <PaperButton
      style={styles.button2}
      labelStyle={styles.buttonText2}    
      {...props}
    />
  );
}

 
