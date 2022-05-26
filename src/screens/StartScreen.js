import React, { useEffect } from "react";
import Background from "../components/molecules/Background";
import Logo from "../components/molecules/Logo";
import Header from "../components/molecules/Header";
import Button from "../components/molecules/Button";
import Paragraph from "../components/molecules/Paragraph";
import { login } from "../store/userState";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function StartScreen({ navigation }) {
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

  useEffect(() => {
    getData();
  }, []);

  return (
    <Background>
      <Logo />
      <Header>Kişisel QR</Header>
      <Paragraph>Size özel QR'(lar) edinin!</Paragraph>
      <Button mode='outlined' onPress={() => navigation.navigate("Login")}>
        Giriş
      </Button>
      <Button mode='outlined' onPress={() => navigation.navigate("Register")}>
        Kayıt Ol
      </Button>
    </Background>
  );
}
