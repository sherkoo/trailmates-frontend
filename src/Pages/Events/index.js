import React from "react";
import PageHeader from "../../Components/PageHeader";
import { useSelector } from "react-redux";
import Calendar from "../../Components/Calendar";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const Events = () => {
  const events = useSelector((state) => state.events.eventsData);

  return (
    <div data-testid="events">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker label="Basic date picker" />
      </LocalizationProvider>
      <PageHeader title="Events" />
      events page here
      <Calendar />
      {events.map((e, index) => (
        <div key={index}>
          <h2>{e.title}</h2>
          <p>{e.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Events;
