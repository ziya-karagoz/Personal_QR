import React, { Component } from "react";
import { StyleSheet, View, StatusBar } from "react-native";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import HeaderBar from "../components/molecules/HeaderBar";
import FooterBar from "../components/molecules/FooterBar";
import Icon from "react-native-vector-icons/Entypo";

function HomeScreen(props) {
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <HeaderBar style={styles.headerBar}></HeaderBar>
      <Icon name='circle-with-plus' style={styles.icon}></Icon>
      <FooterBar style={styles.footerBar}></FooterBar>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
  },
  headerBar: {
    height: hp("10%"),
  },
  footerBar: {
    height: hp("10%"),
    backgroundColor: "rgba(242,242,242,1)",
    marginBottom: hp("0%"),
  },
  icon: {
    color: "rgba(128,128,128,1)",
    fontSize: 60,
    marginTop: hp("65%"),
    marginLeft: wp("77%"),
  },
});

export default HomeScreen;
