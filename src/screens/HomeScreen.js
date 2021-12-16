import React, { Component } from "react";
import { StyleSheet, View, StatusBar, TouchableOpacity } from "react-native";
import { Header } from "react-native/Libraries/NewAppScreen";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import HeaderBar from "../components/molecules/HeaderBar";
import FooterBar from "../components/molecules/FooterBar";

import Icon from "react-native-vector-icons/Entypo";

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.headerBar}>
        <HeaderBar style={{ flex: 1 }}></HeaderBar>
      </View>

      <View style={styles.body}>
        <TouchableOpacity>
          <Icon name='circle-with-plus' style={styles.icon}></Icon>
        </TouchableOpacity>
      </View>

      <View style={styles.footerBar}>
        <FooterBar
          style={{ flex: 1, backgroundColor: "rgba(242,242,242,1)" }}
        ></FooterBar>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: hp("100"),
    width: wp("100"),
  },
  headerBar: {
    flex: 1,
  },
  footerBar: {
    flex: 1,
  },
  body: {
    flex: 6,
  },
  icon: {
    color: "rgba(128,128,128,1)",
    fontSize: 60,
    marginLeft: "75%",
    marginTop: "110%",
  },
});

export default HomeScreen;
