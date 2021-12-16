import React, { Component } from "react";
import { StyleSheet, View, TextInput } from "react-native";

function TextIn(props) {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="_______________"
        clearTextOnFocus={true}
        style={styles.textInput}
      ></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 30,
    marginLeft: "1.5%",
  },
  textInput: {
    color: "#121212",
    height: 50,
    width: 100
  }
});

export default TextIn;