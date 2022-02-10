import React from 'react';
import { StyleSheet} from "react-native";
import { theme } from "../../core/theme.js";
import { getStatusBarHeight } from "react-native-status-bar-height";

  const allStyles = StyleSheet.create({

    barContainer: {
      backgroundColor: "rgba(0,0,0,0.07)",
      flexDirection: "row",
      flex: 1
    },

    btnWrapper: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },

    iconFooter: {
      backgroundColor: "transparent",
      color: "#616161",
      fontSize: 24,
      opacity: 0.8,
    },

    iconHeader: {
      backgroundColor: "transparent",
      color: "#616161",
      fontSize: 24,
      opacity: 0.8,
      top: 10
    },

    iconText: {
      fontSize: 12,
      color: "#9E9E9E",
      backgroundColor: "transparent",
      paddingTop: 4,
    },

    background: {
      flex: 1,
      width: "100%",
      backgroundColor: theme.colors.surface,
    },

    backgroundContainer: {
      flex: 1,
      padding: 20,
      width: "100%",
      maxWidth: 340,
      alignSelf: "center",
      alignItems: "center",
      justifyContent: "center",
    },

    logo: {
      width: 110,
      height: 110,
      marginBottom: 8,
      alignItems: "center"
    },

    header: {
      fontSize: 21,
      color: "#616161",
      fontWeight: "bold",
      paddingVertical: 12,
    },

    paragraph: {
      fontSize: 15,
      lineHeight: 21,
      textAlign: 'center',
      marginBottom: 12,
    },

    button2: {
      width: "85%",
      marginVertical: 10,
      paddingVertical: 2,
      backgroundColor: "gray"
    },

    buttonText2:{
      fontWeight: "bold",
      fontSize: 15,
      lineHeight: 26,
      color: "#000000"
    },

    loginScreenForgotPassword: {
      width: "100%",
      alignItems: "flex-end",
      marginBottom: 24,
    },

    loginScreenForgot: {
      fontSize: 13,
      color: "#616161",
    },

    row: {
      flexDirection: "row",
      marginTop: 4,
    },

    link: {
      fontWeight: "bold",
      color: "gray",
    },

    textInputLoginContainer: {
      width: "100%",
      marginVertical: 12,
    },

    textInputLoginInput: {
      backgroundColor: theme.colors.surface,
    },

    textInputLoginDescription: {
      fontSize: 13,
      color: theme.colors.secondary,
      paddingTop: 8,
    },

    textInputLoginError: {
      fontSize: 13,
      color: theme.colors.error,
      paddingTop: 8,
    },

    backButtonContainer: {
      position: "absolute",
      top: 10 + getStatusBarHeight(),
      left: 4,
    },

    backButtonImage: {
      width: 24,
      height: 24,
    },

    existingQrContainer: {
      marginTop: "2%",
      width: 180,
      height: 190,
      backgroundColor: "#E6E6E6",
      marginLeft: "5%",
      borderRadius: 20,
    },

    existingQrBody1: {
      flex: 1,
      backgroundColor: "gray",
      marginTop: 5,
      marginBottom: 10,
      marginLeft: 10,
      marginRight: 10,
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 20,
    },

    existingQrBody2: {
      flex: 3,
      justifyContent: "center",
      alignItems: "center",
      bottom: "5%",
    },

    blockContainer: {
      marginTop: "2%",
      width: 380,
      height: 150,
      backgroundColor: "#E6E6E6",
      borderWidth: 3,
      borderRadius: 20,
    },

    mesaj: {
      color: "#121212",
      bottom: "26%",
    },

    cevap: {
      color: "#121212",
      bottom: "32%",
    },

    editIcon: {
      height: "65%",
      width: "65%",
      alignSelf: "center",
      top: "7%",
    },
  
    body1: {
      flex: 1.5,
      flexDirection: "row",
      borderTopWidth: 3,
      borderBottomWidth: 3,
    },

    body2: {
      flex: 4.5,
      alignItems: "center"
    },

    editScreenBody: {
      width: 100,
      height: 30,
      marginLeft: "1.5%",
      alignItems: "center",
      top: "7.5%",
    },
  
    editScreenQrAdi: {
      height: 60,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
    },
  
    button: {
      width: 100,
      height: 24,
      backgroundColor: "gray",
      marginLeft: "25%",
      bottom: "2%",
      borderRadius: 20,
    },

    picker: {
      width: 170,
      left: "12%",
    },
  
    buttonText: {
      height: 24,
      width: 100,
      color: "black",
      alignItems: "center",
      justifyContent: "center",
    },
  
    textInput: {
      color: "#121212",
      height: 50,
      width: 100,
    },

    editScreenQrImage: {
      flex: 1, 
      justifyContent: "center", 
      left: "25%"
    },

    notificationBlockContainer: {
      marginTop: "2%",
      width: 380,
      height: 150,
      backgroundColor: "#E6E6E6",
    },
  
    notificationBlockIcon: {
      flex:1,
      alignSelf: "center",
      fontSize: 30
    },

    notificationBlockText1: {
        left: "35%",
        top: "1%",
        flex:10
    },

    notificationBlockText2:{
      flex:5,
      top:"3.5%",
    },

    scannerScreenContainer: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },

    scannerScreenMaintext: {
      fontSize: 16,
      margin: 20,
    },
    
    scannerScreenBarcodebox: {
      alignItems: "center",
      justifyContent: "center",
      height: 300,
      width: 300,
      overflow: "hidden",
      borderRadius: 30,
      backgroundColor: "#616161",
    },

    scannerScreenCenteredView: {
      flex: 3,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22,
    },

    scannerScreenModalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 8,
    },

    scannerScreenModalView2: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 10,
    },

    scannerScreenButtonClose: {
      width: 100,
      height: 24,
      backgroundColor: "gray",
      borderRadius: 20,
      backgroundColor: "#616161",
    },

    scannerScreenPressableMessage: {
      padding: 15,
      backgroundColor: "gray",
      borderRadius: 20,
      backgroundColor: "#616161",
      marginTop: "8%",
      marginLeft: "8%",
      marginRight: "8%"
    },

    scannerScreenTextStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center",
    },

    scannerScreenModalText: {
      marginBottom: 15,
      textAlign: "center",
    },

    qrCreationScreenQrAdi: {
      height: 60,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
    },

    qrCreationScreenImage: {
      top: "3%",
      width: 120,
      height: 120,
      alignSelf: "center",
    },

    messageBlockContainer: {
      flex: 1,
      flexDirection: "row",
      borderTopColor: "black",
      borderTopWidth: 3,
    }
  });

export default allStyles;
