import React from "react";
import { StyleSheet, View} from "react-native";

import MainHeaderBar from "../components/molecules/MainHeaderBar";
import FooterBar from "../components/molecules/FooterBar";
import ExistingQR from "../components/molecules/ExistingQR";

function HomeScreen() {
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
