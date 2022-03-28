import React, { Component, useEffect } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";

import MainHeaderBar from "../components/molecules/MainHeaderBar";
import FooterBar from "../components/molecules/FooterBar";
import ExistingQR from "../components/molecules/ExistingQR";
import { useSnapshot } from "valtio";
import userState from "../store/userState";

import { registerIndieID } from "native-notify";
import axios from "axios";

function HomeScreen() {
  const { user } = useSnapshot(userState);
  useEffect(() => {
    pushToken = user._id;
    registerIndieID(pushToken, 2374, "a2GpbyQUY6ZIixvld1muE8");
  }, []);

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
