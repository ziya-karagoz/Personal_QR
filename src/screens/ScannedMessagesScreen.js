import { NavigationContainer } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import { Text, View, FlatList, Button, Modal, Pressable, Alert, TouchableOpacity, Image } from "react-native";
import BackButton from "../components/molecules/BackButton";
import allStyles from "../components/molecules/Styles";
import {useNavigation,} from "@react-navigation/native";

const styles = allStyles

const Item = (props) => {
  const messageOne = props.item.item.messageOne
  const messageTwo = props.item.item.messageTwo
  const [modalVisible, setModalVisible] = useState(false);
  
  return(
    <Pressable style={styles.scannerScreenPressableMessage}
      onPress={() => setModalVisible(!modalVisible)}
    >
    <Modal
          animationType='slide'
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.scannerScreenCenteredView}>
            <View style={styles.scannerScreenModalView}>
              <Text style={styles.scannerScreenModalText}>Cevap: {messageTwo}</Text>
              <Pressable
                style={styles.scannerScreenPressableMessage}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.scannerScreenTextStyle}>Kapat</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      <Text style = {styles.scannerScreenTextStyle}>Mesaj: {messageOne} </Text>
    </Pressable>
  )
}



function ScannedMessagesScreen({route}) {
  const {messageFromServer} = route.params
  const navigation = useNavigation();
  const renderItem = (item) => {
    return(
    <Item item = {item}></Item>
  )};

  return (
      <View style={{flex:1}}>
        <View style={{flex:10}} >
          <FlatList 
          data={messageFromServer}
          renderItem={(item) => renderItem(item)}  
          />
        </View>
        <View style={{flex:1}}>  
          <TouchableOpacity style={{width:40, height:40, alignSelf: "center", justifyContent:"center"}}
             onPress={() => {navigation.reset({
              index: 0,
              routes: [{ name: "Scanner" }],
            });}}>
            <Image
              style={{margin: 1, alignSelf:"center"}}
              source={require("../Assets/Images/arrow_back.png")}
            />
          </TouchableOpacity>
        </View>
      </View>
     
  )
}

export default ScannedMessagesScreen;
