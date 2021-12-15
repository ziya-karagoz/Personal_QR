import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";

function FooterBar(props) {
  return (
    <View style={[styles.container, props.style]}>
      <TouchableOpacity style={styles.btnWrapper1}>
        <MaterialCommunityIconsIcon
          name='barcode-scan'
          style={[
            styles.icon,
            {
              color: props.active ? "#007AFF" : "#616161",
            },
          ]}
        ></MaterialCommunityIconsIcon>
        <Text
          style={[
            styles.qrTara,
            {
              color: props.active ? "#007AFF" : "#9E9E9E",
            },
          ]}
        >
          QR Tara
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnWrapper2}>
        <MaterialCommunityIconsIcon
          name='home-variant'
          style={styles.icon1}
        ></MaterialCommunityIconsIcon>
        <Text style={styles.anaSayfa}>Ana Sayfa</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnWrapper4}>
        <MaterialCommunityIconsIcon
          name='bell-ring'
          style={styles.icon3}
        ></MaterialCommunityIconsIcon>
        <Text style={styles.bildirimler}>Bildirimler</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(255,255,255,1)",
    flexDirection: "row",
    width: "100%",
  },
  btnWrapper1: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    backgroundColor: "transparent",
    fontSize: 24,
    opacity: 0.8,
  },
  qrTara: {
    fontSize: 12,
    backgroundColor: "transparent",
    paddingTop: 4,
  },
  btnWrapper2: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  icon1: {
    backgroundColor: "transparent",
    color: "#616161",
    fontSize: 24,
    opacity: 0.8,
  },
  anaSayfa: {
    fontSize: 12,
    color: "#9E9E9E",
    backgroundColor: "transparent",
    paddingTop: 4,
  },
  btnWrapper4: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  icon3: {
    backgroundColor: "transparent",
    color: "#616161",
    fontSize: 24,
    opacity: 0.8,
  },
  bildirimler: {
    fontSize: 12,
    color: "#9E9E9E",
    backgroundColor: "transparent",
    paddingTop: 4,
  },
});

export default FooterBar;
