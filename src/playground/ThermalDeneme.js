import React, { useEffect } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import ThermalPrinterModule from "react-native-thermal-printer";

function ThermalDeneme() {
  const DoSomething = async () => {
    // inside async function
    try {
      await ThermalPrinterModule.printBluetooth({
        payload: "hello world",
        printerNbrCharactersPerLine: 38,
      });
    } catch (err) {
      //error handling
      console.log(err.message);
    }
  };

  ThermalPrinterModule.defaultConfig = {
    ...ThermalPrinterModule.defaultConfig,
    ip: "192.168.100.246",
    port: 9100,
    autoCut: false,
    timeout: 30000, // in milliseconds (version >= 2.2.0)
  };
  return (
    <View>
      <TouchableOpacity
        style={{ marginTop: 80, marginBottom: 80, marginLeft: 50 }}
        onPress={DoSomething}
      >
        <Text>Dokun</Text>
      </TouchableOpacity>
    </View>
  );
}

export default ThermalDeneme;
