import React from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";

import FooterBar from "../components/molecules/FooterBar";
import HeaderBar from "../components/molecules/HeaderBar";

function AccountSettingScreen(){
    return(
        <View style={styles.container}>
            <HeaderBar style = {styles.header}></HeaderBar>
            <View style = {styles.body}></View>
            <FooterBar style = {styles.footer}></FooterBar>
        </View>
    )
} export default AccountSettingScreen

const styles = StyleSheet.create({
    container:{
        flex:8
    },
    body:{
        flex:6
    },
    footer:{
        flex:1
    },
    header:{
        flex:1
    }
})