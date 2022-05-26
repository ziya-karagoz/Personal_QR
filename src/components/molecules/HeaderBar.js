import React from "react";
import { View, TouchableOpacity } from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";

import allStyles from "./Styles";

function HeaderBar(props) {
  const { name, index, routes } = props;
  const navigation = useNavigation();
  const styles = allStyles;

  return (
    <View style={styles.barContainer}>
      <TouchableOpacity style={styles.btnWrapper} />
      <TouchableOpacity style={styles.btnWrapper}>
        <MaterialCommunityIconsIcon
          name='qrcode-edit'
          style={styles.iconHeader}
        ></MaterialCommunityIconsIcon>
      </TouchableOpacity>
      <View style={styles.btnWrapper}>
        {name && (
          <TouchableOpacity
            onPress={() =>
              navigation.reset({
                index: index,
                routes: routes,
              })
            }
          >
            <MaterialCommunityIconsIcon
              name={name}
              style={styles.iconHeader}
            ></MaterialCommunityIconsIcon>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

export default HeaderBar;
