import React from "react";
import {View, SafeAreaView } from "react-native";
import NotificationHeaderBar from "../components/molecules/NotificationHeaderBar";
import FooterBar from "../components/molecules/FooterBar";
import NotificationBlock from "../components/molecules/NotificationBlock";

function NotificationScreen(props) {
  return (
    <View style={{flex: 8, backgroundColor: "#E5E4F2"}}>
      <NotificationHeaderBar></NotificationHeaderBar>

      <SafeAreaView style={{flex: 6}}>
        <NotificationBlock></NotificationBlock>
      </SafeAreaView>

      <FooterBar></FooterBar>
    </View>
  );
}

export default NotificationScreen;
