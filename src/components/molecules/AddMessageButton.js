import React, { Component } from "react";
import { StyleSheet, View, Text, ViewBase, TouchableOpacity } from "react-native";

function AddMessageButton(props) {
  return (
    <TouchableOpacity style={styles.container}>
        <View >
            <View style = {styles.text}>
                <Text>Mesaj Ekle</Text>
            </View>
        </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 24,
    backgroundColor: "gray",
    marginLeft: "25%",
    top: "32%"
  },
  text: {
    height: 24,
    width: 100,
    color: "black",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default AddMessageButton;