import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
  Image,
  FlatList
} from "react-native";



let DATA
const Item = ({msj1, msj2}) => (

  <View style={styles.container}>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          borderLeftWidth: 3,
          borderRightWidth: 3,
          borderTopWidth:3
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
              setMessageOne(value);
            }}
            placeholder= {msj1}
            style={styles.mesaj}
          ></TextInput>
        </View>

        <View style={{ flex: 1 }}>
          <TouchableOpacity>
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
          borderWidth: 3,
        }}
      >
        <View style={{ flex: 1 }}>
          <Text style={{ left: "5%", top: "2%" }}>Cevap:</Text>
        </View>

        
        <View style={{ flex: 4 }}>
        <TextInput
            multiline
            numberOfLines={10}
            onChangeText={(value) => {
              setMessageOne(value);
            }}
            placeholder= {msj2}
            style={styles.yanit}
          ></TextInput>
        </View>

        <View style={{ flex: 1 }}></View>
      </View>
    </View>
);

const renderItem = ({ item }) => (
  <Item msj1={item.messageOne} msj2={item.messageTwo} ></Item>
);

function MessageBlock(mesajlar, {setMessageOne, setMessageTwo}) {
  DATA = mesajlar.mesajlar.mesajlar

  return (
    <FlatList
        data={DATA}
        
        renderItem={renderItem}
        contentContainerStyle = {{alignItems:"center"}}
      />
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: "2%",
    width: 380,
    height: 150,
    backgroundColor: "#E6E6E6",
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

export default MessageBlock;
