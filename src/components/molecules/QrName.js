import React from "react";
import { StyleSheet, View, TextInput } from "react-native";

function QrName({ setQrName }) {
  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={(value) => {
          setQrName(value);
        }}
        placeholder='_______________'
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
    width: 100,
  },
});

export default QrName;
