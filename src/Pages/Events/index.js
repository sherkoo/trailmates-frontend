import React from "react";
import PageHeader from "../../Components/PageHeader";
import { useSelector } from "react-redux";

const Events = () => {
  const events = useSelector((state) => state.events.eventsData);

  return (
    <div data-testid="events">
      <PageHeader title="Events" />
      events page here
      {events.map((e, index) => (
        <div>
          <h2>{e.title}</h2>
          <p>{e.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Events;
