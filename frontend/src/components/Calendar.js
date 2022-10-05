import React, { useEffect, useState } from "react";

import {
  ViewState,
  EditingState,
  IntegratedEditing,
} from "@devexpress/dx-react-scheduler";
import {
  Scheduler,
  Toolbar,
  DateNavigator,
  TodayButton,
  WeekView,
  Appointments,
  AppointmentForm,
} from "@devexpress/dx-react-scheduler-material-ui";

// import { addBooking } from "../helpers/calendarHelper";
// import { changedBooking } from "../helpers/calendarHelper";
// import { updateBooking } from "../helpers/calendarHelper";

const Calendar = () => {
  const [booking, setBooking] = useState([]);

  const getAppointments = async () => {
    const response = await fetch("http://localhost:5000/");
    let bookingArray = await response.json();

    setBooking(bookingArray);
  };
  useEffect(() => {
    getAppointments();
    // console.log(booking)
  }, []);

  const commitChanges = async ({ added, changed, deleted }) => {
    let updatedBooking = [booking];

    if (added !== undefined) {
      try {
        await fetch("http://localhost:5000/", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(added),
        });
        getAppointments()
      } catch (err) {
        console.error(err.message);
      }
    }
    if (changed) {
      let id = (parseInt(Object.keys(changed)))  // extracts id value from changed
      const currentObject = updatedBooking[0].find(x => x.id === id);  // extracts object with same id as changed
      const updateObject = Object.values(changed)[0]
      // console.log("id: ",id)
      // console.log("currentObject :", currentObject)
      // console.log("newobjectdata :", updateObject)

      var updateObjectValue = (currentObject, updateObject) => {
        var destination = Object.assign({}, currentObject);
        Object.keys(updateObject).forEach(k => {
          if(k in destination) {
            destination[k] = updateObject[k];
          }
        });
        return destination;
      }
      console.log("updated value :", updateObjectValue(currentObject, updateObject));
      // console.log(updatedBooking[0])
      // const asArray = Object.entries(updatedBooking[0]);
      // console.log(asArray)
      // const filtered = asArray.filter(([key,value]) => typeof key === '76' );

      // const oneItem = Object.fromEntries(filtered)
      // console.log(oneItem)
      // console.log(Object.id(id))

      try {
        const res = await fetch(`http://localhost:5000/${id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(updateObjectValue(currentObject, updateObject)),
        });
        console.log(res)
        getAppointments()
      } catch (err) {
        console.error(err.message);
      }
      // updatedBooking = changedBooking(changed, updatedBooking);
      // Uppdatera befintlig bokning i postgress
    }
    // if (deleted !== undefined) {
    if (deleted !== undefined) {
      try {
        await fetch(`http://localhost:5000/${deleted}`, {
          method: "DELETE",
        });
        getAppointments()
      } catch (err) {
        console.error(err.message);
      }
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
        <Toolbar />
        <DateNavigator />
        <TodayButton />
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