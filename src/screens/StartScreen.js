import React from "react";
import Background from "../components/molecules/Background";
import Logo from "../components/molecules/Logo";
import Header from "../components/molecules/Header";
import Button from "../components/molecules/Button";
import Paragraph from "../components/molecules/Paragraph";

export default function StartScreen({ navigation }) {
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
