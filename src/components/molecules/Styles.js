import { StyleSheet } from "react-native";
import { theme } from "../../core/theme.js";
import { getStatusBarHeight } from "react-native-status-bar-height";

const allStyles = StyleSheet.create({
  barContainer: {
    backgroundColor: "#FAE1EF",
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
    elevation: 25,
    shadowColor: "rgba(5,5,255,6)",
    flexDirection: "row",
    flex: 0.62,
  },

  barContainerCreation: {
    backgroundColor: "#FAE1EF",
    elevation: 20,
    shadowColor: "rgba(5,5,255,6)",
    flexDirection: "row",
    flex: 0.62,
  },

  barContainerBottom: {
    backgroundColor: "#FAE1EF",
    elevation: 10,
    shadowColor: "rgba(5,5,255,6)",
    flexDirection: "row",
    flex: 0.6,
  },

  btnWrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  iconFooter: {
    backgroundColor: "transparent",
    color: "black",
    fontSize: 24,
    opacity: 0.9,
  },

  iconHeader: {
    backgroundColor: "transparent",
    color: "black",
    fontSize: 24,
    opacity: 0.9,
    top: 10,
  },

  iconText: {
    fontSize: 12,
    color: "black",
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
    alignItems: "center",
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
    textAlign: "center",
    marginBottom: 12,
  },

  button2: {
    width: "85%",
    marginVertical: 10,
    paddingVertical: 2,
    backgroundColor: "gray",
  },

  buttonText2: {
    fontWeight: "bold",
    fontSize: 15,
    lineHeight: 26,
    color: "#000000",
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
    marginBottom: "4%",
    width: 180,
    height: 190,
    backgroundColor: "#F0E0FF",
    marginLeft: "5%",
    borderTopEndRadius: 60,
    borderTopStartRadius: 12,
    borderBottomStartRadius: 12,
    borderBottomEndRadius: 12,
    elevation: 10,
    shadowColor: "rgba(5,5,255,6)",
  },

  existingQrBody1: {
    flex: 1,
    backgroundColor: "#FAE1EF",
    marginTop: 7,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 14,
    alignItems: "center",
    justifyContent: "center",
    borderTopEndRadius: 60,
    borderTopStartRadius: 12,
    borderBottomStartRadius: 12,
    borderBottomEndRadius: 12,
    elevation: 15,
    shadowColor: "rgba(5,5,255,6)",
  },

  existingQrBody2: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
    bottom: "2%",
    borderRadius: 20,
  },

  blockContainer: {
    marginTop: "2%",
    marginLeft: "4%",
    marginBottom: "5%",
    width: 380,
    height: 150,
    backgroundColor: "#F0E0FF",
    borderTopEndRadius: 50,
    borderTopStartRadius: 12,
    borderBottomStartRadius: 12,
    borderBottomEndRadius: 12,
    elevation: 11,
    shadowColor: "rgba(5,5,255,6)",
  },

  mesaj: {
    color: "#121212",
    top: "5%",
    borderRadius: 15,
    backgroundColor: "#DCDAFF",
    elevation: 1,
  },

  cevap: {
    color: "#121212",
    top: "3%",
    backgroundColor: "#F0ECFF",
    borderRadius: 15,
    elevation: 1,
  },

  editIcon: {
    height: "65%",
    width: "65%",
    alignSelf: "center",
    top: "7%",
    opacity: 0.8,
  },

  body1: {
    flex: 1.5,
    flexDirection: "row",
    backgroundColor: "#FAE5EF",
    elevation: 10,
    shadowColor: "rgba(5,5,255,6)",
    borderBottomStartRadius: 25,
    borderBottomEndRadius: 25,
  },

  body2: {
    flex: 4.5,
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
    backgroundColor: "#FAE1AF",
    marginTop: "15%",
    marginLeft: "25%",
    bottom: "2%",
    borderRadius: 20,
    elevation: 12,
    shadowColor: "rgba(5,5,255,6)",
  },

  picker: {
    width: 160,
    height: 30,
    top: "9%",
    left: "12%",
    borderRadius: 20,
    elevation: 12,
    shadowColor: "rgba(5,5,255,6)",
    backgroundColor: "#FAE1AF",
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
    left: "25%",
  },

  notificationBlockContainer: {
    marginTop: "2%",
    marginBottom: "3%",
    width: 380,
    height: 150,
    backgroundColor: "#F0E0FF",
    borderTopEndRadius: 60,
    borderTopStartRadius: 12,
    borderBottomStartRadius: 12,
    borderBottomEndRadius: 12,
    elevation: 11,
    shadowColor: "rgba(5,5,255,6)",
  },

  notificationBlockIcon: {
    flex: 1,
    alignSelf: "center",
    fontSize: 30,
  },

  notificationBlockText1: {
    paddingLeft: "4%",
    paddingTop: "1%",
    flex: 0.5,
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 10,
    elevation: 5,
    shadowColor: "rgba(5,5,255,6)",
    backgroundColor: "#FAE1AF",
  },

  notificationBlockText2: {
    flex: 5,
    top: "3.5%",
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
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 8,
    backgroundColor: "#FAE5EF",
    shadowColor: "rgba(5,5,255,6)",
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
    borderRadius: 20,
    marginTop: "8%",
    marginLeft: "8%",
    marginRight: "8%",
    marginBottom: "5%",
    backgroundColor: "#F0E0FF",
    elevation: 11,
    shadowColor: "rgba(5,5,255,6)",
  },

  scannerScreenPressableButton: {
    padding: 15,
    borderRadius: 20,
    marginTop: "8%",
    marginLeft: "8%",
    marginRight: "8%",
    marginBottom: "5%",
    backgroundColor: "#FAE1AF",
    elevation: 11,
    shadowColor: "rgba(5,5,255,6)",
  },

  scannerScreenTextStyle: {
    color: "black",
    fontWeight: "bold",
    textAlign: "center",
  },

  scannerScreenModalText: {
    marginBottom: 15,
    textAlign: "center",
    fontWeight: "bold",
  },

  qrCreationScreenQrAdi: {
    height: 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  qrCreationScreenImage: {
    top: "3%",
    width: 120,
    height: 120,
    alignSelf: "center",
    backgroundColor: "transparent",
  },

  messageBlockContainer: {
    flex: 1,
    flexDirection: "row",
  },

  anchorStyle: {
    top: "25%",
    backgroundColor: "#FAE1AF",
  },
  triggerOuterWrapper: {
    elevation: 3,
    borderRadius: 100,
    alignItems: "center",
    height: 25,
    width: 25,
    alignSelf: "center",
    backgroundColor: "#FAE0AF",
  },

  triggerWrapper: {
    borderRadius: 100,
    alignItems: "center",
    height: 25,
    width: 25,
    alignSelf: "center",
  },
});

export default allStyles;
