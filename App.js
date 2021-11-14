import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import QRCode from "react-native-qrcode-svg";

export default function App() {
  const [inputText, setInputText] = useState("");
  const [qrvalue, setQrvalue] = useState("");

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.titleStyle}>
          Generation of QR Code in React Native
        </Text>
        <QRCode
          //QR code value
          value={qrvalue ? qrvalue : "NA"}
          //size of QR Code
          size={250}
          //Color of the QR Code (Optional)
          color='black'
          //Background Color of the QR Code (Optional)
          backgroundColor='white'
          //Logo of in the center of QR Code (Optional)

          //Center Logo size  (Optional)
          logoSize={30}
          //Center Logo margin (Optional)
          logoMargin={2}
          //Center Logo radius (Optional)
          logoBorderRadius={15}
          //Center Logo background (Optional)
          logoBackgroundColor='yellow'
        />
        <Text style={styles.textStyle}>
          Please insert any value to generate QR code
        </Text>
        <TextInput
          style={styles.textInputStyle}
          onChangeText={(inputText) => setInputText(inputText)}
          placeholder='Enter Any Value'
          value={inputText}
        />
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => setQrvalue(inputText)}
        >
          <Text style={styles.buttonTextStyle}>Generate QR Code</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
