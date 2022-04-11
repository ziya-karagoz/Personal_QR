import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";

import QRCode from "react-native-qrcode-svg";
import CreationHeaderBar from "../components/molecules/CreationHeaderBar";
import FooterBar from "../components/molecules/FooterBar";
import MessageBlock from "../components/molecules/MessageBlock";
import allStyles from "../components/molecules/Styles";

const styles = allStyles;

function QREditScreen({ route }) {
  const { qrAdi, qrId, mesajlar } = route.params;
  return (
    <View style={{flex: 1}}>
      <CreationHeaderBar ></CreationHeaderBar>
      <View style={styles.body1}>
        <View style={styles.editScreenQrImage}>
          <QRCode value={qrId} backgroundColor = "#FAE5EF"/>
        </View>
        <View style={{ flex: 1 }}>
          <View style={styles.editScreenQrAdi}>
            <Text style={{ marginTop: "10%" }}>Qr Adı:</Text>
            <View style={styles.editScreenBody}>
              <Text style={styles.textInput}>{qrAdi}</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.button}>
            <View>
              <View style={styles.buttonText}>
                <Text>Mesaj Ekle</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <SafeAreaView style={styles.body2}>
        <MessageBlock mesajlar={{ mesajlar }} qrId={{ qrId }}></MessageBlock>
      </SafeAreaView>

      <FooterBar></FooterBar>
    </View>
  );
}

export default QREditScreen;
