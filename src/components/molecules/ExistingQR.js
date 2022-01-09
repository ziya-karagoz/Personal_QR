import React, { Component, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import QRCode from "react-native-qrcode-svg";
import userState from "../../store/userState";
import { displayQrList } from "../../store/qrState";
import { useSnapshot } from "valtio";
import qrState from "../../store/qrState";

let DATA;

const Item = ({ qrName, qrId }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("QREdit", { qrAdi: qrName, qrId: qrId })
      }
      style={styles.container}
    >
      <View style={styles.body1}>
        <Text style={{}}>{qrName}</Text>
      </View>
      <View style={styles.body2}>
        <QRCode value={qrId} />
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
  useEffect(() => {
    console.log(qrs);
  }, [qrs]);

  DATA = qrs.qrs;

  const renderItem = ({ item }) => (
    <Item qrName={item.qrName} qrId={item._id}></Item>
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
  },
  body2: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  qrImage: {
    height: "85%",
    width: "60%",
    alignSelf: "center",
  },
});

export default ExistingQR;
