import { createSlice } from "@reduxjs/toolkit";
import authOperations from "./authOperations";

const errorMessege = () => alert("Oops, something went wrong.");

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    [authOperations.register.fulfilled](state, { payload: { user, token } }) {
      state.user = user;
      state.token = token;
      state.isLoggedIn = true;
    },
    [authOperations.register.rejected]() {
      errorMessege();
    },
    [authOperations.logIn.fulfilled](state, { payload: { user, token } }) {
      console.log(state);
      state.user = user;
      state.token = token;
      state.isLoggedIn = true;
    },
    [authOperations.logIn.rejected]() {
      errorMessege();
    },
    [authOperations.logOut.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [authOperations.logOut.rejected]() {
      errorMessege();
    },
    [authOperations.fetchCurrentUser.fulfilled](state, { payload }) {
      state.user = payload;
      state.isLoggedIn = true;
    },
  },
});

export default authSlice.reducer;
