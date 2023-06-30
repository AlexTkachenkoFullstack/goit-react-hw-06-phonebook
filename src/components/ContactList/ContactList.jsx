import React from "react";
import { ContactListContainer} from "./ContactList.styled";
import { ContactItem } from "./Contacttem/ContactItem";
import {  useSelector } from "react-redux";
import { getContacts } from "redux/contactsSlice";
import { getStatusFilter } from "redux/filterSlice";

function ContactList() {
     const contacts=useSelector(getContacts)
     const filter=useSelector(getStatusFilter)
    
     function findContacts() {
                return contacts.filter(({name})=>name.toUpperCase().includes(filter.toUpperCase()))
            }

     return (
            <ContactListContainer >
                {findContacts().map(({ id, name, number })=>{
                    return (
                        <ContactItem key={id} id={id} name={name} number={number} />
                    )
                })}
            </ContactListContainer>
        )
}


export default ContactList

