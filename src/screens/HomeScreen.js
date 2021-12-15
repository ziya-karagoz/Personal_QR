import React, { Component } from "react";
import { StyleSheet, View, StatusBar, TouchableOpacity } from "react-native";
import HeaderBar from "../components/molecules/HeaderBar";
import FooterBar from "../components/molecules/FooterBar";
import Icon from "react-native-vector-icons/Entypo";

function HomeScreen(props) {
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <FooterBar style={styles.footerbar}></FooterBar>
      <HeaderBar style={styles.headerBar}></HeaderBar>
      <TouchableOpacity>
        <Icon name='circle-with-plus' style={styles.icon}></Icon>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  footerbar: {
    height: 75,
    width: 360,
    backgroundColor: "rgba(242,242,242,1)",
    marginTop: 645,
  },
  headerBar: {
    height: 75,
    width: 360,
    marginTop: -720,
  },
  icon: {
    color: "rgba(128,128,128,1)",
    fontSize: 60,
    marginTop: 473,
    marginLeft: 277,
  },
});

export default HomeScreen;
