import React from "react";
import { View, Text } from "react-native";
import { TextInput as Input } from "react-native-paper";
import { theme } from "../../core/theme";
import allStyles from "./Styles";

const styles = allStyles;

export default function TextInput({ errorText, description, ...props }) {
  return (
    <View style={styles.textInputLoginContainer}>
      <Input
        style={styles.textInputLoginInput}
        selectionColor={theme.colors.primary}
        underlineColor='transparent'
        mode='outlined'
        {...props}
      />
      {description && !errorText ? (
        <Text style={styles.textInputLoginDescription}>{description}</Text>
      ) : null}
      {errorText ? (
        <Text style={styles.textInputLoginError}>{errorText}</Text>
      ) : null}
    </View>
  );
}
