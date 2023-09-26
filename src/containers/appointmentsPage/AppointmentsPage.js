import React, { useState } from "react";

import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = (props) => {
  /*
  Define state variables for 
  appointment info
  */

  const [title, setTitle] = useState('');
  const [currentContact, setCurrentContact] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data  
    */

      props.appointmentFn(title, currentContact, date, time)
      setTitle('');
      setCurrentContact('');
      setDate('');
      setTime('');

  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm contacts={props.contacts}
                         title={title}
                         setTitle={setTitle}
                         contact={currentContact}
                         setContact={setCurrentContact}
                         date={date}
                         setDate={setDate}
                         time={time}
                         setTime={setTime}
                         handleSubmit={handleSubmit} />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList appointmentsArr={props.appointmentsArr} />
      </section>
    </div>
  );
};