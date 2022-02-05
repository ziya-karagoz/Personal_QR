import React from "react";
import { Image, StyleSheet, View } from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import allStyles from "./Styles";

export default function Logo() {
  const styles = allStyles
  return (
    <View style={styles.logo}>
    <MaterialCommunityIconsIcon
            name='qrcode-edit'
            style= {{fontSize: 100}}
    />
    </View>
  );
}


