import React, { useEffect } from "react";
import { View } from "react-native";

import HeaderBar from "../components/molecules/HeaderBar";
import FooterBar from "../components/molecules/FooterBar";
import ExistingQR from "../components/molecules/ExistingQR";
import { useSnapshot } from "valtio";
import userState from "../store/userState";

import { registerIndieID } from "native-notify";

import { MenuProvider } from "react-native-popup-menu";

function HomeScreen() {
  const { user } = useSnapshot(userState);
  useEffect(() => {
    const pushToken = user._id;
    registerIndieID(pushToken, 2786, "vQqx6BXvC3v73S40ZXbub3");
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: "#E5E4F2" }}>
      <HeaderBar
        index={1}
        routes={[{ name: "Home" }, { name: "QRCreation" }]}
        name={"qrcode-plus"}
      ></HeaderBar>
      <View style={{ flex: 6 }}>
        <MenuProvider>
          <ExistingQR></ExistingQR>
        </MenuProvider>
      </View>
      <FooterBar></FooterBar>
    </View>
  );
}

export default HomeScreen;
