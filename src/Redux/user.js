import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    loggedIn: localStorage.getItem("loggedIn") === "true" ? true : false,
    userData: {
      id: 1,
      name: "new name",
      age: 55,
      email: "name@email.com",
    },
  },
  reducers: {
    login: (state, action) => {
      state.loggedIn = true;
      localStorage.setItem("loggedIn", true);
      // state.value = action.payload;
    },
    logout: (state, action) => {
      state.loggedIn = false;
      localStorage.setItem("loggedIn", false);
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
