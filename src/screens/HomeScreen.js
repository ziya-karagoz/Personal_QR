import React from "react";
import { StyleSheet, View} from "react-native";

import MainHeaderBar from "../components/molecules/MainHeaderBar";
import FooterBar from "../components/molecules/FooterBar";
import ExistingQR from "../components/molecules/ExistingQR";

function HomeScreen() {
  return (
    <View style={{flex: 1}} >     
        <MainHeaderBar ></MainHeaderBar>
      <View style={{flex:6}}>
        <ExistingQR></ExistingQR>
      </View>    
        <FooterBar></FooterBar>    
    </View>
  );
}

export default HomeScreen;
