import React, { Component, useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";

import QRCode from "react-native-qrcode-svg";
import * as FileSystem from "expo-file-system";
import * as IntentLauncher from "expo-intent-launcher";

import { useNavigation } from "@react-navigation/native";
import userState from "../../store/userState";
import { displayQrList } from "../../store/qrState";
import { useSnapshot } from "valtio";
import qrState from "../../store/qrState";

let DATA;
const Item = ({ qrName, qrId, mesajlar }) => {
  const navigation = useNavigation();
  const [qrSVG, setQrSVG] = useState("");
  const [imageSource, setImageSource] = useState("");

  const handleLongPress = async () => {
    qrSVG.toDataURL((data) => {
      setImageSource("data:image/png;base64," + data);
    });

    const base64Code = imageSource.split("data:image/png;base64,")[1];
    // await FileSystem.makeDirectoryAsync(
    //   FileSystem.documentDirectory + "deneme"
    // );
    await FileSystem.writeAsStringAsync(
      FileSystem.documentDirectory + "deneme/" + qrName + ".png",
      base64Code,
      {
        encoding: FileSystem.EncodingType.Base64,
      }
    );
    const cevap = await FileSystem.getInfoAsync(
      FileSystem.documentDirectory + "deneme/" + qrName + ".png"
    );
    console.log("oldu: ", cevap.uri);

    FileSystem.getContentUriAsync(cevap.uri).then((cUri) => {
      console.log(cUri);
      IntentLauncher.startActivityAsync("android.intent.action.VIEW", {
        data: cUri,
        flags: 1,
      });
      console.log("HAHASDFSF");
    });
  };

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("QREdit", {
          qrAdi: qrName,
          qrId: qrId,
          mesajlar: mesajlar,
        })
      }
      style={styles.container}
      onLongPress={handleLongPress}
    >
      <View style={styles.body1}>
        <Text style={{}}>{qrName}</Text>
      </View>
      <View style={styles.body2}>
        <QRCode value={qrId} getRef={(c) => setQrSVG(c)} />
      </View>
    </TouchableOpacity>
  );
};

function ExistingQR({ props }) {
  const { user } = useSnapshot(userState);
  const { qrs } = useSnapshot(qrState);

  useEffect(() => {
    displayQrList(user);
  }, []);

  DATA = qrs.qrs;

  const renderItem = ({ item }) => (
    <Item
      qrName={item.qrName}
      qrId={item._id}
      mesajlar={item.messageBlock.messages}
    ></Item>
  );
  return <FlatList data={DATA} renderItem={renderItem} numColumns={2} />;
}

const styles = StyleSheet.create({
  container: {
    marginTop: "2%",
    width: 180,
    height: 190,
    backgroundColor: "#E6E6E6",
    marginLeft: "5%",
    borderRadius: 20,
  },
  body1: {
    flex: 1,
    backgroundColor: "gray",
    marginTop: 5,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
  body2: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
    bottom: "5%",
  },
});

export default ExistingQR;
