import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button, TouchableOpacity } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import axios from "axios";
import { serverURL } from "../constants";
import { Camera } from "expo-camera";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";

export default function App({ navigation }) {
  const [scanned, setScanned] = useState(false);
  const [messageFromServer, setMessageFromServer] = useState();
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [flash, setFlash] = useState(Camera.Constants.FlashMode.off);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
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
      data:data.trim(),
    });
    if (res.status === 200) {
      const { message, qrOwner, qrName } = res.data;
      console.log("owner: ", qrOwner);
      if (qrOwner == "") {
        setScanned(false);
        return;
      } else if (qrOwner != "") {
        await axios.post(
          `https://app.nativenotify.com/api/indie/notification`,
          {
            subID: qrOwner,
            appId: 2374,
            appToken: "a2GpbyQUY6ZIixvld1muE8",
            title: "Bir QR'ınız taratıldı.",
            message: "QR adı: " + qrName,
          }
        );
        console.log("1: "+message)
        navigation.navigate("Scanned", {
          messageFromServer: message,
        });
      }
    } else {
      alert("Hata : ", res.data);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <Camera
        style={{ flex: 1 }}
        type={type}
        barCodeScannerSettings={{
          barCodeTypes: [BarCodeScanner.Constants.BarCodeType.qr],
        }}
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        flashMode={flash}
      >
        <View style={{ flex: 0.7 }} />
        <MaterialCommunityIconsIcon
          name='scan-helper'
          style={{ fontSize: 250, alignSelf: "center", bottom: "15%" }}
        />
        <View
          style={{
            flex: 0.6,
            flexDirection: "row",
            opacity: 0.65,
            backgroundColor: "white",
          }}
        >
          <TouchableOpacity
            style={{ flex: 1, justifyContent: "center", opacity: 1 }}
            onPress={() => {
              if (flash == Camera.Constants.FlashMode.off) {
                setFlash(Camera.Constants.FlashMode.torch);
              } else setFlash(Camera.Constants.FlashMode.off);
            }}
          >
            <MaterialCommunityIconsIcon
              name='flashlight'
              style={{ fontSize: 75, alignSelf: "center" }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{ flex: 1, justifyContent: "center" }}
            onPress={() => {
              navigation.navigate("Home");
            }}
          >
            <MaterialCommunityIconsIcon
              name='arrow-left-circle'
              style={{ fontSize: 75, alignSelf: "center" }}
            />
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
}
