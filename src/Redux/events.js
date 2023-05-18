import { createSlice } from "@reduxjs/toolkit";

const eventSlice = createSlice({
  name: "events",
  initialState: {
    eventTypes: ["Hiking", "Trails", "Biking"],
    eventFilterDate: {
      month: "All",
      type: "All",
    },
    eventsData: [
      {
        title: "title of 1 event",
        date: new Date("1/2/23"),
        type: "hiking",
        description: "description of event",
      },
      {
        title: "title of 2 event",
        date: new Date("2/2/23"),
        type: "Trails",
        description: "description of event",
      },
      {
        title: "title of 3 event",
        date: new Date("2/3/23"),
        type: "Hiking",
        description: "description of event",
      },
      {
        title: "title of 4 event",
        date: new Date("3/1/23"),
        type: "Hiking",
        description: "description of event",
      },
      {
        title: "title of 5 event",
        date: new Date("1/1/23"),
        type: "Biking",
        description: "description of event",
      },
    ],
  },
  reducers: {
    eventFilterChange: (state, action) => {
      state.eventFilterDate.month = action.payload;
    },
    eventFilterTypeChange: (state, action) => {
      state.eventFilterDate.type = action.payload;
    },
    resetFilters: (state, action) => {
      state.eventFilterDate.month = "All";
      state.eventFilterDate.type = "All";
    },
  },
});

export const { eventFilterChange, eventFilterTypeChange, resetFilters } =
  eventSlice.actions;
export default eventSlice.reducer;
