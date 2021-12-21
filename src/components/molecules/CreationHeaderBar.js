import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { DrawerActions, useNavigation } from "@react-navigation/native";

function CreationHeaderBar(props) {

  const navigation = useNavigation();

  return (
    <View style={[styles.container, props.style]}>
      <TouchableOpacity onPress={() =>     
      navigation.dispatch(DrawerActions.openDrawer())} style={styles.btnWrapper1}>
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
      <TouchableOpacity onPress={()=> navigation.navigate('Palette')} style={styles.btnWrapper1}>
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
  mainIcon: {
    backgroundColor: "transparent",
    color: "#616161",
    fontSize: 24,
    opacity: 0.8,
    top: 10
  },
  paletteIcon: {
    color: "rgba(128,128,128,0.68)",
    fontSize: 40,
    opacity: 0.9,
    backgroundColor: "transparent",
    top: 10
  },
});

export default CreationHeaderBar;
