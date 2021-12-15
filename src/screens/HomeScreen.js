import React, { Component } from "react";
import { StyleSheet, View, StatusBar } from "react-native";
import { Header } from "react-native/Libraries/NewAppScreen";
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
      <View>
        <HeaderBar style={styles.headerBar}></HeaderBar>
      </View>

      <View>
        <Icon name='circle-with-plus' style={styles.icon}></Icon>
      </View>
      <View>
        <FooterBar style={styles.footerBar}></FooterBar>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: wp("100"),
    heigth: hp("100"),
  },
  headerBar: {
    height: 75,
    width: wp("100"),
  },
  footerBar: {
    height: 75,
    width: wp("100"),
    backgroundColor: "rgba(242,242,242,1)",
    marginTop: 500,
    alignSelf: "flex-end",
  },
  icon: {
    color: "rgba(128,128,128,1)",
    fontSize: 60,
    alignSelf: "flex-end",
    marginBottom: 106,
    marginRight: 23,
  },
});

export default HomeScreen;
