import { proxy } from "valtio";
import axios from "axios";
import { localIP } from "../constants";

const phoneState = proxy({
  qrText: "",
  qrTextFlag: false,
  loading: false,
});

const setqrText = (data) => {
  phoneState.qrText = data;
};

const setqrTextFlag = (data) => {
  phoneState.qrTextFlag = data;
};

const getQrMessages = (data) => {
  if(data.length> 0){
    axios
    .post(`http://${localIP}:5000/api/qr/scanQr`, { data })
    .then((response) => {
      const { message } = response.data;

      alert(
        "Mesaj: " + message[0].messageOne + "\nCevap: " + message[0].messageTwo
      );
    })
    .catch((e) => {
      alert("Hata : ", e);
    });
  }
  
};

export { getQrMessages, setqrText, setqrTextFlag };
export default phoneState;
