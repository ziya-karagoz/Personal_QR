import React, { Component, useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  FlatList,
  KeyboardAvoidingView
} from "react-native";

import CreationHeaderBar from "../components/molecules/CreationHeaderBar";
import FooterBar from "../components/molecules/FooterBar";
import QrName from "../components/molecules/QrName";
import userState from "../store/userState";
import { useSnapshot } from "valtio";
import { qrGenerate } from "../store/qrState";
import allStyles from "../components/molecules/Styles";
import {Picker} from '@react-native-picker/picker';

let DATA = [];
const styles = allStyles;

const Item = (props) => {
  const [messageOne, setMessageOne] = useState("");
  const [messageTwo, setMessageTwo] = useState("");
  let index = DATA.indexOf(props.item.item);


  function setData(messageOne, messageTwo) {
    DATA[index].messageOne = messageOne;
    DATA[index].messageTwo = messageTwo;
  }
  setData(messageOne, messageTwo)

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
  const [messageQuantity, setMessageQuantity] = useState(1);
  let createdMessages = []
  
  const quantitySetter = (quantity = 1) => {
    const lenght = DATA.length;
    if (quantity< lenght){
      for (let i = quantity; i < lenght; i++) {
        DATA.pop();       
      }
    }
    else if (lenght< quantity){
    for (let i = lenght; i < quantity; i++) {
      DATA.push({index: i, messageOne: "", messageTwo: ""})
    }}
    console.log("QUANTİTY: "+ quantity);
    console.log("PUSHLU MU?: "+ JSON.stringify(DATA));
  }

  if(DATA.length == 0){
  quantitySetter(messageQuantity);
  }

  const addMessageButtonHandler = () => {
    for (let i = 0; i < DATA.length; i++) {
      createdMessages.push({messageOne: DATA[i].messageOne, messageTwo: DATA[i].messageTwo})     
    }
    qrGenerate(navigation, user, qrName, createdMessages);
    DATA = []
  };
  
  const renderItem = (item) => {
    return(
    <Item item = {item}></Item>
  )};

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
          <Picker
            style={styles.picker}
            mode = {"dropdown"}
            dropdownIconColor = "gray"
            
            onValueChange={(itemValue, itemIndex) => {
              setMessageQuantity(itemValue)
              quantitySetter(itemValue)
              }}
              selectedValue={messageQuantity}
            >
            <Picker.Item label="Mesaj Sayısı: 1" value= {1} />
            <Picker.Item label="Mesaj Sayısı: 2" value= {2} />
            <Picker.Item label="Mesaj Sayısı: 3" value= {3} />
            <Picker.Item label="Mesaj Sayısı: 4" value= {4} />
            <Picker.Item label="Mesaj Sayısı: 5" value= {5} />
          </Picker>
        </View>
      </View>

      <SafeAreaView style={styles.body2}>
        <FlatList
        data={DATA}       
        renderItem={(item) => renderItem(item)}
        />
      </SafeAreaView>

      <FooterBar></FooterBar>
    </View>
  );
}

export default QRCreationScreen;
