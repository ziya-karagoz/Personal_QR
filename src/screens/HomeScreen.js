import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";

import MainHeaderBar from "../components/molecules/MainHeaderBar";
import FooterBar from "../components/molecules/FooterBar";
import ExistingQR from "../components/molecules/ExistingQR";
import { useSnapshot } from "valtio";
import userState from "../store/userState";

import { registerIndieID } from "native-notify";

import {
  MenuProvider
} from 'react-native-popup-menu';

function HomeScreen() {
  const { user } = useSnapshot(userState);
  useEffect(() => {
    const pushToken = user._id;
    registerIndieID(pushToken, 2374, "a2GpbyQUY6ZIixvld1muE8");
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: "#E5E4F2" }}>
      <MainHeaderBar></MainHeaderBar>
      <View style={{ flex: 6 }}>
        <MenuProvider >
        <ExistingQR></ExistingQR>
        </MenuProvider>
      </View>

      <FooterBar></FooterBar>
    </View>
  );
}

export default HomeScreen;
