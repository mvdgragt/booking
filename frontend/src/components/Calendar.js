import React, { useEffect, useState } from "react";

import {
  ViewState,
  EditingState,
  IntegratedEditing,
} from "@devexpress/dx-react-scheduler";
import {
  Scheduler,
  WeekView,
  Appointments,
  AppointmentForm,
} from "@devexpress/dx-react-scheduler-material-ui";

// import { addBooking } from "../helpers/calendarHelper";
// import { changedBooking } from "../helpers/calendarHelper";
import { updateBooking } from "../helpers/calendarHelper";

const Calendar = () => {
  const [booking, setBooking] = useState([]);

  const getAppointments = async () => {
    const response = await fetch("http://localhost:5000/");
    let bookingArray = await response.json();

    setBooking(bookingArray);
  };
  useEffect(() => {
    getAppointments();
  }, [booking]);

  const commitChanges = async ({ added, changed, deleted }) => {
    let updatedBooking = [booking];

    if (added) {
      try {
        console.log('client site :', added)
        await fetch("http://localhost:5000/", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(added)
        });
      } catch (err) {
        console.error(err.message)
      }
    }
    if (changed) {
      // updatedBooking = changedBooking(changed, updatedBooking);
      // Uppdatera befintlig bokning i postgress
    }
    if (deleted !== undefined) {
      updatedBooking = updateBooking(deleted, updatedBooking);
      // Ta bort bokning från postgress
    }

    setBooking(updatedBooking);
  };

  /*
    useEffect som hämtar data från postgress och setBooking(postgressData)    
   */

  return (
    <div id="calendar">
      <Scheduler data={booking}>
        <ViewState />
        <EditingState onCommitChanges={commitChanges} />
        <IntegratedEditing />
        <WeekView startDayHour={9} endDayHour={18} />
        <Appointments />
        <AppointmentForm />
      </Scheduler>
    </div>
  );
};

export default Calendar;
