import React from "react";
import {View, TouchableOpacity, Text } from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import {useNavigation,} from "@react-navigation/native";

import allStyles from "./Styles"


function FooterBar() {
  const navigation = useNavigation();
  const styles = allStyles
  return (
    <View style={styles.barContainerBottom}>
      <TouchableOpacity
        style={styles.btnWrapper}
        
        onPress={() => {
          navigation.reset({
            index: 1,
            routes: [
              {name: 'Home'},
              {name: 'Scanner'}
              ],
          });
        }}
      >
        <MaterialCommunityIconsIcon
          name='barcode-scan'
          style={ styles.iconFooter }
        />
        <Text style={styles.iconText}> QR Tara </Text>
      </TouchableOpacity>
      <TouchableOpacity

        onPress={() => {
          navigation.reset({
            index: 0,
            routes: [
              {name: 'Home'},
              ],
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
      <TouchableOpacity
        onPress={() => navigation.reset({
            index: 1,
            routes: [
              {name: 'Home'},
              {name: 'Notification'}
              ],
          })}
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



export default FooterBar;
