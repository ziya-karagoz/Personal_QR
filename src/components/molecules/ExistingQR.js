import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  FlatList
} from "react-native";

const DATA = [
  {qrAdi: 'Arabam için'},
  {qrAdi: 'Evim için'},
  {qrAdi: 'Okul için'},
  {qrAdi: 'Sınav sonuçları'},
  {qrAdi: 'Kendime hatırlatma'},
  {qrAdi: 'Malzeme listesi'},
  {qrAdi: 'Yapacaklar listem'},
  {qrAdi: 'Ajanda'},
];

const Item = ({qrAdi}) => (
  <View style={styles.container}>
      <View style={styles.body1}>
        <Text style = {{ }}>{qrAdi}</Text>
      </View>
      <View style={styles.body2}>
        <Image style = {styles.qrImage} source={require("../../Assets/Images/QR.png")}></Image>
      </View>
    </View>
);



function ExistingQR(props) {
  const renderItem = ({ item }) => (
    <Item qrAdi={item.qrAdi} ></Item>
  );
  return (
    <FlatList
        data={DATA}
        renderItem={renderItem}
        numColumns={2}
      />
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: "2%",
    width: 180,
    height: 190,
    backgroundColor: "#E6E6E6",
    marginLeft: "5%"
  },
  body1:{
    flex:1,
    backgroundColor: "gray",
    marginTop: 5,
    marginBottom:10,
    marginLeft: 10,
    marginRight: 10,
    alignItems: "center",
    justifyContent:"center"
  },
  body2:{
    flex:3,
    justifyContent:"center"
  },
  qrImage:{
    height: "85%",
    width: "60%",
    alignSelf: "center"
  }
});

export default ExistingQR;
