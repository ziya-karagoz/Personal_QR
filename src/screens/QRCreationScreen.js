import React, { Component, useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
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
import userState from "../store/userState";
import { useSnapshot } from "valtio";

import axios from "axios";
import { localIP } from "../constants";

function QRCreationScreen(navigation) {
  const { user } = useSnapshot(userState);

  const [qrName, setQrName] = useState("");

  const addMessageButtonHandler = () => {
    console.log("deneme");
  };

  // Buradan devam edilecek
  // Frontend degisecek
  // butun girdiler alindiktan sonra qr olusturulacak
  useEffect(() => {
    axios.post(`http://${localIP}:5000/api/qr/qrgenerate`, {});
  }, []);

  return (
    <View style={styles.container}>
      <CreationHeaderBar style={styles.headerBar}></CreationHeaderBar>

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
            <QrName setQrName={setQrName}></QrName>
          </View>
          <TouchableOpacity
            style={styles.btn}
            onPress={addMessageButtonHandler}
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
        <MessageBlock></MessageBlock>
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
});

export default QRCreationScreen;
