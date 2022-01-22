import React from "react";
import { StyleSheet, View, Text } from "react-native";

import FooterBarNav from "../components/molecules/FooterBarNav";
import HeaderBar from "../components/molecules/HeaderBar";

function AppSettingScreen(){
    return(
        <View style={styles.container}>
            <HeaderBar style = {styles.header}></HeaderBar>
            <View style = {styles.body}>
                <Text >BURASI UYGULAMA AYALARI</Text>
            </View>
            <FooterBarNav style = {styles.footer}></FooterBarNav>
        </View>
    )
} export default AppSettingScreen

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