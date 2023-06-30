
import React from "react";
import { FormContainer, FormLabelName, FormInputName, FormInputTel,  FormButton, ErrorText } from "./ContactForm.styled";
import { Formik, ErrorMessage } from 'formik';
import *as yup from 'yup'
import { useSelector, useDispatch } from "react-redux";
import { addContact, getContacts } from "redux/contactsSlice";
import { nanoid } from "@reduxjs/toolkit";
 
const schame = yup.object({
  name: yup.string("It should be string").required("It shouldn't be empty").max(30).trim().matches(),
  number: yup.number("It shold be number").required().positive()
 });


 const initialValue = {
        name: '',
        number:''
}

const FormError = ({name}) => {
    return (<ErrorMessage
        name={name}
        render={message =>(<ErrorText> {message}</ErrorText>)}
    />)
}
    

function ContactForm() {
    const dispatch = useDispatch()
    const contacts = useSelector(getContacts)
    const handleAdd = (values, actions) => {
        if(contacts.some(({name})=>name===values.name)){
            alert(`${values.name} is already in contacts`)
            return
    } 
        dispatch(addContact({ ...values, id: nanoid() }))
        actions.resetForm()
}


    return (<Formik
                initialValues={initialValue}
                onSubmit={handleAdd}
                validationSchema={schame}
            >
                <FormContainer autoComplete="off">
                    <FormLabelName >Name
                        <FormInputName 
                            type="text"
                            name="name" 
                        />
                        <FormError name="name"/>
                    </FormLabelName>
                                
                    <FormLabelName>Number
                        <FormInputTel
                            type="number"
                            name="number"
                        />
                        <FormError name="number"/>
                    </FormLabelName>
                    <FormButton type='submit'>Add contact</FormButton>
                </FormContainer>
            </Formik>)

}


export default ContactForm



