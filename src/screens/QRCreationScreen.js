import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  SafeAreaView,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import CreationHeaderBar from "../components/molecules/CreationHeaderBar";
import FooterBar from "../components/molecules/FooterBar";
import QrName from "../components/molecules/QrName";
import AddMessageButton from "../components/molecules/AddMessageButton";
import MessageBlock from "../components/molecules/MessageBlock";

function QRCreationScreen(navigation) {
  return (
  
    <View style={styles.container}>

      <CreationHeaderBar style={styles.headerBar}>
      </CreationHeaderBar>

      <View style={styles.body1}>
        <View style={{ flex: 1, justifyContent: "center" }}>
          <Image
            style={styles.image}
            resizeMode='contain'
            source={require("../Assets/Images/QR.png")}
            
          ></Image>
        </View>
        <View style={{ flex: 1 }}>
          <View style={styles.qrAdi}>
            <Text style={{ marginTop: "10%" }}>Qr Adı:</Text>
            <QrName></QrName>
          </View>
          <AddMessageButton></AddMessageButton>
        </View>
      </View>

      
      <SafeAreaView style= {styles.body2}>        
         <MessageBlock></MessageBlock>
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

  body1: {
    flex: 1.5,
    flexDirection: "row",
    borderTopWidth: 3,
    borderBottomWidth: 3,
  },

  body2: {
    flex: 4.5,
  },

  icon: {
    color: "rgba(128,128,128,1)",
    fontSize: 40,
  },

  qrAdi: {
    height: 60,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    top: "3%",
    width: 120,
    height: 120,
    alignSelf: "center",
  },
});

export default QRCreationScreen;
