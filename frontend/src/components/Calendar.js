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
  DragDropProvider,
  Resources,
} from "@devexpress/dx-react-scheduler-material-ui";
import { teal, orange, red } from "@mui/material/colors";

const APIURL = process.env.REACT_APP_API_URL;

const location = ["Room 1", "Room 2", "Room 3"];
const locationshort = [1, 2, 3];
const resources = [
  {
    fieldName: "location",
    title: "Location",
    instances: [
      { id: location[0], text: location[0], color: teal },
      { id: location[1], text: location[1], color: orange },
      { id: location[2], text: location[2], color: red },
    ],
  },
];



const Calendar = () => {
  const [editingOptions, setEditingOptions] = React.useState({
    allowUpdating: true,
    allowDragging: true,
    allowResizing: true,
  });

  const { allowUpdating, allowResizing, allowDragging } = editingOptions;

  const allowDrag = React.useCallback(
    () => allowDragging && allowUpdating,
    [allowDragging, allowUpdating]
  );
  const allowResize = React.useCallback(
    () => allowResizing && allowUpdating,
    [allowResizing, allowUpdating]
  );

  const [booking, setBooking] = useState([]);

  const getAppointments = async () => {
    const response = await fetch(APIURL);
    let bookingArray = await response.json();

    setBooking(bookingArray);
  };
  useEffect(() => {
    getAppointments();
    // console.log(booking)
  }, []);
  console.log(booking);

  const commitChanges = async ({ added, changed, deleted }) => {
    let updatedBooking = [booking];

    if (added !== undefined) {
      try {
        await fetch(APIURL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(added),
        });
        getAppointments();
      } catch (err) {
        console.error(err.message);
      }
    }
    if (changed) {
      let id = parseInt(Object.keys(changed)); // extracts id value from changed
      const currentObject = updatedBooking[0].find((x) => x.id === id); // extracts object with same id as changed
      const updateObject = Object.values(changed)[0];

      var updateObjectValue = (currentObject, updateObject) => {
        var destination = Object.assign({}, currentObject);
        Object.keys(updateObject).forEach((k) => {
          if (k in destination) {
            destination[k] = updateObject[k];
          }
        });
        return destination;
      };
      console.log(
        "updated value :",
        updateObjectValue(currentObject, updateObject)
      );

      try {
        const res = await fetch(`${APIURL}${id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(updateObjectValue(currentObject, updateObject)),
        });
        console.log(res);
        getAppointments();
      } catch (err) {
        console.error(err.message);
      }
    }
    if (deleted !== undefined) {
      try {
        await fetch(`${APIURL}${deleted}`, {
          method: "DELETE",
        });
        getAppointments();
      } catch (err) {
        console.error(err.message);
      }
    }

    setBooking(updatedBooking);
  };

  const BasicLayout = ({ onFieldChange, appointmentData, ...restProps }) => {
    const onCustomFieldChange = (target, nextValue) => {
      if (target === "locations") {
        if (nextValue !== -1) onFieldChange({ [target]: nextValue });
      } else {
        onFieldChange({ [target]: nextValue });
      }
    };

    return (
      <>
        <AppointmentForm.BasicLayout
          appointmentData={appointmentData}
          onFieldChange={onFieldChange}
          {...restProps}
        >
          <AppointmentForm.Label text="Room selector" type="titleLabel" />
          {/* <AppointmentForm.Select
            value={appointmentData.locations || -1}
            type="filledSelect"
            availableOptions={[
              {
                id: -1,
                text: "Select",
              },
              {
                id: 1,
                text: "Room 1",
              },
              {
                id: 2,
                text: "Room 2",
              },
            ]}
            readOnly={false}
            onValueChange={(value) => onCustomFieldChange("locations", value)}
          /> */}
          <AppointmentForm.Label text="Meeting participants" type="title" />
          <AppointmentForm.TextEditor
            value={appointmentData.participants}
            onValueChange={(value) =>
              onCustomFieldChange("participants", value)
            }
            placeholder="Participants"
          />
        </AppointmentForm.BasicLayout>
      </>
    );
  };

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
        <Appointments   />
           {/* <AppointmentTooltip
            headerComponent={Header}
            contentComponent={Content}
            commandButtonComponent={CommandButton}
            showCloseButton
          /> */}
        <Resources data={resources} />
        <AppointmentForm basicLayoutComponent={BasicLayout} />
        <DragDropProvider allowDrag={allowDrag} allowResize={allowResize} />
      </Scheduler>
    </div>
  );
};

export default Calendar;
