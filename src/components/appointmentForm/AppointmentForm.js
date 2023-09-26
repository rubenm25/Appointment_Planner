import React from "react";

import { ContactPicker } from "../../components/contactPicker/ContactPicker";

const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit,
}) => {

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="titleInput">Title</label>
        <input type="text" 
               id="titleInput"
               value={title} 
               onChange={(e) => setTitle(e.target.value)}
               required />

        <label htmlFor="dateInput">Date</label>
        <input type="date" 
               id="dateInput"
               value={date} 
               min={getTodayString()}
               onChange={(e) => setDate(e.target.value)}
               required />

        <label htmlFor="timeInput">Time</label>       
        <input type="time" 
               id="timeInput"
               value={time} 
               onChange={(e) => setTime(e.target.value)}
               required />
        
        <ContactPicker 
        contacts={contacts}
        onChange={(e) => setContact(e.target.value)} 
        />
        <button type="submit" >Add Appointment</button>
      </form>
    </>
  );
};
