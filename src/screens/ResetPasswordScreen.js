import React, { useState } from "react";
import Background from "../components/molecules/Background";
import BackButton from "../components/molecules/BackButton";
import Logo from "../components/molecules/Logo";
import Header from "../components/molecules/Header";
import TextInputLogin from "../components/molecules/TextInputLogin";
import Button from "../components/molecules/Button";
import { emailValidator } from "../helpers/emailValidator";

export default function ResetPasswordScreen({ navigation }) {
  const [email, setEmail] = useState({ value: "", error: "" });

  const sendResetPasswordEmail = () => {
    const emailError = emailValidator(email.value);
    if (emailError) {
      setEmail({ ...email, error: emailError });
      return;
    }
    navigation.navigate("Login");
  };

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Logo />
      <Header>Şifreni Öğren</Header>
      <TextInputLogin
        label='E-posta adresi'
        returnKeyType='done'
        value={email.value}
        onChangeText={(text) => setEmail({ value: text, error: "" })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize='none'
        autoCompleteType='email'
        textContentType='emailAddress'
        keyboardType='email-address'
        description='Şifrenizi yenilemeye yönelik bir e-mail alacaksınız.'
      />
      <Button
        mode='contained'
        onPress={sendResetPasswordEmail}
      >
        Bilgileri Gönder
      </Button>
    </Background>
  );
}
