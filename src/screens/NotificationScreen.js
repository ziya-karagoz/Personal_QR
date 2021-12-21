import React from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import NotificationHeaderBar from "../components/molecules/NotificationHeaderBar";
import FooterBar from "../components/molecules/FooterBar";
import NotificationBlock from "../components/molecules/NotificationBlock";


function NotificationScreen(props) {
  return (
  
    <View style={styles.container}>

      <NotificationHeaderBar style={styles.headerBar}>
      </NotificationHeaderBar>
      
      <SafeAreaView style= {styles.body}>        
        <NotificationBlock></NotificationBlock>  
      </SafeAreaView>

      <FooterBar style={ styles.footerBar }
      ></FooterBar>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:8
  },

  headerBar: {
    flex: 1,
  },

  footerBar: {
    flex: 1,
  },

  body: {
    flex: 6,
    flexDirection: "column",
  },

  icon: {
    color: "rgba(128,128,128,1)",
    fontSize: 40,
  },

});

export default NotificationScreen;
