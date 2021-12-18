import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import Icon from "react-native-vector-icons/MaterialIcons";

function MainHeaderBar(props) {
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
        <Icon
          name='add-circle-outline' style={styles.icon}
        ></Icon>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(0,0,0,0.07)",
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
    top: 10
  },
  btnWrapper2: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  mainIcon: {
    backgroundColor: "transparent",
    color: "#616161",
    fontSize: 24,
    opacity: 0.8,
    top: 10
  },
  icon:{
    fontSize:35,
    opacity:0.8,
    backgroundColor: "transparent",
    color: "#616161",
    top: 10
  }
});

export default MainHeaderBar;
