import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  Button,
  TouchableOpacity,
  Image,
} from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { useIsFocused } from "@react-navigation/native";

export default function ScannerScreen({ navigation }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const isFocused = useIsFocused();

  // runs on component mount, asks for camera permission
  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  // runs when the component unmount, set the scanned value to false
  useEffect(() => {
    return () => {
      setScanned(false);
    };
  }, []);

  // if screen has changed returns null and refresh the page, so that camera works properly
  if (!isFocused) {
    return null;
  }

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
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
      <Image
        style={styles.scanIcon}
        source={require("../Assets/Images/scan.png")}
      ></Image>
      <View style={{flex:1}}>
      <TouchableOpacity
        style = {styles.backBtn} 
        onPress={() => navigation.goBack()}
      >
        <Image
          style = {styles.backIcon}
          source={require("../Assets/Images/cancel.png")}
        ></Image>
      </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  backBtn: {
    flex: 1,
    width:50,
    height:50,
    alignSelf:"center"
    
  },
  backIcon: {
    flex: 1,
    width: 200,
    resizeMode: "contain",
    alignSelf: "center",
    bottom: "30%"
    
  },
  scanIcon: {
    flex: 8,
    alignSelf: "center",
    resizeMode: "contain",
    width:400
  },
});
