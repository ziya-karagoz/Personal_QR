import React, { Component } from "react";
import { StyleSheet, View, Text, StatusBar, TouchableOpacity } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import CreationHeaderBar from "../components/molecules/CreationHeaderBar";
import FooterBar from "../components/molecules/FooterBar";
import TextInput from "../components/molecules/TextInput";
import AddMessageButton from "../components/molecules/Button";

import Icon from "react-native-vector-icons/Entypo";

function QRCreationScreen(props) {
  return (
    <View style={styles.container}>
      <View  style={styles.headerBar}>
        <CreationHeaderBar style = {{flex:1}}>
            <Icon name="palette" style={styles.icon}></Icon>
        </CreationHeaderBar>
      </View>

      <View style = {styles.body1}>
          <View style = {{flex:1}}></View>
          <View style = {{flex:1}}>
            <View style = {styles.qrAdı}>
              <Text style = {{marginTop:"10%"}}>Qr Adı:</Text>
              <TextInput></TextInput>
            </View>
            <AddMessageButton></AddMessageButton>
          </View>
      </View>

      <View style={styles.body2}></View>
        
      <View style={styles.footerBar}>
        <FooterBar style = {{flex:1, backgroundColor: "rgba(242,242,242,1)"}}></FooterBar>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: hp("100"),
    width: wp("100")
  },

  headerBar: {
    flex: 1
  },

  footerBar: {
    flex: 1,
  },

  body1: {
    flex: 1.5,
    flexDirection:"row"
  },

  body2: {
    flex: 4.5,
  },

  icon: {
    color: "rgba(128,128,128,1)",
    fontSize: 40,
  },

  qrAdı:{
    height:60,
    flexDirection: "row",
    alignItems:"center",
    justifyContent:"center", 
  }

});

export default QRCreationScreen;