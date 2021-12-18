import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

function NotificationBlock(props) {
  return (
    <View style={styles.container}>

        <View style={{flexDirection:"row", flex:1}}>

            <Text style = {styles.text1}>QR: QR adı</Text>

            <TouchableOpacity style = {{flex:1}}>
                <Icon name = "trash-can-outline" style = {styles.icon}></Icon>
            </TouchableOpacity>

        </View>

        <View style={{flexDirection:"column", flex:4, alignItems:"center"}}>

                <Text style={styles.text2}>Kullanıcı: Bildirim Mesajı</Text>
        </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: "2%",
    width: 380,
    height: 150,
    backgroundColor: "#E6E6E6",
  },

  icon: {
    flex:1,
    alignSelf: "center",
    fontSize: 30
  },
  text1: {
      left: "35%",
      top: "1%",
      flex:10
  },
  text2:{
    flex:1,
    top:"3.5%"
  }
});

export default NotificationBlock;
