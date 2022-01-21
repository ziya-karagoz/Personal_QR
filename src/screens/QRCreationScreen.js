import React, { Component, useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  FlatList
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import CreationHeaderBar from "../components/molecules/CreationHeaderBar";
import FooterBar from "../components/molecules/FooterBar";
import QrName from "../components/molecules/QrName";
import AddMessageButton from "../components/molecules/AddMessageButton";
import userState from "../store/userState";
import { useSnapshot } from "valtio";
import qrState from "../store/qrState";
import { qrGenerate } from "../store/qrState";

let DATA;

const Item = (props) => {
  const [messageOne, setMessageOne] = useState("");
  const [messageTwo, setMessageTwo] = useState("");
  const callBackFunction = props.callBackFunction;


  return (
    <View style={styles.container2}>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
          }}
        >
          <View style={{ flex: 1 }}>
            <Text style={{ marginTop: "10%", marginLeft: "15%" }}>Mesaj:</Text>
          </View>
  
          <View style={{ flex: 4 }}>
          <TextInput
              multiline
              numberOfLines={10}
              placeholder= "___________"
              style={styles.mesaj}
              onChangeText={(value) => {
              setMessageOne(value);
              callBackFunction(messageOne, messageTwo);
            }}
            ></TextInput>
          </View>
  
          <View style={{ flex: 1 }}>
            <TouchableOpacity>
              <Image
                style={styles.icon}
                resizeMode='contain'
                source={require("../Assets/Images/editIcon.png")}
              ></Image>
            </TouchableOpacity>
          </View>
        </View>
  
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            borderTopWidth: 3,
          }}
        >
          <View style={{ flex: 1 }}>
            <Text style={{ left: "11%", top: "2%" }}>Cevap:</Text>
          </View>
  
          
          <View style={{ flex: 4 }}>
          <TextInput
              multiline
              numberOfLines={10}
              placeholder= "___________"
              style={styles.yanit}
              onChangeText={(value) => {
              setMessageTwo(value);
              callBackFunction(messageOne, messageTwo);
            }}
            ></TextInput>
          </View>
  
          <View style={{ flex: 1 }}></View>
        </View>
      </View>
  );}

function QRCreationScreen({ navigation }) {
  const { user } = useSnapshot(userState);
  const [qrName, setQrName] = useState("");
  let messageOne
  let messageTwo

  const addMessageButtonHandler = () => {
    qrGenerate(navigation, user, qrName, messageOne, messageTwo);
  };

  const callBackFunction = (itemMessageOne, itemMessageTwo) => {
    messageOne = itemMessageOne,
    messageTwo = itemMessageTwo
  }

  DATA = [
    1,
  ]

  

  const renderItem = (item, callBackFunction) => {
    return(
    <Item callBackFunction = {callBackFunction}></Item>
  );}

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
                <Text>Kaydet</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <SafeAreaView style={styles.body2}>
        <FlatList
        data={DATA}       
        renderItem={(item) => renderItem(item, callBackFunction)}
        contentContainerStyle = {{alignItems:"center"}}
        />
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
    marginTop: "2%",
    width: 380,
    height: 150,
    backgroundColor: "#E6E6E6",
    borderRadius : 20,
    borderWidth: 3,
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
    borderRadius : 20,
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
    marginLeft: "1.5%",
  },

  textInput: {
    color: "#121212",
    height: 50,
    width: 100,
  },

  mesaj: {
    color: "#121212",
    bottom: "26%"

  },

  yanit: {
    color: "#121212",
    bottom: "32%"
  },

  icon: {
    height: "65%",
    width: "65%",
    alignSelf: "center",
    top: "7%",
  },
  
});

export default QRCreationScreen;
