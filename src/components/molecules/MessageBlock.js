import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
  Image,
  FlatList
} from "react-native";

const DATA = [
  {
    mesaj: 'Ders işlenecek mi?', 
    yanit: 'Telafi Cumartesi günüdür.'
  },
  {
    mesaj: 'Arabanızı çeker misiniz?', 
    yanit: 'Biraz sonra geliyorum.'
  },
  {
    mesaj: 'Yapılacaklar listesi', 
    yanit: 'Çamaşırlar makineden çıkacak. Bulaşıklar yerine dizilecek. Rapor oluşturulacak. Mailler kontrol edilecek.'
  },
  {
    mesaj: 'Market listesi', 
    yanit: 'Kaşar, tereyağı, reçel, yumurta, zeytin, domates'
  },
  {
    mesaj: 'Ders notları için link', 
    yanit: 'www.gercekolmayanlink.com/dersler/bm405/no/dersnotlari'
  },
  {
    mesaj: 'Görüşme saati aralıkları', 
    yanit: 'Pzts:13.30-14.30, Salı:09.00-09.30, Cuma:17.00-18.00'
  },
]

const Item = ({mesaj, yanit}) => (

  <View style={styles.container}>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          borderLeftWidth: 3,
          borderRightWidth: 3,
          borderTopWidth:3
        }}
      >
        <View style={{ flex: 1 }}>
          <Text style={{ marginTop: "10%", marginLeft: "15%" }}>Mesaj:</Text>
        </View>

        <View style={{ flex: 4 }}>
          <Text style= {styles.mesaj}>
            {mesaj}
          </Text>
        </View>

        <View style={{ flex: 1 }}>
          <TouchableOpacity>
            <Image
              style={styles.icon}
              resizeMode='contain'
              source={require("../../Assets/Images/editIcon.png")}
            ></Image>
          </TouchableOpacity>
        </View>
      </View>

      <View
        style={{
          flex: 1,
          flexDirection: "row",
          borderTopColor: "black",
          borderWidth: 3,
        }}
      >
        <View style={{ flex: 1 }}>
          <Text style={{ left: "5%", top: "2%" }}>Cevap:</Text>
        </View>

        
        <View style={{ flex: 4 }}>
          <Text style = {styles.yanit}>
            {yanit}
          </Text>
        </View>

        <View style={{ flex: 1 }}></View>
      </View>
    </View>
);

const renderItem = ({ item }) => (
  <Item mesaj={item.mesaj} yanit={item.yanit} ></Item>
);

function MessageBlock(props) {
  return (
    <FlatList
        data={DATA}
        renderItem={renderItem}
        contentContainerStyle = {{alignItems:"center"}}
      />
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: "2%",
    width: 380,
    height: 150,
    backgroundColor: "#E6E6E6",
  },
  mesaj: {
    color: "#121212",
    top: "8%",
  },
  yanit: {
    color: "#121212",
    top: "3%",
  },
  icon: {
    height: "65%",
    width: "65%",
    alignSelf: "center",
    top: "7%",
  },
});

export default MessageBlock;
