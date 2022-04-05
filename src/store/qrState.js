import { proxy } from "valtio";
import axios from "axios";
import { localIP, ngrokServer } from "../constants";

const qrState = proxy({
  qrs: [],
  loading: false,
});

const qrGenerate = async (navigation, user, qrName, createdMessages) => {
  let res = await axios
    .post(`${ngrokServer}/api/qr/qrgenerate`, {
      message: createdMessages,
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
  return res;
};

const displayQrList = (user) => {
  qrState.loading = true;
  axios
    .post(`${ngrokServer}/api/qr/displayQrs`, {
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

const qrEdit = (qrId, messageOne, messageTwo, index) => {
  qrState.loading = true;
  axios
    .post(`${ngrokServer}/api/qr/qrEdit`, {
      qrId,
      messageOne,
      messageTwo,
      index
    })
    .then((response) => {
      qrState.loading = false;
    })
    .catch((err) => {
      qrState.loading = false;
      console.log("ERR :", err);
    });
};

export { qrGenerate, displayQrList, qrEdit };
export default qrState;
