import React, { Component } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  SafeAreaView,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import NotificationHeaderBar from "../components/molecules/NotificationHeaderBar";
import FooterBar from "../components/molecules/FooterBar";
import NotificationBlock from "../components/molecules/NotificationBlock";


function NotificationScreen(props) {
  return (
  
    <View style={styles.container}>

      <NotificationHeaderBar style={styles.headerBar}>
      </NotificationHeaderBar>
      
      <SafeAreaView style= {styles.body}>        
        <ScrollView contentContainerStyle = {{ flexGrow: 1, alignItems:"center" }}>
          <NotificationBlock></NotificationBlock>
          <NotificationBlock></NotificationBlock>
          <NotificationBlock></NotificationBlock>
          <NotificationBlock></NotificationBlock>
        </ScrollView>  
      </SafeAreaView>

      <FooterBar style={ styles.footerBar }
      ></FooterBar>

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

  icon: {
    color: "rgba(128,128,128,1)",
    fontSize: 40,
  },

});

export default NotificationScreen;