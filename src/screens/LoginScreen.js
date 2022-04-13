import React, { useState, useEffect } from "react";
import { TouchableOpacity, StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import Background from "../components/molecules/Background";
import Logo from "../components/molecules/Logo";
import Header from "../components/molecules/Header";
import Button from "../components/molecules/Button";
import TextInputLogin from "../components/molecules/TextInputLogin";
import BackButton from "../components/molecules/BackButton";
import { emailValidator } from "../helpers/emailValidator";
import { passwordValidator } from "../helpers/passwordValidator";
import { login } from "../store/userState";
import allStyles from "../components/molecules/Styles";

import AsyncStorage from "@react-native-async-storage/async-storage";

const styles = allStyles;

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState({ value: "", error: "" });
  const [password, setPassword] = useState({ value: "", error: "" });

  useEffect(() => {
    getData();
  }, []);

  const onLoginPressed = () => {
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);

    if (emailError || passwordError) {
      setEmail({ ...email, error: emailError });
      setPassword({ ...password, error: passwordError });
      return;
    }
    storeData({ email: email.value, password: password.value });
    login(email.value, password.value, navigation);
  };

  const storeData = async (userLoginInfo) => {
    try {
      const jsonUserLoginInfo = JSON.stringify(userLoginInfo);
      await AsyncStorage.setItem("@user", jsonUserLoginInfo);
    } catch (e) {
      console.log("ERR: ", e);
    }
  };
  const getData = async () => {
    try {
      const stringifiedValue = await AsyncStorage.getItem("@user");
      value = JSON.parse(stringifiedValue);
      if (value !== null) {
        console.log("ASD: ", value.email);
        login(value.email, value.password, navigation);
      }
    } catch (e) {
      // error reading value
    }
  };
  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Logo />
      <Header>Hoşgeldiniz.</Header>
      <TextInputLogin
        label='E-posta'
        returnKeyType='next'
        value={email.value}
        onChangeText={(text) => setEmail({ value: text, error: "" })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize='none'
        autoCompleteType='email'
        textContentType='emailAddress'
        keyboardType='email-address'
      />
      <TextInputLogin
        label='Şifre'
        returnKeyType='done'
        value={password.value}
        onChangeText={(text) => setPassword({ value: text, error: "" })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />
      <View style={styles.loginScreenForgotPassword}>
        <TouchableOpacity onPress={() => navigation.navigate("ResetPassword")}>
          <Text style={styles.loginScreenForgot}>Şifrenizi mi unuttunuz?</Text>
        </TouchableOpacity>
      </View>
      <Button mode='contained' onPress={onLoginPressed}>
        Giriş
      </Button>
      <View style={styles.row}>
        <Text>Hesabınız yok mu? </Text>
        <TouchableOpacity onPress={() => navigation.replace("Register")}>
          <Text style={styles.link}>Kayıt ol</Text>
        </TouchableOpacity>
      </View>
    </Background>
  );
}
