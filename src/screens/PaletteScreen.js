import React, { Component, useState } from "react";
import { StyleSheet, View, SafeAreaView, Image } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

// Component Imports
import HeaderBar from "../components/molecules/HeaderBar";
import FooterBar from "../components/molecules/FooterBar";
import { ColorPicker } from "react-native-color-picker";
import { color } from "react-native-reanimated";

function PaletteScreen(props) {
  const [qrColor, setQrColor] = useState("");
  return (
    <View style={styles.container}>
      <HeaderBar style={styles.headerBar}></HeaderBar>

      <SafeAreaView style={styles.body}>
        <View style={{ backgroundColor: qrColor, flex: 1 }}>
          <Image
            style={styles.qr}
            resizeMode='contain'
            source={require("../Assets/Images/QR.png")}
          ></Image>
        </View>

        <View style={styles.body2}>
          <ColorPicker
            onColorSelected={(color) => setQrColor(color)}
            style={{ flex: 1 }}
          />
        </View>
      </SafeAreaView>

      <FooterBar style={styles.footerBar}></FooterBar>
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
    flexDirection: "column",
  },
  body1: {
    flex: 1,
  },
  body2: {
    flex: 2,
  },
  icon: {
    fontSize: 40,
  },
  qr: {
    top: "5%",
    width: 140,
    height: 140,
    alignSelf: "center",
  },
});

export default PaletteScreen;
