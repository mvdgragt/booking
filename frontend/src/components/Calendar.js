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
} from "@devexpress/dx-react-scheduler-material-ui";

const APIURL = process.env.REACT_APP_API_URL;

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
  const rooms = ["room 1", "room 2"];

  const getAppointments = async () => {
    const response = await fetch(APIURL);
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

  const RemovemMultilineTextEditorTextEditor = (props) => {
    if (props.type === 'multilineTextEditor') {
      return null;
    } return <AppointmentForm.TextEditor {...props} />;
  };


  const BasicLayout = ({ onFieldChange, appointmentData, ...restProps }) => {
  
    return (
      <AppointmentForm.BasicLayout
      appointmentData={appointmentData}
      onFieldChange={onFieldChange}
      {...restProps}   
    >
    </AppointmentForm.BasicLayout>
      
    );
  };
  const BoolEditor = (props) => {
    return null;
  };
  const LabelComponent = (props) => {
    
    if (props.text === "Details") {
      return (
        <AppointmentForm.Label {...props} text="Conference Room Booking" />
      );
    } else if (props.text === 'More Information') {
      return null
    } else if (props.text === '-') {
      return <AppointmentForm.Label
      { ...props} />;
    }
  };
  const InputComponent = (props) => {

    if (props.type === "titleTextEditor") {
      return (
        <AppointmentForm.TextEditor
          {...props}
          type="text"
          placeholder="Meeting title"
        />
      );
      
    }
  };

  const SelectOption = ['Room 1', 'Room 2']
  const SelectComponent = (props) => {
        return(
   <AppointmentForm.SelectProps>
    
    <select name="cars" id="cars">
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="mercedes">Mercedes</option>
  <option value="audi">Audi</option>
</select>
   </AppointmentForm.SelectProps>
)
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
        <Appointments />
        <AppointmentForm
          BasicoLAyout={BasicLayout}
          BoolEditor= {BoolEditor}
          textEditorComponent={RemovemMultilineTextEditorTextEditor}
          labelComponent = {LabelComponent}
          InputComponent={InputComponent}
          SelectComponent={SelectComponent}
        />
        <DragDropProvider allowDrag={allowDrag} allowResize={allowResize} />
      </Scheduler>
    </div>
  );
};

export default Calendar;
