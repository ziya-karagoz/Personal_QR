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
      <Header>Personal QR</Header>
      <Paragraph>Have a QR, Use it Everywhere</Paragraph>
      <Button mode='outlined' onPress={() => navigation.navigate("Login")}>
        Login
      </Button>
      <Button mode='outlined' onPress={() => navigation.navigate("Register")}>
        Sign Up
      </Button>
    </Background>
  );
}
