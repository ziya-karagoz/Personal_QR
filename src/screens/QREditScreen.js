import React, { Component, useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import QRCode from 'react-native-qrcode-svg';
import CreationHeaderBar from "../components/molecules/CreationHeaderBar";
import FooterBar from "../components/molecules/FooterBar";
import QrName from "../components/molecules/QrName";
import AddMessageButton from "../components/molecules/AddMessageButton";
import MessageBlock from "../components/molecules/MessageBlock";
import userState from "../store/userState";
import { useSnapshot } from "valtio";
import qrState from "../store/qrState";
import { qrGenerate } from "../store/qrState";
import { TabRouter } from "@react-navigation/native";



function QREditScreen( {route} ) {
  const {qrAdi, qrId, mesajlar} = route.params; 
  console.log(qrId)
  return (
    <View style={styles.container}>
      <CreationHeaderBar style={styles.headerBar}></CreationHeaderBar>
      <View style={styles.body1}>
        <View style={{ flex: 1, justifyContent: "center", left: "25%" }}>
          <QRCode value = {qrId} />
        </View>
        <View style={{ flex: 1 }}>
          <View style={styles.qrAdi}>
            <Text style={{ marginTop: "10%" }}>Qr Adı:</Text>
            <View style={styles.container2}>
              <Text
              style={styles.textInput}
              >{qrAdi}</Text>
            </View>
          </View>
          <TouchableOpacity
            style={styles.btn}
          >
            <View>
              <View style={styles.btnText}>
                <Text>Mesaj Ekle</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <SafeAreaView style={styles.body2}>

         <MessageBlock mesajlar = {{mesajlar}} qrId = {{qrId}} ></MessageBlock>

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
  container2: {
    width: 100,
    height: 30,
    marginLeft: "1.5%",
    alignItems: "center",
    top: "7.5%"
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
  btn: {
    width: 100,
    height: 24,
    backgroundColor: "gray",
    marginLeft: "25%",
    top: "32%",
  },
  btnText: {
    height: 24,
    width: 100,
    color: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  msgbody: {
    width: 100,
    height: 30,
    marginLeft: "5.5%",
  },
  textInput: {
    color: "#121212",
    height: 50,
    width: 100,
  },
  textInput2: {
    color: "#121212",
    height: 50,
    width: 100,
  },
});

export default QREditScreen;
