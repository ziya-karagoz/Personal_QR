import React from "react";
import { StyleSheet, View, Text } from "react-native";

import FooterBarNav from "../components/molecules/FooterBarNav";
import HeaderBar from "../components/molecules/HeaderBar";

function AccountSettingScreen(){
    return(
        <View style={{flex: 8}}>
            <HeaderBar></HeaderBar>
            <View style = {{flex: 6}}>
                <Text >BURASI HESAP AYALARI</Text>
            </View>
            <FooterBarNav></FooterBarNav>
        </View>
    )
} export default AccountSettingScreen