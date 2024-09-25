import React from 'react'
import { Field, Form, Formik,ErrorMessage} from "formik";
import Modal from './Modal'
import { addDoc, collection, doc, updateDoc  } from "firebase/firestore";
import { db } from "../config/firebase";
import {toast} from "react-toastify";
import * as Yup from "yup";
const contactSchemaValidation =Yup.object().shape({
    name:Yup.string().required("Name is required"),
    email:Yup.string().email("Invalid Email").required("Email is required")
})
const AddandUpdateContac = ({ isopen, onClose, isupdate, element }) => {
    const addcontact = async (contact) => {
        try {
            const contactref = collection(db, "Contact");
            await addDoc(contactref, contact);
            onClose();
            toast.success("Contact Added Sucessfully");
        } catch (error) {
            console.log(error);
        }
    }
    const updatecontact = async (contact,id) => {
        try {
            const contactref = doc(db, "Contact",id);
            await updateDoc(contactref, contact);
            onClose();
            toast.success("Contact Updated Sucessfully");
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div>
            <Modal isOpen={isopen} onClose={onClose}>
                <Formik 
                validationSchema={contactSchemaValidation}
                initialValues={isupdate ? {
                    name: element.name,
                    email: element.email
                } :
                    {
                        name: "",
                        email: ""
                    }}
                    onSubmit={(values) => {
                        console.log(values)
                        isupdate?updatecontact(values,element.id):
                        addcontact(values);
                    }}>
                    <Form className="flex flex-col gap-4">
                        <div className="flex flex-col gap-1">
                            <label htmlFor="name">Name</label>
                            <Field name="name" className="h-10 border" />
                              <div className="text-xs text-red-500">
                                <ErrorMessage name="name" />
                                </div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
                        </div>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="email">Email</label>
                            <Field name="email" className="h-10 border" />
                            <div className="text-xs text-red-500">
                                <ErrorMessage name="email" />
                                </div>    
                        </div>
                        <button className="self-end border bg-amber-600 px-3 py-1.5">{isupdate ? "Update" : "Add"} Contact</button>
                    </Form>
                </Formik>
            </Modal>
        </div>
    )
}

export default AddandUpdateContac
