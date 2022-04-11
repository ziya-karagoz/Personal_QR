import React, { useCallback } from "react";
import { Alert, Button, Linking, StyleSheet, View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import * as Clipboard from "expo-clipboard";

const deneme = async () => {
  Clipboard.setString("hello world");
  const text = await Clipboard.getStringAsync();
  console.log(text);
};

const ThermalDeneme = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={deneme}>
        <Text>Bas</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  button: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#ff00ff",
    padding: 10,
  },
});

export default ThermalDeneme;
