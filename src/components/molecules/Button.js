import React from "react";
import { StyleSheet } from "react-native";
import { Button as PaperButton } from "react-native-paper";
import { theme } from "../../core/theme";
import Background from "./Background";

export default function Button({ mode, ...props }) {
  return (
    <PaperButton
      style={[
        styles.button,
        
      ]}
      labelStyle={styles.text}
      
      {...props}
    />
  );
}

const styles = StyleSheet.create({
  button: {
    width: "100%",
    marginVertical: 10,
    paddingVertical: 2,
    backgroundColor: "gray"
  },
  text: {
    fontWeight: "bold",
    fontSize: 15,
    lineHeight: 26,
    color: "#000000"
  },
});
