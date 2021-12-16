"# Personal_QR"

users format asagidaki gibidir:

var user = { username: "ziaboi",
name: "Ziya",
surname: "Karagoz",
dateOfBirth: new Date(1999, 12, 4),
email: "ziyakaragoz42@gmail.com",
phoneNumber: "05314253902",
password: "ziyagobrr",
gender: "Male",
qrBlock: {
qr1: {
qrId: 61b740082a29928aa126171d,
qrName:"Arabam icin",
messageBlock: {
message1: "Geldin mi?"
message2: "Sinavlar obsdedir.";
}
}
}};

// <SafeAreaView style={{ flex: 1 }}>
// <View style={styles.container}>
// <Text style={styles.titleStyle}>
// Generation of QR Code in React Native
// </Text>
// <QRCode
// //QR code value
// value={qrvalue ? qrvalue : "NA"}
// //size of QR Code
// size={250}
// //Color of the QR Code (Optional)
// color='black'
// //Background Color of the QR Code (Optional)
// backgroundColor='white'
// //Logo of in the center of QR Code (Optional)

    //       //Center Logo size  (Optional)
    //       logoSize={30}
    //       //Center Logo margin (Optional)
    //       logoMargin={2}
    //       //Center Logo radius (Optional)
    //       logoBorderRadius={15}
    //       //Center Logo background (Optional)
    //       logoBackgroundColor='yellow'
    //     />
    //     <Text style={styles.textStyle}>
    //       Please insert any value to generate QR code
    //     </Text>
    //     <TextInput
    //       style={styles.textInputStyle}
    //       onChangeText={(inputText) => setInputText(inputText)}
    //       placeholder='Enter Any Value'
    //       value={inputText}
    //     />
    //     <TouchableOpacity
    //       style={styles.buttonStyle}
    //       onPress={() => setQrvalue(inputText)}
    //     >
    //       <Text style={styles.buttonTextStyle}>Generate QR Code</Text>
    //     </TouchableOpacity>
    //   </View>
    // </SafeAreaView>
    // <SafeAreaView>
    //   <HomeScreen />
    // </SafeAreaView>

// Library Imports

import React, { useState } from "react";

import { StyleSheet } from "react-native";

import QRCode from "react-native-qrcode-svg";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//Component Imports
import HomeScreen from "./src/screens/HomeScreen";
import QRCreationScreen from "./src/screens/QRCreationScreen";

const Stack = createNativeStackNavigator();

export default function App() {
const [inputText, setInputText] = useState("");
const [qrvalue, setQrvalue] = useState("");

return (
<NavigationContainer>
<Stack.Navigator initialRouteName='HomeScreen'>
<Stack.Screen
name='Home'
component={HomeScreen}
options={{ headerShown: false }} ></Stack.Screen>
<Stack.Screen
name='QRCreation'
component={QRCreationScreen}
options={{ headerShown: false }} ></Stack.Screen>
</Stack.Navigator>
</NavigationContainer>
);
}

const styles = StyleSheet.create({});
