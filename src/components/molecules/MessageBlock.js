import React, { Component } from "react";
import { StyleSheet, View, TextInput, Text } from "react-native";

function MessageBlock(props) {
    return (
      <View style={styles.container}>
        <View style = {{flex:1, flexDirection:"row",}}>
            <View style = {{flex:1, justifyContent:"center"}}>
                <Text>Soru1</Text>
            </View>
            <TextInput
                multiline  
                placeholder="_______________"
                clearTextOnFocus={true}
                style={styles.textInput}
            ></TextInput>
            <View style={{flex:1}}></View>
        </View>
        <View style = {{flex:1}}></View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      width: "90%",
      height: "30%",
      backgroundColor: "gray",
      opacity: 20
    },
    textInput: {
      color: "#121212",
      height: 50,
      width: 100,
      flex:1
    }
  });
  
  export default MessageBlock;