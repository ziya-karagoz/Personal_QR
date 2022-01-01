import React, { Component, useEffect } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";

import MainHeaderBar from "../components/molecules/MainHeaderBar";
import FooterBar from "../components/molecules/FooterBar";
import ExistingQR from "../components/molecules/ExistingQR";
import userState, { degistir } from "../store/userState";
import { useSnapshot } from "valtio";

function HomeScreen() {
  const { user, loading } = useSnapshot(userState);
  useEffect(() => {
    console.log("user  :", loading);
  }, [loading]);
  return (
    <View style={styles.container}>
      <View style={styles.headerBar}>
        <MainHeaderBar style={{ flex: 1 }}></MainHeaderBar>
      </View>

      <View style={styles.body}>
        <ExistingQR></ExistingQR>
      </View>

      <View style={styles.footerBar}>
        <FooterBar style={{ flex: 1 }}></FooterBar>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
});

export default HomeScreen;
