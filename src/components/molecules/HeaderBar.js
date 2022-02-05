import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { DrawerActions, useNavigation } from "@react-navigation/native";

import allStyles from "./Styles"

function HeaderBar(props) {

  const navigation = useNavigation();
  const styles = allStyles

  return (
    <View style={styles.barContainer}>
      <TouchableOpacity onPress={() =>     
      navigation.dispatch(DrawerActions.openDrawer())} style={styles.btnWrapper}>
        <MaterialCommunityIconsIcon
          name='account-outline'
          style={ styles.iconHeader}
        ></MaterialCommunityIconsIcon>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnWrapper}>
        <MaterialCommunityIconsIcon
          name='qrcode-edit'
          style={styles.iconHeader}
        ></MaterialCommunityIconsIcon>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnWrapper}></TouchableOpacity>
    </View>
  );
}

export default HeaderBar;
