import React from "react";
import {View, SafeAreaView } from "react-native";
import NotificationHeaderBar from "../components/molecules/NotificationHeaderBar";
import FooterBar from "../components/molecules/FooterBar";
import NotificationBlock from "../components/molecules/NotificationBlock";

function NotificationScreen(props) {
  return (
    <View style={{flex: 1, backgroundColor: "#E5E4F2"}}>
      <NotificationHeaderBar></NotificationHeaderBar>

      <View style={{flex: 6}}>
        <NotificationBlock></NotificationBlock>
      </View>

      <FooterBar></FooterBar>
    </View>
  );
}

export default NotificationScreen;
