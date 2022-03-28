import { proxy } from "valtio";
import axios from "axios";
import { localIP } from "../constants";

const userState = proxy({
  user: {},
  loading: false,
});
const login = (email, password, navigation) => {
  userState.loading = true;
  axios
    .post(`http://${localIP}:5000/api/user/login`, {
      email,
      password,
    })
    .then((response) => {
      userState.loading = false;
      userState.user = response.data;
      console.log("Data: ", response.data);
      navigation.reset({
        index: 0,
        routes: [{ name: "Home" }],
      });
    })
    .catch((err) => {
      userState.loading = false;
      console.log("ERR :", err);
    });
};

const register = (username, email, password, navigation) => {
  userState.loading = true;
  axios
    .post(`http://${localIP}:5000/api/user/register`, {
      username,
      email,
      password,
    })
    .then((response) => {
      userState.loading = false;
      navigation.reset({
        index: 0,
        routes: [{ name: "Login" }],
      });
    })
    .catch((err) => {
      userState.loading = false;
      console.log("ERROR :", err);
    });
};
export { login, register };
export default userState;
