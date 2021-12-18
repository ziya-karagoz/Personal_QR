import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";

function MessageBlock(props) {
  return (
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
          <Text style={{ marginTop: "10%", marginLeft: "15%" }}>Soru1:</Text>
        </View>

        <View style={{ flex: 4 }}>
          <TextInput
            multiline
            placeholder='_______________'
            clearTextOnFocus={true}
            style={styles.textInput}
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
          <Text style={{ left: "5%", top: "2%" }}>Cevap1:</Text>
        </View>

        
        <View style={{ flex: 4 }}>
          <TextInput
            multiline
            placeholder='_______________'
            clearTextOnFocus={true}
            style={styles.textInput2}
          ></TextInput>
        </View>

        <View style={{ flex: 1 }}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: "2%",
    width: 380,
    height: 150,
    backgroundColor: "#E6E6E6",
  },
  textInput: {
    color: "#121212",
    top: "4%",
  },
  textInput2: {
    color: "#121212",
    top: "-3%",
  },
  icon: {
    height: "65%",
    width: "65%",
    alignSelf: "center",
    top: "7%",
  },
});

export default MessageBlock;
