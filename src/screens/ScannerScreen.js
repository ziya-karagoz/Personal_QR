import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  FlatList,
  Button,
  Modal,
  Pressable,
  Alert,
  StyleSheet,
} from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import axios from "axios";
import { localIP, ngrokServer } from "../constants";
import allStyles from "../components/molecules/Styles";

const styles = allStyles;

export default function ScannerScreen({ navigation }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [text, setText] = useState("Not yet scanned");
  const [messageFromServer, setMessageFromServer] = useState({});

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    console.log("Data: ", data);
    // async () => {
    //   let res = await axios.post(`${ngrokServer}/api/qr/scanQr`, {
    //     data,
    //   });
    //   if (res.status === 200) {
    //     const { message, qrOwner } = res.data;
    //     console.log("owner: ", qrOwner);
    //     if (qrOwner != "") {
    //       await axios.post(
    //         `https://app.nativenotify.com/api/indie/notification`,
    //         {
    //           subID: qrOwner,
    //           appId: 2374,
    //           appToken: "a2GpbyQUY6ZIixvld1muE8",
    //           title: "Bildirim geldi amk",
    //           message: "sonunda basardim",
    //         }
    //       );
    //     }
    //     setMessageFromServer(message);
    //     navigation.navigate("Scanned", {
    //       messageFromServer: messageFromServer,
    //     });
    //   } else {
    //     alert("Hata : ", res.data);
    //   }
    // };
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.scannerScreenContainer}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && (
        <Button title={"Tap to Scan Again"} onPress={() => setScanned(false)} />
      )}
    </View>
  );
}
