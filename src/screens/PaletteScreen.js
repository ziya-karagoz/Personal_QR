import React, { Component, useState } from "react";
import { StyleSheet, View, SafeAreaView, Image } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

// Component
import HeaderBar from "../components/molecules/HeaderBar";
import FooterBar from "../components/molecules/FooterBar";
import { ColorPicker } from "react-native-color-picker";

function PaletteScreen() {
  const [qrColor, setQrColor] = useState("");
  return (
    <View style={{flex: 1}}>
      <HeaderBar></HeaderBar>

      <SafeAreaView style={{flex: 6}}>
        <View style={{ backgroundColor: qrColor, flex: 1 }}>
        </View>

        <View style={{flex: 2}}>
          <ColorPicker
            onColorSelected={(color) => setQrColor(color)}
            style={{ flex: 1 }}
          />
        </View>
      </SafeAreaView>

      <FooterBar></FooterBar>
    </View>
  );
}


export default PaletteScreen;
