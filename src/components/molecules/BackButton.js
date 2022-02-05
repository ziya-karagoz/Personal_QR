import React from "react";
import { TouchableOpacity, Image, StyleSheet } from "react-native";
import allStyles from "./Styles";


const styles = allStyles

export default function BackButton({ goBack }) {
  return (
    <TouchableOpacity onPress={goBack} style={styles.backButtonContainer}>
      <Image
        style={styles.backButtonImage}
        source={require("../../Assets/Images/arrow_back.png")}
      />
    </TouchableOpacity>
  );
}
