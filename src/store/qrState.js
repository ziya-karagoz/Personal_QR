import { proxy } from "valtio";
import axios from "axios";
import { serverURL } from "../constants";

const qrState = proxy({
  qrs: [],
  loading: false,
});

const qrGenerate = async (navigation, user, qrName, messageOne, messageTwo) => {
  let res = await axios
    .post(`${serverURL}/api/qr/qrgenerate`, {
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
  return res;
};

const displayQrList = (user) => {
  qrState.loading = true;
  axios
    .post(`${serverURL}/api/qr/displayQrs`, {
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

const qrEdit = (qrId, messageOne, messageTwo) => {
  qrState.loading = true;
  axios
    .post(`${serverURL}/api/qr/qrEdit`, {
      qrId,
      messageOne,
      messageTwo,
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
