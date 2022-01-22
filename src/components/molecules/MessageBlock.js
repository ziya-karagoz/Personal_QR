import React, { Component, useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import { qrEdit } from "../../store/qrState";
let DATA;
let all;
const Item = (props) => {
  const [messageOne, setMessageOne] = useState("");
  const [messageTwo, setMessageTwo] = useState("");
  const qrId = props.qrId;
  let msj1 = props.msj1;
  let msj2 = props.msj2;
  const addMessageButtonHandler = () => {
    qrEdit(qrId, messageOne, messageTwo);
  };
  return (
    <View style={styles.container}>
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
              if (value != "") {
                setMessageOne(value);
              }
            }}
            placeholder={msj1}
            style={styles.mesaj}
          ></TextInput>
        </View>

        <View style={{ flex: 1 }}>
          <TouchableOpacity onPress={addMessageButtonHandler}>
            <Image
              style={styles.icon}
              resizeMode='contain'
              source={require("../../Assets/Images/editIcon.png")}
            ></Image>
          </TouchableOpacity>
        </View>
      </View>

      <View
        style={{
          flex: 1,
          flexDirection: "row",
          borderTopColor: "black",
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
            onChangeText={(value) => {
              if (value != "") {
                setMessageTwo(value);
              }
            }}
            placeholder={msj2}
            style={styles.yanit}
          ></TextInput>
        </View>

        <View style={{ flex: 1 }}></View>
      </View>
    </View>
  );
};

function MessageBlock({ mesajlar, qrId }) {
  DATA = mesajlar.mesajlar;
  all = qrId.qrId;

  const renderItem = ({ item }, qrId) => {
    return (
      <Item msj1={item.messageOne} msj2={item.messageTwo} qrId={qrId}></Item>
    );
  };

  return (
    <FlatList
      data={DATA}
      renderItem={(item) => renderItem(item, all)}
      contentContainerStyle={{ alignItems: "center" }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: "2%",
    width: 380,
    height: 150,
    backgroundColor: "#E6E6E6",
    borderWidth: 3,
    borderRadius: 20,
  },
  mesaj: {
    color: "#121212",
    bottom: "26%",
  },
  yanit: {
    color: "#121212",
    bottom: "32%",
  },
  icon: {
    height: "65%",
    width: "65%",
    alignSelf: "center",
    top: "7%",
  },
});

export default MessageBlock;
