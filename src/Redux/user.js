import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    loggedIn: true,
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
      state.value = action.payload;
    },
    logout: (state, action) => {
      state.loggedIn = false;
    },
  },
});

export default userSlice.reducer;
