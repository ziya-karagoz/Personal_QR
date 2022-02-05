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
import userState from "../store/userState";
import { useSnapshot } from "valtio";
import qrState from "../store/qrState";
import { qrGenerate } from "../store/qrState";
import allStyles from "../components/molecules/Styles";

let DATA;
const styles = allStyles;

const Item = (props) => {
  const [messageOne, setMessageOne] = useState("");
  const [messageTwo, setMessageTwo] = useState("");
  const callBackFunction = props.callBackFunction;


  return (
    <View style={styles.blockContainer}>
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
                style={styles.editIcon}
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
              style={styles.cevap}
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
    <View style={{flex: 1}}>
      <CreationHeaderBar></CreationHeaderBar>

      <View style={styles.body1}>
        <View style={{ flex: 1, justifyContent: "center" }}>
          <Image
            style={styles.qrCreationScreenImage}
            resizeMode='contain'
            source={require("../Assets/Images/QR.png")}
          ></Image>
        </View>
        <View style={{ flex: 1 }}>
          <View style={styles.qrCreationScreenQrAdi}>
            <Text style={{ marginTop: "10%" }}>Qr Adı:</Text>
            <QrName setQrName={setQrName}></QrName>
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={addMessageButtonHandler}
          >
            <View>
              <View style={styles.buttonText}>
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
        
        />
      </SafeAreaView>

      <FooterBar></FooterBar>
    </View>
  );
}

export default QRCreationScreen;
