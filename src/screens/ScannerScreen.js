import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  Button,
<<<<<<< HEAD
=======
  Modal,
  Pressable,
  Alert,
  StyleSheet,
>>>>>>> NotifFeature
} from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { BarCodeScanner } from "expo-barcode-scanner";
import axios from "axios";
import { serverURL } from "../constants";
import allStyles from "../components/molecules/Styles";
import { useFocusEffect } from '@react-navigation/native';
const styles = allStyles;

export default function ScannerScreen({ navigation }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [text, setText] = useState("Not yet scanned");
  const [messageFromServer, setMessageFromServer] = useState({});
  const [reset, setReset] = useState(false);

  const doSomething = () => {
    return (
      <View>
        <BarCodeScanner
          onBarCodeScanned={handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        />
        {scanned && (
          <Button
            title={"Tap to Scan Again"}
            onPress={() => setScanned(false)}
          />
        )}
      </View>
    );
  };

  useFocusEffect(
    React.useCallback(() => {
      console.log("SCANNED: ", scanned);
      setScanned(false);
      console.log("SCANNED: ", scanned);
      doSomething();
      return () => {};
    }, [])
  );

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

<<<<<<< HEAD
  // What happens when we scan the bar code

 

=======
>>>>>>> NotifFeature
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
<<<<<<< HEAD

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
=======
  return <View style={styles.scannerScreenContainer}>{}</View>;
>>>>>>> NotifFeature
}
