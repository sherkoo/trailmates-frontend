import { createSlice } from "@reduxjs/toolkit";

const eventSlice = createSlice({
  name: "events",
  initialState: {
    eventsData: [
      {
        title: "title of 1 event",
        description: "description of event",
      },
      {
        title: "title of 2 event",
        description: "description of event",
      },
      {
        title: "title of 3 event",
        description: "description of event",
      },
      {
        title: "title of 4 event",
        description: "description of event",
      },
      {
        title: "title of 5 event",
        description: "description of event",
      },
    ],
  },
});

export default eventSlice.reducer;
