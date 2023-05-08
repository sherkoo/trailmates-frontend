import { createSlice } from "@reduxjs/toolkit";

export const newsFeedSlice = createSlice({
  name: "messages",
  initialState: [
    {
      user: {
        id: 2,
        name: "Billy",
      },
      messages: [
        {
          title: "Message1 from billy",
        },
        {
          title: "Message2 from billy",
        },
        {
          title: "Message3 from billy",
        },
      ],
    },
    {
      user: {
        id: 3,
        name: "Sarah",
      },
      messages: [
        {
          title: "Message1 from sarah",
        },
        {
          title: "Message2 from sarah",
        },
      ],
    },
  ],
  reducers: {
    //
  },
});

export default newsFeedSlice.reducer;
