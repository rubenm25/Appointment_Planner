import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = (props) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */

  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [duplicate, setDuplicate] = useState(false);


  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */

    if(!duplicate) {
      props.contactFn(name, phoneNumber, email);
      setName('');
      setPhoneNumber('');
      setEmail('');
    } else {
      alert('Contact already added to the list.');
      setName('');
      setPhoneNumber('');
      setEmail('');
    }
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */


  useEffect(() => {

    for(const contactItem of props.contactArr) {
      if(contactItem.name === name) {
        if(!duplicate) {
          setDuplicate(true);
          alert('Contact is already in the list');
        }
        return;
      } else {
        setDuplicate(false);
      }
    }

  }, [props.contactArr, name, duplicate])

  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
        <ContactForm name={name}
                     setName={setName}
                     phone={phoneNumber}
                     setPhone={setPhoneNumber}
                     email={email}
                     setEmail={setEmail}
                     handleSubmit={handleSubmit}
                     />
                    
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList contactArr={props.contactArr}/>
      </section>
    </div>
  );
};
