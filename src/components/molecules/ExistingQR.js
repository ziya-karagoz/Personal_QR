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
import allStyles from "./Styles";

let DATA;
const styles = allStyles;

const Item = ({ qrName, qrId, mesajlar }) => {
  const navigation = useNavigation();
  const [qrSVG, setQrSVG] = useState("");
  const [imageSource, setImageSource] = useState("");


  const handlePress = async () => {
    await qrSVG.toDataURL((data) => {
      setImageSource(data);
    });
  };
  const saveQRAsImage = async (qrImagesDirectory, fileName, imageSource) => {
    //Get folder
    const folder = await FileSystem.getInfoAsync(qrImagesDirectory);

    // Check if folder does not exist, create one furthermore
    if (!folder.exists) {
      await FileSystem.makeDirectoryAsync(qrImagesDirectory);
    }

    // Write file into the source of program
    await FileSystem.writeAsStringAsync(
      qrImagesDirectory + fileName,
      imageSource,
      {
        encoding: FileSystem.EncodingType.Base64,
      }
    );
    const ans = await FileSystem.getInfoAsync(qrImagesDirectory + fileName);

    // Make the file accessible through mobile phone
    FileSystem.getContentUriAsync(ans.uri).then((cUri) => {
      //Open save image options
      IntentLauncher.startActivityAsync("android.intent.action.VIEW", {
        data: cUri,
        flags: 1,
      });
    });
  };

  const handleLongPress = async () => {
    const qrImagesDirectory = FileSystem.documentDirectory + "qrImages/";
    const fileName = qrName + ".png";
    saveQRAsImage(qrImagesDirectory, fileName, imageSource);
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
      style={styles.existingQrContainer}
      onLongPress={handleLongPress}
      onPressIn={handlePress}
    >
      <View style={styles.existingQrBody1}>
        <Text style={{color: "black"}}>{qrName}</Text>
      </View>
      <View style={styles.existingQrBody2}>
        <QRCode value={qrId} getRef={(c) => setQrSVG(c)} backgroundColor = "#F9E6FF" />
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
      mesajlar={item.messageBlock.messages[0].messageOne}
    ></Item>
  );
  return <FlatList data={DATA} renderItem={renderItem} numColumns={2} />;
}



export default ExistingQR;
