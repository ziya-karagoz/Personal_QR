import React, { Component, useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  ViewBase,
  TouchableOpacity,
} from "react-native";

function AddMessageButton() {
  const addMessageButtonHandler = () => {};

  return (
    <TouchableOpacity style={styles.btn} onPress={addMessageButtonHandler}>
      <View>
        <View style={styles.btnText}>
          <Text>Mesaj Ekle</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    width: 100,
    height: 24,
    backgroundColor: "gray",
    marginLeft: "25%",
    top: "32%",
  },
  btnText: {
    height: 24,
    width: 100,
    color: "black",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default AddMessageButton;
