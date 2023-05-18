import React, { useState, useEffect } from "react";
import PageHeader from "../../Components/PageHeader";
import { useDispatch, useSelector } from "react-redux";
import Calendar from "../../Components/Calendar";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import {
  eventFilterChange,
  eventFilterTypeChange,
  resetFilters,
} from "../../Redux/events";
import vars from "../../Components/vars";

// Event Card
const EventCard = ({ title, date, description, type }) => {
  return (
    <Card sx={{ marginBottom: "1em" }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {date.getDate() +
            "/" +
            date.getMonth() +
            1 +
            "/" +
            date.getFullYear()}
        </Typography>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="h7" component="div">
          {type}
        </Typography>
        <Typography variant="body2">{description}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Sign up</Button>
      </CardActions>
    </Card>
  );
};

// Events filters
const EventsFilters = () => {
  const [age, setAge] = React.useState("");
  const eventsState = useSelector((state) => state.events);
  const dispatch = useDispatch();

  const handleEventFilterChange = (id) => {
    dispatch(eventFilterChange(id));
  };

  const handleEventFilterTypeChange = (id) => {
    dispatch(eventFilterTypeChange(id));
  };

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box sx={{ backgroundColor: "#fff", marginBottom: "1em", padding: "1em" }}>
      <Grid container spacing={2}>
        <Grid xs={3}>
          <InputLabel id="demo-simple-select-label">Month</InputLabel>
          <Select fullWidth value={eventsState.eventFilterDate.month}>
            <MenuItem
              value={"All"}
              onClick={() => handleEventFilterChange("All")}
            >
              All
            </MenuItem>
            <MenuItem value={1} onClick={() => handleEventFilterChange(1)}>
              January
            </MenuItem>
            <MenuItem value={2} onClick={() => handleEventFilterChange(2)}>
              February
            </MenuItem>
            <MenuItem value={3} onClick={() => handleEventFilterChange(3)}>
              March
            </MenuItem>
          </Select>
        </Grid>

        {/* <Grid xs={3}>
          <LocalizationProvider fullWidth dateAdapter={AdapterDayjs}>
            <InputLabel id="demo-simple-select-label">
              Filter by Date
            </InputLabel>
            <DatePicker fullWidth />
          </LocalizationProvider>
        </Grid> */}

        <Grid xs={3}>
          <InputLabel id="demo-simple-select-label">Event type</InputLabel>

          <Select
            fullWidth
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={eventsState.eventFilterDate.type}
            label="event-type"
            onChange={(event) =>
              handleEventFilterTypeChange(event.target.value)
            }
          >
            <MenuItem value="All">All</MenuItem>

            {eventsState.eventTypes.map((e, index) => (
              <MenuItem key={index} value={e}>
                {e}
              </MenuItem>
            ))}
          </Select>
        </Grid>
      </Grid>
    </Box>
  );
};

// Events component
const Events = () => {
  const events = useSelector((state) => state.events);
  const dispatch = useDispatch();

  const filteredEvents = events.eventsData.filter((e) => {
    if (events.eventFilterDate.month === "All") {
      return e.date.getDate();
    } else {
      return e.date.getDate() === events.eventFilterDate.month;
    }
  });

  const filteredEventsByType = events.eventsData.filter((e) => {
    if (events.eventFilterDate.type === "All") {
      return e.type;
    } else {
      return e.type === events.eventFilterDate.type;
    }
  });

  const finalFilteredEvents = filteredEvents.filter((e) =>
    filteredEventsByType.includes(e)
  );

  const handleResetFilters = () => {
    dispatch(resetFilters());
  };

  return (
    <div data-testid="events">
      <EventsFilters />
      <PageHeader title="Events" />
      {/* <Calendar /> */}
      {finalFilteredEvents.length === 0 ? (
        <div>
          <h2>{vars.messages.noResultsFound}</h2>
          <Button onClick={handleResetFilters}>Reset Filters</Button>
        </div>
      ) : (
        finalFilteredEvents.map((e, index) => (
          <EventCard
            key={index}
            title={e.title}
            type={e.type}
            date={e.date}
            description={e.description}
          />
        ))
      )}
    </div>
  );
};

export default Events;
