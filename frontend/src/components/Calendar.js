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

import { addBooking } from "../helpers/calendarHelper";
import { changedBooking } from "../helpers/calendarHelper";
import { updateBooking } from "../helpers/calendarHelper";

const Calendar = () => {
  const [booking, setBooking] = useState([]);

  const getAppointments = async () => {
    const response = await fetch("http://localhost:5000/bookings");
    let bookingArray = await response.json();

    // bookingArray = bookingArray.map((booking) => {
    //   const clonedBooking = Object.assign({}, booking);
    //   clonedBooking.endDate = new Date(booking.endDate);
    //   clonedBooking.startDate = new Date(booking.startDate);

    //   return clonedBooking;
    // });
    setBooking(bookingArray);
  };
  useEffect(() => {
    getAppointments();
  }, []);

  const commitChanges = async ({ added, changed, deleted }) => {
    let updatedBooking = [booking];

    if (added) {
      updatedBooking = addBooking(added, updatedBooking);
      // Lägg till bokning i postgres
    }
    if (changed) {
      await fetch("http://localhost:5000/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        
      });
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
