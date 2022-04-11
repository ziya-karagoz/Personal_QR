import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import allStyles from "./Styles";

const styles= allStyles;

const DATA =[
  {qrAdi: 'Arabam için',
   kullanici: 'Ziya Karagöz',
   bildirim: 'Arabanızı çeker misiniz? - 1',
   tarih: '02.01.2021'
  },
  {qrAdi: 'Ev için',
   kullanici:'Sevil Kara',
   bildirim: 'Market listesi - 1',
   tarih: '02.01.2021'
  },
  {qrAdi: 'Arabam için',
   kullanici: 'Ziya Karagöz',
   bildirim: 'Arabanızı çeker misiniz? - 2',
   tarih: '04.01.2021'
  },
  {qrAdi: 'Fakülte için',
   kullanici: 'Batuhan Acar',
   bildirim: 'Ders notları - 14',
   tarih: '10.01.2021'
  }, 
]

const Item = ({qrAdi, kullanici, bildirim, tarih}) => (
  <View style={styles.notificationBlockContainer}>

        <View style={{flexDirection:"row", flex:1}}>

            <Text style = {styles.notificationBlockText1}>QR: {qrAdi}</Text>

            <TouchableOpacity style = {{flex:1}}>
                {/* <Icon name = "trash-can-outline" style = {styles.notificationBlockIcon}></Icon> */}
            </TouchableOpacity>

        </View>

        <View style={{flexDirection:"column", flex:4, alignItems:"center"}}>

          <Text style={styles.notificationBlockText2 }>{kullanici}: {bildirim}</Text>
          <Text style={{left: 300, bottom: 5, position:"absolute", flex:1}}>{tarih}</Text>
        </View>

    </View>
);

const renderItem = ({item}) => (
  <Item qrAdi={item.qrAdi} bildirim={item.bildirim} kullanici={item.kullanici} tarih={item.tarih}></Item>
)

function NotificationBlock() {
  return (
    <FlatList data={DATA}
    renderItem={renderItem}
    contentContainerStyle = {{alignItems:"center"}}
    />
  );
}

 

export default NotificationBlock;
