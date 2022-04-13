import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import allStyles from "./Styles";

function FooterBar() {
  const navigation = useNavigation();
  const styles = allStyles;
  const handleLogout = () => {
    storeData();
    navigation.reset({
      index: 1,
      routes: [{ name: "Home" }, { name: "Login" }],
    });
  };
  const storeData = async () => {
    try {
      const jsonValue = JSON.stringify({});
      await AsyncStorage.setItem("@user", jsonValue);
    } catch (e) {
      // saving error
    }
  };
  return (
    <View style={styles.barContainerBottom}>
      <TouchableOpacity
        style={styles.btnWrapper}
        onPress={() => {
          navigation.reset({
            index: 1,
            routes: [{ name: "Home" }, { name: "Scanner" }],
          });
        }}
      >
        <MaterialCommunityIconsIcon
          name='barcode-scan'
          style={styles.iconFooter}
        />
        <Text style={styles.iconText}> QR Tara </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.reset({
            index: 0,
            routes: [{ name: "Home" }],
          });
        }}
        style={styles.btnWrapper}
      >
        <MaterialCommunityIconsIcon
          name='home-variant'
          style={styles.iconFooter}
        ></MaterialCommunityIconsIcon>
        <Text style={styles.iconText}>Ana Sayfa</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleLogout} style={styles.btnWrapper}>
        <MaterialCommunityIconsIcon
          name='bell-ring'
          style={styles.iconFooter}
        ></MaterialCommunityIconsIcon>
        <Text style={styles.iconText}>Bildirimler</Text>
      </TouchableOpacity>
    </View>
  );
}

export default FooterBar;
