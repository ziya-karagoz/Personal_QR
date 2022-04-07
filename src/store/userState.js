import { proxy } from "valtio";
import axios from "axios";
import { serverURL } from "../constants";

const userState = proxy({
  user: {},
  loading: false,
});
const login = async (email, password, navigation) => {
  userState.loading = true;

  axios
    .post(`${serverURL}/api/user/login`, {
      email,
      password,
    })
    .then((response) => {
      userState.loading = false;
      userState.user = response.data;

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
    .post(`${serverURL}/api/user/register`, {
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
