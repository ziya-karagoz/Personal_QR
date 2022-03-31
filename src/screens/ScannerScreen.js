import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  FlatList,
  Button,
  Modal,
  Pressable,
  Alert,
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

  const askForCameraPermission = () => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  };

  // Request Camera Permission
  useEffect(() => {
    askForCameraPermission();
  }, []);

  // What happens when we scan the bar code
  const handleBarCodeScanned = async ({ type, data }) => {
    setScanned(true);
    let res = await axios.post(`${ngrokServer}/api/qr/scanQr`, {
      data,
    });
    if (res.status === 200) {
      const { message, qrOwner } = res.data;
      console.log("owner: ", qrOwner);
      if (qrOwner != "") {
        await axios.post(
          `https://app.nativenotify.com/api/indie/notification`,
          {
            subID: qrOwner,
            appId: 2374,
            appToken: "a2GpbyQUY6ZIixvld1muE8",
            title: "Bildirim geldi amk",
            message: "sonunda basardim",
          }
        );
      }
      setMessageFromServer(message);
      navigation.navigate("Scanned", {
        messageFromServer: messageFromServer,
      });
    } else {
      alert("Hata : ", res.data);
    }
  };

  // Check permissions and return the screens
  if (hasPermission === null) {
    return (
      <View style={styles.scannerScreenContainer}>
        <Text>Requesting for camera permission</Text>
      </View>
    );
  }
  if (hasPermission === false) {
    return (
      <View style={styles.scannerScreenContainer}>
        <Text style={{ margin: 10 }}>No access to camera</Text>
        <Button
          title={"Allow Camera"}
          onPress={() => askForCameraPermission()}
        />
      </View>
    );
  }

  // Return the View
  return (
    <View style={styles.scannerScreenContainer}>
      <View style={styles.scannerScreenBarcodebox}>
        <BarCodeScanner
          onBarCodeScanned={handleBarCodeScanned}
          style={{ height: 400, width: 400 }}
        />
      </View>
      <Text style={styles.scannerScreenMaintext}>{text}</Text>

      {scanned && (
        <Button
          title={"Go Back"}
          onPress={() => {
            setScanned(false);
            navigation.reset({
              index: 0,
              routes: [{ name: "Home" }],
            });
          }}
          color='#616161'
        />
      )}
    </View>
  );
}
