import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  testing: "testing",
  initialState: {
    userData: {
      name: "new name",
      age: 55,
      email: "name@email.com",
    },
  },
  reducers: {
    login: (state, action) => {
      state.value = action.payload;
    },
  },
});

export default userSlice.reducer;
