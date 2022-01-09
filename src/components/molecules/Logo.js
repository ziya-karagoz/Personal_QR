import React from "react";
import { Image, StyleSheet, View } from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";

export default function Logo() {
  return (
    <View style={styles.image}>
    <MaterialCommunityIconsIcon
            name='qrcode-edit'
            style= {{fontSize: 100}}
    />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 110,
    height: 110,
    marginBottom: 8,
    alignItems: "center"
  },
});
