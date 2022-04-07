import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import axios from "axios";
import { serverURL } from "../constants";

export default function App({ navigation }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [messageFromServer, setMessageFromServer] = useState();

  useEffect(() => {
    console.log("SCANNED: ", scanned);
    setScanned(false);

    return () => {
      console.log("SCANNED: ", scanned);
      setScanned(true);
    };
  }, []);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

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

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
});
