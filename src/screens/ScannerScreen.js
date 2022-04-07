import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button, TouchableOpacity } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import axios from "axios";
import { serverURL } from "../constants";
import { Camera } from 'expo-camera';

export default function App({ navigation }) {

  const [scanned, setScanned] = useState(false);
  const [messageFromServer, setMessageFromServer] = useState();
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  
  const handleBarCodeScanned = async ({ type, data }) => {
    setScanned(true);
    console.log("Data: ", data);
    let res = await axios.post(`${serverURL}/api/qr/scanQr`, {
      data,
    });
    if (res.status === 200) {
      const { message, qrOwner } = res.data;
      console.log("message: ", message);
      console.log("owner: ", qrOwner);
      if (qrOwner != "") {
        await axios.post(
          `https://app.nativenotify.com/api/indie/notification`,
          {
            subID: qrOwner,
            appId: 2374,
            appToken: "a2GpbyQUY6ZIixvld1muE8",
            title: "Your QR scanned",
            message: "Someone Scanned your QR",
          }
        );
        setMessageFromServer(message);
        navigation.navigate("Scanned", {
          messageFromServer: message,
        });
      }
    } else {
      alert("Hata : ", res.data);
    }
  };

  return (
    <View style={styles.container}>
      <Camera 
      style={styles.camera} 
      type={type} 
      barCodeScannerSettings={{barCodeTypes: [BarCodeScanner.Constants.BarCodeType.qr]}}
      onBarCodeScanned={handleBarCodeScanned}
      >
      </Camera>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
  camera: {
    flex: 1
  }
});
