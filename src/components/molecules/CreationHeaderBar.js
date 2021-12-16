import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";

function CreationHeaderBar(props) {
  return (
    <View style={[styles.container, props.style]}>
      <TouchableOpacity style={styles.btnWrapper1}>
        <MaterialCommunityIconsIcon
          name='account-outline'
          style={[
            styles.profileIcon,
            {
              color: props.active ? "#007AFF" : "#616161",
            },
          ]}
        ></MaterialCommunityIconsIcon>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnWrapper1}>
        <MaterialCommunityIconsIcon
          name='qrcode-edit'
          style={styles.mainIcon}
        ></MaterialCommunityIconsIcon>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnWrapper1}>
        <MaterialCommunityIconsIcon
          name='palette'
          style={styles.paletteIcon}
        ></MaterialCommunityIconsIcon>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(242,242,242,1)",
    flexDirection: "row",
    width: "100%",
  },
  btnWrapper1: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  profileIcon: {
    backgroundColor: "transparent",
    fontSize: 24,
    opacity: 0.8,
  },
  mainIcon: {
    backgroundColor: "transparent",
    color: "#616161",
    fontSize: 24,
    opacity: 0.8,
  },
  paletteIcon: {
    color: "rgba(128,128,128,0.68)",
    fontSize: 40,
    opacity: 0.9,
    backgroundColor: "transparent"
  },
});

export default CreationHeaderBar;
