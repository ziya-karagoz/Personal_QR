import React from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import {useNavigation} from "@react-navigation/native";

import allStyles from "./Styles"

function FooterBarNav(props) {
  const navigation = useNavigation();
  const styles = allStyles
  return (
    <View style={styles.barContainer}>
      <View style={styles.btnWrapper}/>
      <TouchableOpacity
        style={styles.btnWrapper}

        onPress={() => {
          navigation.reset({
            index: 0,
            routes: [
              {name: 'Ana Sayfa'},
              ],
          });
        }}
      >
        <MaterialCommunityIconsIcon
          name='home-variant'
          style={styles.iconFooter}
        ></MaterialCommunityIconsIcon>
        <Text style={styles.iconText}>Ana Sayfa</Text>
      </TouchableOpacity>
      <TouchableOpacity
        
        style={styles.btnWrapper}
      >
        <MaterialCommunityIconsIcon
          name='bell-ring'
          style={styles.iconFooter}
        ></MaterialCommunityIconsIcon>
        <Text style={styles.iconText}>Bildirimler</Text>
      </TouchableOpacity>
    </View>
  );
}

export default FooterBarNav;
