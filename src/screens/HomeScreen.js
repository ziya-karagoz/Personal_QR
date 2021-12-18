import React, {} from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";


import HeaderBar from "../components/molecules/HeaderBar";
import FooterBar from "../components/molecules/FooterBar";


import Icon from "react-native-vector-icons/Entypo";
import ExistingQR from "../components/molecules/ExistingQR";





function HomeScreen({ navigation }) {
  const createQRPressHandler = () => {
    navigation.navigate("QRCreation");
  };
 
  
  return (

    <View style={styles.container}>
      <View style={styles.headerBar}>
        <HeaderBar style={{ flex: 1 }}></HeaderBar>
      </View>

      <View style={styles.body}>

        <ExistingQR></ExistingQR>

        <TouchableOpacity
          onPress={createQRPressHandler}
          style={styles.touchableIcon}
        >
          <Icon name='circle-with-plus' style={styles.icon}></Icon>
        </TouchableOpacity>
      </View>

      <View style={styles.footerBar}>
        <FooterBar
          style={{ flex: 1 }}
        ></FooterBar>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1
  },
  headerBar: {
    flex: 1,
  },
  footerBar: {
    flex: 1,
  },
  body: {
    flex: 6,
  },
  icon: {
    color: "rgba(128,128,128,1)",
    fontSize: 60,
    flex:1,
  },
  touchableIcon: {
    left: "75%",
    top: "85%",
    height: "12%",
    width: "15%",
  },
});

export default HomeScreen;
