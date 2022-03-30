import React from "react";
import { View, Text } from "react-native";

import FooterBarNav from "../components/molecules/FooterBarNav";
import HeaderBar from "../components/molecules/HeaderBar";

function AppSettingScreen(){
    return(
        <View style={{flex: 8}}>
            <HeaderBar ></HeaderBar>
            <View style = {{flex: 6}}>
                <Text >BURASI UYGULAMA AYALARI</Text>
            </View>
            <FooterBarNav></FooterBarNav>
        </View>
    )
} export default AppSettingScreen