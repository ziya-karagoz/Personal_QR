import React, { Component, useState } from "react";
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  ToastAndroid,
} from "react-native";
import { qrEdit } from "../../store/qrState";
import allStyles from "./Styles";
const styles = allStyles;

const Item = (props) => {
  let msj1 = props.msj1;
  let msj2 = props.msj2;
  let index = props.index;
  const [message, setMessage] = useState({messageOne:msj1, messageTwo:msj2});
  const qrId = props.qrId;

  const addMessageButtonHandler = async () => {
    const res = await qrEdit(qrId, message.messageOne, message.messageTwo, index);
    ToastAndroid.show("Başarılı", ToastAndroid.SHORT);
  };
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
            onChangeText={(value) => {
                if(value === "") setMessage({...message, messageOne: msj1});
                else setMessage({...message, messageOne: value});
            }}
            placeholder={msj1}
            style={styles.mesaj}
          ></TextInput>
        </View>

        <View style={{ flex: 1 }}>
          <TouchableOpacity onPress={addMessageButtonHandler}>
            <Image
              style={styles.editIcon}
              resizeMode='contain'
              source={require("../../Assets/Images/editIcon.png")}
            ></Image>
          </TouchableOpacity>
        </View>
      </View>

      <View
        style={styles.messageBlockContainer}
      >
        <View style={{ flex: 1 }}>
          <Text style={{ left: "11%", top: "2%" }}>Cevap:</Text>
        </View>

        <View style={{ flex: 4 }}>
          <TextInput
            multiline
            numberOfLines={10}
            onChangeText={(value) => {
              if(value === "") setMessage({...message, messageTwo: msj2});
              else  setMessage({...message, messageTwo: value});
            }}
            placeholder={msj2}
            style={styles.cevap}
          ></TextInput>
        </View>

        <View style={{ flex: 1 }}></View>
      </View>
    </View>
  );
};

function MessageBlock({ mesajlar, qrId }) {
  let DATA = mesajlar.mesajlar;
  let qrIds = qrId.qrId;
  let dataArray= [];

  for (let i = 0; i < DATA.length; i++) {
    dataArray.push({index: i, messageOne: DATA[i].messageOne, messageTwo: DATA[i].messageTwo})    
  }

  const renderItem = ({ item }, qrId) => {
    return (
      <Item msj1={item.messageOne} msj2={item.messageTwo} qrId={qrId} index = {item.index}></Item>
    );
  };

  return (
    <FlatList
      data={dataArray}
      renderItem={(item) => renderItem(item, qrIds)}
    />
  );
}
 

export default MessageBlock;
