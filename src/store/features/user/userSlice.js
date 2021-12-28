import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  userData: {},
  error: null,
  loading: false,
};

export const counterSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    storaAt: (state, action) => {
      state.userData = action.payload;
      console.log("STATE : ", action.payload);
    },
    storeSil: (state) => {
      state = initialState;
    },
  },
  extraReducers: {
    [checkUser.fulfilled]: (state, action) => {
      console.log("action : ", action);
    },
  },
});

export const checkUser = createAsyncThunk("user/checkUser", async (email) => {
  let response = await axios.post(
    "http://10.60.147.98:5000/api/user/login-check",
    { email, password }
  );
  if (response.status === 200) {
    navigation.reset({
      index: 0,
      routes: [{ name: "Home" }],
    });
    return response.data;
  } else {
    return "ali";
  }
});
export const { storaAt, storeSil } = counterSlice.actions;

export default counterSlice.reducer;
