import React, { useState, useEffect } from "react";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Navigate } from "react-router-dom"
import Root, { ROUTES } from "./components/root/Root";
import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  /*
  Define state variables for 
  contacts and appointments 
  */

  const [contacts, setContacts] = useState([]);
  const [ appointments, setAppointments] = useState([]);
  /*
  Implement functions to add data to
  contacts and appointments
  */

  const addContact = (name, phoneNumber, email) => {
      const newContact = {
        name: name,
        phone: phoneNumber,
        email: email
      };

      setContacts((contacts) => [...contacts, newContact]);
   
 }

    const addAppointment = (title, contact, date, time ) => {
      const newAppointment = {
        title: title,
        contact: contact,
        date: date,
        time: time
      };

      setAppointments((appointments) => [...appointments, newAppointment]);
      
    };


    const router = createBrowserRouter(createRoutesFromElements(
      <Route path="/" element={ <Root/> }>
        <Route index element={ <Navigate to={ROUTES.CONTACTS} replace/> }/>
        <Route path={ROUTES.CONTACTS} element={ <ContactsPage contactArr={contacts} 
                                                              contactFn={addContact} /> /* Add props to ContactsPage */ }/>

        <Route path={ROUTES.APPOINTMENTS} element={ <AppointmentsPage appointmentsArr={appointments} 
                                                                      appointmentFn={addAppointment} 
                                                                      contacts={contacts} /> /* Add props to AppointmentsPage */ }/>
      </Route>
    ));
    
  
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
