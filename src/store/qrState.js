import { proxy } from "valtio";
import axios from "axios";
import { localIP } from "../constants";

const qrState = proxy({
  qrs: [],
  loading: false,
});

const qrGenerate = (navigation, user, qrName, messageOne, messageTwo) => {
  axios
    .post(`http://${localIP}:5000/api/qr/qrgenerate`, {
      message: {
        messageOne: messageOne,
        messageTwo: messageTwo,
      },
      user,
      qrName,
    })
    .then((response) => {
      navigation.reset({
        index: 0,
        routes: [{ name: "Home" }],
      });
    })
    .catch((err) => {
      console.log("ERR :", err);
    });
};

const displayQrList = (user) => {
  qrState.loading = true;
  axios
    .post(`http://${localIP}:5000/api/qr/displayQrs`, {
      user,
    })
    .then((response) => {
      qrState.loading = false;
      qrState.qrs = response.data;
    })
    .catch((err) => {
      qrState.loading = false;
      console.log("ERR :", err);
    });
};

export { qrGenerate, displayQrList };
export default qrState;
