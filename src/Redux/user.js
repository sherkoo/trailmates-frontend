import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    loggedIn: localStorage.getItem("loggedIn") === "true" ? true : false,
    errorMessage: "",
    userData: {
      id: 1,
      name: "new name",
      age: 55,
      email: "name@email.com",
    },
  },
  reducers: {
    login: (state, action) => {
      if (
        //TODO: mock data for now - needs logic
        action.payload.email === "email" &&
        action.payload.password === "password"
      ) {
        state.loggedIn = true;
        localStorage.setItem("loggedIn", true);
      } else {
        state.loggedIn = false;
        state.errorMessage = "Wrong username or password";
      }
    },
    logout: (state, action) => {
      state.loggedIn = false;
      localStorage.setItem("loggedIn", false);
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
