import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button, Modal, Pressable } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import axios from "axios";
import { localIP } from "../constants";
import allStyles from "../components/molecules/Styles";

const styles = allStyles

export default function ScannerScreen({ navigation }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [text, setText] = useState("Not yet scanned");
  const [modalVisible, setModalVisible] = useState(false);
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
    setModalVisible(true);
    let res = await axios.post(`http://${localIP}:5000/api/qr/scanQr`, {
      data,
    });
    if (res.status === 200) {
      const { message } = res.data;
      setMessageFromServer(message[0]);
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
        <Modal
          animationType='slide'
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.scannerScreenCenteredView}>
            <View style={styles.scannerScreenModalView}>
              <Text style={styles.scannerScreenModalText}>
                Mesaj: {messageFromServer.messageOne + "\n"} Yanıt:{" "}
                {messageFromServer.messageTwo}
              </Text>
              <Pressable
                style={[styles.button, styles.scannerScreenButtonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.scannerScreenTextStyle}>Kapat</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
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
